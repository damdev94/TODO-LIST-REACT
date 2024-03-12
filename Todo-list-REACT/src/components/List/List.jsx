import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faXmark } from '@fortawesome/free-solid-svg-icons';
import imgValid from '../../images/Group4.jpg'


function List({ 
    todos, 
    handleCheckedOrNot, 
    handleDelete, 
    handleClearCompleted, 
    displayActive, 
    displayAll, 
    displayCompleted,
    filter } = props) {

    const displayIcon = (todo) => {
        if(todo.completed) {
            return (
                <div className="icon" onClick={() => handleCheckedOrNot(todo.id)}>
                    <img src={imgValid} alt='img-valid' className='checked-icon'></img>
                </div>
            )
        }
        return(
            <div className="icon" onClick={() => handleCheckedOrNot(todo.id)}>
                <FontAwesomeIcon 
                    icon={faCircle} 
                    className='unchecked-icon'  
                />
            </div>
        )
    }

    const filterTodos = todos.filter((todo) => {
        if(filter === "active") return !todo.completed
        if(filter === "completed") return todo.completed
        return true
    })

  return (
    <div className='list-container'>
        <div className="list-display">
            <ul className='list'>
               { 
                filterTodos.map(todo => {
                    return (
                        <div className='todo-container' key={todo.id}>
                            <li id={todo.id} className='todo'>
                                {displayIcon(todo)}
                                <p className='m-0'>{todo.text}</p>
                                <FontAwesomeIcon 
                                    icon={faXmark} 
                                    className='delete'
                                    onClick={() => handleDelete(todo.id)}
                                />
                            </li>
                            <hr />
                        </div>
                        )
                    })
                }
                <div className='list-footer'>
                    <span>{todos.length} items left</span>
                    <span className='clear-completed' onClick={() => handleClearCompleted()}>Clear Completed</span>
                </div>
            </ul>
            
        </div>
        <div className='footer'>
            <div className='navbar'>
                <span className={filter === 'all' ? 'active': ''} onClick={() => displayAll()}>All</span>
                <span className={filter === 'active' ? 'active': ''} onClick={() => displayActive()}>Active</span>
                <span className={filter === 'completed' ? 'active': ''} onClick={() => displayCompleted()}>Completed</span>
            </div>
        </div>
    </div>
  )
}

export default List