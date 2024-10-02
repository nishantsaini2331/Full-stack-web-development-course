import { createSlice } from "@reduxjs/toolkit";


const toogleSlice = createSlice({
    name : "toogleSlice",
    initialState : {
        searchBarToogle  : false ,
        loginToggle : false,
        isDiffRes :false,
        similarResDish : {
            isSimilarResDishes : false,
            city : "",
            resLocation : "",
            resId : "",
            itemId : ""
        }

    },
    reducers : {
        toogleSearchBar : (state , action) => {
            state.searchBarToogle = !state.searchBarToogle
        },
        toggleLogin : (state) => {
            state.loginToggle = !state.loginToggle
        },
        toggleDiffRes : (state) => {
            state.isDiffRes = !state.isDiffRes
        
        },
        setSimilarResDish : (state ,action) => {
            state.similarResDish = action.payload
        },
        resetSimilarResDish : (state) => {
            state.similarResDish = {
                isSimilarResDishes : false,
                city : "",
                resLocation : "",
                resId : "",
                itemId : ""
            }
        }
    }
})


export const { toogleSearchBar, toggleLogin , toggleDiffRes,setSimilarResDish , resetSimilarResDish } = toogleSlice.actions
export default toogleSlice.reducer