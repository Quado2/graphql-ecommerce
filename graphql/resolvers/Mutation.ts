import { v4 as uuid } from "uuid";
import { Category, Product, Review, DB, CategoryInput } from "../util";
import { Category } from "./Category";

export const Mutation = {
	addCategory: (parent: any, { input }: { input: any }, { db }: { db: DB }) => {
		const { name } = input;
		const newCategory = {
			id: uuid(),
			name,
		};
		db.categories.push(newCategory);
		return db.categories;
	},

	addProduct: (parent: any, { input }: { input: any }, { db }: { db: DB }) => {
		const { name, categoryId, description, quantity, price, image, onSale } =
			input;
		const newProduct: Product = {
			id: uuid(),
			name,
			description,
			quantity,
			categoryId,
			price,
			image,
			onSale,
		};
		db.products.push(newProduct);
		return db.products;
	},

	addReview: (parent: any, { input }: { input: any }, { db }: { db: DB }) => {
		const { productId, date, title, comment, rating } = input;
		const newReview = {
			id: uuid(),
			productId,
			date,
			title,
			comment,
			rating,
		};

		db.reviews.push(newReview);
		return db.reviews;
	},

	deleteCategory: (
		parent: any,
		{ id }: { id: String },
		{ db }: { db: DB }
	): boolean => {
		db.categories = db.categories.filter(
			(category: Category) => category.id !== id
		);
		db.products = db.products.map((product: Product) => {
			if (product.categoryId === id) {
				return {
					...product,
					categoryId: null,
				};
			} else return product;
		});
		return !db.categories.some((category: Category) => category.id === id);
	},

	deleteProduct: (
		parent: any,
		{ id }: { id: String },
		{ db }: { db: DB }
	): boolean => {
		db.products = db.products.filter((product: Product) => product.id !== id);
		db.reviews = db.reviews.filter((review: Review) => review.productId !== id);
		return !db.products.some((product: Product) => product.id === id);
	},

	deleteReview: (
		parent: any,
		{ id }: { id: String },
		{ db }: { db: DB }
	): boolean => {
		db.reviews = db.reviews.filter((review: Review) => review.id !== id);
		return !db.reviews.some((review: Review) => review.id === id);
	},

  updateCategory:(parent:any, {id, input}:{id:String, input:CategoryInput}, {db}:{db:DB}) => {
    const index = db.categories.findIndex((category:Category)=> category.id === id);
    db.categories[index] = {
      ...db.categories[index],
      ...input,
    }
  }

};
