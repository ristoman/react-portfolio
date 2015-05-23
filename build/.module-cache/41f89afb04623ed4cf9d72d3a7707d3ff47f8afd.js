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

	var reactComponent = React.render(
		React.createElement(Portfolio, {data: data}), 
		document.getElementById('stage'),
		null
	);