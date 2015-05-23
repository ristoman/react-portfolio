var React = require('react');
Portfolio = require('portfolio')
projects = require('projects')
/** @jsx React.DOM */

	var reactComponent = React.render(
		React.createElement(Portfolio, {data: projects}), 
		document.getElementById('stage'),
		null
	);