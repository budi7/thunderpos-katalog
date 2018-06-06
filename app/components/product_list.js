module.exports = {
    methods: {
        onItemTap: function (args) {
            this.$emit('productlistTapped', args);
        }
    },

    data() {
        return {
            products: [
                {
                    name: "Echo Dot (2nd Generation)",
                    imageSrc: "https://images-na.ssl-images-amazon.com/images/I/61ikAJnULvL._SY450_.jpg",
                    price: "IDR 1.480.000",
                    sku: "SKU : 10367170",
                    stock: "Stock : 23",
                },
                {
                    name: "Wi-Fi Smart Plug, Mini Outlets Smart Socket No Hub Required Timing Function Control Your Electric Devices from Anywhere Works with Amazon Alexa and Google Assistant 4-Pack Amysen",
                    imageSrc: "https://images-na.ssl-images-amazon.com/images/I/61NNHutN9AL._SL1200_.jpg",
                    price: "IDR 1.780.000",
                    sku: "SKU : 10367171",
                    stock: "Stock : 21",
                },
            ],
        };
    },
    template: `
    <ListView class="list-group" for="product in products" @itemTap="onItemTap" style="height:1250px">
        <v-template>

            <FlexboxLayout flexDirection="row">
                <GridLayout columns="auto, auto, *" rows="auto, auto, *" class="list-group-item">
                    <Image :src="product.imageSrc" class="thumb" row="0" col="0" rowSpan="2"/>
                    <label :text="product.sku" class="h6" row="0" col="1"/>
                    <label :text="product.name" width="100%" textWrap="true" class="h4" row="1" col="1"/>
                    <Label :text="product.price" class="h5" row="2" col="1"/>
                </GridLayout>        
            </FlexboxLayout>      

        </v-template>
    </ListView>
    `
};