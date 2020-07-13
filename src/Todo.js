import React from "react";
import "./Todo.css";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  card: {
    margin: "10px 0px",
  },
});

const Todo = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="body2" component="p">
          {props.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={props.removeTodo}>
          Click To Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Todo;
