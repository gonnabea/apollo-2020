import React from "react"
import styled from "styled-components"
import { useParams } from "react-router-dom"
import { gql } from "apollo-boost"
import { useQuery } from "@apollo/react-hooks"
import { Loader } from "../components/Loader"



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
    }
  }
`

export default () => {
  const { id } = useParams()
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id: parseInt(id) },
  })

  if (loading) {
    return <Loader text={"로딩중..."}/>
  }
  if (data && data.movie) {
    return data.movie[0].title
  }
}
