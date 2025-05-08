import { useEffect, useState } from 'react'
import { Queue } from '../data-structures/Queue'
import type { TrafficAlert } from '../types'

const alertLocations = ['Av. El Poblado', 'Autopista Norte', 'Plaza Mayor', 'La 80']
const alertDescriptions = [
	'Tráfico lento debido a obras',
	'Accidente de tráfico',
	'Manifestación en la zona',
	'Carril cerrado por mantenimiento',
]
const alertSeverities: ('low' | 'medium' | 'high')[] = ['low', 'medium', 'high']

export default function useRandomTrafficAlerts() {
	const [_, setUpdateTrigger] = useState(0)
	const [trafficAlerts] = useState<Queue<TrafficAlert>>(new Queue())

	useEffect(() => {
		trafficAlerts.setUpdateCallback(() => setUpdateTrigger((c) => c + 1))
	}, [trafficAlerts.setUpdateCallback])

	useEffect(() => {
		const interval = setInterval(() => {
			if (trafficAlerts.size() < 3) {
				const randomLocation = alertLocations[Math.floor(Math.random() * alertLocations.length)]
				const randomDescription = alertDescriptions[Math.floor(Math.random() * alertDescriptions.length)]
				const randomSeverity = alertSeverities[Math.floor(Math.random() * alertSeverities.length)]

				const newAlert: TrafficAlert = {
					location: randomLocation,
					description: randomDescription,
					severity: randomSeverity,
					timestamp: new Date(),
				}

				trafficAlerts.enqueue(newAlert)
			}
		}, 20000)

		return () => clearInterval(interval)
	}, [trafficAlerts])

	return trafficAlerts
}
