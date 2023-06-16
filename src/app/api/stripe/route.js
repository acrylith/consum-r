import { NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

function createLineObject(item) {
    const lineItem = {
        price_data: {
            currency: 'gbp',
            product_data: {
                name: item.name,
                images: [item.image]
            },
            unit_amount: item.price * 100
        },
        adjustable_quantity: {
            enabled: true,
            minimum: 1
        },
        quantity: item.quantity
    }
    // console.log(lineItem)
    return lineItem
}

export async function POST(req, res) {
    if (req.method === 'POST') {
        const cart = await req.json()
        try {
          // Create Checkout Sessions from body params.
          const session = await stripe.checkout.sessions.create({
            line_items: cart.map(item => createLineObject(item)),           
            submit_type: 'pay',
            mode: 'payment',
            invoice_creation: {
                enabled: true
            },
            payment_method_types: ['card'],
            billing_address_collection: 'auto',
            shipping_address_collection: {
                allowed_countries: ['UA', 'GB', 'PL']
            },
            shipping_options: [
                { shipping_rate: 'shr_1NHoSPHV3IoOa2eXABIHbBUA' },
                { shipping_rate: 'shr_1NHoTaHV3IoOa2eXYRC5Emge' }
            ],
            success_url: `${process.env.DOMAIN}/success`,
            cancel_url: `${process.env.DOMAIN}/cart`,
        });
        // res.status(200).json(session);
        // console.log(session)
        return new NextResponse(JSON.stringify(session))
        // return new NextResponse.json(
        //     { body: session }, 
        //     { headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'Origin'} }
        // )
        } catch (err) {
            // res.status(err.statusCode || 500).json(err.message);
            // console.log(err.message)
            return new NextResponse(JSON.stringify(err))
        }
      } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}
