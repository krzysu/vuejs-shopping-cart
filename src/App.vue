<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1>Vue Shopping Cart Example</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-md-8">
                <ProductList />
            </div>
            <div class="col-md-4">
                <Cart />
            </div>
        </div>

        <footer>
            <small>
                made by <a href="https://twitter.com/krzysu">Kris Urbas</a>, source code available on <a href="https://github.com/krzysu/vuejs-shopping-cart">github</a>
            </small>
        </footer>
    </div>
</template>

<script>
import ProductList from "./components/ProductList.vue";
import Cart from "./components/Cart.vue";

export default {
  name: "app",
  components: {
    ProductList,
    Cart
  }
};
</script>

<style lang="scss">
</style>
