import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Category } from '../models/category.model';

export const ADD_CATEGORY = '[CATEGORY] Add';
export const REMOVE_CATEGORY = '[CATEGORY] Remove';
export const UPDATE_CATEGORY = '[CATEGORY] Update';
export const READ_CATEGORY = '[CATEGORY] Read';

export class AddCategory implements Action {
  readonly type = ADD_CATEGORY;
  constructor(public payload: Category) {}
}

export class RemoveCategory implements Action {
  readonly type = REMOVE_CATEGORY;
  constructor(public payload: Category) {}
}

export class UpdateCategory implements Action {
  readonly type = UPDATE_CATEGORY;
  constructor(public payload: Category) {}
}

export class READCategory implements Action {
  readonly type = READ_CATEGORY;
  constructor(public payload: Category) {}
}

export type Actions =
  | AddCategory
  | RemoveCategory
  | UpdateCategory
  | READCategory;
