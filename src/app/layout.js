import { StateProvider } from '@/redux/StateProvider'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/global/Navbar'
import Footer from '@/components/global/Footer'
import FlowbiteProvider from '@/components/global/FlowbiteProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Consum-R',
  description: 'E-commerce portfolio project',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`min-h-screen pb-[104px] relative dark:bg-gray-800 ${inter.className}`}>
                <StateProvider >
                    <FlowbiteProvider>
                        <Navbar />
                        {children}
                        <Footer />
                    </FlowbiteProvider>
                </StateProvider>
            </body>
        </html>
    )
}
