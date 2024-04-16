
import React from 'react'
import Card from "@/components/Card";

const Blog = () => {
  return (
    <div className="wrapper">
      <div className="container flex justify-evenly gap-5 flex-wrap mx-auto p-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Blog