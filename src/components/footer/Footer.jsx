import './footer.scss';

function Footer() {
	const year = new Date().getFullYear();

	// console.log(year);
	return (
		<>
			<footer>
				<p>{year}</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Dignissimos voluptate mollitia id in distinctio, dolorum
					minus ducimus maiores exercitationem sapiente nostrum hic
					voluptatum autem! Quis, ratione aperiam. Natus, commodi
					minus.
				</p>
			</footer>
			<div>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. At
				enim facilis dolorum quos qui accusamus quasi, sunt culpa quam
				omnis repudiandae ducimus odit totam error vel dolorem?
				Quisquam, corporis pariatur!
			</div>
		</>
	);
}

export default Footer;
