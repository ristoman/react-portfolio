/** @jsx React.DOM */
	
	var PortfolioMenu = React.createClass({displayName: "PortfolioMenu",
	
		render: function() {
			return (
	        	React.createElement("article", {className: "project"}, 
					React.createElement("img", {className: "img-responsive", src: "http://placehold.it/150x150"}), 
					React.createElement("div", {className: "header"}, 
						React.createElement("h2", null, this.props.project.name), 
						React.createElement("h6", null, this.props.project.tags)
					), 
					React.createElement("div", {className: "desc"}, 
						React.createElement("p", null, this.props.project.desc)
					)
				)
			);
		}
	
	});