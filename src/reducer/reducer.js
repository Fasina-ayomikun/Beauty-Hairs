function reducer(state, action) {
  if (action.type === "LOADING") {
    return { ...state, products_loading: true };
  }
  if (action.type === "UPDATE_SORT") {
    const value = action.payload;
    return { ...state, sort: value };
  }
  if (action.type === "GET_PRODUCTS") {
    return {
      ...state,
      products_loading: false,
      all_products: action.payload,
      filtered_products: [...action.payload],
    };
  }
  if (action.type === "UPDATE_FILTERS") {
    const { name, value } = action.payload;
    return {
      ...state,
      [name]: value,
    };
  }
  if (action.type === "FILTER_PRODUCTS") {
    const { text, category } = state;
    let tempProducts = [...state.all_products];
    if (text) {
      tempProducts = tempProducts.filter((product) =>
        product.name.toLowerCase().includes(text)
      );
      state.category = "all";
    }
    if (category !== "all") {
      tempProducts = tempProducts.filter(
        (product) => product.category === category
      );
      console.log(tempProducts);
      state.text = "";
    }

    return {
      ...state,
      filtered_products: tempProducts,
    };
  }
  if (action.type === "SINGLE_LOADING") {
    return { ...state, single_product_loading: true };
  }
  if (action.type === "GET_SINGLE_PRODUCT") {
    const id = action.payload;

    let tempProducts = state.all_products.find(
      (product) => product.id.toString() === id
    );

    return {
      ...state,
      single_product_loading: false,
      single_product: tempProducts,
    };
  }
  if (action.type === "ADD_TO_CART") {
    const { id, amount, product } = action.payload;
    let tempProducts = state.cart.find(
      (product) => product.id.toString() === id
    );
    if (tempProducts) {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id.toString() === id) {
          let newAmount = cartItem.amount + amount;
          if (newAmount > 20) {
            newAmount = 20;
          }
          return { ...cartItem, amount: newAmount };
        } else {
          return cartItem;
        }
      });

      return { ...state, cart: tempCart };
    } else {
      const newItem = {
        id,
        name: product.name,
        amount,
        image: product.image,
        price: product.price,
      };

      return {
        ...state,
        cart: [...state.cart, newItem],
      };
    }
  }
  if (action.type === "TOGGLE_BTN") {
    const { id, value } = action.payload;
    const tempItems = state.cart.map((item) => {
      if (item.id.toString() === id) {
        if (value === "increase") {
          let newAmount = item.amount + 1;
          if (newAmount > 20) {
            newAmount = 20;
          }

          return { ...item, amount: newAmount };
        }
        if (value === "decrease") {
          let newAmount = item.amount - 1;
          if (newAmount < 1) {
            newAmount = 1;
          }

          return { ...item, amount: newAmount };
        }
      }
      return item;
    });
    return { ...state, cart: tempItems };
  }

  if (action.type === "REMOVE_BTN") {
    const id = action.payload;
    const tempItems = state.cart.filter((item) => item.id.toString() !== id);

    return { ...state, cart: tempItems };
  }
  if (action.type === "CART_TOTALS") {
    const { total_people, total_price } = state.cart.reduce(
      (total, item) => {
        const { amount, price } = item;
        total.total_people += amount;
        total.total_price += amount * price;
        return total;
      },
      {
        total_people: 0,
        total_price: 0,
      }
    );
    return { ...state, total_people, total_price };
  }
  throw new Error(`action type of ${action.type} no found`);
}

export default reducer;
