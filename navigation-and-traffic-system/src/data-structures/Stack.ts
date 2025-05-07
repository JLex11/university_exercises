export class Stack<T> {
	private items: T[]
	private updateCallback?: () => void

	constructor() {
		const target: T[] = []
		const handler: ProxyHandler<T[]> = {
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

	setUpdateCallback(callback: () => void): void {
		this.updateCallback = callback
	}

	push(item: T): void {
		this.items.push(item)
	}

	pop(): T | undefined {
		return this.items.pop()
	}

	peek(): T | undefined {
		return this.items[this.items.length - 1]
	}

	isEmpty(): boolean {
		return this.items.length === 0
	}

	size(): number {
		return this.items.length
	}

	clear(): void {
		this.items = []
	}

	getItems(): T[] {
		return [...this.items]
	}
}
