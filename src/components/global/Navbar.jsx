import Link from "next/link"
import CartComponent from "../cart/CartComponent"
import SearchComponent from "./SearchComponent"

export default function Navbar() {
    return (
        <nav className='shadow-lg fixed top-0 w-full bg-white z-50'>
            <div className="py-6 container">
                <div className="flex justify-between">
                    <Link href='/' className="text-3xl font-bold">Consum-R</Link>
                    <div className="flex gap-6">
                        <SearchComponent />
                        <CartComponent />
                    </div>
                </div>
            </div>
        </nav>
    )
}