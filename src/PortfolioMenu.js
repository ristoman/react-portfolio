/** @jsx React.DOM */
var React = require('react');
	var PortfolioMenu = React.createClass({
	
		render: function() {
			return (
	        	<article className="project">
					<img className="img-responsive" src='http://placehold.it/300x150' />
					<div className="menuOverlay">
						<div className="header">
							<h2>{this.props.project.name}</h2>
							<h6>{this.props.project.tags}</h6>
						</div>
						<div className="desc">
							<p>{this.props.project.desc}</p>
						</div>
					</div>
				</article>
			);
		}
	
	});

module.exports = PortfolioMenu;