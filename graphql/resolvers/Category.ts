import {products} from '../db'

export const Category = {
  products:(parent: any, args: any, context:any) => {
    const categoryId = parent.id;
    return products.filter(product => product.categoryId === categoryId);
  }
}