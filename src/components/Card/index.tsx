import React from 'react';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import StarIcon from '@mui/icons-material/Star';
import { Box, Divider, CardActions, CardContent, CardMedia, Card, IconButton, Typography } from '@mui/material'

interface ICard {
    name: string;
    rating: string;
    sold: number;
    price: number;
    oldPrice: number;
    images: string[];
}

const CardBlock = ({ name, rating, sold, price, oldPrice, images }: ICard) => {
    return (
        <Card>
            <CardMedia
                sx={{ cursor: "pointer" }}
                component="img"
                height="194"
                image={images[0]}
                alt="Paella dish"
            />
            <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                    <Typography variant="h6" component="div">
                        ${price}
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ textDecoration: 'line-through' }}
                    >
                        ${oldPrice}
                    </Typography>
                </Box>
                <Typography variant="body1" color="text.secondary">
                    {name}
                </Typography>
            </CardContent>
            <CardActions disableSpacing sx={{
                display: 'flex',
                justifyContent: 'space-between',
            }}>
                <Box sx={{
                    display: 'flex',
                    gap: '0.5rem'
                }}>
                    <Box sx={{
                        backgroundColor: '#ed6c02',
                        display: 'flex',
                        gap: '0.5rem',
                        padding: '0 0.5rem',
                        borderRadius: '20px',
                        alignItems: 'center',
                        color: 'white',
                    }}>
                        <StarIcon color='inherit' fontSize='small' />
                        <Typography variant="body1">
                            {rating}
                        </Typography>
                    </Box>
                    <Divider orientation="vertical" flexItem />
                    <Typography variant="body1">
                        Sold {sold}
                    </Typography>
                </Box>
                <Box sx={{
                    backgroundColor: '#ed6c02',
                    color: 'white',
                    borderRadius: '40px'
                }}>
                    <IconButton aria-label="delete" sx={{
                        color: 'white'
                    }}>
                        <ShoppingBasketOutlinedIcon fontSize="inherit" />
                    </IconButton>
                </Box>
            </CardActions>
        </Card>
    );
}

export default CardBlock;