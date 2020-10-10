import React from "react"
import { Link } from "react-router-dom"

export default ({ id,title }) => (
  <div>
    <Link to={`/${id}`}>{title}</Link>
  </div>
)
