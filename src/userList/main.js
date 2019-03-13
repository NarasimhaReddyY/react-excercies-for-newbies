import React, { Component } from 'react';
import List from './list';

class UserList extends Component {

	constructor(props){
		super(props);

		this.state = {
			currentText: '',
			userList: []
		}
	}

	handleOnChange = (event) => {
		const value = event.target.value;
		this.setState({
			currentText: value
		})
	}

	handleSubmit = () => {
		const currentText = this.state.currentText;
		const userList = [...this.state.userList, currentText];

		this.setState({
			userList: userList,
			currentText: ''
		})
	}

	render () {
		return (
      <div>
    	  <div>
					<input
						type='text'
						value={this.state.currentText}
						onChange={this.handleOnChange}
					/>
					<button onClick={this.handleSubmit}>Submit</button><br />
					<List
						users={this.state.userList}
					/>
				</div>
			</div>
		)
	}
}

export default UserList;