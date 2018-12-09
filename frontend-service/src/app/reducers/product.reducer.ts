import { Action } from '@ngrx/store';
import { Product } from '../models/product.model';
import * as ProductActions from '../actions/product.actions';

export function reducer(state: Product[], action: ProductActions.Actions) {
  switch (action.type) {
    case ProductActions.ADD_PRODUCT:
      return [...state, action.payload];
  }
}
