"use client"

import { decrement, increment, reset } from "@/redux/slices/counterSlice"
import { useDispatch, useSelector } from "react-redux"

export default function Counter() {
    const count = useSelector(state => state.counterReducer.value)
    const dispatch = useDispatch()
    return (
        <div className="w-48 mx-auto">
            <h4 className="text-2xl font-semibold">Counter: {count}</h4>
            <div className="flex justify-between text-white text-xl font-medium">
                <button className="p-2 bg-blue-500" onClick={() => dispatch(decrement())}>-</button>
                <button className="p-2 bg-red-500" onClick={() => dispatch(reset())}>Clear</button>
                <button className="p-2 bg-green-500" onClick={() => dispatch(increment())}>+</button>
            </div>
        </div>
    )
}
