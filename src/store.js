import Vue from "vue";
import Vuex from "vuex";
import productsData from "./data/products";

Vue.use(Vuex);

export const getters = {
  getTotal: state => {
    return state.cart.reduce((acc, item) => {
      return acc + item.price;
    }, 0);
  },
  isInCart: state => productId => {
    return state.cart.findIndex(product => product.id === productId) !== -1;
  }
};

export const mutations = {
  addToCart(state, payload) {
    const product = state.products.find(product => product.id === payload.id);
    state.cart = [...state.cart, product];
  },
  removeFromCart(state, payload) {
    state.cart = state.cart.filter(product => product.id !== payload.id);
  }
};

const actions = {
  addToCart(context, payload) {
    context.commit("addToCart", payload);
  },
  removeFromCart(context, payload) {
    context.commit("removeFromCart", payload);
  }
};

export default new Vuex.Store({
  state: {
    products: productsData,
    cart: [],
    currency: "EUR"
  },
  getters,
  mutations,
  actions
});
