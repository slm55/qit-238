import React from 'react'

function Todo({todo, change}) {
  return (
    <div>{todo.title} <input type="checkbox" name="" id="" checked={todo.status} onChange={(e) => change(todo.id, !todo.status)}  /></div>
  )
}

export default Todo