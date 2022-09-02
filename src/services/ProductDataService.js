import http from"../http-common";
class ProductDataService {
    create(productData, file) {
        let formData = new FormData();
        formData.append('pdata', productData);  // 상품 정보
        formData.append('pfile', file); // 상품 이미지
        return http.post("/product/register", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
    }
}

export default new ProductDataService();