const comp_product_list = require('../components/product_list');
const page_product_detail = require('../pages/product_detail');
const page_search = require('../pages/search');

module.exports = {
    data() {
      return {
        products: [],
        isLoading: true
      };
    },
    mounted(){
        this.getData();
    },
    methods: {
        getData: function(){
            // dummy
            var products = require('../dummies/products');

            fetch("https://httpbin.org/get")
                .then((response) => response.text())
                .then((r) => {
                    this.products = products.data;
                    this.isLoading = false;
                }).catch((e) => {
            });
        },
        goToProductDetail: function (args) {
            console.log('Item with index: ' + args.name + ' tapped');
            this.$navigateTo(page_product_detail);
        },
        onSearch: function(){
            this.$navigateTo(page_search, {
                context:{
                propsData: {
                    datas: this.products
                }
                }
            });
        },
        onScan: function(){
            alert(2);
        }
    },
    components: {
        comp_product_list,
    },
    template: `
        <Page class="page">
        <ActionBar class="action-bar" title="Produk">
            <ActionItem @tap="onScan" ios.position="left">
            <Label style="color:#fff;" class="fa title-icon"  :text="'fa-qrcode' | fonticon" />
            </ActionItem>
            <ActionItem @tap="onSearch" ios.position="right">
            <Label style="color:#fff;" class="fa title-icon" :text="'fa-search' | fonticon" />
            </ActionItem>
        </ActionBar>
        <StackLayout height="10000">
            <StackLayout :visibility="(isLoading ? 'visible' : 'collapse')" height="10000" verticalAlignment="middle">
                <ActivityIndicator height="40" width="40" class="activity-indicator" busy="true" />
                <label text="Memuat" textAlignment="center" paddingTop="15"></label>
            </StackLayout>
            <comp_product_list :visibility="(isLoading ? 'collapse' : 'visible')" v-on:productlistTapped="goToProductDetail" :products="products"/>
        </StackLayout>
        </Page>
    `    
};
