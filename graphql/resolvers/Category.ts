import { filterProducts, Product, Review, Filter } from "../util";

export const Category = {
	products: (
		{ id: categoryId }: { id: String },
		{ filter }: { filter: Filter },
		{ products, reviews }: { products: Product[]; reviews: Review[] }
	) => {
		let categoricalFilteredProducts = products.filter(
			(product: any) => product.categoryId === categoryId
		);
    return filterProducts(filter,categoricalFilteredProducts,reviews)
		
	},
};
