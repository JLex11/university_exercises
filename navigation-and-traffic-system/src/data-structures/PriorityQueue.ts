export class PriorityQueue<T> {
	private items: { value: T; priority: number }[]
	private updateCallback?: () => void

	constructor() {
		const target: { value: T; priority: number }[] = []
		const handler: ProxyHandler<{ value: T; priority: number }[]> = {
			get: (target, propKey, receiver) => {
				const originalMethod = Reflect.get(target, propKey, receiver)
				const mutatingMethods = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse']

				if (mutatingMethods.includes(propKey.toString()) && typeof originalMethod === 'function') {
					return (...args: unknown[]) => {
						const result = originalMethod.apply(target, args)
						this.updateCallback?.()
						return result
					}
				}

				if (typeof originalMethod === 'function') return originalMethod.bind(target)
				return originalMethod
			},

			set: (target, propKey, value, receiver) => {
				const result = Reflect.set(target, propKey, value, receiver)
				if (propKey !== 'length') this.updateCallback?.()
				return result
			},
		}

		this.items = new Proxy(target, handler)
	}

	// debe recibir una funcion que se ejecute en cada cambio de items para que se actualice el componente
	setUpdateCallback(callback: () => void): void {
		this.updateCallback = callback
	}

	enqueue(value: T, priority: number): void {
		const newItem = { value, priority }
		let added = false

		for (let i = 0; i < this.items.length; i++) {
			if (newItem.priority < this.items[i].priority) {
				this.items.splice(i, 0, newItem)
				added = true
				break
			}
		}

		if (!added) {
			this.items.push(newItem)
		}
	}

	dequeue(): T | undefined {
		if (this.isEmpty()) return undefined
		return this.items.shift()?.value
	}

	peek(): T | undefined {
		if (this.isEmpty()) return undefined
		return this.items[0].value
	}

	isEmpty(): boolean {
		return this.items.length === 0
	}

	size(): number {
		return this.items.length
	}

	getItems(): { value: T; priority: number }[] {
		return [...this.items]
	}
}
