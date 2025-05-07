import { Graph } from '../data-structures/Graph'
import { distance as calculateDistance } from '../lib/distance'
import { locationTypes, locationTypeSymbols, type Location } from '../types'

// Ubicaciones - estaciones de metro y puntos turísticos
export const locations: Location[] = [
	// Línea A del Metro
	{
		id: 'niquia',
		name: 'Niquía',
		latitude: 6.33778,
		longitude: -75.54444,
		metroLine: 'A',
		isStation: true,
		symbol: locationTypeSymbols.station,
		type: locationTypes.station,
	},
	{
		id: 'bello',
		name: 'Bello',
		latitude: 6.32056,
		longitude: -75.55361,
		metroLine: 'A',
		isStation: true,
		symbol: locationTypeSymbols.station,
		type: locationTypes.station,
	},
	{
		id: 'madera',
		name: 'Madera',
		latitude: 6.31583,
		longitude: -75.55528,
		metroLine: 'A',
		isStation: true,
		symbol: locationTypeSymbols.station,
		type: locationTypes.station,
	},
	{
		id: 'acevedo',
		name: 'Acevedo',
		latitude: 6.30028,
		longitude: -75.55833,
		metroLine: 'A',
		isStation: true,
		isTransferStation: true,
		transferLines: ['K', 'P'],
		symbol: locationTypeSymbols.station,
		type: locationTypes.station,
	},
	{
		id: 'tricentenario',
		name: 'Tricentenario',
		latitude: 6.29028,
		longitude: -75.56472,
		metroLine: 'A',
		isStation: true,
		symbol: locationTypeSymbols.station,
		type: locationTypes.station,
	},
	{
		id: 'caribe',
		name: 'Caribe',
		latitude: 6.27833,
		longitude: -75.56944,
		metroLine: 'A',
		isStation: true,
		symbol: locationTypeSymbols.station,
		type: locationTypes.station,
	},
	{
		id: 'universidad',
		name: 'Universidad',
		latitude: 6.26944,
		longitude: -75.56583,
		metroLine: 'A',
		isStation: true,
		symbol: locationTypeSymbols.station,
		type: locationTypes.station,
	},
	{
		id: 'hospital',
		name: 'Hospital',
		latitude: 6.26389,
		longitude: -75.56333,
		metroLine: 'A',
		isStation: true,
		symbol: locationTypeSymbols.station,
		type: locationTypes.station,
	},
	{
		id: 'prado',
		name: 'Prado',
		latitude: 6.25694,
		longitude: -75.56611,
		metroLine: 'A',
		isStation: true,
		symbol: locationTypeSymbols.station,
		type: locationTypes.station,
	},
	{
		id: 'parque-berrio',
		name: 'Parque Berrío',
		latitude: 6.25028,
		longitude: -75.56833,
		metroLine: 'A',
		isStation: true,
		symbol: locationTypeSymbols.station,
		type: locationTypes.station,
	},
	{
		id: 'san-antonio',
		name: 'San Antonio',
		latitude: 6.24722,
		longitude: -75.56972,
		metroLine: 'A',
		isStation: true,
		isTransferStation: true,
		transferLines: ['B'],
		symbol: locationTypeSymbols.station,
		type: locationTypes.station,
	},
	{
		id: 'alpujarra',
		name: 'Alpujarra',
		latitude: 6.24306,
		longitude: -75.57139,
		metroLine: 'A',
		isStation: true,
		symbol: locationTypeSymbols.station,
		type: locationTypes.station,
	},
	{
		id: 'exposiciones',
		name: 'Exposiciones',
		latitude: 6.23917,
		longitude: -75.5725,
		metroLine: 'A',
		isStation: true,
		symbol: locationTypeSymbols.station,
		type: locationTypes.station,
	},
	{
		id: 'industriales',
		name: 'Industriales',
		latitude: 6.2325,
		longitude: -75.57528,
		metroLine: 'A',
		isStation: true,
		symbol: locationTypeSymbols.station,
		type: locationTypes.station,
	},
	{
		id: 'poblado',
		name: 'Poblado',
		latitude: 6.21667,
		longitude: -75.58,
		metroLine: 'A',
		isStation: true,
		symbol: locationTypeSymbols.station,
		type: locationTypes.station,
	},
	{
		id: 'ayura',
		name: 'Ayurá',
		latitude: 6.20583,
		longitude: -75.58611,
		metroLine: 'A',
		isStation: true,
		symbol: locationTypeSymbols.station,
		type: locationTypes.station,
	},
	{
		id: 'envigado',
		name: 'Envigado',
		latitude: 6.19306,
		longitude: -75.59167,
		metroLine: 'A',
		isStation: true,
		symbol: locationTypeSymbols.station,
		type: locationTypes.station,
	},
	{
		id: 'itagui',
		name: 'Itagüí',
		latitude: 6.17917,
		longitude: -75.59694,
		metroLine: 'A',
		isStation: true,
		symbol: locationTypeSymbols.station,
		type: locationTypes.station,
	},
	{
		id: 'sabaneta',
		name: 'Sabaneta',
		latitude: 6.16528,
		longitude: -75.60083,
		metroLine: 'A',
		isStation: true,
		symbol: locationTypeSymbols.station,
		type: locationTypes.station,
	},
	{
		id: 'la-estrella',
		name: 'La Estrella',
		latitude: 6.14583,
		longitude: -75.60417,
		metroLine: 'A',
		isStation: true,
		symbol: locationTypeSymbols.station,
		type: locationTypes.station,
	},

	// Línea B del Metro
	// San Antonio ya está definido en Línea A como punto de transferencia
	{
		id: 'cisneros',
		name: 'Cisneros',
		latitude: 6.2475,
		longitude: -75.57722,
		metroLine: 'B',
		isStation: true,
		symbol: locationTypeSymbols.station,
		type: locationTypes.station,
	},
	{
		id: 'suramericana',
		name: 'Suramericana',
		latitude: 6.25303764894891,
		longitude: -75.5829405253381,
		metroLine: 'B',
		isStation: true,
		symbol: locationTypeSymbols.station,
		type: locationTypes.station,
	},
	{
		id: 'estadio',
		name: 'Estadio',
		latitude: 6.253369429308717,
		longitude: -75.5882991574892,
		metroLine: 'B',
		isStation: true,
		symbol: locationTypeSymbols.station,
		type: locationTypes.station,
	},
	{
		id: 'floresta',
		name: 'Floresta',
		latitude: 6.258858657649921,
		longitude: -75.59780693204219,
		metroLine: 'B',
		isStation: true,
		symbol: locationTypeSymbols.station,
		type: locationTypes.station,
	},
	{
		id: 'santa-lucia',
		name: 'Santa Lucía',
		latitude: 6.258102968321494,
		longitude: -75.60376820738844,
		metroLine: 'B',
		isStation: true,
		symbol: locationTypeSymbols.station,
		type: locationTypes.station,
	},
	{
		id: 'san-javier',
		name: 'San Javier',
		latitude: 6.256683735586607,
		longitude: -75.61342862202314,
		metroLine: 'B',
		isStation: true,
		isTransferStation: true,
		transferLines: ['J'],
		symbol: locationTypeSymbols.station,
		type: locationTypes.station,
	},

	// Metrocable Línea K
	// Acevedo ya está definido como punto de transferencia
	{
		id: 'andalucia',
		name: 'Andalucía',
		latitude: 6.29778,
		longitude: -75.55139,
		metroLine: 'K',
		isStation: true,
		symbol: locationTypeSymbols.cableStation,
		type: locationTypes.cableStation,
	},
	{
		id: 'popular',
		name: 'Popular',
		latitude: 6.29417,
		longitude: -75.54444,
		metroLine: 'K',
		isStation: true,
		symbol: locationTypeSymbols.cableStation,
		type: locationTypes.cableStation,
	},
	{
		id: 'santo-domingo-savio',
		name: 'Santo Domingo Savio',
		latitude: 6.29306,
		longitude: -75.53806,
		metroLine: 'K',
		isStation: true,
		isTransferStation: true,
		transferLines: ['L'],
		symbol: locationTypeSymbols.cableStation,
		type: locationTypes.cableStation,
	},

	// Metrocable Línea L (Turística a Parque Arví)
	// Santo Domingo Savio ya está definido como punto de transferencia
	{
		id: 'arvi',
		name: 'Arví',
		latitude: 6.27083,
		longitude: -75.49389,
		metroLine: 'L',
		isStation: true,
		symbol: locationTypeSymbols.cableStation,
		type: locationTypes.cableStation,
	},

	// Metrocable Línea J
	// San Javier ya está definido como punto de transferencia
	{
		id: 'juan-xxiii',
		name: 'Juan XXIII',
		latitude: 6.27611,
		longitude: -75.61611,
		metroLine: 'J',
		isStation: true,
		symbol: locationTypeSymbols.cableStation,
		type: locationTypes.cableStation,
	},
	{
		id: 'vallejuelos',
		name: 'Vallejuelos',
		latitude: 6.28,
		longitude: -75.62139,
		metroLine: 'J',
		isStation: true,
		symbol: locationTypeSymbols.cableStation,
		type: locationTypes.cableStation,
	},
	{
		id: 'la-aurora',
		name: 'La Aurora',
		latitude: 6.28556,
		longitude: -75.62806,
		metroLine: 'J',
		isStation: true,
		symbol: locationTypeSymbols.cableStation,
		type: locationTypes.cableStation,
	},

	// Metrocable Línea H
	{
		id: 'oriente',
		name: 'Oriente',
		latitude: 6.23917,
		longitude: -75.555,
		metroLine: 'H',
		isStation: true,
		symbol: locationTypeSymbols.cableStation,
		type: locationTypes.cableStation,
	},
	{
		id: 'las-torres',
		name: 'Las Torres',
		latitude: 6.2425,
		longitude: -75.54889,
		metroLine: 'H',
		isStation: true,
		symbol: locationTypeSymbols.cableStation,
		type: locationTypes.cableStation,
	},
	{
		id: 'villa-sierra',
		name: 'Villa Sierra',
		latitude: 6.24556,
		longitude: -75.54361,
		metroLine: 'H',
		isStation: true,
		symbol: locationTypeSymbols.cableStation,
		type: locationTypes.cableStation,
	},

	// Metrocable Línea M
	{
		id: 'miraflores',
		name: 'Miraflores',
		latitude: 6.24667,
		longitude: -75.56028,
		metroLine: 'M',
		isStation: true,
		symbol: locationTypeSymbols.cableStation,
		type: locationTypes.cableStation,
	},
	{
		id: 'el-pinal',
		name: 'El Pinal',
		latitude: 6.24944,
		longitude: -75.55611,
		metroLine: 'M',
		isStation: true,
		symbol: locationTypeSymbols.cableStation,
		type: locationTypes.cableStation,
	},
	{
		id: 'trece-de-noviembre',
		name: 'Trece de Noviembre',
		latitude: 6.25222,
		longitude: -75.55194,
		metroLine: 'M',
		isStation: true,
		symbol: locationTypeSymbols.cableStation,
		type: locationTypes.cableStation,
	},

	// Metrocable Línea P
	// Acevedo ya está definido como punto de transferencia
	{
		id: 'sena',
		name: 'Sena',
		latitude: 6.305,
		longitude: -75.56306,
		metroLine: 'P',
		isStation: true,
		symbol: locationTypeSymbols.cableStation,
		type: locationTypes.cableStation,
	},
	{
		id: 'doce-de-octubre',
		name: 'Doce de Octubre',
		latitude: 6.30972,
		longitude: -75.56694,
		metroLine: 'P',
		isStation: true,
		symbol: locationTypeSymbols.cableStation,
		type: locationTypes.cableStation,
	},
	{
		id: 'el-progreso',
		name: 'El Progreso',
		latitude: 6.31361,
		longitude: -75.57139,
		metroLine: 'P',
		isStation: true,
		symbol: locationTypeSymbols.cableStation,
		type: locationTypes.cableStation,
	},

	// Puntos turísticos importantes (no son estaciones)
	{
		id: 'parque-explora',
		name: 'Parque Explora',
		latitude: 6.2707,
		longitude: -75.5658,
		isStation: false,
		symbol: locationTypeSymbols.touristSpot,
		type: locationTypes.touristSpot,
	},
	{
		id: 'jardin-botanico',
		name: 'Jardín Botánico',
		latitude: 6.2718,
		longitude: -75.5636,
		isStation: false,
		symbol: locationTypeSymbols.touristSpot,
		type: locationTypes.touristSpot,
	},
	{
		id: 'plaza-botero',
		name: 'Plaza Botero',
		latitude: 6.2518,
		longitude: -75.5694,
		isStation: false,
		symbol: locationTypeSymbols.touristSpot,
		type: locationTypes.touristSpot,
	},
	{
		id: 'pueblito-paisa',
		name: 'Pueblito Paisa',
		latitude: 6.2388,
		longitude: -75.5781,
		isStation: false,
		symbol: locationTypeSymbols.touristSpot,
		type: locationTypes.touristSpot,
	},
	{
		id: 'parque-lleras',
		name: 'Parque Lleras',
		latitude: 6.2094,
		longitude: -75.5671,
		isStation: false,
		symbol: locationTypeSymbols.touristSpot,
		type: locationTypes.touristSpot,
	},
	{
		id: 'museo-de-antioquia',
		name: 'Museo de Antioquia',
		latitude: 6.2528,
		longitude: -75.5688,
		isStation: false,
		symbol: locationTypeSymbols.touristSpot,
		type: locationTypes.touristSpot,
	},
	{
		id: 'comuna-13-escaleras-electricas',
		name: 'Comuna 13 (Escaleras Eléctricas)',
		latitude: 6.2442,
		longitude: -75.6182,
		isStation: false,
		symbol: locationTypeSymbols.touristSpot,
		type: locationTypes.touristSpot,
	},
]

