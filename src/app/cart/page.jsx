import CartPage from '@/components/cart/CartPage'
import React from 'react'

export default function page() {
    return (
        <main className='pt-24'>
            <div className='container'>
                <h2 className='text-2xl font-semibold text-center my-6'>Checkout Page</h2>
                <CartPage />
            </div>
        </main>
    )
}