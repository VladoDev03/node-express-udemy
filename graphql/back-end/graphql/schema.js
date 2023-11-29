const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    mutation {
      createUser(userInput:{email: "test@test.test", name: "Test", password: "tester123"}) {
        _id
        email
      }
    }
    
    type Post {
        _id: ID!
        title: String!
        content: String!
        imageUrl: String!
        creator: User!
        createdAt: String!
        updatedAt: String!
    }
    
    type User {
        _id: ID!
        name: String!
        email: String!
        password: String
        status: String
        posts: [Post!]!
    }
    
    type AuthData {
        token: String!
        userId: String!
    }
    
    input UserInputData {
        name: String
        email: String
        password: String
    }
    
    type RootQuery {
        login(email: String!, password: String!): AuthData!
    }
    
    type RootMutation {
        # createUser(name: String, email: String, password: String)
        createUser(userInput: UserInputData): User!
    }
    
    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);
