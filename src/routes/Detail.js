import React from "react"
import styled from "styled-components"
import { useParams } from "react-router-dom"
import { gql } from "apollo-boost"
import { useQuery } from "@apollo/react-hooks"
import { Loader } from "../components/Loader"


const Body = styled.section`
  width: 100vw;
  height: 100vh;
  background-color:#e7586a;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  color: white;
  
`

const MainArea = styled.main`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  padding: 40px;
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

const Language = styled.h3`
  margin-bottom: 10px;

`

const Description = styled.p`

font-size: 20px;

`

const GET_MOVIE = gql`
  query movie($id: Int!) {
    #   아폴로 전용 문법: 타입체크
    movie(id: $id) {
      id
      title
      medium_cover_image
      language
      rating
      description_full
      isLiked @client
    }
  }
`

export default () => {
  const { id } = useParams()
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id: parseInt(id) },
  })
  console.log(data) 

  if (loading) {
    return <Loader text={"로딩중..."}/>
  }
  if (data && data.movie) {
    return <Body>
      <MainArea>
      <Poster src={data.movie[0].medium_cover_image} />
  <Title>{data.movie[0].title}</Title>
  <Language>{data.movie[0].isLiked ? "Liked" : "UnLiked"} {data.movie[0].language.toUpperCase()} - {"⭐ " + data.movie[0].rating}</Language>
  <Description>{data.movie[0].description_full}</Description>
      </MainArea>
    </Body>
  } else {
    return <Title>영화가 없음</Title>
   }
}
