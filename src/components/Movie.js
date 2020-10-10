import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const Poster = styled.img`
width: 300px;
height: 400px;
margin-bottom: 10px;
`

const Title = styled.h1`
  font-size: 35px;
  margin-bottom: 10px;
`

const handleLike =() => {
  
}

export default ({ id,title,imgSrc,isLiked }) => (
  <div>
    <Link to={`/${id}`}>
      <Poster src={imgSrc} />
      <Title>
      {title}
        </Title></Link>
        <button onClick={handleLike}>{isLiked ? "unLike" : "Like"}</button>
      {isLiked.toString()}
  </div>
)
