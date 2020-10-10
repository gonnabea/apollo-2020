import React from "react"
import { gql } from "apollo-boost"
import { useQuery } from "@apollo/react-hooks"
import styled from "styled-components"
import Movie from "../components/Movie"
import { Loader } from "../components/Loader"



const Body = styled.div`
  width: 100vw;
  height: 100vh;
`

const Header = styled.header`
  height: 40%;
  background-color: #e7586a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const HeaderTitle = styled.h1`
  color: white;
  font-size: 30px;
  margin-bottom: 10px;
  font-weight: 700;
`
const HeaderDescription = styled.h3`
  color: rgba(255, 255, 255, 0.8);
  font-size: 16px;
`

const Main = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 60%;
`

const GET_MOVIES = gql`
  {
    movies(rating: 7, limit: 5) {
      id
      title
      medium_cover_image
      language
      rating
      description_full
    }
  }
`

export default () => {
  const { loading, error, data } = useQuery(GET_MOVIES)
  console.log(loading, error, data)
  return loading ? (
    <Loader text={"로딩중..."} /> 
  ) : (
    <Body>
      <Header>
        <HeaderTitle>Apollo 2020</HeaderTitle>
        <HeaderDescription>어썸한 그래쁘뀨엘!</HeaderDescription>
      </Header>
      <Main>
        {data.movies.map((movie) => (
          <Movie id={movie.id} title={movie.title} />
        ))}
      </Main>
    </Body>
  )
}
