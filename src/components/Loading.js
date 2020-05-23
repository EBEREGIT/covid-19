import React, { Fragment } from "react";
import { Button, Spinner } from "react-bootstrap/";

export default function Loading(props) {
  return (
    <Fragment>
      <Button variant="danger" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="lg"
          role="status"
          aria-hidden="true"
        />
        Please Stay Safe. {props.name} Report Coming Up...
      </Button>
    </Fragment>
  );
}
