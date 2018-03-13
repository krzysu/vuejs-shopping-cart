<template>
  <div class="cart-item">
    <div>
      <button class="btn btn-danger btn-xs" @click="removeFromCart(id)">
        X
      </button>
      <span class="cart-item__name">
        {{name}}
      </span>
    </div>
    <div class="cart-item__price">
      {{price}} {{currency}}
    </div>
  </div>
</template>

<script>
export default {
  name: "CartItem",
  props: {
    id: Number,
    name: String,
    price: Number,
    currency: String
  },
  methods: {
    removeFromCart(id) {
      this.$store.dispatch("removeFromCart", { id });
    }
  }
};
</script>

<style scoped lang="scss">
.cart-item {
  margin-bottom: 0.3em;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cart-item__name {
  margin-left: 0.5em;
  vertical-align: middle;
}

.cart-item__price {
  font-weight: bold;
}
</style>
