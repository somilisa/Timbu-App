import { createSlice } from "@reduxjs/toolkit";

// Helper function to load state from local storage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("cart");
    if (serializedState === null) {
      return { items: [], totalPrice: 0 };
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return { items: [], totalPrice: 0 };
  }
};

// Helper function to save state to local storage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("cart", serializedState);
  } catch (err) {
    // Ignore write errors
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState: loadState(),
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        state.items.push(item);
      }
      state.totalPrice += item.current_price * item.quantity;
      saveState(state);
    },
    removeFromCart: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.totalPrice -=
          state.items[index].current_price * state.items[index].quantity;
        state.items.splice(index, 1);
        saveState(state);
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
        state.totalPrice += item.current_price;
        saveState(state);
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalPrice -= item.current_price;
        saveState(state);
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
      saveState(state);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
