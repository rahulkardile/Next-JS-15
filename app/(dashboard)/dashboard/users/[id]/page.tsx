import React from 'react'

function page({params}: {params: { id: string }}) {
  return (
    <div>
        <h4>User Details Page</h4>
        <h2>Hello User {params.id}</h2>
    </div>
  )
}

export default page