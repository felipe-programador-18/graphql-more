import fetch from "node-fetch"

const Api_Url = "http://localhost:3000"

// solve types of posts in graphql!!
// this is exercise about graphql!!
export const context = () => {
    return {
      getUsers: (path = '/') => fetch (Api_Url + "/users" + path),
      getPosts: (path = '/') => fetch(Api_Url +"/posts" +path)
    }
  }