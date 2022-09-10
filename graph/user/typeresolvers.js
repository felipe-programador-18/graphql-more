import { gql } from "apollo-server";

export const useTypeDefs = gql`

  extend type Query {
    user(id: ID, firstName:String): User!,
    users: [User!]!
  }   

  
  type User { 
    id:ID!
    firstName:String!,
    lastName:String!,
    userName:String!,
    indexRef:Int!,
    createdAt:String
  }


`