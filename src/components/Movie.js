import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { gql } from "apollo-boost"
import { useMutation } from "@apollo/react-hooks"



const Poster = styled.img`
width: 300px;
height: 400px;
margin-bottom: 10px;
`

const Title = styled.h1`
  font-size: 35px;
  margin-bottom: 10px;
`

export const LIKE_MOVIE = gql`
mutation likeMovie($id: Int!, $isLiked: Boolean!){
  toggleLikeMovie(id:$id, isLiked: $isLiked) @client
}
# mutation unLikeMovie($id: Int!){
#   unLikeMovie(id:$id) @client
# }
`


export default ({ id,title,imgSrc,isLiked }) => {
  const [toggleMovie] = useMutation(LIKE_MOVIE, {variables: {id: parseInt(id), isLiked}})
  // const [unLikeMovie] = useMutation(LIKE_MOVIE, {variables: {id: parseInt(id)}})

  return (
  <div>
    <Link to={`/${id}`}>
      <Poster src={imgSrc} />
      <Title>
      {title}
        </Title></Link>
        <button onClick={toggleMovie}>{isLiked ? "UnLike" : "Like"}</button>
  </div>
)
}