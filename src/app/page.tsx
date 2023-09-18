'use client'

import Filter from "@/components/Filter";
import { Box, Typography } from "@mui/material";
import Card from '@/components/Card';

const Home = () => {
  const data = JSON.parse(localStorage.getItem("products"));
  return (
    <Box sx={{
      padding: '2rem',
      boxSizing: 'border-box',
      display: 'flex',
      justifyContent: 'space-between'
    }}>
      <Filter />
      <Box>
        <Box sx={{ padding: "1rem 0" }}>
          <Typography variant="h5">
            Result : {data.length} items
          </Typography>
        </Box>
        <Box sx={{
          width: '70vw',
          gap: '1rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          justifyContent: 'space-between',
          alignItems: 'start'
        }}>

          {JSON.parse(localStorage.getItem("products"))?.map((product, index) => (
            <Card key={index} {...product} />
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default Home;