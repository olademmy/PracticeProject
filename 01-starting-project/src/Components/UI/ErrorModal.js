import React from "react";
import ReactDom from "react-dom";
import Button from "./Button.js";
import Card from "./Card.js";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onComplete} />;
  };
  const ErrorModal = (props) => {
    return (
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h1>{props.title}</h1>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onComplete}>Okay</Button>
        </footer>
      </Card>
    );
  };
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <Backdrop onComplete={props.onComplete} />,
        document.getElementById("overlay-root")
      )}
      {ReactDom.createPortal(
        <ErrorModal
          title={props.title}
          message={props.message}
          onComplete={props.onComplete}
        />,
        document.getElementById("modalerror-root")
      )}
    </React.Fragment>
  );
};
export default ErrorModal;
