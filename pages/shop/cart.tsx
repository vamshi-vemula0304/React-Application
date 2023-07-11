import { useRouter } from 'next/router';
import React from 'react';
import { products } from '../../utils/productsDb';


const ShoppingCart: React.FC = () => {
    const router = useRouter();
    let { props } = router.query;
    if (props === undefined || props === null) {
        props=JSON.stringify([0,0,0,0,0])
    }
    let items:number[]=JSON.parse(props as string)
    console.log(props)
    function getCartItemTotal() {
        let total = 0;
        items.forEach((itemQuantity: number) => {
            total += itemQuantity;
        });
        return total;
    }

    function getCartSubtotal() {
        let total = 0;
        items.forEach((itemQuantity, index) => {
            total += itemQuantity * products[index].price;
        });
        return total;
    }

    return (
        <div>
            <h1>Shopping Cart</h1>

            <h2>Cart:</h2>
            <p>Total Items: {getCartItemTotal()}</p>
            <p>Subtotal: ${getCartSubtotal()}</p>

            {/* <h2>Cart Items:</h2>
            <ul>
                {cartProducts.map((product) => (
                    <li key={product.id}>
                        {product.name} - ${product.price.toFixed(2)}
                        <button onClick={() => removeFromCart(product.id)}>Remove</button>
                    </li>
                ))}
            </ul> */}
        </div>
    );
};

export default ShoppingCart;
