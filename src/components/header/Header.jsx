function Header(props) {
	return (
		<header>
			<div className='container'>
				<nav className='navbar navbar-light navbar-toggleable-sm'>
					<a href='/' className='navbar-brand mb-0'>
						CoWork
					</a>

					<button
						className='navbar-toggler navbar-toggler-right'
						type='button'
						data-toggle='collapse'
						data-target='#headerNav'
						aria-controls='headerNav'
						aria-expanded='false'
						aria-label='Toggle navigation'>
						<span className='navbar-toggler-icon'></span>
					</button>

					<div
						id='headerNav'
						className='collapse navbar-collapse justify-content-end'></div>
				</nav>
			</div>
		</header>
	);
}

export default Header;
