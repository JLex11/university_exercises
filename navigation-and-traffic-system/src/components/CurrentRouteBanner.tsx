import { Fragment } from 'react/jsx-runtime'
import type { Route } from '../types'

interface CurrentRouteBannerProps {
	currentRouteLocationsNames: string[]
	currentRoute: Route
}

export default function CurrentRouteBanner({ currentRouteLocationsNames = [], currentRoute }: CurrentRouteBannerProps) {
	return (
		<div className='container mx-auto'>
			<div className='flex flex-col'>
				<h3 className='text-lg font-bold mb-2'>Ruta actual:</h3>
				<div className='flex flex-col gap-2'>
					<div className='flex items-center gap-2 text-lg'>
						{currentRouteLocationsNames.map((name, index, arr) => (
							<Fragment key={name}>
								<span className='font-medium'>{name}</span>
								{index < arr.length - 1 && (
									<svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 text-gray-400' viewBox='0 0 20 20' fill='currentColor'>
										<path
											fillRule='evenodd'
											d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
											clipRule='evenodd'
										/>
									</svg>
								)}
							</Fragment>
						))}
					</div>
					<div className='flex gap-4 text-sm'>
						<div className='flex items-center gap-1'>
							<svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
								<path
									fillRule='evenodd'
									d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
									clipRule='evenodd'
								/>
							</svg>
							<span>{currentRoute.distance.toFixed(1)} km</span>
						</div>
						<div className='flex items-center gap-1'>
							<svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
								<path
									fillRule='evenodd'
									d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z'
									clipRule='evenodd'
								/>
							</svg>
							<span>{currentRoute.estimatedTime.toFixed(0)} min</span>
						</div>
						<span className='px-2 py-1 rounded flex items-center gap-1'>
							<svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
								<path d='M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z' />
								<path d='M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-1h3a1 1 0 001-1v-6h-4a1 1 0 01-1-1V4h-7z' />
							</svg>
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}
