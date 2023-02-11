import React, { useState } from 'react'
import { Button, Grid, TextField } from '@mui/material'
import classes from './FeedbackForm.module.css'
import { Link, useNavigate } from 'react-router-dom'

function FeedbackForm(props) {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')
  const [address,setAddress] = useState('')

  const nameHandler = (e)=>{
    setName(e.target.value)
  }
  const emailHandler = (e)=>{
    setEmail(e.target.value)
  }
  const phoneHandler = (e)=>{
    setPhone(e.target.value)
  }
  const addressHandler = (e)=>{
    setAddress(e.target.value)
  }
  
  const navigate = useNavigate()
  const submitHandler = (e) => {
    e.preventDefault();
    props.fetchData({
      name,
      email,
      phone,
      address,
    });
    navigate('/admin')
  }

  return (
      <div className={classes.contactUs}>
      <h1>Fitness Club Registration</h1>
        <form className={classes.inputForm}>
        <Grid container spacing={1}>
          <Grid xs={12} item>
            <TextField value={name} onChange={nameHandler} placeholder="Enter name" label="First Name" variant="outlined" fullWidth required />
          </Grid>
          <Grid item xs={12}>
            <TextField  value={email} onChange={emailHandler} type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required />
          </Grid>
          <Grid item xs={12}>
            <TextField value={phone} onChange={phoneHandler} type="number" placeholder="Enter phone number" label="Phone" variant="outlined" fullWidth required />
          </Grid>
          <Grid item xs={12}>
            <TextField value={address} onChange={addressHandler} label="Address" placeholder="Type your address here" variant="outlined" fullWidth required />
          </Grid>
        </Grid>
      </form>
      <Button className={classes.btnSubmit} onClick={submitHandler} type="submit" variant="contained" style={{ background: 'goldenrod', borderRadius: 0, padding: '10px 20px', margin: '10px' }}>Submit</Button><br />
      <Link to='/admin' style={{textDecoration:'none'}}><Button onClick={()=>{}} type="submit" variant="contained" style={{ background: 'goldenrod', borderRadius: 0, padding: '10px', margin: '10px' }}>View Membership</Button></Link>
    </div>
  )
}

export default FeedbackForm