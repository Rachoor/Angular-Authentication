import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Product } from '../models/product.model';

export const ADD_PRODUCT = '[PRODUCT] Add';
export const REMOVE_PRODUCT = '[PRODUCT] Remove';
export const UPDATE_PRODUCT = '[PRODUCT] Update';
export const READ_PRODUCT = '[PRODUCT] Read';

export class AddProduct implements Action {
  readonly type = ADD_PRODUCT;
  constructor(public payload: Product) {}
}

export class RemoveProduct implements Action {
  readonly type = REMOVE_PRODUCT;
  constructor(public payload: Product) {}
}

export class UpdateProduct implements Action {
  readonly type = UPDATE_PRODUCT;
  constructor(public payload: Product) {}
}

export class READProduct implements Action {
  readonly type = READ_PRODUCT;
  constructor(public payload: Product) {}
}

export type Actions = AddProduct | RemoveProduct | UpdateProduct | READProduct;
