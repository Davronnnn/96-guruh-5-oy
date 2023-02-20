import React from 'react';

class Test extends React.Component {
	constructor(props) {
		super();
	}

	render() {
		return (
			<div>
				{this.props.test}
				Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				Reprehenderit, delectus, nemo maiores, facilis praesentium
				dignissimos necessitatibus magnam aspernatur quidem quas dolor
				molestiae magni modi voluptatem eius quaerat deleniti sunt!
				Sequi.
			</div>
		);
	}
}

export default Test;
