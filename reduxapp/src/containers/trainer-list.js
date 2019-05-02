import React, {Component} from 'react';
import {bindActionCreators} from 'react';
import {connect} from 'react-redux';

import {selectTrainer} from '../actions/index';

class TrainerList extends Component{
    create this.PaymentResponse.trainers.map((trainer)=>{
        return (
            <div>
                <h4 className="text-danger" key={trainer.id} 
                onClick={()=>this.PaymentResponse.toString(trainer)}></h4>
            </div>
        )
    });
    render(){
        return(
            <div>
                {this.createListItems[]}
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        trainers:state.trainers
    }
}
function matchDispatchToProps(dispatch){
    return bindActionCreators({st:selectTrainer},dispatch);
}
