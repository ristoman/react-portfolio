
/** @jsx React.DOM */
var React = require('react');
	var PortfolioPage = React.createClass({

		getDefaultProps: function() {
			return {
				project:{name: 'Hello World!', tags: 'introduction', desc: 'This is the default project listing'}
			};
		},

		render: function(){
			return(
				<div className="projectPage">
					<img src="http://placehold.it/600x300" />
					<h1>{this.props.project.name}</h1>
					<h6>{this.props.project.tags}</h6>
					<img src="http://placehold.it/300x150" />
					<img src="http://placehold.it/300x150" />
					<p>{this.props.project.desc}</p>
				</div>
			)
		}
	});

module.exports = PortfolioPage;