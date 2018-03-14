import { getters, mutations } from "@/store";

const getProduct = (id, price = 100) => ({
  id,
  price
});

describe("getters", () => {
  it("getTotal", () => {
    const state = {
      cart: [getProduct(1, 100), getProduct(2, 150), getProduct(3, 50)]
    };

    expect(getters.getTotal(state)).toEqual(300);
  });

  it("isInCart", () => {
    const state = {
      cart: [getProduct(2, 150), getProduct(3, 50)]
    };
    expect(getters.isInCart(state)(3)).toEqual(true);
  });
});

describe("mutations", () => {
  it("addToCart", () => {
    const state = {
      products: [getProduct(1, 100), getProduct(2, 150), getProduct(3, 50)],
      cart: []
    };

    mutations.addToCart(state, { id: 2 });

    expect(state.cart.length).toEqual(1);
    expect(state.cart[0].id).toEqual(2);
  });

  it("removeFromCart", () => {
    const state = {
      products: [getProduct(1, 100), getProduct(2, 150), getProduct(3, 50)],
      cart: [getProduct(2, 100)]
    };

    mutations.removeFromCart(state, { id: 2 });

    expect(state.cart.length).toEqual(0);
  });
});
