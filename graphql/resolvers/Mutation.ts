import { v4 as uuid } from "uuid";
import { Category, Product, Review } from "../util";

export const Mutation = {
	addCategory: (
		parent: any,
		{ input }: { input: any },
		{ categories }: { categories: Category[] }
	) => {
		const { name } = input;
		const newCategory = {
			id: uuid(),
			name,
		};
		categories.push(newCategory);
		return categories;
	},
  

	addProduct: (
		parent: any,
		{ input }: { input: any },
		{ products }: { products: Product[] }
	) => {
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
		products.push(newProduct);
		return products;
	},


	addReview: (
		parent: any,
		{ input }: { input: any },
		{ reviews }: { reviews: Review[] }
	) => {
		const { productId, date, title, comment, rating } = input;
		const newReview = {
			id: uuid(),
			productId,
			date,
			title,
			comment,
			rating,
		};

		reviews.push(newReview);
		return reviews;
	},
};
