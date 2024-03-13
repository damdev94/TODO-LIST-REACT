import { useState, createContext } from 'react'
import Header from './components/header/header'
import List from './components/List/List'
import './App.css'

export const ThemeContext = createContext(null)

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

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleKeyDown = (e) => {
    if(e.key === 'Enter') {
      setLastId(lastId + 1)
        const newTodo = { id: lastId + 1, text: inputValue, completed: false }
        setTodos([...todos, newTodo])
        setInputValue('')
    }
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

    const newTodo = todos.filter(todo => {
      return !todo.completed
    })
    setTodos(newTodo)
  }

  const toggleTheme = (theme) => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const displayAll = () => setFilter('all');
  const displayActive = () => setFilter('active');
  const displayCompleted = () => setFilter('completed');


  return (

    <ThemeContext.Provider value={{theme, setTheme}}>
      <div className="App" id={theme}>
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
      </div>
    </ThemeContext.Provider>
  )
}

export default App
