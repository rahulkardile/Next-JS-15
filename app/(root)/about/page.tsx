import { error } from 'console';
import React from 'react'

const page = () => {
  throw new error({ message: "NOT IMPLEMENTED"});
  return (
    <div>page</div>
  )
}

export default page;