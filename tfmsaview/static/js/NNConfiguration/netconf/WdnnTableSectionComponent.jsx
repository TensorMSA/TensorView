import React from 'react'

export default class WdnnTableSectionComponent extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            datasets : null
        };
    }

    componentWillMount(){
        
        if(typeof this.props.nnConfigFeatureInfoField === 'string')
        {
            this.setState({datasets: JSON.parse(this.props.nnConfigFeatureInfoField)});
        }
        else {
            this.setState({datasets: this.props.nnConfigFeatureInfoField});
        }

        debugger;
    }

    render() {
        return (
            <section id='netconf-table'>                    
                <div className='l--body'>
                    <dl className="layer-box">
                        <dt><span className="circle-blue">Network Config Layer</span></dt>
                        <dd>
                            <table id='input_table' className='form-table align-center'>
                                <thead>
                                    <tr>
                                        <th>NAME</th>
                                        <th>TYPE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        Object.keys(this.state.datasets).map((key, index) => 
                                            <tr>
                                                <td>{key}</td>
                                                <td>{this.state.datasets[key].column_type}</td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </dd>
                    </dl>
                    <dl>
                    </dl>
                    <dl className="layer-box">
                        <dt><span className="circle-blue">Label Layer</span></dt>
                        <dd>
                            <table id='output_table' className='form-table align-center'>
                                <thead>
                                    <tr>
                                        <th>Label</th>
                                    </tr>
                                </thead>                                
                                <tbody>
                                </tbody>
                            </table>
                        </dd>
                    </dl>    
                </div>                
            </section>
        )
    }
}
