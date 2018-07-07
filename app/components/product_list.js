module.exports = {
    methods: {
        onItemTap: function (args) {
            this.$emit('productlistTapped', this.products[args.index] );
        }
    },
    props: {
        'products': []
    },
    data() {
        return {};
    },
    template: `
    <ListView class="list-group" for="product in products" @itemTap="onItemTap" style="height:10000;">
        <v-template>
            <StackLayout>
                <GridLayout columns="auto, *, auto" rows="auto, auto, auto" margin="12, 12, 6, 12" >
                    <Image :src="product.imageSrc" rowSpan="3" width="54" height="54" verticalAlignment="top" margin="0,12,0,0"/>
                    <Label :text="product.name" row="0" col="1" colSpan="2" class="list-group-item-heading" verticalAlignment="top" textWrap="false" margin="0"/>
                    <Label :text="product.sku" row=1 col="1" colspan="2" class="h6" margin="0"/>
                    <Label :text="product.price" row="2" col="1" class="h6" horizontalAlignment="left" />
                    <Label :text="'Stok : ' + product.stock" row="2" col="2" class="h5 text-success" verticalAlignment="bottom" />
                    <Label text="" col="3" row="3" colspan="2" class="h6"/>
                </GridLayout>
            </StackLayout>
        </v-template>
    </ListView>
    `
};