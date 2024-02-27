// import React from "react";
import { Component } from "react";
import TodoList from "./TodoList";
class Todo extends Component{
    constructor(props){
        super(props);

        this.state={
            task:"",
            todo:[],
        }

    }

    handleUpdate=(e)=>{
        this.setState({
            task:e.target.value
        })
    }

    handleAdd=()=>{
        // this.state.todo.push(this.state.task);
        this.setState({
            todo:[...this.state.todo,this.state.task],
            task: "",
        })
        console.log(this.state)
    }

    handleEdit=(e,i)=>{
        let newTodo = this.state.todo.map((ele, index)=>{
            if(index==i){
                return e.target.value;
            }
            else{
                return ele
            }
        });

        e.target.value

        this.setState({
            todo:newTodo
        })
    }

    handleDelete=(i)=>{
        let newTodo = this.state.todo.filter((ele, index)=>{
            if(index!==i){
                return ele;
            }
        })
        this.setState({
            todo: newTodo
        })
    }


    render(){
        return(
            <>
            <input type="text" className="input main-inp" value={this.state.task} onChange={this.handleUpdate}/>
            <button className="btn main-btn" onClick={this.handleAdd} >Add Item</button>
            <p>{this.state.task}</p>
            <TodoList todo={this.state.todo} handleDelete={this.handleDelete} handleEdit = {this.handleEdit}/>
            </>

        )
    }
}

export default Todo;