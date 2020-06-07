import gql from 'graphql-tag'

export const typeDefs = gql`
  type User {
    id: ID!
    email: String!
  }

  type Note {
    id: ID!
    content: String!
  }

  input SignUpInput {
    email: String!
    interests: String!
    password: String!
  }

  input SignInInput {
    email: String!
    password: String!
  }

  input CreateNoteInput {
    content: String!
    tags: String!
  }

  type SignUpPayload {
    user: User!
  }

  type SignInPayload {
    user: User!
  }

  type CreateNotePayload {
    note: Note!
  }

  type Query {
    user(id: ID!): User!
    users: [User]!
    viewer: User
    notes: [Note]
    note(id: String!): Note!
  }

  type Mutation {
    signUp(input: SignUpInput!): SignUpPayload!
    signIn(input: SignInInput!): SignInPayload!
    signOut: Boolean!
    createNote(input: CreateNoteInput!): CreateNotePayload!
  }
`
