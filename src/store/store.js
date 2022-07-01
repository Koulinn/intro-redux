import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/productsSlice";
import userSlice from "./slices/userSlice";

export default configureStore({
  reducer: {
    products: productsSlice,
    user: userSlice,
  },
});
