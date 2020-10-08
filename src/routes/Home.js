import React from "react"
import { gql } from "apollo-boost"
import { useQuery } from "@apollo/react-hooks"

const GET_MOVIES = gql`
  {
    movies(rating: 7, limit: 5) {
      id
      medium_cover_image
    }
  }
`

export default () => {
  const { loading, error, data } = useQuery(GET_MOVIES)
  console.log(loading, error, data)
  return loading ? <h2>로딩중...</h2> : data.movies.map((movie) => <h2>{movie.id}</h2>)
}
