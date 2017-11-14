import React from 'react';
import More from './More';

class Team extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<div className='container team'>
				<div className='row teamHeader'>
					<div className='col-lg-12 '>
						<h4>{this.props.teamData.title}</h4>
						<h5>{this.props.teamData.description}</h5>
					</div>
				</div> 
				<div className='row teamUsers'>
				{this.props.teamData.teamUsers.map(user => {
								return (
									<div
										className='col-lg-4 user-container'
										key={user.id}
									>
										<div>
											<img
												src={user.userPhotoUrl}
												alt='photo'
											/>
										</div>
										<div className='user-description'>
											<h4>{user.userName}</h4>
											<h5>{user.userPosition}</h5>
											<p>{user.userDescription}</p>
										</div>

									</div>
								);
						})}
						<div className='col-lg-12 btn'>
							<More
								url={this.props.teamData.moreButton.url}
								linkTitle={this.props.teamData.moreButton.text}
								showArrow={this.props.teamData.moreButton.showArrow}
							/>
						</div>
				</div>
			</div>
		)
	};
}

export default Team;