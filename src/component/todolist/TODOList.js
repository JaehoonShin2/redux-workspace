import { Component } from "react";

class TODOList extends Component {
    render() {
        const {todos, onClick} = this.props;
        return (
            <ul>
                {todos.map(todo =>
                    <Todo 
                        key={todo.id}
                        onClick={onClick}
                        {...todo}
                    />
                )}
            </ul>
        );
    }
}
