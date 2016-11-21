import React from 'react'

export default class NN_HeaderComponent extends React.Component {
    constructor(props) {
        super(props);
        this.checkPrerequirement = null;
        this.state = {
                selected:null,
                };
    }

    setFilter(filter){
        this.setState({selected  : filter})
        switch (filter) {
            case 1:
            	return this.props.getHeaderEvent(1); //call Net Info
            case 2:
            	if(this.context.NN_ID){
            		return this.props.getHeaderEvent(2);
            	}
            case 3:
            	if(this.context.NN_ID){
            		return this.props.getHeaderEvent(3);
            	}
            case 4:
            	if(this.context.NN_DATAVALID){
            		return this.props.getHeaderEvent(4);
            	}
            case 5:
            	if(this.context.NN_CONFIG){
	                return this.props.getHeaderEvent(5); 
            	}
            case 6:
            	if(this.context.NN_TRAIN){
	                return this.props.getHeaderEvent(6); 
	            }
	        
        }
    }

    isActive(value){
    	switch (value) {
            case 1:
        		this.checkPrerequirement = 1;
            	return ((value===this.state.selected) ? 'current':'');
            case 2:
            	if(this.context.NN_ID){
            		return ((value===this.state.selected) ? 'current':'');
            	}
            case 3:
            	if(this.context.NN_ID){
            		return ((value===this.state.selected) ? 'current':'');
            	}
            case 4:
            	if(this.context.NN_DATAVALID){
            		return ((value===this.state.selected) ? 'current':'');
            	}
            case 5:
            	if(this.context.NN_CONFIG){
	                return ((value===this.state.selected) ? 'current':'');
            	}
            case 6:
            	if(this.context.NN_TRAIN){
	                return ((value===this.state.selected) ? 'current':'');
	            }
	        
        }   	
    }

    render() {
        return (   
			<header className="mainHeader">
				<a href="#" onClick={() => this.props.getHeaderEvent(0)}>
					<h1 className="logo">
					<span className="hidden">HOYA</span>	
					<span className="logo-image"></span>
					<span className="system-logo"></span>
					</h1>
				</a>		
				<nav>
					<h1 className="hidden">Navigator</h1>
					<ul>
						<li className={this.isActive(1)}><a href="#" onClick={this.setFilter.bind(this, 1)}>Net Info</a></li>
						<li className={this.isActive(2)}><a href="#" onClick={this.setFilter.bind(this, 2)}>Pre Process</a></li>
						<li className={this.isActive(3)}><a href="#" onClick={this.setFilter.bind(this, 3)}>Data Process</a></li>
						<li className={this.isActive(4)}><a href="#" onClick={this.setFilter.bind(this, 4)}>Net conf</a></li>  
						<li className={this.isActive(5)}><a href="#" onClick={this.setFilter.bind(this, 5)}>Train Statistics</a></li>
						<li className={this.isActive(6)}><a href="#" onClick={this.setFilter.bind(this, 6)}>Predict Test</a></li>
					</ul>
				</nav>
				<dl className="utilMenu">
					<dt>Menu</dt>
					<dd className="utilMenu-help"><a href="#"><span>help</span></a></dd>
					<dd className="utilMenu-logout"><a href="#"><span>logout</span></a></dd>
					<dd className="utilMenu-user-info">
						<a href="#">
						<span className="user-name">Suk Jae-Ho</span>
						<span> welcome!</span>
						</a>
					</dd>
				</dl>
			</header>
        )
    }
}

NN_HeaderComponent.contextTypes = {
	NN_ID        : React.PropTypes.string,
	NN_TYPE      : React.PropTypes.string,
	NN_DATAVALID : React.PropTypes.string,
	NN_CONFIG    : React.PropTypes.string,
	NN_CONFVALID : React.PropTypes.string,
	NN_TRAIN     : React.PropTypes.string,
	NN_DATATYPE  : React.PropTypes.string
};
