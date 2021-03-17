import React, { Component } from "react";

export const Footer = () => (
	<footer className="footer mt-auto py-4 text-center bg-dark">
		<p className="text-white">FOLLOW STAR WARS:</p>
		<div>
			<a
				href="https://www.facebook.com/StarWars"
				target="_blank"
				rel="noopener noreferrer"
				className="text-white"
				c>
				<i className="fab fa-facebook-square fa-lg mx-2" />
			</a>
			<a
				href="https://www.instagram.com/starwars/"
				target="_blank"
				rel="noopener noreferrer"
				className="text-white">
				<i className="fab fa-instagram-square fa-lg mx-2" />
			</a>
			<a href="https://starwars.tumblr.com/" target="_blank" rel="noopener noreferrer" className="text-white">
				<i className="fab fa-tumblr-square fa-lg mx-2" />
			</a>
			<a href="https://twitter.com/starwars" target="_blank" rel="noopener noreferrer" className="text-white">
				<i className="fab fa-twitter-square fa-lg mx-2" />
			</a>
			<a
				href="https://www.youtube.com/user/starwars"
				target="_blank"
				rel="noopener noreferrer"
				className="text-white">
				<i className="fab fa-youtube-square fa-lg mx-2" />
			</a>
			<i className="text-white">|</i>
			<a href="https://lol.disney.com/star-wars" target="_blank" rel="noopener noreferrer" className="text-white">
				<i className="fas fa-child fa-lg mx-2" />
			</a>
		</div>
	</footer>
);
