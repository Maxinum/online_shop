import { Box, Typography } from '@mui/material'
import DiscountIcon from '@mui/icons-material/Discount';
import SalesInfo from "@/components/SalesInfo";
import { IProduct } from '@/store/product.store';
import classes from '../product.module.css'

const ProductDetails = ({ name, rating, sold, oldPrice, description, price }: IProduct) => {

    const discount = Math.round((oldPrice - price) / (oldPrice / 100));

    return (
        <Box className={classes.productDetails}>
            <Typography variant="h5">{name}</Typography>
            <SalesInfo
                rating={rating}
                sold={sold}
            />
            <Typography variant="body2">{description}</Typography>
            <Box display="flex" flexDirection="column" >
                <Box display="flex" gap="1rem">
                    <Box display="flex" alignItems="center">
                        <Typography variant="h6">
                            -{discount}%
                        </Typography>
                        <DiscountIcon />
                    </Box>
                    <Typography variant="h4">${price}</Typography>
                </Box>
                <Typography variant="h6" color="gray">was: ${oldPrice}</Typography>
            </Box>
        </Box>
    )
}

export default ProductDetails;