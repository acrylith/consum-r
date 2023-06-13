import ProductCard from '@/components/ProductCard'
import { client } from '@/sanity'
import Link from 'next/link'

const fetchProducts = async () => {
    const query = "*[_type == 'product']"
    const products = await client.fetch(query)
    return products
}

const fetchCategories = async () => {
    const query = '*[_type == "category"] {_id,name,"slug": slug.current}'
    const categories = await client.fetch(query)
    return categories
}

export default async function Home() {
    const products = await fetchProducts()
    const categories = await fetchCategories()
    return (
        <main className='pt-20'>
            <div className='container'>
                <ul className='mt-4 py-8 flex gap-4 flex-wrap'>
                    {categories.map(link => 
                        <Link key={link._id} href={`category/${link.slug}`} passHref>
                            <li className='border-2 text-purple-700 hover:text-white hover:bg-purple-700 border-purple-700 py-2 px-4 rounded-2xl'>
                                {link.name}
                            </li>
                        </Link>
                    )}
                </ul>
            </div>
            <section className='bg-slate-200 py-12'>
                <div className='container'>
                    <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
                        {products.map(p => <ProductCard p={p} />)}
                    </div>
                </div>
            </section>
        </main>
    )
}
