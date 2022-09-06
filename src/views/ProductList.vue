<template>
    <div class="products" style="margin-top: 50px;margin-bottom: 50px;">
        <div class="product_list">
            <div>
                <li v-for="(file, index) in files" :key="index">
                    <img :src="file.url" width="225px" height="300px">
                </li>
            </div>

                <li class="product" v-for="(product, index) in products" :key="index">
                <!-- <img :src="product.pimg1" width="225px" height="300px"> -->
                    <div class="product_name">
                        <router-link :to="`/product/detail/${product.pid}`"> {{product.pname}} </router-link>
                    </div>
                    <div class="product_price">
                        {{ product.pprice }}
                    </div>
                </li>
  


            <!-- 페이징 -->
            <!-- <div class="page_wrap">
                <ul class="page_nation">
                    <li><a href="#"></a></li>
                    <li><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">></a></li>
                </ul>
            </div> -->

        </div>
    </div>
</template>

<script>
import ProductDataService from '../services/ProductDataService';

export default {
    name: 'product-list',
    data() {
        return {
            products: [],
            files: [],
            currentFile: null,
            currentProduct: null,
            currentIndex: -1,
            pname: ''
        };
    },
    methods: {
        retrieveProducts() {
            // 상품 목록
            ProductDataService.getAll(this.$route.params.ptype)
            .then(response => {
                this.products = response.data;
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
        },
        refreshList() {
            this.retrieveProducts();
            this.currentProduct = null;
            this.currentIndex = -1;
        },
        setActiveProduct(product, index) {
            this.currentProduct = product;
            this.currentIndex = index;
        },
        getAllFile() {
            ProductDataService.getAllFile()
            .then(response => {
                this.files = response.data;
                console.log();
            })
            .catch(e => {
                console.log(e);
            });
        }
    },
    mounted() {
        this.retrieveProducts();
        this.getAllFile();
    }
}
</script>

<style scoped lang="css">
    @import "../css/bootstrap.min.css";
    @import "../css/main_customer.css";
    @import "../css/plant.css";
</style>