import http from "../http-common";
class OrdersService {
  
  getAll(username) {
    return http.get(`/orders/list/${username}`, username);
  }
  create(orderData) {
    return http.post("/addorder", orderData);
  }
  getAll_admin(){
    return http.get(`/orders/list`);
  }
 
}
export default new OrdersService();