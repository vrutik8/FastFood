import React from 'react'
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const err = useRouteError();
    const{status,statusText} = err
    console.log(err);

  return (
    <div>
        <h1>{status} : {statusText}</h1>
      <h1>Opss ! Something went wrong</h1>
    </div>
  )
}

export default Error;
