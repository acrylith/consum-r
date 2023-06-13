function createLineObject(item) {
    const lineItem = {
        price_data: {
            currency: 'gbp',
            product_data: {
                name: item.name,
                images: item.image
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

export async function POST(request, response) {
    if(request.method === 'POST') {        
        try {
            console.log(process.env.DOMAIN)
        } catch(err) {
            // res.status(err.statusCode || 500).json(err.message);
            console.log(err.message)
        }
    } else {
        response.setHeader('Allow', 'POST');
        response.status(405).end('Method Not Allowed');
    }
}