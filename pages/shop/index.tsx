import React, { useState, useEffect } from 'react';
import { products } from '../../utils/productsDb';
import styles from '../../styles/product.module.css';
import ShoppingCart from './cart';
import Link from 'next/link';

const ProductSelection: React.FC = () => {
    const [count, setCount] = useState<number[]>(Array(products.length).fill(0));

    useEffect(() => {
        setCount(Array(products.length).fill(0));
    }, []);

    function reduceCount(index: number) {
        if (count[index] !== 0) {
            setCount((prevCount) => {
                const updatedCount = [...prevCount];
                updatedCount[index] = prevCount[index] - 1;
                return updatedCount;
            });
        }
    }

    function increaseCount(index: number) {
        setCount((prevCount) => {
            const updatedCount = [...prevCount];
            updatedCount[index] = prevCount[index] + 1;
            return updatedCount;
        });
    }
    return (
        <div className={styles.centerContainer}>
            <h1>Product Selection</h1>
            <ul>
                {products.map((product, index) => (
                    <ul key={product.id}>
                        <div className={styles.product}>
                            <span>{product.name} - ${product.price.toFixed(2)}</span>
                            <div className={styles.countContainer}>
                                <button onClick={() => reduceCount(index)}>-</button>
                                <div>{count[index]}</div>
                                <button onClick={() => increaseCount(index)}>+</button>
                            </div>
                        </div>
                    </ul>
                ))}
            </ul>
            <Link href={{
                pathname: '/shop/cart',
                query: { props: JSON.stringify(count) }
            }}>
                <button>Go to Cart</button>
            </Link>
        </div>
    );
};

export default ProductSelection;