// Función para crear el grafo
export const createInitialGraph = () => {
	const graph = new Graph()

	// Agregar vértices (ubicaciones)
	for (const location of locations) {
		graph.addVertex(location.id)
	}

	// Conectar estaciones de metro según sus líneas
	// Línea A
	connectConsecutiveStations(graph, 'A')

	// Línea B
	connectConsecutiveStations(graph, 'B')

	// Líneas de Metrocable
	connectConsecutiveStations(graph, 'K')
	connectConsecutiveStations(graph, 'L')
	connectConsecutiveStations(graph, 'J')
	connectConsecutiveStations(graph, 'H')
	connectConsecutiveStations(graph, 'M')
	connectConsecutiveStations(graph, 'P')

	// Conectar estaciones de transferencia entre líneas
	connectTransferStations(graph)

	// Conexiones entre puntos turísticos y estaciones cercanas con un umbral de distancia
	connectTouristSpotsWithNearbyStations(graph, 2.0)

	return graph
}

// Función auxiliar para conectar estaciones consecutivas de una misma línea
function connectConsecutiveStations(graph: Graph, line: string) {
	const stationsInLine = locations
		.filter((loc) => loc.metroLine === line && loc.isStation)
		.sort((a, b) => {
			return locations.findIndex((loc) => loc.id === a.id) - locations.findIndex((loc) => loc.id === b.id)
		})

	for (let i = 0; i < stationsInLine.length - 1; i++) {
		const station1 = stationsInLine[i]
		const station2 = stationsInLine[i + 1]

		const distance = calculateDistance([station1, station2])
		graph.addEdge(station1.id, station2.id, distance)
	}
}

