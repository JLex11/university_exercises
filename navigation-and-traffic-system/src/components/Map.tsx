import { GoogleMap, Marker, Polyline, useJsApiLoader } from '@react-google-maps/api'
import { useMemo } from 'react'
import type { Location, Route } from '../types'

interface MapProps {
	route: Route | null
	locations: Location[]
}

// Constantes para el mapa
const containerStyle = {
	width: '100%',
	height: '500px',
}

export default function Map({ route, locations }: MapProps) {
	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: 'AIzaSyBGM9D8LLt2C3Hrp7In0ENxyRKtj0wvezY',
	})

	// Centro del mapa (calculado a partir de las ubicaciones)
	const center = useMemo(() => {
		if (locations.length === 0) return { lat: 6.250855331820525, lng: -75.57949425974694 } //Medellín por defecto

		const sumLat = locations.reduce((sum, loc) => sum + loc.latitude, 0)
		const sumLng = locations.reduce((sum, loc) => sum + loc.longitude, 0)

		return {
			lat: sumLat / locations.length,
			lng: sumLng / locations.length,
		}
	}, [locations])

	const routePoints = useMemo(() => {
		if (!route) return []

		return route.path
			.map((id) => {
				const location = locations.find((loc) => loc.id === id)
				if (!location) return null

				return {
					lat: location.latitude,
					lng: location.longitude,
				}
			})
			.filter((point) => point !== null) as google.maps.LatLngLiteral[]
	}, [route, locations])

	// Color de la ruta según el nivel de tráfico
	const routeColor = '#3498db'

	if (!isLoaded)
		return <div className='flex justify-center items-center bg-gray-50 rounded-lg p-4 shadow min-h-[500px]'>Cargando mapa...</div>

	return (
		<div className='bg-gray-50 rounded-lg p-4 shadow min-h-[300px]'>
			<GoogleMap
				mapContainerStyle={containerStyle}
				center={center}
				zoom={14}
				options={{
					mapTypeControl: true,
					streetViewControl: false,
					fullscreenControl: true,
					cameraControl: true,
				}}
			>
				{locations.map((location) => (
					<Marker
						key={location.id}
						position={{ lat: location.latitude, lng: location.longitude }}
						title={location.name}
						label={`${location.symbol} ${location.name}`}
					/>
				))}

				{route && routePoints.length > 0 && (
					<Polyline
						path={routePoints}
						options={{
							strokeColor: routeColor,
							strokeOpacity: 0.8,
							strokeWeight: 5,
						}}
					/>
				)}
			</GoogleMap>
		</div>
	)
}
