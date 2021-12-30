
export const Category = {
  products:(parent: any, args: any, context: any) => {
    const products = context.products!;
    const categoryId = parent.id;
    return products.filter((product: any) => product.categoryId === categoryId);
  }
}