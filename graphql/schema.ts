import { gql } from "apollo-server-micro";

export const typeDefs = gql`
	type Link {
		id: String
		title: String
		description: String
		url: String
		category: String
		imageUrl: String
		users: [String]
	}

	type Product {
		id: ID!
		name: String!
		description: String!
		quantity: Int!
		price: Float!
		image: String!
		onSale: Boolean!
		categoryId: String
		category: Category
		reviews: [Review!]!
	}

	type Category {
		id: ID!
		name: String!
		products(filter: ProductsFilterInput): [Product!]!
	}

	type Query {
		links: [Link]!
		ages: [Int]
		isCool: Boolean!
		products(filter: ProductsFilterInput): [Product]!
		product(id: ID!): Product
		categories: [Category!]!
		category(id: ID!): Category
	}

	type Mutation {
		addCategory(input: AddCategoryInput!): [Category]
		addProduct(input: AddProductInput!): [Product]
		addReview(input: AddReviewInput!): [Review]
		deleteCategory(id: ID!): Boolean
    deleteProduct(id:ID!):Boolean
    deleteReview(id:ID!):Boolean
    updateCategory(id:ID!, input: UpdateCategoryInput!): Category
    updateProduct(id:ID!, input: UpdateProductInput!): Product
    updateReview(id:ID!, input: UpdateReviewInput!): Review

	}

	type Review {
		id: ID!
		productId: String!
		date: String!
		title: String!
		comment: String!
		rating: Int!
	}
 

	input ProductsFilterInput {
		onSale: Boolean
		averageRating: Int
	}

	input AddCategoryInput {
		name: String
	}
  input UpdateCategoryInput {
		name: String
	}

	input AddProductInput {
		name: String!
		description: String!
		quantity: Int!
		price: Float!
		image: String!
		onSale: Boolean!
		categoryId: String
	}
  input UpdateProductInput {
		name: String!
		description: String!
		quantity: Int!
		price: Float!
		image: String!
		onSale: Boolean!
		categoryId: String
	}

	input AddReviewInput {
		productId: String!
		date: String!
		title: String!
		comment: String!
		rating: Int!
	}
  input UpdateReviewInput {
		productId: String!
		date: String!
		title: String!
		comment: String!
		rating: Int!
	}
  


`;
