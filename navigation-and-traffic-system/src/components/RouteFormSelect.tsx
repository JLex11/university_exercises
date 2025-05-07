import { locationTypes, type Location } from '../types'

interface RouteFormSelectProps {
	id: string
	locations: Location[]
	handleChange: (id: string) => void
	label?: string
	hint?: string
}

const metroLines = ['A', 'B', 'K', 'L', 'J', 'H', 'M', 'P']

export default function RouteFormSelect({ id, locations, handleChange, label = 'Destino' }: RouteFormSelectProps) {
	// agrupar por tipo de ubicación
	const groupedLocations = Object.groupBy(locations, (location) => {
		for (const line of metroLines) {
			if (location.type === locationTypes.station && location.metroLine === line) {
				return `Estaciones - Línea ${line}`
			}
			if (location.type === locationTypes.cableStation && location.metroLine === line) {
				return `Estaciones de Cable - Línea ${line}`
			}
		}
		if (location.type === locationTypes.touristSpot) return 'Puntos Turísticos'
		return 'Otros'
	})

	return (
		<div>
			<label htmlFor='to-select' className='block mb-2 font-medium text-gray-700'>
				{label}:
			</label>
			<div className='relative'>
				<select
					value={id}
					onChange={(e) => handleChange(e.target.value)}
					required
					className='block w-full p-2.5 pr-8 border border-gray-300 rounded-md text-base appearance-none focus:ring-blue-500 focus:border-blue-500'
				>
					{Object.entries(groupedLocations).map(([group, locations]) => (
						<optgroup key={group} label={group}>
							{(locations ?? []).map((location) => (
								<option key={location.id} value={location.id}>
									{location.symbol} {location.name}
								</option>
							))}
						</optgroup>
					))}
				</select>
				<div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
					<svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
						<path
							fillRule='evenodd'
							d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
							clipRule='evenodd'
						/>
					</svg>
				</div>
			</div>
		</div>
	)
}
