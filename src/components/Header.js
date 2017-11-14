import React from 'react';
import Menu from './Menu';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			readMore: false,
		};

	}

	readMoreEvent () {
		this.setState((prevState) => {
			return { readMore: !prevState.readMore };
		});
	}

	render() {
		return(
			<header> 
				<div className='container'>
					<div className='row'>
						<div className='col-lg-5'>
							<div className='logo'>
								<p>Freelancer<span>.</span></p>
							</div>
						</div>
						<div className='col-lg-7'>
							<Menu
								menuList={this.props.menuList}
								iconsData={this.props.iconsData}
							/>
						</div>
					</div>
					<div className='row description'>
						<div className='col-lg-6'>
							<h1>intelligence is nothing without ambition</h1>
							<h2>We’re small but impressive creative agency.</h2>
							<button
								onClick={() => this.readMoreEvent()}
							>
								{!this.state.readMore ? 'read more' : 'read less'}
							</button>
						</div>
						{this.state.readMore &&
							<div className='col-lg-6'>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
							</div>
						}
					</div>
				</div>
			</header>
		)
	};
}

export default Header;