import React from 'react';

class More extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return(
			<a className='more' href={this.props.url}>
				{this.props.linkTitle}
				{this.props.showArrow &&
					<i className="fa fa-long-arrow-right" aria-hidden="true"></i>
				}
			</a>
		)
	};
}

export default More;