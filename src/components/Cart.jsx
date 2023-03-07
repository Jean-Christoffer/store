import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import {Typography, Container, Button} from '@mui/material';
export default function Cart(props){
    const {cart} = props
    const subTotal = cart.reduce((a,b)=>{
        return a + (b.price * b.quantity)
    },0)
    return(
    <>
    <Container sx={{ marginTop:'100px', }}>
        <Paper sx={{ display:'flex', justifyContent:'space-between', padding:'10px', }} >
            <Typography>Product</Typography>
            <Typography>Price</Typography>
            <Typography>Amount</Typography>
            <Typography>Total</Typography>
        </Paper>
        
        {cart.map(product => <Paper sx={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'10px', marginTop:'10px' }} key={product.id}  className='cart-item-row'>
            <Box className='cart-image'><img src = {product.image}/></Box>
            <Typography sx={{ width:'70px', textAlign:'right' }}>${product.price}</Typography>
            <Typography sx={{ width:'70px', textAlign:'right' }}>{product.quantity}</Typography>
            <Typography sx={{ width:'70px',  textAlign:'right'}}>${product.quantity * product.price}</Typography>
             </Paper> )}
       <Box className='total' sx={{ display:'flex', justifyContent:'space-between', padding:'10px', alignItems:'center'}}>
        {subTotal > 0 && <Typography sx={{fontWeight: 'bold'}} >Total: ${subTotal.toFixed(2)}</Typography>}
        {subTotal > 0 && <Button variant="contained" >checkout</Button>}
        </Box>      

    </Container>
    </>
    )
}