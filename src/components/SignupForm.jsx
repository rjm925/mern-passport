import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

class SignupForm extends Component {
	constructor() {
		super()
		this.state = {
			firstname: '',
			lastname: '',
			password: '',
			confirmPassword: '',
			username: '',
			zipcode: '',
			food: [],
			movie: [],
			redirectTo: null
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.handleClick = this.handleClick.bind(this)
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleSubmit(event) {
		event.preventDefault()
		// TODO - validate!
		axios
			.post('/auth/signup', {
				firstname: this.state.firstname,
				lastname: this.state.lastname,
				password: this.state.password,
				username: this.state.username,
				zipcode: this.state.zipcode,
				food: this.state.food,
				movie: this.state.movie
			})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('youre good')
					this.setState({
						redirectTo: '/login'
					})
				} else {
					console.log('duplicate')
				}
			})
	}
	handleClick(event) {
		console.log(event.target.name);
		console.log(event.target.value);

		var array = this.state[event.target.name];
		if (array.includes(event.target.value)) {
			var index = array.indexOf(event.target.value);
			array.splice(index, 1);
		}
		else {
			array = array.concat(event.target.value);
		}

		this.setState({
			[event.target.name]: array
		});

		console.log(this.state)

	}
	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		}
		return (
			<div className="SignupForm">
				<h1>Signup form</h1>
				<label htmlFor="First Name">First Name: </label>
				<input
					type="text"
					name="firstname"
					value={this.state.firstname}
					onChange={this.handleChange}
				/><br />
				<label htmlFor="Last Name">Last Name: </label>
				<input
					type="text"
					name="lastname"
					value={this.state.lastname}
					onChange={this.handleChange}
				/><br />
				<label htmlFor="Email">Email: </label>
				<input
					type="text"
					name="username"
					value={this.state.username}
					onChange={this.handleChange}
				/><br />
				<label htmlFor="password">Password: </label>
				<input
					type="password"
					name="password"
					value={this.state.password}
					onChange={this.handleChange}
				/><br />
				<label htmlFor="confirmPassword">Confirm Password: </label>
				<input
					type="password"
					name="confirmPassword"
					value={this.state.confirmPassword}
					onChange={this.handleChange}
				/><br />
				<label htmlFor="Zipcode">Zipcode: </label>
				<input
					type="text"
					name="zipcode"
					value={this.state.zipcode}
					onChange={this.handleChange}
				/>				
				<br /><label htmlFor="Food">Food: </label>
				<input name='food' id="american" type='checkbox' value="american" onClick={this.handleClick}/><label htmlFor="american">American</label>
				<input name='food' id="bakedgoods" type='checkbox' value="bakedgoods" onClick={this.handleClick}/><label htmlFor= "bakedgoods">Baked Goods</label>
				<input name='food' id="bbq" type='checkbox' value="bbq" onClick={this.handleClick}/><label htmlFor= "bbq">BBQ</label>
				<input name='food' id="caribbean" type='checkbox' value="caribbean" onClick={this.handleClick}/><label htmlFor="caribbean">Caribbean</label>
				<input name='food' id="chinese" type='checkbox' value="chinese" onClick={this.handleClick}/><label htmlFor="chinese">Chinese</label>
				<input name='food' id="comfort" type='checkbox' value="comfort" onClick={this.handleClick}/><label htmlFor="comfort">comfort</label>
				<input name='food' id="fastfood" type='checkbox' value="fastfood" onClick={this.handleClick}/><label htmlFor="fastfood">Fast Food</label>
				<input name='food' id="french" type='checkbox' value="french" onClick={this.handleClick}/><label htmlFor="french">French</label>
				<input name='food' id="german" type='checkbox' value="german" onClick={this.handleClick}/><label htmlFor="german">German</label>
				<input name='food' id="icecream" type='checkbox' value="icecream" onClick={this.handleClick}/><label htmlFor="icecream">Ice Cream</label>
				<input name='food' id="indian" type='checkbox' value="indian" onClick={this.handleClick}/><label htmlFor="indian">Indian</label>
				<input name='food' id="italian" type='checkbox' value="italian" onClick={this.handleClick}/><label htmlFor="italian">Italian</label>
				<input name='food' id="japanese" type='checkbox' value="japanese" onClick={this.handleClick}/><label htmlFor="japanese">Japanese</label>
				<input name='food' id="latin" type='checkbox' value="latin" onClick={this.handleClick}/><label htmlFor="latin">Latin</label>
				<input name='food' id="mediterranean" type='checkbox' value="mediterranean" onClick={this.handleClick}/><label htmlFor="mediterranean">Mediterranean</label>
				<input name='food' id="mexican" type='checkbox' value="mexican" onClick={this.handleClick}/><label htmlFor="mexican">Mexican</label>
				<input name='food' id="pizza" type='checkbox' value="pizza" onClick={this.handleClick}/><label htmlFor="pizza">Pizza</label>
				<input name='food' id="sandwiches" type='checkbox' value="sandwiches" onClick={this.handleClick}/><label htmlFor="sandwiches">Sandwiches</label>
				<input name='food' id="steak" type='checkbox' value="steak" onClick={this.handleClick}/><label htmlFor="steak">Steak</label>
				<input name='food' id="surfturf" type='checkbox' value="surfturf" onClick={this.handleClick}/><label htmlFor="surfturf">Surf n Turf</label>
				<input name='food' id="tapas" type='checkbox' value="tapas" onClick={this.handleClick}/><label htmlFor="tapas">Tapas</label>
				<input name='food' id="thai" type='checkbox' value="thai" onClick={this.handleClick}/><label htmlFor="thai">Thai</label>
				<br /><label htmlFor="Movie">Movie: </label>
				<input name='movie' id="action" type='checkbox' value="action" onClick={this.handleClick}/><label htmlFor="action">Action</label>
				<input name='movie' id="adventure" type='checkbox' value="adventure" onClick={this.handleClick}/><label htmlFor="adventure">Adventure</label>
				<input name='movie' id="animation" type='checkbox' value="animation" onClick={this.handleClick}/><label htmlFor="animation">Animation</label>
				<input name='movie' id="comedy" type='checkbox' value="comedy" onClick={this.handleClick}/><label htmlFor="comedy">Comedy</label>
				<input name='movie' id="crime" type='checkbox' value="crime" onClick={this.handleClick}/><label htmlFor="crime">Crime</label>
				<input name='movie' id="documentary" type='checkbox' value="documentary" onClick={this.handleClick}/><label htmlFor="documentary">Documentary</label>
				<input name='movie' id="drama" type='checkbox' value="drama" onClick={this.handleClick}/><label htmlFor="drama">Drama</label>
				<input name='movie' id="family" type='checkbox' value="family" onClick={this.handleClick}/><label htmlFor="family">Family</label>
				<input name='movie' id="fantasy" type='checkbox' value="fantasy" onClick={this.handleClick}/><label htmlFor="fantasy">Fantasy</label>
				<input name='movie' id="history" type='checkbox' value="history" onClick={this.handleClick}/><label htmlFor="history">History</label>
				<input name='movie' id="horror" type='checkbox' value="horror" onClick={this.handleClick}/><label htmlFor="horror">Horror</label>
				<input name='movie' id="musical" type='checkbox' value="musical" onClick={this.handleClick}/><label htmlFor="musical">Musical</label>
				<input name='movie' id="mystery" type='checkbox' value="mystery" onClick={this.handleClick}/><label htmlFor="mystery">Mystery</label>
				<input name='movie' id="romance" type='checkbox' value="romance" onClick={this.handleClick}/><label htmlFor="romance">Romance</label>
				<input name='movie' id="scifi" type='checkbox' value="scifi" onClick={this.handleClick}/><label htmlFor="scifi">Sci-Fi</label>
				<input name='movie' id="thriller" type='checkbox' value="thriller" onClick={this.handleClick}/><label htmlFor="thriller">Thriller</label>
				<input name='movie' id="war" type='checkbox' value="war" onClick={this.handleClick}/><label htmlFor="war">War</label>
				<input name='movie' id="western" type='checkbox' value="western" onClick={this.handleClick}/><label htmlFor="western">Western</label>
				<br /><button onClick={this.handleSubmit}>Sign up</button>
			</div>
		)
	}
}

export default SignupForm
