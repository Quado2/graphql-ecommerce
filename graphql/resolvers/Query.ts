import { filterProducts, Product, Review, Filter, Category } from "../util";

// export const Query = {
//   links: () => links,
//   products: () => products,
//   ages: () => [65,2389,234],
//   isCool: () => false,

//   product: (parent: any, args: any, _context: any) => {
//     const productId = args.id;
//     return  products.find(product => product.id === productId);

//   },
//   categories: () => categories,

//   category: (parent: any, args: any, context: any) => {
//     const {id} = args;
//     return categories.find(category => category.id  === id);
//   }
// }

export const Query = {
	ages: () => [65, 2389, 234],
	isCool: () => false,

	products: (
		parent: any,
		{ filter }: { filter: Filter },
		{ products, reviews }: { products: Product[]; reviews: Review[] }
	) => {
		return filterProducts(filter, products, reviews);
	},

	product: (
		parent: any,
		{ id }: { id: String },
		{ products }: { products: Product[] }
	) => {
		return products.find((product: Product) => product.id === id);
	},
	categories: (
		parent: any,
		args: any,
		{ categories }: { categories: Category[] }
	) => categories,

	category: (
		parent: any,
		{ id }: { id: String },
		{ categories }: { categories: Category[] }
	) => {
		return categories.find((category: Category) => category.id === id);
	},
};
