import ProductCard from '@/components/ProductCard'
import { client } from '@/sanity'
import Link from 'next/link'

const fetchResult = async (search) => {
    const query = `*[_type == 'product' && name match "${search}"]`
    const result = await client.fetch(query)
    return result
}

export default async function page({ searchParams }) {
    const result = await fetchResult(searchParams.q)
    console.log(result)
    return (
        <main className='pt-28'>
            <div className="container relative mb-6">
                <Link className="absolute -translate-y-1/2 top-1/2 left-0 text-lg font-semibold" href='/'>&lt; Home</Link>
                <h2 className="text-3xl text-center font-semibold">Search page</h2>
            </div>
            <section className='bg-slate-200 py-12'>
                <div className='container'>
                    {
                        result.length > 0 ?
                        <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
                            {result.map(item => <ProductCard key={item._id} p={item} />)}
                        </div> :
                        <h1 className='text-center text-lg font-semibold'>Sorry, there's no matches</h1>
                    }
                </div>
            </section>
        </main>
    )
}