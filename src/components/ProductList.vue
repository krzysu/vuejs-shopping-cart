<template>
  <div>
    <h3>Products</h3>
    <ul class="product-list">
      <li
        class="product-list__item"
        v-for="product in products"
        :key="product.id"
      >
        <Product v-bind="product" />
      </li>
    </ul>
  </div>
</template>

<script>
import Product from "./Product.vue";
import data from "../data/products";

export default {
  name: "ProductList",
  components: {
    Product
  },
  data: () => ({
    products: data
  })
};
</script>

<style scoped lang="scss">
.product-list {
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;
}

.product-list__item {
  list-style: none;
  width: 32%;
}
</style>
