"use client"

import { addVare } from '@/redux/slices/cartSlice'
import { urlFor } from '@/sanity'
import { Button, Card } from 'flowbite-react'
import Link from 'next/link'


export default function ProductCard(props) {
    const { p } = props
    const imgSrc = urlFor(p.image[0]).width(300).url()
    return (
        <Card className='text-stone-900 dark:text-gray-200'>
            <div className='w-full bg-white rounded-xl'>
                <img src={imgSrc} alt={p.slug.current} className='w-full h-full aspect-square object-contain'/>
            </div>
                <h3 className='font-semibold text-xl my-4'>{p.name}</h3>
            <div className='flex justify-between items-center flex-wrap'>
                <Link href={`product/${p.slug.current}`} passHref>
                    <Button color='primary'>View more...</Button>
                </Link>
                <span className='font-bold text-xl'>£{p.price}</span>
            </div>
        </Card>
    )
}
