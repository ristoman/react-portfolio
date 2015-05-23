/** @jsx React.DOM */

var React = require('react');
	

	var PortfolioPage = React.createClass({displayName: "PortfolioPage",

		getDefaultProps: function() {
			return {
				project:{name: 'Hello World!', tags: 'introduction', desc: 'This is the default project listing'}
			};
		},

		render: function(){
			return(
				React.createElement("div", {className: "projectPage"}, 
					React.createElement("img", {src: "http://placehold.it/600x300"}), 
					React.createElement("h1", null, this.props.project.name), 
					React.createElement("h6", null, this.props.project.tags), 
					React.createElement("img", {src: "http://placehold.it/300x150"}), 
					React.createElement("img", {src: "http://placehold.it/300x150"}), 
					React.createElement("p", null, this.props.project.desc)
				)
			)
		}
	});

module.exports = PortfolioPage;