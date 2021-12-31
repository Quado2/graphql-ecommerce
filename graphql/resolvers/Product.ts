import { DB, Filter, Review, Category } from "../util";
export const Product = {
	category: (
		{ categoryId }: { categoryId: String },
		args: any,
		{ db }: { db: DB }
	) => {
		return db.categories.find((category: Category) => category.id === categoryId);
	},

	reviews: ({ id }: { id: String }, args: any, { db }: { db: DB }) => {
		return db.reviews.filter((review: Review) => review.productId === id);
	},
};
