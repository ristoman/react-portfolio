var React = require('react');
PortfolioMenu = require('portfolioMenu');
PortfolioPage = require('portfolioPage');

/** @jsx React.DOM */

	var Portfolio = React.createClass({displayName: "Portfolio",

		getInitialState: function(){
            return { focused: null };
        },

        clicked: function(index){

            // The click handler will update the state with
            // the index of the focused menu entry

            this.setState({focused: index});
        },

		render: function(){
			var self = this;
			var projectNodes = this.props.data.map(function (project, index) {
				var style = '';
                
                if(self.state.focused == index){
                    style = 'focused';
                }

			    return (
			    	React.createElement("a", {href: "#", className: style, onClick: self.clicked.bind(this, index)}, 
			    		React.createElement(PortfolioMenu, {project: project})
			    	)
			    );
			});

			return(
				React.createElement("div", {className: "container"}, 
					React.createElement("div", {className: "row"}, 
						React.createElement("div", {className: "col-xs-12 col-sm-4 col-md-4 col-lg-4"}, 
							React.createElement("div", {id: "side"}, 	
								React.createElement("div", {className: "portfolio"}, 
        							projectNodes
      							)
							)
						), 
						React.createElement("div", {className: "col-xs-12 col-sm-8 col-md-8 col-lg-8"}, 
							React.createElement("div", {id: "main"}, 
								React.createElement(PortfolioPage, {project: this.props.data[this.state.focused]})
							)
						)
					)
				)
			)
		}	
	});