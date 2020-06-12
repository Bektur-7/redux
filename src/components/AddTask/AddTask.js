import React, { Component } from "react";
import { connect } from 'react-redux'
import {addTask, changeTitle} from '../../redux/actions/app-actions'

class AddTask extends Component {

    handleChangeTitle = (e) => {
      
        // const title = e.target.value;
        // this.setState({ title});
        this.props.changeTitle(e)

    }

  

    handleAdd = () => {
        // this.props.data
        this.props.addTask(this.state)
        this.setState({title:''})
        

    }

    render(){
        return (
            <div className = "add-task">
                <label>Name</label>
               <input value = {this.props.title} onChange = {this.handleChangeTitle} />
               <button onClick = {this.handleAdd}>add</button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    addTask: (task) => dispatch(addTask(task)),
    changeTitle: (task) =>dispatch(changeTitle(task))

})

export default connect(null, mapDispatchToProps)(AddTask);

