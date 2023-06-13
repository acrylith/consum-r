import ProductCard from "@/components/ProductCard"
import { client } from "@/sanity"
import Link from "next/link"

const fetchCategory = async (slug) => {
    const query = `
        *[_type == 'category' && slug.current == '${slug}'] {
            _id,
            name,
            products[]->{
                _id,
                name,
                image,
                "slug": slug.current,
                price
            }
        }
    `
    const category = await client.fetch(query)
    return category
}

export default async function page({params: { slug }}) {
    const category = await fetchCategory(slug)
    const { name, products } = category[0]
    return (
        <main className="pt-28">
            <div className="container relative mb-6">
                <Link className="absolute -translate-y-1/2 top-1/2 left-0 text-lg font-semibold" href='/'>&lt; Home</Link>
                <h2 className="text-3xl text-center font-semibold">{name}</h2>
            </div>
            <section className='bg-slate-200 py-12'>
                <div className="container">
                    <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
                        {products.map(item => <ProductCard p={item} />)}
                    </div>
                </div>
            </section>
            
        </main>
    )
}