import React from 'react';

const Card = ({ product }) => {
	return (
		<div className='col-4'>
			<div className='card'>
				<img
					src={product.image}
					className='card-img-top'
					alt={product.name}
				/>
				<div className='card-body'>
					<h5 className='card-title'>{product.name}</h5>
					<p className='card-text'>{product.category}</p>
					<a href='/' className='btn btn-primary'>
						{product.price}
					</a>
				</div>
			</div>
		</div>
	);
};

export default Card;
