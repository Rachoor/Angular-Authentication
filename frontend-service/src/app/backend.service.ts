import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApputilsService } from './apputils.service';
import { AuthService } from './auth.service';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class BackendService {
  baseUrl = 'http://localhost:8000';
  constructor(
    public http: HttpClient,
    public auth: AuthService,
    public apputils: ApputilsService
  ) {
    console.log(this.auth.getClientAccessToken());
  }
  setHeaders() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.apputils.getLocalStorage('accessToken'),
      }),
    };
    return httpOptions;
  }

  getAllCategories() {
    return this.http.get(this.baseUrl + '/category/', this.setHeaders());
  }
  addNewCategory(category) {
    return this.http.post(
      this.baseUrl + '/category/',
      category,
      this.setHeaders()
    );
  }
  addNewProduct(product) {
    return this.http.post(
      this.baseUrl + '/products/',
      product,
      this.setHeaders()
    );
  }
  getAllProducts() {
    return this.http.get(this.baseUrl + '/products/', this.setHeaders());
  }
  removeCategory(id) {
    return this.http.delete(
      this.baseUrl + '/category/' + id,
      this.setHeaders()
    );
  }
  removeProduct(id) {
    return this.http.delete(
      this.baseUrl + '/products/' + id,
      this.setHeaders()
    );
  }

  updateProduct(id, data) {
    return this.http.put(
      this.baseUrl + '/products/' + id + '/',
      data,
      this.setHeaders()
    );
  }

  updateCategory(id, data) {
    return this.http.put(
      this.baseUrl + '/category/' + id + '/',
      data,
      this.setHeaders()
    );
  }
}
