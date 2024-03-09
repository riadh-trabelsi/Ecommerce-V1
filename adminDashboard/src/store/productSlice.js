import axios from "axios";
import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk("fetching/products", async () => {
  const result = await axios.get("http://localhost:5173/data.json");
  return result.data;
});

export const getOneProduct = createAsyncThunk("fetching/oneProduct", async (id) => {
  const result = await axios.get("http://localhost:5173/data.json");
 let founded = result.data.find(e=>e.id===+id)
 return founded
});
export const search = createAsyncThunk("search/products", async (query) => {
  const result = await axios.get("http://localhost:5173/data.json");
 let founded = result.data.filter(e=>e.productName.toLowerCase().includes(query.toLowerCase()))
 return founded
});
export const productSlice = createSlice({
 name:"products",
 initialState:{
    products:[],
    product:{}
 },
 reducers:{},
 extraReducers (builder){
    builder.addCase(getProducts.fulfilled, (state, action)=>{
        state.products=action.payload
    })
    builder.addCase(search.fulfilled, (state, action)=>{
        state.products=action.payload
    })
    builder.addCase(getOneProduct.fulfilled, (state, action)=>{
        state.product=action.payload
    })
 }   
})
export default productSlice.reducer