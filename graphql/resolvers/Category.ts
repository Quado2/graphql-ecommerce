import { filterProducts, Product, Filter, DB } from "../util";

export const Category = {
	products: (
		{ id: categoryId }: { id: String },
		{ filter }: { filter: Filter },
		{ db }: { db: DB }
	) => {
		let categoricalFilteredProducts = db.products.filter(
			(product: Product) => product.categoryId === categoryId
		);
		return filterProducts(filter, categoricalFilteredProducts, db.reviews);
	},
};
