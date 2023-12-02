import React from 'react'
import { Button, Typography } from '@mui/material'
import { Container } from '@mui/material'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

export default function Create() {
  
  return (
    <Container>
      <Typography 
        variant="h6"
        component="h2"
        color="textSecondary"
        gutterBottom
      >
        Create a New Note
      </Typography>

      <Button 
        onClick={ () => { console.log("you click me") } }
        type='submit'
        variant='contained'
        color='secondary'
        endIcon={ <ArrowForwardIosOutlinedIcon/> }
      >
        Submit
      </Button>    
    </Container>
  )
}