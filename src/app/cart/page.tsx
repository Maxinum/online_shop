'use client'

import { useState } from "react";
import { Box, Typography, Button, Divider } from "@mui/material";
import useUserStore from "@/store/user.store";
import useProductStore from "@/store/product.store";
import Image from "next/image";
import SalesInfo from "@/components/SalesInfo";
import Link from "next/link";
import PaymentModal from "./components/PaymentModal";

const CartPage = () => {
    const { products } = useProductStore();
    const { cart, updateCart } = useUserStore();
    const [open, setOpen] = useState(false);

    let total = 0;
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '2rem'
        }}>
            <Box sx={{
                width: '70vw'
            }}>
                {cart.map((item, index) => {
                    const { name, images, rating, sold } = products.filter(p => p.id === item.id)[0];
                    const nextStep = item.qty + 1;
                    const prevStep = item.qty - 1;
                    return <Box
                        border="1px solid #e6e6e6"
                        borderRadius="5px"
                        key={index}
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        sx={{
                            boxSizing: 'border-box',
                            padding: '1rem',
                            display: 'flex',
                        }}
                    >
                        <Link href={`/product/${item.id}`}>
                            <Image
                                style={{
                                    cursor: 'pointer'
                                }}
                                alt={name}
                                src={images[0]}
                                width={170}
                                height={150}
                            />
                        </Link>
                        <Box width="50%" display="flex" flexDirection="column" gap="1rem">
                            <Typography variant="h6">
                                {name}
                            </Typography>
                            <SalesInfo rating={rating} sold={sold} />
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            border: '1px solid #e6e6e6',
                            borderRadius: '5px',
                            width: '20%',
                        }}>
                            <Button
                                variant="contained"
                                onClick={() => updateCart(item.id, prevStep)}
                                disabled={item.qty === 1}
                            >
                                -
                            </Button>
                            <span>{item.qty}</span>
                            <Button
                                variant="contained"
                                onClick={() => updateCart(item.id, nextStep)}
                            >
                                +
                            </Button>
                        </Box>
                    </Box>
                })}
            </Box>
            <Box sx={{
                border: '2px solid #e6e6e6',
                width: '25vw',
                height: '75vh',
                borderRadius: '5px',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                padding: '1rem',
                boxSizing: 'border-box',
                justifyContent: 'space-between'
            }}>
                <Box display="flex" flexDirection="column" overflow="auto">
                    <Typography>Text</Typography>
                    {cart.map((item, index) => {
                        const { price, name } = products.filter(p => p.id === item.id)[0];
                        total += item.qty * price;
                        return <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography width="75%" variant="body1">{name}</Typography>
                            <Typography width="25%" variant="h6">{item.qty} x ${price}</Typography>
                        </Box>
                    })}
                </Box>
                <Box display="flex" flexDirection="column" gap="1rem">
                    <Divider />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="body1">Total</Typography>
                        <Typography variant="h6">${total}</Typography>
                    </Box>
                    <Button onClick={()=>setOpen(true)} variant="contained">Order Now</Button>
                </Box>
            </Box>
            <PaymentModal open={open} handleClose={() => setOpen(prev => !prev)} />
        </Box>
    )
}

export default CartPage;