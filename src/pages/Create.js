import React from 'react'
import { Button, Typography } from '@mui/material'
import { Container } from '@mui/material'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles ({
  btn: {
    backgroundColor: 'red',
    fontSize: 60
  }

})

export default function Create() {

  const classes = useStyles()
  
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
        className={ classes.btn }
        onClick={ () => { console.log("you click me") } }
        type='submit'
        variant='contained'
        color='secondary'
        endIcon={ <ArrowForwardIosOutlinedIcon/> }
      >
        la sumito
      </Button>    
    </Container>
  )
}