// Función para conectar todos los puntos turísticos con estaciones cercanas
function connectTouristSpotsWithNearbyStations(graph: Graph, maxDistance = 2.0) {
	// Identificar todos los puntos turísticos y estaciones
	const touristSpots = locations.filter((loc) => !loc.isStation)
	const stations = locations.filter((loc) => loc.isStation)

	// Para cada punto turístico, conectar con estaciones cercanas
	for (const spot of touristSpots) {
		for (const station of stations) {
			const distance = calculateDistance([spot, station])

			// Solo conectar si la distancia es menor que el umbral
			if (distance <= maxDistance) {
				graph.addEdge(spot.id, station.id, distance)
			}
		}

		// También podemos conectar puntos turísticos cercanos entre sí
		for (const otherSpot of touristSpots) {
			if (spot.id !== otherSpot.id) {
				const distance = calculateDistance([spot, otherSpot])
				if (distance <= maxDistance) {
					graph.addEdge(spot.id, otherSpot.id, distance)
				}
			}
		}
	}
}

function connectTransferStations(graph: Graph) {
	const transferStations = locations.filter((loc) => loc.isStation && loc.isTransferStation)

	for (const station of transferStations) {
		if (!station.transferLines || station.transferLines.length === 0) continue

		for (const transferLine of station.transferLines) {
			const connectingStations = locations.filter(
				(loc) => loc.isStation && loc.metroLine === transferLine && loc.id !== station.id // Evitar conectar una estación consigo misma
			)

			// Conectar la estación de transferencia con las estaciones de las líneas conectadas
			for (const connectingStation of connectingStations) {
				graph.addEdge(station.id, connectingStation.id, 0.1)
			}
		}
	}
}
