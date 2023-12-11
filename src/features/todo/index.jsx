import React, { useState } from "react";
import PropTypes from "prop-types";

import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";


TodoFeatutes.propTypes = {

}


//
function TodoFeatutes(props) {
    const inittodoList = [
        {
            id: 1,
            title: "eat",
            status: "new"
        },
        {
            id: 2,
            title: "code",
            status: "completed"
        },
        {
            id: 3,
            title: "sleep",
            status: "new"
        },
    ]
    const location = useLocation();
    const navigate = useNavigate();
    const [todoList, setTodoList] = useState(inittodoList)
    const [filteredStatus, setFilteredStatus] = useState(() => {
        const params = queryString.parse(location.search);
        console.log(location);
        return params.status || 'all'
    })
    const handleTodoClick = (todo, idx) => {
        // clone current array to the new one
        const newTodoList = [...todoList];
        console.log(todo, idx)
        //
        const newTodo = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'completed' : 'new'
        }
        newTodoList[idx] = newTodo
        setTodoList(newTodoList)
    }
    const handleShowAllClick = () => {
        // setFilteredStatus('all');
        const queryparams = { status: "all" }
        navigate("/todo?" + queryString.stringify(queryparams))
    }
    const handleShowCompletedClick = () => {
        // setFilteredStatus('completed');
        const queryparams = { status: "completed" }
        navigate("/todo?" + queryString.stringify(queryparams))
    }
    const handleShowNewClick = () => {
        // setFilteredStatus('new');
        const queryparams = { status: "new" }
        navigate("/todo?" + queryString.stringify(queryparams))
    }
    const renderredTodoList = todoList.filter(todo => filteredStatus === 'all' || filteredStatus === todo.status)

    const handleTodoFormSubmit = (values) => {
        console.log(values)
        const newTodo = {
            id: todoList.length + 1,
            title: values.title,
            status: "new"
        };
        const newTodoList = [...todoList,newTodo];
        setTodoList(newTodoList);
    }

    return (
        <div>
            <h3>What to do</h3>
            <TodoForm onSubmit={handleTodoFormSubmit}></TodoForm>
            <h3>Todolist</h3>
            <TodoList todoList={renderredTodoList} onTodoClick={handleTodoClick} />
            <div>
                <button onClick={handleShowAllClick}>Show All</button>
                <button onClick={handleShowCompletedClick}>Show Completed</button>
                <button onClick={handleShowNewClick}>Show New</button>
            </div>
        </div>
    );
}
export default TodoFeatutes;