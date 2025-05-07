export const locationTypes = {
	station: 'station',
	touristSpot: 'touristSpot',
	cableStation: 'cableStation',
} as const

export const locationTypeSymbols = {
	station: '🚉',
	touristSpot: '🗽',
	cableStation: '🚡',
} as const

export interface Location {
	id: string
	name: string
	latitude: number
	longitude: number
	metroLine?: string
	isStation: boolean
	isTransferStation?: boolean
	transferLines?: string[]
	symbol?: (typeof locationTypeSymbols)[keyof typeof locationTypeSymbols]
	type?: keyof typeof locationTypes
}

export interface Route {
	id: string
	path: string[]
	distance: number
	estimatedTime: number
	/* trafficLevel: 'low' | 'medium' | 'high' */
}

export interface NavigationHistoryItem {
	from: Location
	to: Location
	timestamp: Date
	route: Route
}

export interface RouteRequest {
	id: string
	from: Location
	to: Location
	priority: number
	timestamp: Date
}

export interface TrafficAlert {
	location: string
	severity: 'low' | 'medium' | 'high'
	description: string
	timestamp: Date
}
