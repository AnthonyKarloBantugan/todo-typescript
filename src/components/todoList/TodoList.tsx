import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { Todo } from "../../interfaces/interface";
import TodoItem from "../todoItem/TodoItem";
import "../todoList/todoList.css";

interface Props {
	todos: Todo[];
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
	completedTodos: Todo[];
	setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({
	todos,
	setTodos,
	completedTodos,
	setCompletedTodos,
}: Props) => {
	return (
		<div className="container">
			<Droppable droppableId="TodosList">
				{(provided, snapshot) => (
					<div
						className={`todos ${
							snapshot.isDraggingOver ? "dragActive" : ""
						}`}
						ref={provided.innerRef}
						{...provided.droppableProps}
					>
						<span className="todos__heading">Active Tasks</span>
						{todos.map((todo, index) => (
							<TodoItem
								index={index}
								todo={todo}
								key={todo.id}
								todos={todos}
								setTodos={setTodos}
							/>
						))}
						{provided.placeholder}
					</div>
				)}
			</Droppable>

			<Droppable droppableId="TodosCompleted">
				{(provided, snapshot) => (
					<div
						className={`todos complete ${
							snapshot.isDraggingOver ? "dragComplete" : ""
						}`}
						ref={provided.innerRef}
						{...provided.droppableProps}
					>
						<span className="todos__heading">Completed Tasks</span>
						{completedTodos.map((todo, index) => (
							<TodoItem
								index={index}
								todo={todo}
								key={todo.id}
								todos={completedTodos}
								setTodos={setCompletedTodos}
							/>
						))}
						{provided.placeholder}
					</div>
				)}
			</Droppable>
		</div>
	);
};

export default TodoList;
