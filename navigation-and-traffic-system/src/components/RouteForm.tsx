import { useState, type FormEvent } from 'react'
import type { Location } from '../types'
import RouteFormSelect from './RouteFormSelect'

interface RouteFormProps {
	locations: Location[]
	onRouteRequest: (from: Location, to: Location) => void
}

export default function RouteForm({ locations, onRouteRequest }: RouteFormProps) {
	const [fromId, setFromId] = useState<string>(locations[0].id)
	const [toId, setToId] = useState<string>(locations[1].id)

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault()

		const from = locations.find((loc) => loc.id === fromId)
		const to = locations.find((loc) => loc.id === toId)

		if (from && to) {
			onRouteRequest(from, to)
		}
	}

	return (
		<div className='bg-gray-50 rounded-lg p-4 shadow'>
			<h3 className='text-lg font-semibold mb-3'>Calcular Ruta</h3>
			<form onSubmit={handleSubmit} className='space-y-4'>
				<RouteFormSelect id={fromId} locations={locations} handleChange={setFromId} label='Origen' />
				<RouteFormSelect id={toId} locations={locations} handleChange={setToId} label='Destino' />

				<button
					type='submit'
					disabled={!fromId || !toId || fromId === toId}
					className='w-full bg-blue-500 text-white py-2.5 px-4 rounded-md text-base transition-colors hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2'
				>
					<svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
						<path
							fillRule='evenodd'
							d='M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z'
							clipRule='evenodd'
						/>
					</svg>
					Encontrar Ruta
				</button>
			</form>
		</div>
	)
}
