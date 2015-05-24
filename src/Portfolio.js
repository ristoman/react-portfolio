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
				<div className="row">
					<div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
						<div id="side">	
							<div className="portfolioMenu">
    							{projectNodes}
  							</div>
						</div>
					</div>
					<div className="col-xs-12 col-sm-7 col-md-7 col-lg-7">
						<div id="main"> 
							<PortfolioPage project={this.props.data[this.state.focused]}/>
						</div>
					</div>
					<div className="col-xs-12 col-sm-2 col-md-2 col-lg-2">
						<ul>
							<li>item #1</li>
							<li>item #2</li>
							<li>item #3</li>
							<li>item #4</li>
							<li>item #5</li>
							<li>item #6</li>
						</ul>
					</div>
				</div>
			)
		}	
	});

module.exports = Portfolio;