// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails} = props
  const {title} = todoDetails
  onDelete = () => {
    deleteTodoItem(id)
  }
  return (
    <li className="list-item">
      <p className="para">{title}</p>
      <button type="button" className="button" onClick={this.onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
