"use client"

import { Button } from 'flowbite-react'
import Link from 'next/link'

export default function PaymentSuccesfull() {
    return (
        <div className='flex flex-col items-center gap-8'>
            <h2 className='text-6xl font-bold text-green-500'>Payment Succesfull</h2>
            <Link href='/' passHref>
                <Button>Back to shop</Button>
            </Link>
        </div>
    )
}
