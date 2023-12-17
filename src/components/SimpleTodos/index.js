const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here

import {Component} from 'react'

import TodoItem from './components/TodoItem'

import './index.css'

class SimpleTodos extends Component {
  state = {todoItems: initialTodosList}

  deleteTodoItem = id => {
    const {todoItems} = this.state
    const filteredTodoItem = todoItems.filter(eachItem => eachItem.id !== id)
    this.setState({todoItems: filteredTodoItem})
  }
  render() {
    const {todoItems} = this.state
    return (
      <div className="bg-container">
        <div className="sm-container">
          <h1 className="heading">Simple Todos</h1>
          <ul>
            {todoItems.map(eachItem => (
              <TodoItem
                todoDetails={eachItem}
                key={eachItem.id}
                deleteTodoItem={this.deleteTodoItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
