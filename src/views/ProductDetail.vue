<template>
    <div>
           <div class="container container-mt">
                <div class="d-flex detail-mt-md">
                    <div class="repImgDiv">
    
                        <img :src="currentProduct.pimg1" class="img-size">
                    </div>
                    <div class="h4 product_name">{{currentProduct.pname}}</div>
            
                    <div class="h4 product_price" style="margin-top: 40px;">
                        <span>{{currentProduct.pprice}}</span>원
                    </div>
                   <div class="product_qunatity">
                        <span class="input-group-text" style="width:60px; height: 40px;">수량 &nbsp;&nbsp;
                        <input type="number" style="width: 150px;" name="count" id="count" v-model.number="cart.pquantity" class="form-control" value="1" min="1"> </span>
                    </div>
    
                </div>
    
    
                <div class="orderBox">
                    <div class="text-right mgt-50">
                        <h5>결제 금액</h5>
                        <h3 name="totalPrice" id="totalPrice" class="font-weight-bold" >{{ totalPrice }}</h3>
                    </div>
        
                    <div class="text-right">
                        <button type="button" class="btnCart" @click="putintoCart">장바구니 담기</button> &nbsp;
                        <button type="button" class="btnBuy" @click="toPayment">구매하기</button>
                    </div>

                </div>
            </div>
           
           <div>
                             <!-- Detail / review / QnA 탭 구현 시작-->
                <div id="root" class="root">
                    <div class="wrap">
                       
                        <div class="tab_menu">
                            <ul class="list">
                                <li class="is_on">
                                    <!-- Detail 버튼 화면 전환-->
                                    <button type="button" class="btn">Detail</button>
                                    <div id="tab1" class="cont">
                                        <!-- Detail 버튼 화면 구성 시작-->
                                       <div id="prdDetailContent">
                                        <h1> 제품 상세 탭 화면 표시 공간 </h1>
            
                                        * 배송 안내 *
                                        <br>.<br>.<br>.<br>PhilodendronJari
                                       </div>
                                       <!-- Detail 버튼 화면 구성 끝-->
                                    </div>
                                </li>
                                <li>
                                    <!-- Review 버튼 화면 전환-->
                                    <button type="button" class="btn">Review</button>
                                    <div id="tab2" class="cont">
                                        <!-- Review 화면 구성 시작-->
                                        <div id="reviewContent">
                                            <h3>Review</h3> <hr><div>  <button type="button" id="writeReviewBtn" @click="addreview_customer()" >리뷰쓰기</button>
                                                </div>
                                                <br><br>
                                                <table id="reviewTable">
                                                    <thead>
                                                        <th style="width: 80px;"> 번호 </th>
                                                        <th style="width: 800px;"> 제목 </th>
                                                        <th style="width: 200px;"> 작성자 </th>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td> 1</td>
                                                            <td> <a href="#">예뻐요</a> </td>
                                                            <td> ***2015</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <p id="paging">
                                                    <button style="color:white; background-color:rgb(22, 160, 133)">1</button>
                                                    <button>2</button>
                                                    <button >3</button>
                                                    <button>4</button>
                                                </p>
                                                <!-- 페이징 부트스트랩 코드 -->
                                                <!-- <nav style="z-index: -1;">
                                                    <ul class="pagination pagination-sm d-flex justify-content-center">
                                                      <li class="page-item active" aria-current="page">
                                                        <span class="page-link">1</span>
                                                      </li>
                                                      <li class="page-item"><a class="page-link" href="#">2</a></li>
                                                      <li class="page-item"><a class="page-link" href="#">3</a></li>
                                                    </ul>
                                                </nav>    -->
                                        </div>  
                                         
                                        <!-- Review 화면 구성 끝-->                      
                                    </div>
                                </li>
                                <!-- Q&A 버튼 화면 전환-->
                                <li>
                                    <button type="button" class="btn">Q&A</button>
                                    <div id="tab3" class="cont">
                                        <!-- Q&A 화면 구성 시작 -->
                                         <div id="qnaContent">
                                            <h3>Q&A</h3> <hr>
                                            <button type="button" id="createqnaBtn" onclick="addqna_customer()">문의하기</button><br><br>
                                            <table id="qnaTable">
                                                <thead>
                                                    <th style="width: 80px;"> 번호 </th>
                                                    <th style="width: 800px;"> 제목 </th>
                                                    <th style="width: 200px;"> 작성자 </th>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td> 1</td>
                                                        <td>  <a href="#">예뻐요</a> </td>
                                                        <td> ***2015</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <p id="paging">
                                                <button style="color:white; background-color:rgb(22, 160, 133)">1</button>
                                                <button>2</button>
                                                <button >3</button>
                                                <button>4</button>
                                            </p>
                                            <!-- 페이징 부트스트랩 코드 -->
                                             <!-- <nav style="z-index: -1;">
                                                    <ul class="pagination pagination-sm d-flex justify-content-center">
                                                      <li class="page-item active" aria-current="page">
                                                        <span class="page-link">1</span>
                                                      </li>
                                                      <li class="page-item"><a class="page-link" href="#">2</a></li>
                                                      <li class="page-item"><a class="page-link" href="#">3</a></li>
                                                    </ul>
                                                </nav>    -->
                                        </div>   
                                        <!-- Q&A 화면 구성 끝-->
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- 탭 형식 화면구현 종료 -->
                <!-- 여기에 탭해서 상세페이지 / 문의하기 / 상품평 구현-->
           </div>
          
      </div>
