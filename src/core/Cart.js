import React, {useState, useEffect} from 'react'
import Base from "./Base"
import Card from  './Card'
import { loadCart } from './helper/cartHelper'
import PaymentB  from './PaymentB'

const Cart = () => {
    const [reload, setReload] = useState(false)
    const [products,  setProducts] = useState([])

    useEffect(() => {
        setProducts(loadCart())
    }, [reload])

    const loadallProducts = (products) => {
        return(
            <div>
                {products.map((product, index) => (
                    <Card 
                    key={index}
                    product={product}
                    removeFromCart={true}
                    addtoCart={false}
                    reload={reload}
                    setReload={setReload}
                    />
                ))}
            </div>
        )
    }

    const loadCheckout = () => {
        return(
            <div>
                <h1>
                    Checkout
                </h1>
            </div>
        )
    }
    return(
        <Base title="Cart Page" description="Welcome to checkout">
            <div className="row text-center">
        <div className="col-6">
          {products.length > 0 ? (loadallProducts(products)) : (
            <h4>No products</h4>
          )}
        </div>
                <div className="co-6">
                    {products.length > 0 ? 
                    (
                        <PaymentB products={products} setReload={setReload}/>
                    ) : 
                    (
                        <h3>Please login or add something in cart</h3>
                    )}
                </div>
            </div>
        </Base>
    )
}

export default Cart