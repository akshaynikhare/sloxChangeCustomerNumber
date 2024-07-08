import template from './sw-customer-base-info.html.twig';
import './style.scss';




Shopware.Component.override('sw-customer-base-info', {
    template,

    data() {
        return {
            oldCustomerNumber: null
        };
    },
    mounted() {
        this.oldCustomerNumber= this.customer.customerNumber;
    },
});