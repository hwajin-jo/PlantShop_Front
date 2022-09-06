import http from "../http-common";
class FaqDataService {
  getAll_admin() {
    return http.get("/auth/faq/list_admin");
  }

  getAll() {
    return http.get("/auth/faq/list");
  }

  get_admin(fid) {
    return http.get(`/auth/faq/detail_admin/${fid}`);
  }

  get(fid) {
    return http.get(`/auth/faq/detail/${fid}`);
  }
  create(faqData) {
    return http.post("/auth/faq/create", faqData);
  }
  update(fid) {
    return http.get(`/auth/faq/modify/${fid}`);
  }
  updateFaq(fid, faq) {
    return http.put(`/auth/faq/modify/${fid}`, faq);
  }
  delete(fid) {
    return http.delete(`/auth/faq/delete/${fid}`);
  }
 
}
export default new FaqDataService();