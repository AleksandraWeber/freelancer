import React from 'react';
import More from './More';

class Portfolio extends React.Component {
	constructor(props) {
		super(props);

	}
	render() {
		return(
			<div className='container portfolio'>
				<div className='row'>
					<div className='col-lg-6' style={{order: this.props.showImgLeft ? 1 : 2}}>
						<img src={this.props.imgUrl} alt='portfolio'/>
					</div>
					<div className='col-lg-6' style={{order: this.props.showImgLeft ? 2 : 1}}>
						<h4>{this.props.title}</h4>
						<h5>{this.props.titleDescription}</h5>
						<p>{this.props.description1}</p>
						<p>{this.props.description2}</p>
						{this.props.moreShow && 
							<More
								url={this.props.moreUrl}
								linkTitle={this.props.moreLinkTitle}
      					showArrow={this.props.moreShowArrow}
							/>
						}
					</div>
				</div> 
			</div>
		)
	};
}

export default Portfolio;