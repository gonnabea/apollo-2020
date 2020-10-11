import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { gql } from "apollo-boost"
import { useMutation } from "@apollo/react-hooks"

const LIKE_MOVIE = gql`
mutation likeMovie($id: Int!){
  likeMovie(id:$id) @client
}
# mutation unLikeMovie($id: Int!){
#   unLikeMovie(id:$id) @client
# }
`

const Poster = styled.img`
width: 300px;
height: 400px;
margin-bottom: 10px;
`

const Title = styled.h1`
  font-size: 35px;
  margin-bottom: 10px;
`


export default ({ id,title,imgSrc,isLiked }) => {
  const [likeMovie] = useMutation(LIKE_MOVIE, {variables: {id: parseInt(id)}})
  // const [unLikeMovie] = useMutation(LIKE_MOVIE, {variables: {id: parseInt(id)}})

  return (
  <div>
    <Link to={`/${id}`}>
      <Poster src={imgSrc} />
      <Title>
      {title}
        </Title></Link>
        <button onClick={isLiked? null: likeMovie}>{isLiked ? "unLike" : "Like"}</button>
  </div>
)
}