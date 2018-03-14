import { shallow } from "@vue/test-utils";
import Product from "@/components/Product.vue";

const exampleProduct = {
  id: 1,
  name: "Test Product",
  price: 350,
  currency: "EUR",
  image: "path/to/the/image.jpg"
};

describe("Product.vue", () => {
  it("renders product", () => {
    const wrapper = shallow(Product, {
      propsData: exampleProduct,
      mocks: {
        $store: {
          getters: {
            isInCart: () => false
          },
          dispatch: () => {}
        }
      }
    });

    expect(wrapper.contains("img")).toEqual(true);
    expect(wrapper.find("img").attributes().src).toEqual(exampleProduct.image);
    expect(wrapper.find("h3").text()).toEqual(exampleProduct.name);
    expect(wrapper.find(".product__price").text()).toEqual(
      `${exampleProduct.price} ${exampleProduct.currency}`
    );
    expect(wrapper.find("button").text()).toEqual("Add to cart");
    expect(wrapper.find("button").classes()).toContain("btn-primary");
  });

  it("renders product added to cart", () => {
    const wrapper = shallow(Product, {
      propsData: exampleProduct,
      mocks: {
        $store: {
          getters: {
            isInCart: () => true
          },
          dispatch: () => {}
        }
      }
    });

    expect(wrapper.find("button").text()).toEqual("Remove");
    expect(wrapper.find("button").classes()).toContain("btn-danger");
  });
});
