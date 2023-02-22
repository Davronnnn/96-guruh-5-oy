import React from 'react';
import './footer.scss';

function Footer() {
	return (
		<>
			<footer className='footer'>
				<div className='container'>
					<ul className='list-inline mb-0 text-center'>
						<li className='list-inline-item'>
							<a href='/'>
								<span className='fa fa-twitter'></span>
							</a>
						</li>

						<li className='list-inline-item'>
							<a href='/'>
								<span className='fa fa-google-plus'></span>
							</a>
						</li>

						<li className='list-inline-item'>
							<a href='/'>
								<span className='fa fa-instagram'></span>
							</a>
						</li>

						<li className='list-inline-item'>
							<a href='/'>
								<span className='fa fa-envelope-o'></span>
							</a>
						</li>
					</ul>
				</div>
			</footer>
		</>
	);
}

export default Footer;
