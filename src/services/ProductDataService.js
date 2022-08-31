import http from"../http-common";
class ProductDataService {
    create(productData) {
        return http.post("/product/register", productData);
    }
}

export default new ProductDataService();