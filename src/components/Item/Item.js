import './Item.css'
import * as React from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import { useState } from 'react'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  maxWidth: '900px',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  padding: '3% 0',
};
export const Item = (props) => {
  const {title, price, img} = props;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Modal open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{padding:0}}
      >
        <Box sx={style}>
          <ItemDetailContainer onClick={handleClose}></ItemDetailContainer>
        </Box>
      </Modal>
      <Card sx={{minwidth: 250}} className='Card'>
        <Button onClick={handleOpen}>
          <img className='img_card' src={`./${img}.jpg`} alt="pesas"></img>
        </Button>
        <h3 className='title_card'>{title}</h3>
        <span className='price_card'>{`$${price}`}</span>
        {/* <ItemCount /> */}
        <Button variant="contained" color='primary' className='button_card'>Add to cart:</Button>
      </Card>
    </>
  )
}

