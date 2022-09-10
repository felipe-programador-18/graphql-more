const { ApolloServer, gql } = require("apollo-server")
//import { context } from "./graph/context";

//const context = require("./graph/context")
//const { Resolvers, TypeDefs } = require("./graph/schema")


const products = [
    {
      id: "53a0724c-a416-4cac-ae45-bfaedce1f147",
      name: "Steel Pot",
      description: "Silver steel pot that is perfect for cooking",
      quantity: 230,
      price: 42.44,
      image: "img-1",
      onSale: false,
      categoryId: '34115aac-0ff5-4859-8f43-10e8db23602b'
    },
    {
      id: "c2af9adc-d0b8-4d44-871f-cef66f86f7f6",
      name: "Salad Bowl",
      description: "Round wooden bowl perfect for tossing and making salads",
      quantity: 33,
      price: 53.5,
      image: "img-2",
      onSale: false,
      categoryId: '34115aac-0ff5-4859-8f43-10e8db23602b'
    },
    {
      id: "2c931e7e-510f-49e5-aed6-d6b44087e5a1",
      name: "Spoon",
      description: "Small and delicate spoon",
      quantity: 4266,
      price: 1.33,
      image: "img-3",
      onSale: true,
      categoryId: '34115aac-0ff5-4859-8f43-10e8db23602b'
    },
    {
      id: "404daf2a-9b97-4b99-b9af-614d07f818d7",
      name: "Shovel",
      description: "Grey rounded shovel for digging",
      quantity: 753,
      price: 332,
      image: "img-4",
      onSale: false,
      categoryId: '34115aac-0ff5-4859-8f43-10e8db23602b'
    },
    {
      id: "6379c436-9fad-4b3f-a427-2d7241f5c1b1",
      name: "Fertilizer",
      description: "Nitrogen based fertitlizer",
      quantity: 53453,
      price: 23.11,
      image: "img-5",
      onSale: true,
      categoryId: '34115aac-0ff5-4859-8f43-10e8db23602b'
    },
    {
      id: "f01bcdec-6783-464e-8f9e-8416830f7569",
      name: "Basketball",
      description: "Outdoor or indoor basketball",
      quantity: 128,
      price: 59.99,
      image: "img-6",
      onSale: true,
      categoryId: '34115aac-0ff5-4859-8f43-10e8db23602b'
    },
    {
      id: "a4824a31-5c83-42af-8c1b-6e2461aae1ef",
      name: "Golf Clubs",
      description: "Good for golfing",
      quantity: 3,
      price: 427.44,
      image: "img-7",
      onSale: false,
      categoryId: '34115aac-0ff5-4859-8f43-10e8db23602b'
    },
    {
      id: "b553085a-a7e0-4c9b-8a12-f971919c3683",
      name: "Baseball Gloves",
      description: "Professional catcher gloves",
      quantity: 745,
      price: 77.0,
      image: "img-8",
      onSale: true,
      categoryId: '34115aac-0ff5-4859-8f43-10e8db23602b'
    },
    {
      id: "47bf3941-9c8b-42c0-9c72-7f3985492a5b",
      name: "Soccer Ball",
      description: "Round ball",
      quantity: 734,
      price: 93.44,
      image: "img-9",
      onSale: false,
      categoryId: '34115aac-0ff5-4859-8f43-10e8db23602b'
    },
  ];

  const categories = [
    {
      id: "c01b1ff4-f894-4ef2-b27a-22aacc2fca70",
      name: "Kitchen",
    },
    {
      id: "34115aac-0ff5-4859-8f43-10e8db23602b",
      name: "Garden",
    },
    {
      id: "d914aec0-25b2-4103-9ed8-225d39018d1d",
      name: "Sports",
    },
  ];
  

