import React from 'react';
import Icons from './Icons';

class Footer extends React.Component {
	constructor(props) {
		super(props);

	}

	showYear() {
		let d = new Date();
		let n = d.getFullYear();
		return n;
	}

	render() {
		return(
			<footer className='container'>
			<div className='row'>
				<div className='col-lg-6'>
				<Icons
					iconsData={this.props.iconsData}
				/>
				</div>
				<div className='col-lg-6'>
					<p>&copy; Freelancer - Designed by Wojtek Kwiatkowski | {this.showYear()}</p>
				</div>
			</div> 
		</footer>
		)
	};
}

export default Footer;