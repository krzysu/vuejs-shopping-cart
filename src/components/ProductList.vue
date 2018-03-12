<template>
    <div>
        <h3>Products</h3>
        <ul class="product-list">
            <li class="product-list__item">
                item
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "ProductList",
  props: {}
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