const user = [
  {
    "id": "602",
    "firstName": "Elisa",
    "lastName": "Pereira",
    "userName": "elisa.pereira",
    "indexRef": 17,
    "createdAt": "2017-02-15T11:29:40.799Z"
  },
  {
    "id": "903",
    "firstName": "Enzo",
    "lastName": "Barros",
    "userName": "enzo_barros",
    "indexRef": 18,
    "createdAt": "2018-03-28T00:53:08.981Z"
  },
  {
    "id": "470",
    "firstName": "Danilo",
    "lastName": "Carvalho",
    "userName": "danilo95",
    "indexRef": 9,
    "createdAt": "2020-04-23T12:32:02.614Z"
  },
  {
    "id": "115",
    "firstName": "Talita",
    "lastName": "Melo",
    "userName": "talita.melo",
    "indexRef": 3,
    "createdAt": "2017-04-23T19:24:43.992Z"
  },
  {
    "id": "812",
    "firstName": "Heloísa",
    "lastName": "Albuquerque",
    "userName": "heloisa.albuquerque",
    "indexRef": 19,
    "createdAt": "2015-04-23T05:19:20.309Z"
  },
  {
    "id": "111",
    "firstName": "Emanuel",
    "lastName": "Carvalho",
    "userName": "emanuel.carvalho",
    "indexRef": 13,
    "createdAt": "2018-01-11T19:22:49.010Z"
  },
  {
    "id": "453",
    "firstName": "Murilo",
    "lastName": "Nogueira",
    "userName": "murilo_nogueira",
    "indexRef": 5,
    "createdAt": "2020-07-29T03:50:46.143Z"
  },
  {
    "id": "90",
    "firstName": "Maria Eduarda",
    "lastName": "Costa",
    "userName": "mariaeduarda_costa12",
    "indexRef": 12,
    "createdAt": "2017-05-28T18:06:23.258Z"
  },
  {
    "id": "958",
    "firstName": "Marcelo",
    "lastName": "Carvalho",
    "userName": "marcelo_carvalho",
    "indexRef": 4,
    "createdAt": "2019-09-30T19:31:56.383Z"
  },
  {
    "id": "592",
    "firstName": "Salvador",
    "lastName": "Moraes",
    "userName": "salvador.moraes",
    "indexRef": 16,
    "createdAt": "2020-09-28T07:17:47.496Z"
  },
  {
    "id": "502",
    "firstName": "Morgana",
    "lastName": "Santos",
    "userName": "morgana_santos",
    "indexRef": 15,
    "createdAt": "2015-05-04T21:11:19.982Z"
  },
  {
    "id": "247",
    "firstName": "Alice",
    "lastName": "Barros",
    "userName": "alice_barros38",
    "indexRef": 20,
    "createdAt": "2020-06-09T15:15:18.817Z"
  },
  {
    "id": "935",
    "firstName": "João Pedro",
    "lastName": "Santos",
    "userName": "joaopedro_santos5",
    "indexRef": 7,
    "createdAt": "2017-07-28T00:30:32.214Z"
  },
  {
    "id": "374",
    "firstName": "Feliciano",
    "lastName": "Moreira",
    "userName": "feliciano.moreira",
    "indexRef": 11,
    "createdAt": "2016-05-08T12:05:05.853Z"
  },
  {
    "id": "30",
    "firstName": "Bernardo",
    "lastName": "Carvalho",
    "userName": "bernardo41",
    "indexRef": 10,
    "createdAt": "2018-04-04T02:39:50.892Z"
  },
  {
    "id": "439",
    "firstName": "Isaac",
    "lastName": "Martins",
    "userName": "isaac55",
    "indexRef": 6,
    "createdAt": "2020-05-04T08:59:15.292Z"
  },
  {
    "id": "352",
    "firstName": "Carla",
    "lastName": "Batista",
    "userName": "carla.batista",
    "indexRef": 14,
    "createdAt": "2020-01-18T09:23:51.365Z"
  },
  {
    "id": "5",
    "firstName": "Hugo",
    "lastName": "Reis",
    "userName": "hugo25",
    "indexRef": 2,
    "createdAt": "2015-10-18T00:56:33.763Z"
  },
  {
    "id": "29",
    "firstName": "Rafaela",
    "lastName": "Saraiva",
    "userName": "rafaela.saraiva91",
    "indexRef": 8,
    "createdAt": "2019-10-07T20:17:43.678Z"
  },
  {
    "id": "771",
    "firstName": "Márcia",
    "lastName": "Carvalho",
    "userName": "marcia_carvalho81",
    "indexRef": 1,
    "createdAt": "2016-12-08T00:49:39.870Z"
  }
]



const typeDefs = gql`
 type Query {
   products:[Product]!,
   product(id:ID): Product,
   categories: [Category!]!,
   category(id: ID!): Category,
   user: [User!]!,
   users(id:ID!): User
 }
  
  type Product{
   id: ID, 
   name: String,
   description: String,
   quantity: Int,
   price: Float,
   image: String,
   category : Category!
  }

  type Category{
    id: ID,
    name: String,
    products: [Product!]! 
  }
  
  type User{
    id: ID,
    firstName: String,
    lastName:String,
    userName:String,
    indexRef: Int,
    createdAt: String
  }
  



`

const resolvers = {
    Query: {
       products:(parent, args, context) => products ,
       product: (parent, args, context) => {
        const ProductId = args.id;
        const product = products.find( product => product.id === ProductId )
        if(!product) return null;
        return product
  
       },

       categories: (parent, args, context) =>  categories,
       category: (parent, args, context) => {
        const {id} = args ;
        return categories.find((category) => category.id === id)
         
       },
       
       user: (parent, args, context) =>  user,
       users: (parent, args,context) => {
        const { id} = args ;
        return user.find((users) => users.id === id )
       }
    },

    Category: {
    products: (parent, args, context) => {
      console.log(parent)
      const CategoryId = parent.id
      return products.filter((product) => product.categoryId === CategoryId)

    }
   },

   Product:{
    category:(parent, args, context ) => {
      const categoryId = parent.categoryId;
      return categories.find((category) => category.id === categoryId)
    }
   }


}
 
const server = new ApolloServer({
    typeDefs,
    resolvers,
})


server.listen().then(({url}) =>{
    console.log("its works here" + url)
})