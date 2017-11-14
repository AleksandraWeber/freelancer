import React from 'react';
import More from './More';

class Services extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			servicesList: [],
		};
	}

	componentDidMount() {
		this.setState({
			servicesList: this.props.servicesList,
		});
	}


	render() {
		return(
			<div className='container services'>
				<div className='row'>
					{this.state.servicesList.map(service => {
								return (
									<div
										className='col-lg-4'
										key={service.id}
									>
										<h3>{service.title}</h3>
										<p>{service.description}</p>
										<More
											url={service.url}
											linkTitle='more'
      								showArrow={true}
										/>
									</div>
								);
						})}
				</div> 
			</div>
		)
	};
}

export default Services;