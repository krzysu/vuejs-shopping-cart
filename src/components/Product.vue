<template>
  <div class="product thumbnail">
    <img v-bind:src="image" alt="product" />
    <div class="caption">
      <h3>{{name}}</h3>
      <div class="product__price">{{price}} {{currency}}</div>
      <div class="product__button-wrap">
        <button
          class="btn"
          v-bind:class="{
            'btn-danger': isInCart,
            'btn-primary': !isInCart
          }"
        >
        <span v-if="isInCart">Remove</span>
        <span v-else>Add to cart</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: {
    id: Number,
    name: String,
    price: Number,
    currency: String,
    image: String,
    isInCart: Boolean
  }
};
</script>

<style scoped lang="scss">
.product__price {
  display: inline-block;
  line-height: 34px;
}

.product__button-wrap {
  float: right;
}
</style>
