import nimadir from '../../images/image.jpeg';

function Header() {
	return (
		<header>
			<img src={nimadir} alt='' />
			<ul>
				<li>Home</li>
				<li>About</li>
				<li>Contant</li>
			</ul>
		</header>
	);
}

export default Header;
