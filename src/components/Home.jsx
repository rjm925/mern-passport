import React, {Component} from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
// TODO - add proptypes

const Home = props => {
	if (props.user) {
		return (
			<div className="Home">
				<p>Current User:</p>
				<code>
					{JSON.stringify(props)}
				</code>
				<h1>Update Preferences</h1>
				<br /><label htmlFor="Food">Food: </label>
				<input name='food' id="american" type='checkbox' value="american" checked={props.user.avoidFood.includes("american") ? "checked" : ""}/><label htmlFor="american">American</label>
				<input name='food' id="bakedgoods" type='checkbox' value="bakedgoods" checked={props.user.avoidFood.includes("bakedgoods") ? "checked" : ""}/><label htmlFor= "bakedgoods">Baked Goods</label>
				<input name='food' id="bbq" type='checkbox' value="bbq" checked={props.user.avoidFood.includes("bbq") ? "checked" : ""}/><label htmlFor= "bbq">BBQ</label>
				<input name='food' id="caribbean" type='checkbox' value="caribbean" checked={props.user.avoidFood.includes("caribbean") ? "checked" : ""}/><label htmlFor="caribbean">Caribbean</label>
				<input name='food' id="chinese" type='checkbox' value="chinese" checked={props.user.avoidFood.includes("chinese") ? "checked" : ""}/><label htmlFor="chinese">Chinese</label>
				<input name='food' id="comfort" type='checkbox' value="comfort" checked={props.user.avoidFood.includes("comfort") ? "checked" : ""}/><label htmlFor="comfort">comfort</label>
				<input name='food' id="fastfood" type='checkbox' value="fastfood" checked={props.user.avoidFood.includes("fastfood") ? "checked" : ""}/><label htmlFor="fastfood">Fast Food</label>
				<input name='food' id="french" type='checkbox' value="french" checked={props.user.avoidFood.includes("french") ? "checked" : ""}/><label htmlFor="french">French</label>
				<input name='food' id="german" type='checkbox' value="german" checked={props.user.avoidFood.includes("german") ? "checked" : ""}/><label htmlFor="german">German</label>
				<input name='food' id="icecream" type='checkbox' value="icecream" checked={props.user.avoidFood.includes("icecream") ? "checked" : ""}/><label htmlFor="icecream">Ice Cream</label>
				<input name='food' id="indian" type='checkbox' value="indian" checked={props.user.avoidFood.includes("indian") ? "checked" : ""}/><label htmlFor="indian">Indian</label>
				<input name='food' id="italian" type='checkbox' value="italian" checked={props.user.avoidFood.includes("italian") ? "checked" : ""}/><label htmlFor="italian">Italian</label>
				<input name='food' id="japanese" type='checkbox' value="japanese" checked={props.user.avoidFood.includes("japanese") ? "checked" : ""}/><label htmlFor="japanese">Japanese</label>
				<input name='food' id="latin" type='checkbox' value="latin" checked={props.user.avoidFood.includes("latin") ? "checked" : ""}/><label htmlFor="latin">Latin</label>
				<input name='food' id="mediterranean" type='checkbox' value="mediterranean" checked={props.user.avoidFood.includes("mediterranean") ? "checked" : ""}/><label htmlFor="mediterranean">Mediterranean</label>
				<input name='food' id="mexican" type='checkbox' value="mexican" checked={props.user.avoidFood.includes("mexican") ? "checked" : ""}/><label htmlFor="mexican">Mexican</label>
				<input name='food' id="pizza" type='checkbox' value="pizza" checked={props.user.avoidFood.includes("pizza") ? "checked" : ""}/><label htmlFor="pizza">Pizza</label>
				<input name='food' id="sandwiches" type='checkbox' value="sandwiches" checked={props.user.avoidFood.includes("sandwiches") ? "checked" : ""}/><label htmlFor="sandwiches">Sandwiches</label>
				<input name='food' id="steak" type='checkbox' value="steak" checked={props.user.avoidFood.includes("steak") ? "checked" : ""}/><label htmlFor="steak">Steak</label>
				<input name='food' id="surfturf" type='checkbox' value="surfturf" checked={props.user.avoidFood.includes("surfturf") ? "checked" : ""}/><label htmlFor="surfturf">Surf n Turf</label>
				<input name='food' id="tapas" type='checkbox' value="tapas" checked={props.user.avoidFood.includes("tapas") ? "checked" : ""}/><label htmlFor="tapas">Tapas</label>
				<input name='food' id="thai" type='checkbox' value="thai" checked={props.user.avoidFood.includes("thai") ? "checked" : ""}/><label htmlFor="thai">Thai</label>

				<br /><label htmlFor="Movie">Movie: </label>
				<input name='movie' id="action" type='checkbox' value="action" checked={props.user.avoidMovie.includes("action") ? "checked" : ""}/><label htmlFor="action">Action</label>
				<input name='movie' id="adventure" type='checkbox' value="adventure" checked={props.user.avoidMovie.includes("adventure") ? "checked" : ""}/><label htmlFor="adventure">Adventure</label>
				<input name='movie' id="animation" type='checkbox' value="animation" checked={props.user.avoidMovie.includes("animation") ? "checked" : ""}/><label htmlFor="animation">Animation</label>
				<input name='movie' id="comedy" type='checkbox' value="comedy" checked={props.user.avoidMovie.includes("comedy") ? "checked" : ""}/><label htmlFor="comedy">Comedy</label>
				<input name='movie' id="crime" type='checkbox' value="crime" checked={props.user.avoidMovie.includes("crime") ? "checked" : ""}/><label htmlFor="crime">Crime</label>
				<input name='movie' id="documentary" type='checkbox' value="documentary" checked={props.user.avoidMovie.includes("documentary") ? "checked" : ""}/><label htmlFor="documentary">Documentary</label>
				<input name='movie' id="drama" type='checkbox' value="drama" checked={props.user.avoidMovie.includes("drama") ? "checked" : ""}/><label htmlFor="drama">Drama</label>
				<input name='movie' id="family" type='checkbox' value="family" checked={props.user.avoidMovie.includes("family") ? "checked" : ""}/><label htmlFor="family">Family</label>
				<input name='movie' id="fantasy" type='checkbox' value="fantasy" checked={props.user.avoidMovie.includes("fantasy") ? "checked" : ""}/><label htmlFor="fantasy">Fantasy</label>
				<input name='movie' id="history" type='checkbox' value="history" checked={props.user.avoidMovie.includes("history") ? "checked" : ""}/><label htmlFor="history">History</label>
				<input name='movie' id="horror" type='checkbox' value="horror" checked={props.user.avoidMovie.includes("horror") ? "checked" : ""}/><label htmlFor="horror">Horror</label>
				<input name='movie' id="musical" type='checkbox' value="musical" checked={props.user.avoidMovie.includes("musical") ? "checked" : ""}/><label htmlFor="musical">Musical</label>
				<input name='movie' id="mystery" type='checkbox' value="mystery" checked={props.user.avoidMovie.includes("mystery") ? "checked" : ""}/><label htmlFor="mystery">Mystery</label>
				<input name='movie' id="romance" type='checkbox' value="romance" checked={props.user.avoidMovie.includes("romance") ? "checked" : ""}/><label htmlFor="romance">Romance</label>
				<input name='movie' id="scifi" type='checkbox' value="scifi" checked={props.user.avoidMovie.includes("scifi") ? "checked" : ""}/><label htmlFor="scifi">Sci-Fi</label>
				<input name='movie' id="thriller" type='checkbox' value="thriller" checked={props.user.avoidMovie.includes("thriller") ? "checked" : ""}/><label htmlFor="thriller">Thriller</label>
				<input name='movie' id="war" type='checkbox' value="war" checked={props.user.avoidMovie.includes("war") ? "checked" : ""}/><label htmlFor="war">War</label>
				<input name='movie' id="western" type='checkbox' value="western" checked={props.user.avoidMovie.includes("western") ? "checked" : ""}/><label htmlFor="western">Western</label>
				<br /><button id={props.user._id} onClick={this.handleSubmit}>Update</button>
			</div>
		)
	} else {
		return (
			<div className="Home">
				<p>Current User:</p>
				<code>
					{JSON.stringify(props)}
				</code>
			</div>
		)
	}
}

export default Home
