import { createSlice } from "@reduxjs/toolkit";


const filterSlice = createSlice({
    name : "filterSlice",
    initialState : {
        filterVal : null 
    },
    reducers : {
        setFilterValue : (state,action) => {
            state.filterVal = action.payload
        }
    },
})

export const {setFilterValue} = filterSlice.actions;
export default filterSlice.reducer