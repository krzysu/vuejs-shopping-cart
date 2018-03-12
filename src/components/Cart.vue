<template>
    <div>
        <h3>Shopping Cart</h3>

        <div class="cart">
            <div class="panel panel-default">
                <div class="panel-body">
                    items
                    <div class="cart__total">Total: {{total}} {{currency}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Cart",
  props: {
    total: Number,
    currency: String
  }
};
</script>

<style scoped lang="scss">
.cart__body {
  margin-bottom: 0.7em;
}

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

.cart__total {
  font-weight: bold;
  font-size: 1.5em;
  line-height: 1.1em;
  text-align: right;
}
</style>
