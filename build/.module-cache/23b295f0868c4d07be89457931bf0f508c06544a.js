var React = require('react');
Portfolio = require('portfolio')
/** @jsx React.DOM */

	var reactComponent = React.render(
		React.createElement(Portfolio, {data: data}), 
		document.getElementById('stage'),
		null
	);