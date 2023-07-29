import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedProduct: [],
}

export const pcBuilderSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
   addToPcBuilder:(state,action)=>{
    state.selectedProduct.push(action.payload)
   }
  },
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions
export const {addToPcBuilder} = pcBuilderSlice.actions
export default pcBuilderSlice.reducer