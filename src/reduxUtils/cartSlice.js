import { createSlice } from "@reduxjs/toolkit";
import {  toast } from 'react-toastify';

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[],
        totalItems:localStorage.getItem("totalCost")?localStorage.getItem("totalCost"):0,
        totalCartItems:0
    },
    reducers:{
        addItem:(state,action)=>{
            
        const sameItem=state.items.findIndex((item)=>item.card.info.id===action.payload.card.info.id)
        if(sameItem>=0){
            state.items[sameItem].itemCount+=1
            state.totalCartItems+=1
            toast.success("Added to cart",{
                position:"bottom-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                
            })

        }
        else{
            const temp={...action.payload,itemCount:1}
            state.totalCartItems+=1
            state.items.push(temp)
            toast.success("Added to cart",{
                position:"bottom-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                
            })
        }
       
        localStorage.setItem("cartItems",JSON.stringify(state.items))
       
         
        },
        removeItem:(state,action)=>{
            const temp=state.items.findIndex((item)=>item.card.info.id===action.payload)
            state.items[temp].itemCount-=1
            state.totalCartItems-=1
            if(state.items[temp].itemCount===0){
                state.items.splice(temp,1)
            }
            localStorage.setItem("cartItems",JSON.stringify(state.items))
            

        },
        clearCart:(state)=>{
            state.items.length=0
            state.totalItems=0
            localStorage.setItem("cartItems",JSON.stringify([]))
            localStorage.setItem("totalCost",0)
        },
        totalAdd:(state,action)=>{
           
            state.totalItems=parseInt(state.totalItems)+action.payload
            localStorage.setItem("totalCost",state.totalItems)

        },
        totalDeduct:(state,action)=>{

            state.totalItems=parseInt(state.totalItems)-action.payload
            localStorage.setItem("totalCost",state.totalItems)

        }
    }
})
export const {addItem,removeItem,clearCart,totalAdd,totalDeduct}=cartSlice.actions;
export default cartSlice.reducer;