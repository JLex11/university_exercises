import { useEffect, useState } from 'react'
import CurrentRouteBanner from './components/CurrentRouteBanner'
import Header from './components/Header'
import Map from './components/Map'
import NavigationPanel from './components/NavigationPanel'
import RouteForm from './components/RouteForm'
import TrafficAlert from './components/TrafficAlert'
import type { Graph } from './data-structures/Graph'
import { PriorityQueue } from './data-structures/PriorityQueue'
import { Stack } from './data-structures/Stack'
import useRandomTrafficAlerts from './hooks/useRandomTrafficAlerts'
import type { Location, NavigationHistoryItem, Route, RouteRequest } from './types'
import { createInitialGraph, locations } from './utils/mapData'

export default function App() {
	const [graph] = useState<Graph>(createInitialGraph())
	const [navigationHistory] = useState<Stack<NavigationHistoryItem>>(new Stack())
	const [routeRequests] = useState<PriorityQueue<RouteRequest>>(new PriorityQueue())
	const [updateTrigger, setUpdateTrigger] = useState(0)
	const trafficAlerts = useRandomTrafficAlerts()

	const [currentRoute, setCurrentRoute] = useState<Route | null>(null)

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		navigationHistory.setUpdateCallback(() => setUpdateTrigger((c) => c + 1))
		routeRequests.setUpdateCallback(() => setUpdateTrigger((c) => c + 1))
	}, [])

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (!routeRequests.isEmpty()) {
			setUpdateTrigger((c) => c + 1)
			const request = routeRequests.dequeue()
			if (request) {
				processRouteRequest(request.from, request.to)
			}
		}
	}, [updateTrigger])

	const handleRouteRequest = (from: Location, to: Location) => {
		const request: RouteRequest = {
			id: `req-${Date.now()}`,
			from,
			to,
			priority: 1,
			timestamp: new Date(),
		}

		routeRequests.enqueue(request, request.priority)
	}

	const processRouteRequest = (from: Location, to: Location) => {
		const result = graph.findShortestPath(from.id, to.id)

		if (result.path.length > 0) {
			const newRoute: Route = {
				id: `route-${Date.now()}`,
				path: result.path,
				distance: result.distance,
				estimatedTime: result.distance * 1, // Estimación: 1 min por km
			}

			setCurrentRoute(newRoute)

			const historyItem: NavigationHistoryItem = {
				from,
				to,
				route: newRoute,
				timestamp: new Date(),
			}

			navigationHistory.push(historyItem)
		}
	}

	const handleHistoryItemClick = (item: NavigationHistoryItem) => {
		setCurrentRoute(item.route)
	}

	const getCurrentRouteLocationsNames = () => {
		if (!currentRoute) return []
		return currentRoute.path.map((id) => locations.find((loc) => loc.id === id)?.name || id)
	}

	const currentDateTime = new Date().toLocaleString('es-ES', {
		dateStyle: 'medium',
		timeStyle: 'short',
	})

	const currentUser = 'JLex11'

	return (
		<div className='flex flex-col min-h-screen font-sans'>
			<Header currentDateTime={currentDateTime} currentUser={currentUser} />

			<main className='flex flex-1 p-4 gap-4'>
				<div className='flex flex-col w-80 gap-4'>
					<RouteForm locations={locations} onRouteRequest={handleRouteRequest} />
					<NavigationPanel history={navigationHistory} onHistoryItemClick={handleHistoryItemClick} />
				</div>

				<div className='flex flex-col flex-1 gap-4'>
					<Map route={currentRoute} locations={locations} />
					<TrafficAlert alertsQueue={trafficAlerts} />
				</div>
			</main>

			{currentRoute && (
				<footer className='bg-slate-800 text-white p-4'>
					<CurrentRouteBanner currentRouteLocationsNames={getCurrentRouteLocationsNames()} currentRoute={currentRoute} />
				</footer>
			)}
		</div>
	)
}
