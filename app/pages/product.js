const comp_product_list = require('../components/product_list');
const page_product_detail = require('../pages/product_detail');

module.exports = {
  data() {
    return {
    };
  },
  template: `
    <Page class="page">
      <ActionBar class="action-bar" title="Produk">
        <ActionItem tap="onSearch"
          ios.systemIcon="12" ios.position="left"
          android.systemIcon="ic_search" android.position="actionBarIfRoom">
        </ActionItem>
        <ActionItem tap="onScan"
          ios.systemIcon="15" ios.position="left"
          text="delete" android.position="actionBarIfRoom">
        </ActionItem>
        <ActionItem tap="onCreate"
          ios.systemIcon="4" ios.position="right"
          android.systemIcon="btn_plus" android.position="actionBar">
        </ActionItem>        
      </ActionBar>
      <StackLayout>
        <comp_product_list v-on:productlistTapped="goToProductDetail" />
      </StackLayout>
    </Page>
  `,
  components: {
    comp_product_list,
  },
  methods: {
    goToProductDetail: function (args) {
      console.log('Item with index: ' + args.index + ' tapped');
      this.$navigateTo(page_product_detail);
    },
  },  
};
