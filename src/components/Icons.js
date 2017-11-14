import React from 'react';

class Icons extends React.Component {
	constructor(props) {
		super(props);

	}
	render() {
		return(
			<div> 
				{this.props.iconsData.map(icon=> {
								return (
								 <a
									href={icon.link}
									key={icon.id}
								 >
										<i
											className={`fa ${icon.iconClassName}`}
											aria-hidden='true'
										>
										</i>
								 </a>
								);
						})}
			</div>
		)
	};
}

export default Icons;