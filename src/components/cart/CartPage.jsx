"use client"

import { Button } from "flowbite-react"
import { useDispatch, useSelector } from "react-redux"
import { RiDeleteBin6Line as DelIcon} from "react-icons/ri"
import { delVare, lessVare, moreVare } from "@/redux/slices/cartSlice"
import Link from "next/link"
import getStripe from "@/getStripe"

export default function CartPage() {
    const vares = useSelector(state => state.cartReducer.vares)
    const dispatch = useDispatch()

    const handleCheckout = async () => {
        const stripe = await getStripe()
        const response = await fetch('/api/stripe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'Origin'
            },
            body: JSON.stringify(vares)
        })

        if(response === 500) return;

        const data = await response.json()
        // console.log(data)
        // alert('redirecting...')
        stripe.redirectToCheckout({ sessionId: data.id })
    }
    if(vares.length > 0) { 
        return (
            <>
                <ul className="flex flex-col gap-12 mb-6">
                    {vares.map(v =>
                        <li className="flex flex-wrap justify-between items-center" key={v.id}>
                            <div className="w-[80px]">
                                <img src={v.image} className="w-full object-contain aspect-square" />
                            </div>
                            <div className="grow">
                                <Link href={`product/${v.slug}`} passHref>
                                    <p className="text-center font-semibold text-lg">{v.name}</p>
                                </Link>
                            </div>
                            <div className="flex w-full mt-4 justify-between md:w-fit md:gap-8 md:mt-0 shrink-0 items-center">
                                <div>
                                    <div className="flex justify-evenly items-center shrink-0">
                                        <Button color='primary' size="xs" onClick={() => dispatch(lessVare(v.id))}>-</Button>
                                        <span className="text-lg font-semibold mx-4">{v.quantity}</span>
                                        <Button color='primary' size="xs" onClick={() => dispatch(moreVare(v.id))}>+</Button>
                                    </div>
                                </div>
                                <div>£{v.quantity * v.price}</div>
                                <div>
                                    <Button size="sm" color="failure" onClick={() => dispatch(delVare(v.id))}>
                                        <DelIcon />
                                    </Button>
                                </div>
                            </div>
                        </li>
                    )}
                </ul>
                <div className="flex justify-center">
                    <Button color='primary' onClick={handleCheckout}>Pay with Stripe</Button>
                </div>
            </>
        )
    } else {
        return (
            <h3 className="text-4xl text-center font-bold">Cart is Empty</h3>
        )
    }
}