</template>
    
<script>
    import ProductDataService from '../services/ProductDataService';
    import cartService from '../services/cart.service';
    export default {
      name: 'ProductDetail',
      data() {
        return {
            products: [],
            files: [],
            currentFile: null,
            currentProduct: {
                pid: null,
                pname: "",
                ptype: "",
                pprice: "",
                pstock: 0,
                pimg1: "",
                pdetail: "",
            },
            cart: {
                cid: null,
                product: {
                    pid: null,
                    pname: "",
                    ptype: "",
                    pprice: 0,
                    pdetail: "",
                    pimg1: "",
                },
                username: "",
                pquantity:0,
            },
            currentIndex: -1,
            count: 1,
            pquantity: 0,
            username: "",
            reviewList: [],
        }
      },
      computed : {
        totalPrice: function() {
            return this.currentProduct.pprice * this.cart.pquantity;
        }
      },
      methods: {
        toPayment(pid){
            pid = this.$route.params.pid;
                    console.log(pid);
                    ProductDataService.getProduct(pid)
                    .then(response => {
                        this.currentProduct = response.data;
                        console.log(response.data);
                    }).catch(e => {
                        console.log(e);
                    });
                    var idToken = window.localStorage.getItem("user");
                    var jsonIdToken = JSON.parse(idToken);
                    this.cart.username = jsonIdToken.username;
                    console.log(jsonIdToken.username);
                    var newCart = {
                        product : this.currentProduct,
                        username: this.cart.username,
                        pquantity: this.cart.pquantity
                    };
                    cartService.create(newCart)
                    .then(response => {
                        this.cart = response.data;
                        console.log(response.data);
                        console.log(this.cart.pid);
                        alert("결제 페이지로 이동합니다.");
                        this.$router.push("/orderconfirm/" + this.cart.cid).then(cartService.delete(this.cart.cid));
                        
                    }).catch(e => {
                        console.log(e);
    
                    })
        },


        getProduct(pid) {
            ProductDataService.getProduct(pid)
            .then(response => {
                this.currentProduct = response.data;
                console.log(this.$route.params.pid);
            }).catch(e => {
                console.log(e);
            })
        },
        getFile(fid) {
            ProductDataService.getFile(fid)
            .then(response => {
                this.currentFile = response.data;
                console.log(this.$route.params.fid);
            }).catch(e => {
                console.log(e);
            })
        },
        putintoCart(pid){
                    pid = this.$route.params.pid;
                    console.log(pid);
                    ProductDataService.getProduct(pid)
                    .then(response => {
                        this.currentProduct = response.data;
                        console.log(response.data);
                    }).catch(e => {
                        console.log(e);
                    });
                    var idToken = window.localStorage.getItem("user");
                    var jsonIdToken = JSON.parse(idToken);
                    this.cart.username = jsonIdToken.username;
                    console.log(jsonIdToken.username);
                    var newCart = {
                        product : this.currentProduct,
                        username: this.cart.username,
                        pquantity: this.cart.pquantity
                    };
                    cartService.create(newCart)
                    .then(response => {
                        this.cart = response.data;
                        console.log(response.data);
                        console.log(this.currentProduct.pid);
                        var confirm 
                        = window.confirm("해당 상품을 장바구니에 추가하였습니다. 장바구니로 이동하시겠습니까?")
                        if(confirm){
                            this.$router.push({name: 'cartlist'})
                        } else {
                            this.$router.go(0);
                        }
                    }).catch(e => {
                        console.log(e);
    
                    })
                }
    
      },
      mounted() {
        this.getProduct(this.$route.params.pid);
        // 탭 누르면 해당 화면으로 전환하는 JS 코드
        const tabList = document.querySelectorAll('.tab_menu .list li');
        for (let i = 0; i < tabList.length; i++) {
            tabList[i].querySelector('.btn').addEventListener('click', function (e) {
                e.preventDefault();
                for (let j = 0; j < tabList.length; j++) {
                    tabList[j].classList.remove('is_on');
                }
                this.parentNode.classList.add('is_on');
            });
        }
    
        var idToken = window.localStorage.getItem("user");
                    var jsonTokenpar = JSON.parse(idToken);
                    this.cart.username = jsonTokenpar.username;
                    console.log(this.cart.username);
    
    
        },

    }
