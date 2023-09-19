'use client'
import useProductStore from "@/store/product.store";
import { Box, Typography, Divider, Button } from '@mui/material'
import Gallery from "@/components/Gallery";
import SalesInfo from "@/components/SalesInfo";
import DiscountIcon from '@mui/icons-material/Discount';
import Link from "next/link";
import useUserStore from "@/store/user.store";
import { useState } from 'react';

function ProductPage({ params }: { params: { id: string } }) {
    const { products } = useProductStore();
    const { setCart, cart } = useUserStore();
    const { price, oldPrice, rating, images, description, sold, name, id } = products!.find(p => p.id === Number(params.id));
    const existInCart = cart.filter(c => c.id === id);
    const discount = Math.round((oldPrice - price) / (oldPrice / 100));

    const [step, setStep] = useState(1);

    const handleIncrement = () => {
        setStep(step + 1);
    };

    const handleDecrement = () => {
        setStep(step - 1);
    };

    if (!name) {
        return <div>Loading</div>
    }

    const total = price * step;

    return (
        <Box sx={{
            display: 'flex',
            padding: '2rem',
            gap: '1rem',
            boxSizing: 'border-box'
        }}>
            <Gallery images={images} />
            <Box sx={{ width: '50vw', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <Typography variant="h5">{name}</Typography>
                <SalesInfo
                    rating={rating}
                    sold={sold}
                />
                <Typography variant="body2">{description}</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ display: 'flex', gap: '1rem' }}>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}>
                            <Typography variant="h6">
                                -{discount}%
                            </Typography>
                            <DiscountIcon />
                        </Box>
                        <Typography variant="h4">${price}</Typography>
                    </Box>
                    <Typography variant="h6" sx={{ color: "#8d8a8a" }}>was: ${oldPrice}</Typography>
                </Box>
            </Box>
            <Box sx={{
                border: '2px solid #e6e6e6',
                width: '25vw',
                borderRadius: '5px',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                padding: '1rem',
                boxSizing: 'border-box'
            }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems:'center',
                    border: '1px solid #e6e6e6',
                    borderRadius: '5px',
                }}>
                    <Button variant="contained" onClick={handleDecrement} disabled={step === 1}>-</Button>
                    <span>{step}</span>
                    <Button variant="contained" onClick={handleIncrement}>+</Button>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body1">Price</Typography>
                    <Typography variant="h6">{step} x ${price}</Typography>
                </Box>
                <Divider />
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body1">Total</Typography>
                    <Typography variant="h6">${total}</Typography>
                </Box>
                <Button onClick={() => setCart(id, step)} variant="contained">{existInCart ? "In Cart" : "Add to Cart"}</Button>
                <Link href={`/cart`} passHref>
                    <Button sx={{ width: '100%' }} variant="outlined">Buy Now</Button>
                </Link>
            </Box>
        </Box>
    );
}

export default ProductPage;
