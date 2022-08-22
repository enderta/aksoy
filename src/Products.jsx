import React from 'react'
import prods from "./prods.js"
import "./App.css"


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import TextField from '@mui/material/TextField';
import Carousel from 'better-react-carousel'



const Products = () => {
    const [search, setSearch] = React.useState('')
    const [filter, setFilter] = React.useState(prods)

    const handleSearch = (e) => {
        setSearch(e.target.value)
        const filtered = prods.filter(prod => prod.name.toLowerCase().includes(e.target.value.toLowerCase()))
        setFilter(filtered)

    }
console.log(filter)



  return (
    <div >
     
    <div className="container"  >
   
    
 
    </div>
    <div style={{marginTop: '10px'}}>
         <Carousel cols={4} rows={1} gap={0} loop  >
        {prods.map((item, index) => {
            return (
                <Carousel.Item>
                    <img width="99%" height="600px" src={item.image} alt={item.name}  />
                   
                </Carousel.Item>
            )})}
              {/* ... */}
    </Carousel>
         </div>
    <div>
      <form className="search-form">
      <input type="text" placeholder="Ara" onChange={handleSearch} style={{ height: '30px',margin:'10px',border: '2px solid black'}} />
      </form>
      
    </div>
    <div >
      
        <Box
          sx={{
           
            pt: 8,
            pb: 6,
          }}
         >
         <div >
         <Container maxWidth="sm"  >
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="white"
              gutterBottom
              
            >
              Aksoy Baharat ve Yöresel Ürünler 
            </Typography>
            <Typography variant="h4" align="center" color="white" font>
            Birinci sınıf Maraş baharatları ağzının tadını bilenler için
            </Typography>
            <Typography variant="h4" align="center" color="white" paragraph>
             Siparis Hatti: +90 552 080 74 50
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
             
            </Stack>
          </Container>
         </div>
      
          
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md" >
            <Grid container spacing={4}>
            {
                filter.map((item) => {
                 return (
                  <Grid item key={item} xs={12} sm={6} md={4}>
                    <Card
                  sx={{ height: '100%',weight:'100% ',display: 'flex', flexDirection: 'column' }}
                >
               
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      
                    }}
                    image={(item.image)}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.name} 
                    </Typography>
                    <Typography>
                     fiyat: {item.price} <br />
                    birim: {item.unit} <br />
                    </Typography>
                  </CardContent>
                  <CardActions>
                    
                  </CardActions>
                </Card>
              </Grid>

                 )
                })
            }
            </Grid>

        </Container>

        </div>
    </div>
       
  )
}

export default Products