</script>
    
    
<style>
    .repImgDiv{
        margin-right:15px;
        height:auto;
        width:40%;
    }
    .repImg{
        width:100%;
        height:400px;
    }
    
    
    .container-mt{
        margin-top: 50px;
    }
    
    .detail-mt-md{
        margin-top: 100px;
        margin-bottom: 100px;
    }
    .img-size{
        width: 400px;
        height: 500px;
    }
    
    .product_name {
        margin-top: 30px;
        margin-left: -50px;
        width: 140px;
    }
    
    .product_price {
        margin-top: 80px;
        margin-left: -140px;
    }
    
    .product_qunatity {
        padding: 0;
        margin-top: 120px;
        margin-left: -90px;
    }
    
    .btnBuy {
        text-decoration: none;
        color: white;
        padding: 10px 30px;
        display: inline-block;
        position: relative;
        border: none;
        border-radius: 4px;
        background-color: rgb(22, 160, 133); 
    }
    
    .btnCart {
        text-decoration: none;
        color: white;
        padding: 10px 30px;
        display: inline-block;
        position: relative;
        border: none;
        border-radius: 4px;
        background-color: rgb(190, 190, 190); 
    }
    
    .orderBox {
        margin-top: -210px;
        margin-left: 480px;
    }
    
    .wrap ul {
        list-style: none;
        margin-top: 100px;
    }
    
    .wrap a {
        text-decoration: none;
        color: #333;
        padding: 50px;
        text-align: center;
        margin-left: 0px;
        position: relative;
    }
    
    .wrap {
        
        margin-top: 10%;
        margin-left: 20%;
        margin-right: 0;
        margin-bottom: 20%;
        height: 800px;
        
        float: center;
    }
    
    .tab_menu {
        position: relative;
    }
    
    .tab_menu .list {
        overflow: hidden;
    }
    
    .tab_menu .list li {
        float: left;
        margin-right: 14px;
    }
    
    .tab_menu .list .btn {
        font-size: 15px;
        border: none; background-color: rgb(224, 224, 224); color: black; font-weight: bold; width: 220px; height: 30px; margin-bottom: 30px; margin-left: 20px;
        
    }
    
    .tab_menu .list .cont {
        display: none;
        position: absolute;
        top: 35px;
        left: 15px;
        background: white;
        color: black;
        
        width: 1200px;
       
        line-height: 30px;
        
        
    }
    
    .tab_menu .list li.is_on .btn {
        font-weight: bold;
        color: white;
        background-color: rgb(22, 160, 133);
        
    }
    
    .tab_menu .list li.is_on .cont {
        display:inline-block;
    }
    
    #prdDetailContent {
        margin-top: 0px; 
        width: 1100px; 
        height: 1000px; 
        background-color: white; 
        text-align: center;
    }
    
    #reviewContent {
        margin-left: 20px; 
        width: 1150px; 
        height: 1000px; 
        background-color: white; 
        margin-top: 20px;
    }
    
    #writeReviewBtn {
        font-weight: bold;
        color: white; 
        border: none; 
        float: right; 
        width: 60px; 
        height: 30px; 
        padding: 0; 
        margin-right: 10px;
        background-color: rgb(22, 160, 133); 
        border-radius: 3px; 
        font-size: 10px; 
        text-align: center;
    }
    
    #reviewTable {
        text-align: center; 
        margin-left: 60px;
    }
    
    #reviewTable thead {
        background-color:rgb(224, 224, 224); 
        border-top: 1px solid black;
    }
    
    #reviewTable tbody {
        background-color: white; 
        border-top: 1px solid black; 
        border-bottom: 1px solid black;
    }
    
    #qnaContent {
        margin-left: 20px; 
        width: 1150px; 
        height: 1000px; 
        background-color: white; 
        margin-top: 20px;
    }
    
    #qnaContent h3 {
        text-align: left;
    }
    
    #createqnaBtn {
        font-weight: bold;
        color: white; 
        border: none; 
        float: right; 
        width: 60px; 
        height: 30px; 
        padding: 0; 
        margin-right: 10px;
        background-color: rgb(22, 160, 133); 
        border-radius: 3px; 
        font-size: 10px; 
        text-align: center;
    }
    
    #qnaTable {
        text-align: center; 
        margin-left: 60px;
    }
    
    #qnaTable thead {
        background-color:rgb(224, 224, 224); 
        border-top: 1px solid black;
    }
    
    #qnaTable tbody {
        background-color: white; 
        border-top: 1px solid black; 
        border-bottom: 1px solid black;
    }
    
    footer {
        width: 100%;
    }
    
    #side_list ul {
    
        list-style : none;
        
        
        padding: 0;
        margin: 0;
        position: fixed;
        width: 180px;
        overflow: auto;
        top: 400px;
        left: 100px;
        height: 200px;
    }
    
    #side_list ul li a {
        text-decoration: none;
        display: block;
        padding: 8px 15px 8px 15px;
        font-size: 14px;
        height: 40px;
        text-align: center;
        width: 120px;
    }
    
    #side_About {
        left: 25%; 
         z-index: 5; 
         height: 25px;
         background-color: rgb(224, 224, 224); 
         border: 0; 
         border-radius: 8px; 
         color: black; 
         font-weight: bold;  
    }
    #side_vaseplant {
        left: 25%; 
         z-index: 5; 
         height: 25px;
         background-color: rgb(22, 160, 133); 
         border: 0; 
         border-radius: 8px; 
         color: white; 
         font-weight: bold;  
    }
    #side_hangingplant {
        left: 25%; 
         z-index: 5; 
         height: 25px;
         background-color: rgb(224, 224, 224); 
         border: 0; 
         border-radius: 8px; 
         color: black; 
         font-weight: bold;  
    }
    
    #side_succulent {
        left: 25%; 
         z-index: 5; 
         height: 25px;
         background-color: rgb(224, 224, 224); 
         border: 0; 
         border-radius: 8px; 
         color: black; 
         font-weight: bold;  
    }
    
    #side_otherproduct {
        left: 25%; 
         z-index: 5; 
         height: 25px;
         background-color: rgb(224, 224, 224); 
         border: 0; 
         border-radius: 8px; 
         color: black; 
         font-weight: bold;  
    }
    
    .side_customer {
        width: 150px;
    }
    
    #paging {
        text-align: center;
        margin-top: 70px;
    }
    #paging button {
        width: 30px;
        height: 30px;
        border-radius: 10px;
        border: 0;
        background-color: rgb(240, 240, 240);
    }
    
    .sidebar {
        margin-top: 60px;
    }
     .sidebar ul{
        
        list-style : none;
        background-color: rgb(224, 224, 224);
        width: 150px;
        padding: 0;
        margin: 0;
        position: fixed;
        overflow: auto;
        margin-left: 88px;
        text-align: center;
    }
    
    .sidebar ul li a {
        text-decoration: none;
        display: block;
        color: black;
        padding: 8px 15px 8px 15px;
        font-weight: bold;
        font-size: 14px;
    }
    
    .sidebar ul li a.side_active{
        background-color: rgb(22, 160, 133);
        color: white;
    }
    
    .sidebar ul li a:hover{
        background-color: rgb(22, 160, 133);
        color: white;
    }
    
    
    
</style>