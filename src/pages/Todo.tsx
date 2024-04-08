import { Button, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";

type todoType = {
  id: Number;
  text: string;
  completed: boolean;
};
interface MyComponentState {
  todo: string;
  todos: todoType[];
  updateTodo: boolean;
  updateTodoId: Number;
}

class Todo extends React.Component<{}, MyComponentState> {
  constructor(props: any) {
    super(props);
    this.state = {
      todo: "",
      todos: [],
      updateTodo: false,
      updateTodoId: -1,
    };
  }
  handleAddTodo = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { todos, todo } = this.state;
    const newTodo = {
      id: todos.length + 1,
      text: todo,
      completed: false,
    };
    this.setState({ todos: [...todos, newTodo], todo: "" });
  };
  handleRemoveTodo = (id: any) => {
    const { todos } = this.state;
    const filterTodo = todos.filter((todo) => todo.id !== id);
    this.setState({ todos: filterTodo });
  };
  handleUpdateTodo = () => {
    const { todos } = this.state;
    const updatedTodos = todos.map((item) =>
      item.id === this.state.updateTodoId
        ? { ...item, text: this.state.todo }
        : item
    );
    this.setState({ todos: updatedTodos, todo: "" });
  };

  render() {
    return (
      <Grid
        container
        direction="column"
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <Grid item>
          <h1>Todo App</h1>
        </Grid>

        <Grid
          item
          container
          direction="row"
          style={{ justifyContent: "center", alignItems: "center", gap: 20 }}
        >
          <Grid item>
            <TextField
              label="Add todo item"
              variant="outlined"
              size="medium"
              value={this.state.todo}
              // Change the color scheme
              fullWidth // Make the text field occupy full width
              //   className={classes.textField}
              onChange={(e) => this.setState({ todo: e.target.value })}
            />
          </Grid>
          <Grid item>
            {!this.state.updateTodo ? (
              <Button
                variant="contained"
                style={{ backgroundColor: "orange" }}
                onClick={this.handleAddTodo}
              >
                Add Todo
              </Button>
            ) : (
              <Button
                variant="contained"
                style={{ backgroundColor: "lightgreen" }}
                onClick={this.handleUpdateTodo}
              >
                update Todo
              </Button>
            )}
          </Grid>
        </Grid>

        <Grid
          container
          direction="column"
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "tomato",
            width: "60%",
            borderRadius: 10,
          }}
        >
          {this.state.todos.length > 0 &&
            this.state.todos.map((item) => (
              <Grid item container key={String(item.id)}>
                <Grid
                  item
                  container
                  direction="row"
                  style={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: 20,
                    borderBottom: "1px solid black",
                  }}
                >
                  <Grid item>
                    <Typography variant="h4">{item.text}</Typography>
                  </Grid>
                  <Grid item>
                    <Button
                      style={{ backgroundColor: "red" }}
                      onClick={() => this.handleRemoveTodo(item.id)}
                    >
                      Delete
                    </Button>
                    <Button
                      style={{ backgroundColor: "lightgreen" }}
                      onClick={() =>
                        this.setState({
                          updateTodo: true,
                          updateTodoId: item.id,
                          todo: item.text,
                        })
                      }
                    >
                      update
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            ))}
        </Grid>
      </Grid>
    );
  }
}

export default Todo;
