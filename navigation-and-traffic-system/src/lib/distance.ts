type Point = { latitude: number; longitude: number }

export const distance = ([point1, point2]: [Point, Point]) => {
	const r = 6371 // km
	const p = Math.PI / 180

	const a =
		0.5 -
		Math.cos((point2.latitude - point1.latitude) * p) / 2 +
		(Math.cos(point1.latitude * p) * Math.cos(point2.latitude * p) * (1 - Math.cos((point2.longitude - point1.longitude) * p))) / 2

	return 2 * r * Math.asin(Math.sqrt(a))
}
