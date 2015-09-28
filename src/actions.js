import reactor from './reactor'
import {
    RECEIVE_PRODUCTS,
    ADD_TO_CART,
    CHECKOUT_START,
    CHECKOUT_SUCCESS,
    CHECKOUT_FAILED,
} from './actionTypes'

var products = [{id:'1', title:'Honda', price:'55000'}, {id:'2', title:'Benz', price:'25000'}];

export default {
    fetchProducts() {
        reactor.dispatch(RECEIVE_PRODUCTS, { products });
    },

    addToCart(product) {
        reactor.dispatch(ADD_TO_CART, { product })
    },
}
