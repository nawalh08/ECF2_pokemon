
import { configureStore } from "@reduxjs/toolkit";
import pokeSlice from "./screens/pokeSlice";



export default configureStore({
  reducer: {
    pokemon: pokeSlice,
  

  },
});