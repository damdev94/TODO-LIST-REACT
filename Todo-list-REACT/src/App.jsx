import { useState, useEffect } from 'react'
import Header from './components/header/header'
import List from './components/List/List'

function App() {

  const [theme, setTheme] = useState('light');

  const [todos, setTodos] = useState([
    { id: 1, text: 'Jog around the park 3x', completed: false},
    { id: 2, text: '10 minutes of meditation', completed: false},
    { id: 3, text: 'Read for 1 hour', completed: false},
    { id: 4, text: 'Pick up groceries', completed: false},
    { id: 5, text: 'Complete Todo App on Frontend Mentor', completed: false}
])

  const [inputValue, setInputValue] = useState('')

  const [lastId, setLastId] = useState(todos.length)

  const [filter, setFilter] = useState('all')

  useEffect(() => {
    console.log(theme);
    if (theme === 'light') {
      cssMode.href = './src/light-mode.css'
    }
    if (theme === 'dark'){
      cssMode.href = './src/night-mode.css'
    }
  }, [theme])

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleKeyDown = (e) => {
    if(e.key === 'Enter') {
      setLastId(lastId + 1)
        const newTodo = { id: lastId + 1, text: inputValue, completed: false }
        setTodos([...todos, newTodo])
    }
    setInputValue('')
  }

  const handleCheckedOrNot = (e) => {
    const newTodos = todos.map(todo => {
      if(todo.id === e) {
        return {...todo, completed: !todo.completed}
      } else {
        return todo
      }
    })
    setTodos(newTodos)
  }

  const handleDelete = (id) => {
    const newTodos = todos.filter(todo => {
      return id !== todo.id
    })
    setTodos(newTodos)
  }

  const handleClearCompleted = () => {
    console.log('vasy');
    const newTodo = todos.filter(todo => {
      return !todo.completed
    })
    setTodos(newTodo)
  }

  const toggleTheme = (theme) => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const cssMode = document.querySelector('#css')
  const displayAll = () => setFilter('all');
  const displayActive = () => setFilter('active');
  const displayCompleted = () => setFilter('completed');


  return (
    <>
      <Header 
        inputValue={inputValue} 
        handleInputChange={handleInputChange} 
        handleKeyDown={handleKeyDown}
        theme = {theme}
        toggleTheme = {toggleTheme}>
      </Header>

      <List 
        todos= {todos} 
        filter= {filter}
        handleCheckedOrNot={handleCheckedOrNot}
        handleDelete= {handleDelete}
        handleClearCompleted = {handleClearCompleted}
        displayActive = {displayActive}
        displayAll = {displayAll}
        displayCompleted = {displayCompleted}
      />
    </>
  )
}

export default App
