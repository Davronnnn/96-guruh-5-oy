import React from 'react';
import Card from '../Card/Card';

const CardList = ({ products, title = 'Title', isLeft }) => {
	return (
		<div className='row my-5'>
			<h3
				className={`text-primary  ${
					isLeft ? 'text-start' : 'text-center'
				}`}>
				{title}
			</h3>
			{products.map((product, i) => (
				<Card key={i} product={product} />
			))}
		</div>
	);
};

export default CardList;
