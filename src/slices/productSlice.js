import { createSlice } from "@reduxjs/toolkit";
// import { api } from "../services/api";
const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    limit: 10,
    total: 0,
    hasMore: true,
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload.items;
      state.total = action.payload.total;
      state.hasMore = action.payload.items.length > 0;
    },
    appendProducts: (state, action) => {
      state.products = [...state.products, ...action.payload.products];
      state.total = action.payload.total;
      state.hasMore = action.payload.products.length > 0;
    },
    incrementPage: (state) => {
      state.limit += 10;
    },
  },

  // extraReducers: (builder) => {
  //   builder.addMatcher(
  //     api.endpoints.getProducts.matchFulfilled,
  //     (state, action) => {
  //       if (state.products.length === 0) {
  //         productSlice.caseReducers.setProducts(state, action);
  //       } else {
  //         productSlice.caseReducers.appendProducts(state, action);
  //       }
  //     }
  //   );
  // },
});

export const { incrementPage, setProducts } = productSlice.actions;
export default productSlice.reducer;
