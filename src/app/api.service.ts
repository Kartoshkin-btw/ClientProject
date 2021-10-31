import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

  getProfile() {
    return this.http.get(this.url + '/api/users/profile', { headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token')) });
  }
  getOrganizations() {
    return this.http.get(this.url + '/api/organizations/displayed');
  }
  getOrganization(orgId) {
    return this.http.get(this.url + '/api/organizations/' + orgId);
  }
  getPickpointsByOrg(orgId) {
    return this.http.get(this.url + '/api/pickpoints/organization/' + orgId);
  }
  getPickpoint(pickpointId) {
    return this.http.get(this.url + '/api/pickpoints/' + pickpointId);
  }
  getCategoryByMenu(menuId) {
    return this.http.get(this.url + '/api/categories/menu/' + menuId);
  }
  login(loginForm) {
    return this.http.post(this.url + '/authenticate', { password: loginForm.password, username: loginForm.username });
  }
  register(registerForm) {
    return this.http.post(this.url + '/api/users/registration/client', { username: registerForm.username, password: registerForm.password, name: registerForm.name, phoneNumber: registerForm.phoneNumber, email: registerForm.email }, { observe: 'response' });
  }
  modifyProfile(id, modifyForm) {
    return this.http.put(this.url + '/api/users', { id: id, username: modifyForm.username, name: modifyForm.name, phoneNumber: modifyForm.phoneNumber, email: modifyForm.email }, { observe: 'response' });
  }
  createOrder(orderForm, pickpoint, user) {
    return this.http.post(this.url + '/api/orders', { phoneNumber: orderForm.phoneNumber, email: orderForm.email, commentary: orderForm.commentary, preferedTime: orderForm.preferedTime, pickPoint: pickpoint, user: user }, { observe: 'response' });
  }
  fillOrder(orderId, orderItems) {
    return this.http.post(this.url + '/api/orders/fill/' + orderId, orderItems, { observe: 'response' });
  }
  paymentOrder(orderId) {
    return this.http.get(this.url + '/api/orders/payment/' + orderId, { observe: 'response'});
  }
  getOrder(orderId) {
    return this.http.get(this.url + '/api/orders/search/' + orderId);
  }
  getOrderItems(orderId) {
    return this.http.get(this.url + '/api/orders/' + orderId);
  }
  getOrdersByUser() {
    return this.http.get(this.url + '/api/orders/user', { headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token')) })
  }
  getReplies(pickpointId) {
    return this.http.get(this.url + '/api/replies/' + pickpointId);
  }
  createReply(replyForm, date, pickpoint, user) {
    return this.http.post(this.url + '/api/replies', { rating: replyForm.rating, text: replyForm.text, date: date, pickPoint: pickpoint, user: user }, { observe: 'response'});
  }
}
