import {categories} from '../db'

export const Product = {
  category: (parent:any, args:any, context:any) => {
    const {categoryId} = parent;
    return categories.find(category => category.id === categoryId )
  }
}

