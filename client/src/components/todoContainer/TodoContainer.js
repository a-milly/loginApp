import React, { Component } from "react";
import {connect} from 'react-redux'
import * as todoActions from '../../actions/todoActions'
class TodoContainer extends Component {
    
    componentDidMount(){
        this.props.getTodo()
    }
    render() {
        console.log(this.props)
        return (
            <div >
                <h3>todo list</h3>
                <div>

                </div>
                <button>add item</button>
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => ({
    getTodo : () => dispatch(todoActions.getTodo()) ,
    deleteTodo: (id) => dispatch(todoActions.deleteTodo(id)),
    updateTodo: (id) => dispatch(todoActions.updateTodo(id))
});

const mapStateToProps = state => ({
    todo: state.todo
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
