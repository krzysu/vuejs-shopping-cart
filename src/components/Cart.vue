<template>
  <div>
    <h3>Shopping Cart</h3>
    <div class="cart">
      <div class="panel panel-default">
        <div class="panel-body">
          <div class="cart__body" v-if="items.length > 0">
            <CartItem
              v-for="item in items"
              :key="item.id"
              :name="item.name"
              :price="item.price"
              :currency="item.currency"
            />
          </div>
          <div class="alert alert-info" v-if="items.length === 0">
            Cart is empty
          </div>
          <div class="cart__total">Total: {{total}} {{currency}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartItem from "./CartItem.vue";
import data from "../data/products";

export default {
  name: "Cart",
  components: {
    CartItem
  },
  props: {
    items: {
      type: Array,
      default: () => data
    },
    total: {
      type: Number,
      default: 0
    },
    currency: String
  }
};
</script>

<style scoped lang="scss">
.cart__body {
  margin-bottom: 0.7em;
}

.cart__total {
  font-weight: bold;
  font-size: 1.5em;
  line-height: 1.1em;
  text-align: right;
}
</style>
