import { PriorityQueue } from './PriorityQueue'

export class Graph {
	private adjacencyList: Map<string, Map<string, number>>

	constructor() {
		this.adjacencyList = new Map()
	}

	addVertex(vertex: string): void {
		if (!this.adjacencyList.has(vertex)) {
			this.adjacencyList.set(vertex, new Map())
		}
	}

	addEdge(source: string, destination: string, weight: number): void {
		this.addVertex(source)
		this.addVertex(destination)
		this.adjacencyList.get(source)?.set(destination, weight)
		this.adjacencyList.get(destination)?.set(source, weight) // Para un grafo no dirigido
	}

	getNeighbors(vertex: string): Map<string, number> | undefined {
		return this.adjacencyList.get(vertex)
	}

	// Implementación mejorada del algoritmo de Dijkstra para encontrar la ruta más corta
	findShortestPath(start: string, end: string): { path: string[]; distance: number } {
		const distances = new Map<string, number>()
		const previous = new Map<string, string | null>()
		const nodes = new PriorityQueue<string>()
		const visited = new Set<string>()

		// Inicializar distancias
		this.adjacencyList.forEach((_, vertex) => {
			if (vertex === start) {
				distances.set(vertex, 0)
				nodes.enqueue(vertex, 0)
			} else {
				distances.set(vertex, Number.POSITIVE_INFINITY)
			}
			previous.set(vertex, null)
		})

		while (!nodes.isEmpty()) {
			const current = nodes.dequeue()

			if (!current) break

			if (current === end) break

			if (visited.has(current)) continue
			visited.add(current)

			const neighbors = this.adjacencyList.get(current)
			if (!neighbors) continue

			for (const [neighbor, weight] of neighbors.entries()) {
				if (visited.has(neighbor)) continue

				const calculatedDistance = (distances.get(current) || 0) + weight
				const currentDistance = distances.get(neighbor) || Number.POSITIVE_INFINITY

				if (calculatedDistance < currentDistance) {
					distances.set(neighbor, calculatedDistance)
					previous.set(neighbor, current)
					nodes.enqueue(neighbor, calculatedDistance)
				}
			}
		}

		// Reconstruir el camino
		const path: string[] = []
		let current = end

		while (current) {
			path.unshift(current)
			const prev = previous.get(current)
			if (!prev) break
			current = prev
		}

		return {
			path,
			distance: distances.get(end) || Number.POSITIVE_INFINITY,
		}
	}
}
