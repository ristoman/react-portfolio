/** @jsx React.DOM */

var React = require('react'),
Portfolio = require('./Portfolio');


	var reactComponent = React.render(
		<Portfolio data={data} />, 
		document.getElementById('stage'),
		null
	);