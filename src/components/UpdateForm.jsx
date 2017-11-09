import React, { Component } from 'react'
import axios from 'axios'

class SignupForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			id: props.preferences.user._id,
			food: props.preferences.user.avoidFood,
			movie: props.preferences.user.avoidMovie,
			redirectTo: null
		}
		this.handleUpdate = this.handleUpdate.bind(this)
		this.handleClick = this.handleClick.bind(this)
	}

	handleUpdate(event) {
		event.preventDefault()
		// TODO - validate!
		axios
			.put('/auth/update', {
				id: this.state.id,
				food: this.state.food,
				movie: this.state.movie
			})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('updated')
					this.setState({
						redirectTo: '/'
					})
				} else {
					console.log('failed')
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
		return (
			<div>
				<h1>Update Preferences</h1>
				<br /><label htmlFor="Food">Food: </label>
				<input name='food' id="american" type='checkbox' value="american" onClick={this.handleClick} onClick={this.handleClick} checked={this.state.food.includes("american") ? "checked" : ""}/><label htmlFor="american">American</label>
				<input name='food' id="bakedgoods" type='checkbox' value="bakedgoods" onClick={this.handleClick} checked={this.state.food.includes("bakedgoods") ? "checked" : ""}/><label htmlFor= "bakedgoods">Baked Goods</label>
				<input name='food' id="bbq" type='checkbox' value="bbq" onClick={this.handleClick} checked={this.state.food.includes("bbq") ? "checked" : ""}/><label htmlFor= "bbq">BBQ</label>
				<input name='food' id="caribbean" type='checkbox' value="caribbean" onClick={this.handleClick} checked={this.state.food.includes("caribbean") ? "checked" : ""}/><label htmlFor="caribbean">Caribbean</label>
				<input name='food' id="chinese" type='checkbox' value="chinese" onClick={this.handleClick} checked={this.state.food.includes("chinese") ? "checked" : ""}/><label htmlFor="chinese">Chinese</label>
				<input name='food' id="comfort" type='checkbox' value="comfort" onClick={this.handleClick} checked={this.state.food.includes("comfort") ? "checked" : ""}/><label htmlFor="comfort">Comfort</label>
				<input name='food' id="fastfood" type='checkbox' value="fastfood" onClick={this.handleClick} checked={this.state.food.includes("fastfood") ? "checked" : ""}/><label htmlFor="fastfood">Fast Food</label>
				<input name='food' id="french" type='checkbox' value="french" onClick={this.handleClick} checked={this.state.food.includes("french") ? "checked" : ""}/><label htmlFor="french">French</label>
				<input name='food' id="german" type='checkbox' value="german" onClick={this.handleClick} checked={this.state.food.includes("german") ? "checked" : ""}/><label htmlFor="german">German</label>
				<input name='food' id="icecream" type='checkbox' value="icecream" onClick={this.handleClick} checked={this.state.food.includes("icecream") ? "checked" : ""}/><label htmlFor="icecream">Ice Cream</label>
				<input name='food' id="indian" type='checkbox' value="indian" onClick={this.handleClick} checked={this.state.food.includes("indian") ? "checked" : ""}/><label htmlFor="indian">Indian</label>
				<input name='food' id="italian" type='checkbox' value="italian" onClick={this.handleClick} checked={this.state.food.includes("italian") ? "checked" : ""}/><label htmlFor="italian">Italian</label>
				<input name='food' id="japanese" type='checkbox' value="japanese" onClick={this.handleClick} checked={this.state.food.includes("japanese") ? "checked" : ""}/><label htmlFor="japanese">Japanese</label>
				<input name='food' id="latin" type='checkbox' value="latin" onClick={this.handleClick} checked={this.state.food.includes("latin") ? "checked" : ""}/><label htmlFor="latin">Latin</label>
				<input name='food' id="mediterranean" type='checkbox' value="mediterranean" onClick={this.handleClick} checked={this.state.food.includes("mediterranean") ? "checked" : ""}/><label htmlFor="mediterranean">Mediterranean</label>
				<input name='food' id="mexican" type='checkbox' value="mexican" onClick={this.handleClick} checked={this.state.food.includes("mexican") ? "checked" : ""}/><label htmlFor="mexican">Mexican</label>
				<input name='food' id="pizza" type='checkbox' value="pizza" onClick={this.handleClick} checked={this.state.food.includes("pizza") ? "checked" : ""}/><label htmlFor="pizza">Pizza</label>
				<input name='food' id="sandwiches" type='checkbox' value="sandwiches" onClick={this.handleClick} checked={this.state.food.includes("sandwiches") ? "checked" : ""}/><label htmlFor="sandwiches">Sandwiches</label>
				<input name='food' id="steak" type='checkbox' value="steak" onClick={this.handleClick} checked={this.state.food.includes("steak") ? "checked" : ""}/><label htmlFor="steak">Steak</label>
				<input name='food' id="surfturf" type='checkbox' value="surfturf" onClick={this.handleClick} checked={this.state.food.includes("surfturf") ? "checked" : ""}/><label htmlFor="surfturf">Surf n Turf</label>
				<input name='food' id="tapas" type='checkbox' value="tapas" onClick={this.handleClick} checked={this.state.food.includes("tapas") ? "checked" : ""}/><label htmlFor="tapas">Tapas</label>
				<input name='food' id="thai" type='checkbox' value="thai" onClick={this.handleClick} checked={this.state.food.includes("thai") ? "checked" : ""}/><label htmlFor="thai">Thai</label>

				<br /><label htmlFor="Movie">Movie: </label>
				<input name='movie' id="action" type='checkbox' value="action" onClick={this.handleClick} checked={this.state.movie.includes("action") ? "checked" : ""}/><label htmlFor="action">Action</label>
				<input name='movie' id="adventure" type='checkbox' value="adventure" onClick={this.handleClick} checked={this.state.movie.includes("adventure") ? "checked" : ""}/><label htmlFor="adventure">Adventure</label>
				<input name='movie' id="animation" type='checkbox' value="animation" onClick={this.handleClick} checked={this.state.movie.includes("animation") ? "checked" : ""}/><label htmlFor="animation">Animation</label>
				<input name='movie' id="comedy" type='checkbox' value="comedy" onClick={this.handleClick} checked={this.state.movie.includes("comedy") ? "checked" : ""}/><label htmlFor="comedy">Comedy</label>
				<input name='movie' id="crime" type='checkbox' value="crime" onClick={this.handleClick} checked={this.state.movie.includes("crime") ? "checked" : ""}/><label htmlFor="crime">Crime</label>
				<input name='movie' id="documentary" type='checkbox' value="documentary" onClick={this.handleClick} checked={this.state.movie.includes("documentary") ? "checked" : ""}/><label htmlFor="documentary">Documentary</label>
				<input name='movie' id="drama" type='checkbox' value="drama" onClick={this.handleClick} checked={this.state.movie.includes("drama") ? "checked" : ""}/><label htmlFor="drama">Drama</label>
				<input name='movie' id="family" type='checkbox' value="family" onClick={this.handleClick} checked={this.state.movie.includes("family") ? "checked" : ""}/><label htmlFor="family">Family</label>
				<input name='movie' id="fantasy" type='checkbox' value="fantasy" onClick={this.handleClick} checked={this.state.movie.includes("fantasy") ? "checked" : ""}/><label htmlFor="fantasy">Fantasy</label>
				<input name='movie' id="history" type='checkbox' value="history" onClick={this.handleClick} checked={this.state.movie.includes("history") ? "checked" : ""}/><label htmlFor="history">History</label>
				<input name='movie' id="horror" type='checkbox' value="horror" onClick={this.handleClick} checked={this.state.movie.includes("horror") ? "checked" : ""}/><label htmlFor="horror">Horror</label>
				<input name='movie' id="musical" type='checkbox' value="musical" onClick={this.handleClick} checked={this.state.movie.includes("musical") ? "checked" : ""}/><label htmlFor="musical">Musical</label>
				<input name='movie' id="mystery" type='checkbox' value="mystery" onClick={this.handleClick} checked={this.state.movie.includes("mystery") ? "checked" : ""}/><label htmlFor="mystery">Mystery</label>
				<input name='movie' id="romance" type='checkbox' value="romance" onClick={this.handleClick} checked={this.state.movie.includes("romance") ? "checked" : ""}/><label htmlFor="romance">Romance</label>
				<input name='movie' id="scifi" type='checkbox' value="scifi" onClick={this.handleClick} checked={this.state.movie.includes("scifi") ? "checked" : ""}/><label htmlFor="scifi">Sci-Fi</label>
				<input name='movie' id="thriller" type='checkbox' value="thriller" onClick={this.handleClick} checked={this.state.movie.includes("thriller") ? "checked" : ""}/><label htmlFor="thriller">Thriller</label>
				<input name='movie' id="war" type='checkbox' value="war" onClick={this.handleClick} checked={this.state.movie.includes("war") ? "checked" : ""}/><label htmlFor="war">War</label>
				<input name='movie' id="western" type='checkbox' value="western" onClick={this.handleClick} checked={this.state.movie.includes("western") ? "checked" : ""}/><label htmlFor="western">Western</label>
				<br /><button onClick={this.handleUpdate}>Update</button>
			</div>
		)
	}
}

export default SignupForm
