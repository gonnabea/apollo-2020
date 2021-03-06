import ApolloClient from "apollo-boost"

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  resolvers:{
    Movie:{
      isLiked: () => false
    },
    Mutation: {
      toggleLikeMovie: (_, {id, isLiked}, {cache}) => {
        cache.writeData({id: `Movie:${id}`, data:{
          isLiked: !isLiked
          // medium_cover_image: "Dffsdasfds" <- 기존 백엔드에서 온 데이터도 이런식으로 변형 가능: 어쌈!!
        }})
      },
      
    }
  }
})

export default client
