var isAndroid = require("platform");
var Page = require ("ui/page");
var comp_product_list = require('../components/product_list');

module.exports = {
  data() {
    return {
        searchQuery: null,
        searchQueryPreviouslyTyped: true,
        isNoResult: false
    };
  },
  props: {
    datas: [],
  },
  template: `
    <Page class="page" actionBarHidden="true">
      <StackLayout height="10000" >
        <SearchBar height="56.5" color="#0390d4" hint="Cari" :text="searchPhrase" @textChange="onSearchChanged" @clear="onSearchClear" @submit="onSearchSubmit" v-model="searchQuery" />
        <StackLayout height="10000" verticalAlignment="top">
          <label :visibility="(isNoResult ? 'visible' : 'collapse')" text="Pencarian tidak menemukan hasil" textAlignment="center" paddingTop="55"></label>
          <comp_product_list :visibility="(!isNoResult  ? 'visible' : 'collapse')" :products="searchResults"/>
        </StackLayout>
      </StackLayout>
    </Page>
  `,
  components: {
    comp_product_list,
  },
  methods: {
    onSearchSubmit: function(args){
      var sender = args.object; 
      
      // hide keyboard
      sender.dismissSoftInput(); 

      // remove focus
      if(isAndroid){ sender.android.clearFocus(); }
    },
    onSearchClear: function(args){
      // redirect back if no value

      if(!this.searchQueryPreviouslyTyped){
        args.object.dismissSoftInput(); 
        this.$navigateBack();
      }else{
        this.searchQueryPreviouslyTyped = false;
      }
    },
    onSearchChanged: function(args){
      if(this.searchQuery){ 
        this.searchQueryPreviouslyTyped = true
      }
    },
  },
  computed:{
    searchResults: function () {
      var result = this.datas
      if (!this.searchQuery){
        this.isNoResult = false;
        return null
      }


      const filterValue = this.searchQuery.toLowerCase()

      const filter = datas =>
        datas.name.toLowerCase().includes(filterValue)

      this.isNoResult = result.filter(filter).length == 0 ? true : false
      
      return result.filter(filter)
    },
  }
};
