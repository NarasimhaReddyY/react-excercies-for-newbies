import React, { Component } from 'react';

class List extends Component {
	render () {
		return (
			<div>
				{
					this.props.users.map((name) => (
						<p>{name}</p>
					))
				}
			</div>	
		)
	}
 }

 export default List;