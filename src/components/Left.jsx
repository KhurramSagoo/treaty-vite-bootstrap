import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import mobile from '../assets/Phone.png'
import envelope from '../assets/Envelope.png'
import mark from '../assets/Pointer.png'
import facebook from '../assets/fb.png'
import twitter from '../assets/twitter.png'
import insta from '../assets/instagram.png'
import youtube from '../assets/youtube.png'
import bar from '../assets/bars.png'
import './left.css'



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const MarginBox = styled(Box)({
  // margin: "25px",
});

export default function Left() {
 

  // const style = {
  //   margin: "20px",
  //   display: "flex",
  //   flexDirection: "column",
  // };

  // const msgStyle = {
  //   margin: "20px",
  //   width: "88%",
  //   padding: "0",
  // };

  return (
    <Box sx={{ padding: "100px", display: "flex", backgroundColor:"gray" }}>
      <Grid
        container
      // spacing={2} direction={{ xs: "column", md: "row" }}
      >
        <Grid item xs={12} sm={12} md={5} lg={4.6} >
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            // justifyContent:"center"
          }}>
            <div style={{display:"flex", flexDirection:"column",
          alignItems:"flex-start", justifyContent:"flex-start"}}>

            <Typography style={{ color: "skyblue" }} variant="h5">
              STAY IN TOUCH
            </Typography>
            <Typography variant="h2" style={{
              color: "black",
              fontFamily: "Poppins",
              fontWeight: "500"
            }}>Contact US</Typography>
            <img src={bar} alt="bar" style={{ width:"50px"}} />

            </div>

            <div style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent:"flex-start",
              marginTop:"50px"

            }}>
                 
              <Typography variant="body1" style={{display:"flex", alignItems:"center",marginBottom:"50px", }}>
                <img src={mobile} alt="mobile-photo" style={{
                  width: "50px",
                  marginRight: "30px",
                }} /> 1-6565-6568-458
              </Typography>
              <Typography variant="body1" style={{display:"flex", alignItems:"center",marginBottom:"50px", }}>
                <img src={envelope} alt="mobile-photo" style={{
                  width: "50px",
                  marginRight: "30px",
                  

                }} />Support@jointreaty.com
              </Typography>
              <Typography variant="body1" style={{display:"flex", alignItems:"center",marginBottom:"50px", }}>
                <img src={mark} alt="mobile-photo" style={{
                  width: "50px",
                  marginRight: "30px",

                }} /> 3782 Shady Pines Drive USa
              </Typography>

            </div>
            <div style={{display:"flex", alignItems:"flex-start"}}>
              <img src={facebook} alt="" style={{
                width: "55px",
                marginRight: "20px",
                marginLeft: "0"
              }} />
              <img src={twitter} alt="" style={{
                width: "55px",
                marginRight: "20px"

              }} />
              <img src={insta} alt="" style={{
                width: "55px",
                marginRight: "20px"

              }} />
              <img src={youtube} alt="" style={{
                width: "55px",
                marginRight: "20px"

              }} />
            </div>
          </div>
        </Grid>






        {/* right side */}
        <Grid item xs={12} sm={12} md={7} lg={7.4} 
        style={{
            display:"flex",
            flexDirection:"row",
            justifyContent:"center",
            height:"auto",
            width:"100%",
            padding:"20px 0"
          }}
          >
          <Item
          
          className="input-msg-right"
          style={{
           
            display:"flex",
            alignItems:"baseline",
            justifyContent:"center",
            width:"100%",
            padding:"50px 40px",
            margin:"0"

          }}>
          <div style={{
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            justifyContent:"center",
            width:"50%",
            margin:"0",
            padding:"0"

          }}> 
            <TextField
              id="outlined-basic"
              label="NAME*"
              variant="outlined"
              style={{
                width:"100%",
                marginBottom:"24px",

              }}
            />
            <TextField
              id="outlined-basic"
              label="EMAIL*"
              variant="outlined"
              style={{
                width:"100%",
                marginBottom:"24px",


              }}
              />
            <TextField
              id="outlined-basic"
              label="SUBJECT*"
              variant="outlined"
              style={{
                width:"100%",
                marginBottom:"22px",


              }}
              />
          </div>
          <div style={{
            display:"flex",
            flexDirection:"column",
            alignItems:"flex-end",
            justifyContent:"center",
            width:"50%"
          }}>
            <TextField
              id="outlined-multiline-static"
              label="Message*"
              multiline
              rows={8}
              defaultValue=""
              style={{width:"95%",
            marginLeft:"20px"}}

              />
            <Stack direction="row" justifyContent="flex-end">
              <Button
                variant="contained"
                style={{ marginTop:"45px",
                padding:"15px 30px"
              }}
                >
                Send Message
              </Button>
            </Stack>
          </div>
                </Item>
        </Grid>
        {/* <Grid item xs={12} sm={6} md={4} lg={3.7}> */}
        
        {/* </Grid> */}
      </Grid>
    </Box>
  );
}
