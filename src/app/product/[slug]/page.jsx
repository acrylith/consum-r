import AddToCart from "@/components/product/AddToCart"
import Gallery from "@/components/product/Gallery"
import { client, urlFor } from "@/sanity"

const fetchProduct = async (slug) => {
    const query = `*[slug.current == '${slug}']`
    const product = await client.fetch(query)
    return product
}

export default async function page({ params: { slug } }) {
    const product = await fetchProduct(slug)
    const imgSrc = urlFor(product[0]?.image[0]).url()
    return (
        <main className="pt-28">
            <div className="container">
                <h2 className="text-center text-3xl font-bold my-12">{product[0]?.name}</h2>
                <div className="flex flex-col lg:flex-row lg:justify-between gap-6">
                    <Gallery image={product[0]?.image} />
                    <div className="flex-grow">
                        <AddToCart p={product[0]} img={imgSrc} />
                        <p className="mb-8">{product[0]?.description}</p>
                    </div>
                </div>
            </div>
        </main>
    )
}