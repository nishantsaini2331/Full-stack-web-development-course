import React from "react";
import { addToCart } from "../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

function AddToCartBtn({info ,resInfo , handleIsDiffRes}) {

    const cartData = useSelector((state) => state.cartSlice.cartItems)
    const getResInfoFromLocalStore = useSelector((state) => state.cartSlice.resInfo)
    const dispatch = useDispatch()

    function handleAddToCart(){
        const isAdded = cartData.find((data) => data.id === info.id)

        if(!isAdded){
            if( getResInfoFromLocalStore.name === resInfo.name || getResInfoFromLocalStore.length === 0 ){
                dispatch(addToCart({info ,resInfo}))
                toast.success("food added to the cart")
            }else{
                toast.error("different restaurant ")
                handleIsDiffRes()
            }
            
        }else {
            toast.error("Already added " )
        }
    }

    return (
        <button
            onClick={handleAddToCart}
            className="bg-white absolute bottom-[-20px] left-1/2  -translate-x-1/2 text-lg text-green-700 font-bold rounded-xl border px-10 py-2 drop-shadow"
        >
            Add
        </button>
    );
}

export default AddToCartBtn;
