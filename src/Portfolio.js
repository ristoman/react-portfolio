/** @jsx React.DOM */

var React = require('react'),
PortfolioMenu = require('./PortfolioMenu'),
PortfolioPage = require('./PortfolioPage');


	var Portfolio = React.createClass({

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
			    	<a href="#" className={style} onClick={self.clicked.bind(this, index)}>
			    		<PortfolioMenu project={project} />
			    	</a>
			    );
			});

			return(
				<div className="container">
					<div className="row">
						<div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
							<div id="side">	
								<div className="portfolio">
        							{projectNodes}
      							</div>
							</div>
						</div>
						<div className="col-xs-12 col-sm-8 col-md-8 col-lg-8">
							<div id="main"> 
								<PortfolioPage project={this.props.data[this.state.focused]}/>
							</div>
						</div>
					</div>
				</div>
			)
		}	
	});

module.exports = Portfolio;