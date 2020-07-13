import React, { useState } from "react";
import Todo from "./Todo";
import "./App.css";
import Grid from "@material-ui/core/Grid";
// import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
// import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  submit: {
    margin: theme.spacing(2, 0, 0),
  },
}));

function App() {
  //we need a list of todo's
  //useState

  const classes = useStyles();

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  // console.log(input);
  // console.log(todos);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([input, ...todos]);
    setInput("");
  };

  const removingT = (index) => {
    console.log("running");
    console.log(index);
    let todo = todos[index];
    console.log(todo);
    setTodos(todos.filter((todoitem) => todoitem !== todo));
  };

  return (
    <div className="app">
      <CssBaseline />

      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            To-do App
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={9}>
              <TextField
                id="todoInput"
                label="Your Todo"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
                fullWidth
              />
              {/* <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
        /> */}
            </Grid>
            <Grid item xs={3}>
              <Button
                variant="contained"
                color="primary"
                disabled={!input}
                type="submit"
                onClick={handleSubmit}
                className={classes.submit}
              >
                Add Todo
              </Button>
            </Grid>
          </Grid>

          {todos.map((todo, index) => (
            <Todo
              title={todo}
              removeTodo={() => removingT(index)}
              key={index}
            />
          ))}
        </Paper>
      </main>
    </div>
  );
}

export default App;
