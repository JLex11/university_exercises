interface HeaderProps {
	currentDateTime: string
	currentUser: string
}

export default function Header({ currentDateTime, currentUser }: HeaderProps) {
	return (
		<header className='bg-slate-800 text-white py-4 px-8 shadow-md'>
			<div className='container mx-auto flex justify-between items-center'>
				<h1 className='text-2xl font-bold'>Sistema de Navegación</h1>
				<div className='flex items-center gap-4 text-sm'>
					<span>{currentDateTime}</span>
					<span className='flex items-center gap-2'>
						<svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
							<path fillRule='evenodd' d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z' clipRule='evenodd' />
						</svg>
						{currentUser}
					</span>
				</div>
			</div>
		</header>
	)
}
