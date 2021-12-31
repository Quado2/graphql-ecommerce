import { DB, filterProducts, Product, Filter, Category } from "../util";

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
		_parent: any,
		{ filter }: { filter: Filter },
		{ db }: { db: DB }
	) => {
		return filterProducts(filter, db.products, db.reviews);
	},

	product: (parent: any, { id }: { id: String }, { db }: { db: DB }) => {
		return db.products.find((product: Product) => product.id === id);
	},
	categories: (parent: any, args: any, { db }: { db: DB }) => db.categories,

	category: (parent: any, { id }: { id: String }, { db }: { db: DB }) => {
		return db.categories.find((category: Category) => category.id === id);
	},
};
