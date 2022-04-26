import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = [
    {id: {nanoid}, img: "", title: "iPhone 12 pro max", content: "This is iPhone 12 mro max."},
    {id: {nanoid}, img: "", title: "iPhone 13 pro max", content: "This is iPhone 13 mro max."}
]

export const mobileSlice = createSlice({
    name:"mobiles",
    initialState,
    reducers: {}
})

export const saveAllProduct = (state) => state.mobiles;

export default mobileSlice.reducer