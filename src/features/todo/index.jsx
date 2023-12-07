import React, { useState } from "react";
import PropTypes from "prop-types";
import TodoList from "./components/TodoList";
//
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

    const [todoList, setTodoList] = useState(inittodoList)
    const [filteredStatus, setFilteredStatus] = useState('all')
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
        setFilteredStatus('all');
    }
    const handleShowCompletedClick = () => {
        setFilteredStatus('completed');
    }
    const handleShowNewClick = () => {
        setFilteredStatus('new');
    }
    const renderredTodoList = todoList.filter(todo => filteredStatus === 'all' || filteredStatus === todo.status)
    return (
        <div>
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