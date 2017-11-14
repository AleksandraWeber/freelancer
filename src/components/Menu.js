import React from 'react';

class Menu extends React.Component {
	constructor(props) {
		super(props);
		this.state= {
			menuList: [],
		};
	}

	componentDidMount() {
		this.setState({
			menuList: this.props.menuList,
		});
	}


	render() {
		return(
			<nav> 
				<ul>
					{this.state.menuList.map(menu => {
							return (
								<li
									key={menu.id}
								>
									<a href={menu.url}>{menu.name}</a>
								</li>
							);
					})}
				</ul>
				<div className='social-box'>
					<a href='#'><i className="fa fa-twitter" aria-hidden="true"></i></a>
					<a href='#'><i className="fa fa-facebook" aria-hidden="true"></i></a>
				</div>
			</nav>
		)
	};
}

export default Menu;