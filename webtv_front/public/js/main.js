
$(document).ready(function() {
    
});

function loadIcon(show){
    if(show){
        $('*').css({'cursor':'wait'});
    }else {
        $('*').css({'cursor':'default'});
        $('tbody tr *').css({'cursor':'pointer'});
    }
}

// String.prototype.format = function(){
//     return this.valueOf().split('$$').reduce((acc, cur, i)=>acc+arguments[i-1]+cur);
// }

String.prototype.format = function(vals) {
    return this.replace(/(%?)%\{([^\}]+)\}/g, function(m0, m1, m2) {
        if (m1 === '%') {
            return "%{" + m2 + "}";
        } else {
            return String(vals[m2]);
        }
    });
}

function request(url, method, data, errormsg){
    loadIcon(true);
    return new Promise((resolve, reject)=>{
        $.ajax({url, method, data}).done(resolve).fail(()=>reject(errormsg)).always(()=>loadIcon(false))
    });
}

var Toast = function(message){
    document.querySelector('#toast').MaterialSnackbar.showSnackbar({message})
}

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

window.app = new Vue({
    el: '#app',
    mounted: function () {
        this.$nextTick(() => {
            this.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

            $('dialog').each(function(i){
                dialogPolyfill.registerDialog(this);
                app.$set(app.dialogs, $(this).attr("id"), this);
            });

            request('/loadapp', 'POST', {}, this.logs.FAILED_INITIALIZATION())
            .then((data)=>{
                data.profile.preferences.forEach((v)=>v[1]=v[1]=="true"?true:false);
                data.transactions.forEach((v)=>{
                    v.payer = v.payer.split('#')[1];
                    v.payee = v.payee.split('#')[1];
                });

                this.wallet = data.wallet;
                this.transactions = data.transactions;
                this.users = data.users;

                this.profile = data.profile;
                this.profile.birth = this.profile.birth || randomDate(new Date(1960, 0, 1), new Date(1994, 0, 1)).toLocaleString('en-GB', { timeZone: 'UTC' }).substr(0,10);

                let prod = this.wallet.purchasedProducts;
                this.wallet.purchasedProducts = {};
                prod.forEach((p)=>this.$set(this.wallet.purchasedProducts, p.productID, p));

                prod = this.wallet.offeredProducts;
                this.wallet.offeredProducts = {};
                prod.forEach((p)=>this.$set(this.wallet.offeredProducts, p.productID, p));

                setTimeout(()=>{
                    data.products.forEach((v)=>this.$set(this.products, v.productID, v));   
                    this.loading_products = false;
                }, 3000);
            })
            .catch(Toast);
        });
    },
    methods: {
        buyProduct: function(k){
            let product = this.products[k];
            this.dialog_buy_product_text = `Buy this product for $${product.value}?`;
            this.product2buy = k;
            this.dialogs['dialog_buy_product'].showModal();
        },
        buyProductButton: function(){
            let product = this.products[this.product2buy];
            request('/buyproduct', 'POST', {product:this.product2buy}, this.logs.FAILED_BUY())
            .then((data)=>{
                Toast('Product purchased.');
            })
            .catch(Toast)
            .finally(()=>this.dialogs['dialog_buy_product'].close());
        },
        uploadProduct: function(k){
            this.dialogs['dialog_upload_product'].showModal();
        },
        uploadProductButton: function(){
            request('/uploadproduct', 'POST', this.productForm, this.logs.FAILED_UPLOAD())
            .then((data)=>{
                Toast(this.logs.UPLOADED());
                this.dialogs['dialog_upload_product'].close();
                this.productForm = {};
            })
            .catch(Toast);
        },
        saveProfile: function(){
            request('/saveprofile', 'POST', this.profile, this.logs.FAILED_SAVE_PROFILE())
            .then((data)=>{
                Toast(this.logs.SAVED_PROFILE());
            })
            .catch(Toast);
        },
        savePreferenceChange: function(i){
            this.$set(this.profile.preferences[i], 1, !this.profile.preferences[i][1]);
            request('/saveprofile', 'POST', this.profile, this.logs.FAILED_UPDATE_PREFERENCE())
            .then((data)=>{
                Toast(this.logs.UPDATED_PREFERENCE());
            })
            .catch(Toast);
        },
        closeDialog: function(d){
            this.dialogs[d].close();
        },
        deletePreference: function(i){
            this.$delete(this.profile.preferences, i);
        },
        sendTokens: function(){
            request('/sendtokens', 'POST', this.transForm, this.logs.FAILED_TOKENS_SEND())
            .then((data)=>{
                Toast(this.logs.TOKENS_SENT());
            })
            .catch(Toast);
        }
    },
    filters: {
        date: function(d){
            return (new Date(d)).toLocaleString('en-GB', { timeZone: 'UTC' });
        }
    },
    watch: {
        
    },
    data: {
        timezone: 'UTC',
        logs: {
            FAILED_INITIALIZATION: ()=>"Failed to initialize application",
            FAILED_BUY: ()=>"Failed to buy product",
            FAILED_SAVE_PROFILE: ()=>"Failed to save profile",
            SAVED_PROFILE: ()=>"Profile saved",
            FAILED_UPDATE_PREFERENCE: ()=>"Failed to update preference",
            UPDATED_PREFERENCE: ()=>"Preference updated",
            FAILED_TOKENS_SEND: ()=>"Failed to send tokens",
            TOKENS_SENT: ()=>"Tokens sent",
            FAILED_UPLOAD: ()=>"Failed to upload product",
            UPLOADED: ()=>"Product uploaded"
        },
        profile:{
            firstname: '',
            surname: '',
            gender: '',
            tin: '',
            birth: '',
            preferences: []
        },
        dialogs: {},
        products: {},
        loading_products: true,
        wallet:{
            hashID: 'Loading..',
            balance: '-',
            offeredProducts: [],
            purchasedProducts: []
        },
        transForm: {
            receiver: '',
            amount: ''
        },
        transactions: [],
        dialog_buy_product_text: '',
        product2buy: '',
        productForm: {
          title: '',
          value: '',
          URL: '',
          description: ""
        },
        users: []
    }
});