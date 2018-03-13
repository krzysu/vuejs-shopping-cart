<template>
  <div class="product thumbnail">
    <img :src="image" alt="product" />
    <div class="caption">
      <h3>{{name}}</h3>
      <div class="product__price">{{price}} {{currency}}</div>
      <div class="product__button-wrap">
        <button
          class="btn"
          :class="{
            'btn-danger': isInCart,
            'btn-primary': !isInCart
          }"
          @click="isInCart ? removeFromCart(id) : addToCart(id)"
        >
        {{isInCart ? 'Remove' : 'Add to cart'}}
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
    image: String
  },
  computed: {
    isInCart() {
      return this.$store.getters.isInCart(this.id);
    }
  },
  methods: {
    addToCart(id) {
      this.$store.dispatch("addToCart", { id });
    },
    removeFromCart(id) {
      this.$store.dispatch("removeFromCart", { id });
    }
  }
};
</script>

<style scoped lang="scss">
.product {
  overflow: hidden;
}

.product__price {
  display: inline-block;
  line-height: 34px;
}

.product__button-wrap {
  float: right;
}
</style>
