export interface Filter {
	onSale: boolean;
	averageRating: number;
}

export interface Product {
	id: String;
	name: String;
	description: String;
	quantity: number;
	price: number;
	image: String;
	onSale: Boolean;
	categoryId: String | null;
}

export interface Review {
	id: String;
	date: String;
	title: String;
	comment: String;
	rating: number;
	productId: String;
}

export interface CategoryInput {
	name: String;
}
export interface ProductInput {
	name: String;
	description: String;
	quantity: number;
	price: number;
	image: String;
	onSale: Boolean;
	categoryId: String;
}
export interface ReviewInput {
	productId: String;
	date: String;
	title: String;
	comment: String;
	rating: number;
}

export interface Category {
	id: String;
	name: String;
}
export interface DB {
	categories: Category[];
	products: Product[];
	reviews: Review[];
}

export function filterProducts(
	filter: Filter,
	products: Product[],
	reviews: Review[]
) {
	let filteredProducts = products;
	if (filter) {
		const { onSale, averageRating } = filter;
		if (onSale !== undefined) {
			if (onSale) {
				filteredProducts = filteredProducts.filter(
					(product: Product) => product.onSale
				);
			} else {
				filteredProducts = filteredProducts.filter(
					(product: any) => !product.onSale
				);
			}
		}

		if ([1, 2, 3, 4, 5].includes(averageRating)) {
			filteredProducts = filteredProducts.filter((filteredProduct: any) => {
				let totalRating = 0;
				let noRating = 0;
				reviews.forEach((review: any) => {
					if (review.productId === filteredProduct.id) {
						totalRating += review.rating;
						noRating++;
					}
				});
				const computedAverateRating = totalRating / noRating;
				return computedAverateRating >= averageRating;
			});
		}
	}

	return filteredProducts;
}
