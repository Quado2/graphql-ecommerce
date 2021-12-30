export const Product = {
	category: (	{ categoryId }: { categoryId: String },args: any,{ categories }: { categories: any }) => {
		return categories.find((category: any) => category.id === categoryId);
	},
  
  reviews: ({ id }: { id: String }, args: any, { reviews }: { reviews: any }) => {
		return reviews.filter((review: any) => review.productId === id);
	},
};
