import deDE from './snippet/de-DE.json';
import enGB from './snippet/en-GB.json';

Shopware.Component.override('sw-customer-detail', {

    snippets: {
        'de-DE': deDE,
        'en-GB': enGB
    },

    inject: ['SloxService'],

    computed: {
        oldCustomerNumber() {
            return this.$parent.$parent.$el.querySelector('input[name="oldCustomerNumber"]');
        }
    },


    methods: {
        onSave() {
            if(this.oldCustomerNumber.value != this.customer.customerNumber && this.oldCustomerNumber.value !== null && this.oldCustomerNumber.value.trim() !== ''){
                this.SloxService.searchCustomer(this.customer.customerNumber)
                .then(response => {
                    if (!response.success) {
                       this.$super('onSave');
                    } else {
                        this.createNotificationError({
                            message: this.$tc('sw-customer.baseInfo.customerNumberNotAvailable')
                        });
                    }
                })
                .catch(error => {
                });
            }else{
                this.$super('onSave');
            }
        }

    }

});
