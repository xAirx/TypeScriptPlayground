import React, { Component } from 'react';

interface ProfileProps {
	name: string,
	username: string,
	age: number
}

interface ProfileState {
	publicStatus: boolean;
}

export default class Profile extends Component<ProfileProps, ProfileState> {
	constructor(props: ProfileProps) {
		super(props);
		this.state = {
			publicStatus: false,
		};
	}

	changeStatus = () => {
		this.setState({
			publicStatus: !this.grabState(),
		});
	};

	grabState = () => {
		const { publicStatus } = this.state;
		const state = { publicStatus };
		return state;
	};

	render() {
		const {
			publicStatus,
		} = this.state;

		const { username, name, age } = this.props;

		return (
			<div>

				{
					publicStatus ? (
						<h1>This Profile is Public </h1>
					) : (
							<h1>This Profile is Private </h1>
						)
				}
				<p>
					Name:
					{name}
				</p>
				<p>
					Username:
					{username}
				</p>
				<p>
					Age:
					{age}
				</p>
				<button type="button" onClick={this.changeStatus}> Set Status </button>
			</div>
		);
	}
}
