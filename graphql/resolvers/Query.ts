import {categories, links, products} from '../db'

export const Query = {
  links: () => links,
  products: () => products,
  ages: () => [65,2389,234],
  isCool: () => false,

  product: (parent: any, args: any, _context: any) => {
    const productId = args.id;
    return  products.find(product => product.id === productId);
   
  },
  categories: () => categories,

  category: (parent: any, args: any, context: any) => {
    const {id} = args;
    return categories.find(category => category.id  === id);
  }
}
