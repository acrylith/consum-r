"use client"

import { Button } from "flowbite-react"
import { useDispatch, useSelector } from "react-redux"
import { addVare, delVare, lessVare, moreVare } from "@/redux/slices/cartSlice"
import { useState } from "react"

export default function AddToCart(props) {
    const { p, img } = props
    const [quantity, setQuantity] = useState(1)
    const inCart = useSelector(state => state.cartReducer.vares.find(v => v.id === p._id))
    const dispatch = useDispatch()
    const add = () => {
        dispatch(addVare({
            id: p._id,
            slug: p.slug.current,
            name: p.name,
            image: img,
            price: p.price,
            quantity: quantity
        }))
    }
    const del = () => {
        dispatch(delVare(p._id))
        setQuantity(1)
    }
    const quantityCounter = {
        inc: () => {
            if(inCart !== undefined) {
                dispatch(moreVare(p._id))
            } else {
                if(quantity < 10) {
                    setQuantity(quantity + 1)
                }
            }
        },
        dec: () => {
            if(inCart !== undefined) {
                dispatch(lessVare(p._id))
            } else {
                if(quantity > 1) {
                    setQuantity(quantity - 1)
                }
            }
        }
    }
    return (
        <div className="flex justify-evenly flex-wrap items-center flex-grow mb-6">
            <span className='font-semibold text-xl w-full sm:w-auto inline-block text-center'>£{p.price}</span>
            <div className="flex shrink-0 items-center">
                <span className="mr-2">Quantity:</span>
                <Button color='primary' size='xs' onClick={quantityCounter.dec}>-</Button>
                <span className="text-lg font-semibold mx-2">{inCart !== undefined ? inCart.quantity : quantity}</span>
                <Button color='primary' size='xs' onClick={quantityCounter.inc}>+</Button>
            </div>
            {
                inCart !== undefined ?
                <Button color='failure' onClick={() => del()}>Remove from cart</Button> :
                <Button color='primary' onClick={() => add()}>Add to Cart</Button>
            }
        </div>
    )
}
