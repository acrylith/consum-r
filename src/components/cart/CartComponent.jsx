"use client"

import { checked, delVare } from "@/redux/slices/cartSlice"
import { Button, DarkThemeToggle, Dropdown } from "flowbite-react"
import Link from "next/link"
import { RiShoppingCart2Line as CartIcon, RiDeleteBin6Line as DelIcon} from "react-icons/ri"
import { useDispatch, useSelector } from "react-redux"

export default function CartComponent() {
    const vares = useSelector(state => state.cartReducer.vares)
    const notif = useSelector(state => state.cartReducer.notif)
    const dispatch = useDispatch()
    return (
        <div className="flex gap-4">
            <Dropdown color='primary' label={<i className={notif ? 'notif' : ''}><CartIcon /></i>} onClick={() => dispatch(checked())}>
                {vares.length > 0 ? vares.map(v => 
                    <Dropdown.Item key={v.id} className="flex justify-between">
                        <div className="flex gap-2 items-center mr-4">
                            <Button size='xs' color='failure' onClick={() => dispatch(delVare(v.id))}><DelIcon /></Button>
                            <Link href={`product/${v.slug}`}>{v.name}</Link>
                        </div>
                        <span className="font-bold">£{v.price * v.quantity}</span>
                    </Dropdown.Item>
                ) :
                    <p className="text-center p-2">Cart is Empty</p>
                }
                <Dropdown.Divider />
                <Link href='/cart' passHref>
                    <Dropdown.Item className="text-center min-w-48">Cart Page</Dropdown.Item>
                </Link>
            </Dropdown>
        </div>
    )
}