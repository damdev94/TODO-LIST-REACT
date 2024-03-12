import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faCircle, faSun } from '@fortawesome/free-solid-svg-icons';


function Header({inputValue, handleInputChange, handleKeyDown, theme, toggleTheme} = props) {


  return (
    <div className='header'>

      <div className='header-elements'>
        <h1 className='title-todo'>TODO</h1>
        <div className='icon-ligth fs-2'
          onClick={() => toggleTheme(theme)}>
            {theme === 'light' ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />} 
        </div>
      </div>
      <div className='input-create'>
        <input 
          type='text' 
          placeholder='Create a new todo...' 
          className='input-create-todo' 
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          >
          </input>
        <FontAwesomeIcon icon={faCircle} className='placeholder-icon' />
        </div>
    </div>
  )
}

export default Header