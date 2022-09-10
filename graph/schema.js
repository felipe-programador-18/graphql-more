import { gql } from "apollo-server";
import { useTypeDefs } from "./user/typeresolvers";
import { useResolvers } from "./user/userresolvers";



//create example if this page manage all type and resolvers
 const rootTypeDefs = gql`
  type Query {
        _empty : Boolean
       }
`;

 const rootResolvers = {
    Query: {
       _empty: () => true,
        
    }
 }


export const Resolvers = [useResolvers]
export const TypeDefs = [useTypeDefs]