import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useEffect, useRef, useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Button from '@mui/material/Button';
import { blue } from '@mui/material/colors';
import { Typography } from '@mui/material';

mapboxgl.accessToken = 'pk.eyJ1IjoiYWxleC1lZ2FuIiwiYSI6ImNsOTZjYmQ1bzAzODkzdXFha3lrZXNhdHoifQ.fHbQVBZNm62eeEHWXhkaSA';

function Rounds() {
   
    const [counter, setCounter] = useState(3);


    useEffect(() => {
       

       
    });
    
    return (
<div>
    
<Box sx={{display:'flex', flexDirection: 'row' }}>
<Box
      sx={{
        bgcolor: 'background.paper',
        boxShadow: 24,
        borderRadius: 3,
        p: 1,
        minWidth: 100,
        Height: 80,
      }}
    >
      <Box sx={{ color: 'text.secondary' }}>Player</Box>
      <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>
        James
      </Box>
      <Box
        sx={{
          color: 'success.dark',
          display: 'inline',
          fontWeight: 'medium',
          mx: 0.5,
        }}
      >
      </Box>
    </Box>
<Box
      sx={{
        bgcolor: 'background.paper',
        boxShadow: 24,
        borderRadius: 3,
        p: 1,
        minWidth: 50,
        Height: 80,
      }}
    >
      <Box sx={{display:'flex', color: 'text.secondary' }}>Hole 1
      <Button sx={{}}>Button </Button>
    </Box>
      <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>
        <Typography sx={{justifyContent:'center',display:'flex'}}>{counter}</Typography>
        <Container sx={{bottom:0,padding:0,margin:0}}>
      <Button sx={{color:'black',bgcolor:'red'}} onClick={() => setCounter(counter - 1)}>-1</Button>
      <Button sx={{color:'black',bgcolor:'green'}}onClick={() => setCounter(counter + 1)}>+1</Button>
      </Container>
      </Box>
      <Box
        sx={{
          color: 'success.dark',
          display: 'inline',
          fontWeight: 'medium',
          mx: 0.5,
        }}
      >
      </Box>
    </Box>
    <Box
      sx={{
        bgcolor: 'background.paper',
        boxShadow: 24,
        borderRadius: 3,
        p: 1,
        minWidth: 50,
        Height: 80,
      }}
    >
      <Box sx={{ color: 'text.secondary' }}>Hole 2</Box>
      <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>
        ~
      </Box>
      <Box
        sx={{
          color: 'success.dark',
          display: 'inline',
          fontWeight: 'medium',
          mx: 0.5,
        }}
      >
      </Box>
    </Box>
    <Box
      sx={{
        bgcolor: 'background.paper',
        boxShadow: 24,
        borderRadius: 3,
        p: 1,
        minWidth: 50,
        Height: 80,
      }}
    >
      <Box sx={{ color: 'text.secondary' }}>Hole 3</Box>
      <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>
        ~
      </Box>
      <Box
        sx={{
          color: 'success.dark',
          display: 'inline',
          fontWeight: 'medium',
          mx: 0.5,
        }}
      >
      </Box>
    </Box>
    <Box
      sx={{
        bgcolor: 'background.paper',
        boxShadow: 24,
        borderRadius: 3,
        p: 1,
        minWidth: 50,
        Height: 80,
      }}
    >
      <Box sx={{ color: 'text.secondary' }}>Hole 4</Box>
      <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>
        ~
      </Box>
      <Box
        sx={{
          color: 'success.dark',
          display: 'inline',
          fontWeight: 'medium',
          mx: 0.5,
        }}
      >
      </Box>
    </Box>
    <Box
      sx={{
        bgcolor: 'background.paper',
        boxShadow: 24,
        borderRadius: 3,
        p: 1,
        minWidth: 50,
        Height: 80,
      }}
    >
      <Box sx={{ color: 'text.secondary' }}>Hole 5</Box>
      <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>
        ~
      </Box>
      <Box
        sx={{
          color: 'success.dark',
          display: 'inline',
          fontWeight: 'medium',
          mx: 0.5,
        }}
      >
      </Box>
    </Box>
    <Box
      sx={{
        bgcolor: 'background.paper',
        boxShadow: 24,
        borderRadius: 3,
        p: 1,
        minWidth: 50,
        Height: 80,
      }}
    >
      <Box sx={{ color: 'text.secondary' }}>Hole 6</Box>
      <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>
        ~
      </Box>
      <Box
        sx={{
          color: 'success.dark',
          display: 'inline',
          fontWeight: 'medium',
          mx: 0.5,
        }}
      >
      </Box>
    </Box>
    <Box
      sx={{
        bgcolor: 'background.paper',
        boxShadow: 24,
        borderRadius: 3,
        p: 1,
        minWidth: 50,
        Height: 80,
      }}
    >
      <Box sx={{ color: 'text.secondary' }}>Hole 7</Box>
      <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>
        ~
      </Box>
      <Box
        sx={{
          color: 'success.dark',
          display: 'inline',
          fontWeight: 'medium',
          mx: 0.5,
        }}
      >
      </Box>
    </Box>
    <Box
      sx={{
        bgcolor: 'background.paper',
        boxShadow: 24,
        borderRadius: 3,
        p: 1,
        minWidth: 50,
        Height: 80,
      }}
    >
      <Box sx={{ color: 'text.secondary' }}>Hole 8</Box>
      <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>
        ~
      </Box>
      <Box
        sx={{
          color: 'success.dark',
          display: 'inline',
          fontWeight: 'medium',
          mx: 0.5,
        }}
      >
      </Box>
    </Box>
    <Box
      sx={{
        bgcolor: 'background.paper',
        boxShadow: 24,
        borderRadius: 3,
        p: 1,
        minWidth: 50,
        Height: 80,
      }}
    >
      <Box sx={{ color: 'text.secondary' }}>Hole 9</Box>
      <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>
        ~
      </Box>
      <Box
        sx={{
          color: 'success.dark',
          display: 'inline',
          fontWeight: 'medium',
          mx: 0.5,
        }}
      >
      </Box>
    </Box>
    <Box
      sx={{
        bgcolor: 'background.paper',
        boxShadow: 24,
        borderRadius: 3,
        p: 1,
        minWidth: 50,
        Height: 80,
      }}
    >
      <Box sx={{ color: 'text.secondary' }}>Hole 10</Box>
      <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>
        ~
      </Box>
      <Box
        sx={{
          color: 'success.dark',
          display: 'inline',
          fontWeight: 'medium',
          mx: 0.5,
        }}
      >
      </Box>
    </Box>
    <Box
      sx={{
        bgcolor: 'background.paper',
        boxShadow: 24,
        borderRadius: 3,
        p: 1,
        minWidth: 50,
        Height: 80,
      }}
    >
      <Box sx={{ color: 'text.secondary' }}>Hole 11</Box>
      <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>
        ~
      </Box>
      <Box
        sx={{
          color: 'success.dark',
          display: 'inline',
          fontWeight: 'medium',
          mx: 0.5,
        }}
      >
      </Box>
    </Box>
    <Box
      sx={{
        bgcolor: 'background.paper',
        boxShadow: 24,
        borderRadius: 3,
        p: 1,
        minWidth: 50,
        Height: 80,
      }}
    >
      <Box sx={{ color: 'text.secondary' }}>Hole 12</Box>
      <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>
        ~
      </Box>
      <Box
        sx={{
          color: 'success.dark',
          display: 'inline',
          fontWeight: 'medium',
          mx: 0.5,
        }}
      >
      </Box>
    </Box>
    <Box
      sx={{
        bgcolor: 'background.paper',
        boxShadow: 24,
        borderRadius: 3,
        p: 1,
        minWidth: 50,
        Height: 80,
      }}
    >
      <Box sx={{ color: 'text.secondary' }}>Hole 13</Box>
      <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>
        ~
      </Box>
      <Box
        sx={{
          color: 'success.dark',
          display: 'inline',
          fontWeight: 'medium',
          mx: 0.5,
        }}
      >
      </Box>
    </Box>
    <Box
      sx={{
        bgcolor: 'background.paper',
        boxShadow: 24,
        borderRadius: 3,
        p: 1,
        minWidth: 50,
        Height: 80,
      }}
    >
      <Box sx={{ color: 'text.secondary' }}>Hole 14</Box>
      <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>
        ~
      </Box>
      <Box
        sx={{
          color: 'success.dark',
          display: 'inline',
          fontWeight: 'medium',
          mx: 0.5,
        }}
      >
      </Box>
    </Box>
    <Box
      sx={{
        bgcolor: 'background.paper',
        boxShadow: 24,
        borderRadius: 3,
        p: 1,
        minWidth: 50,
        Height: 80,
      }}
    >
      <Box sx={{ color: 'text.secondary' }}>Hole 15</Box>
      <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>
        ~
      </Box>
      <Box
        sx={{
          color: 'success.dark',
          display: 'inline',
          fontWeight: 'medium',
          mx: 0.5,
        }}
      >
      </Box>
    </Box>
    <Box
      sx={{
        bgcolor: 'background.paper',
        boxShadow: 24,
        borderRadius: 3,
        p: 1,
        minWidth: 50,
        Height: 80,
      }}
    >
      <Box sx={{ color: 'text.secondary' }}>Hole 16</Box>
      <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>
        ~
      </Box>
      <Box
        sx={{
          color: 'success.dark',
          display: 'inline',
          fontWeight: 'medium',
          mx: 0.5,
        }}
      >
      </Box>
    </Box>
    <Box
      sx={{
        bgcolor: 'background.paper',
        boxShadow: 24,
        borderRadius: 3,
        p: 1,
        minWidth: 50,
        Height: 80,
      }}
    >
      <Box sx={{ color: 'text.secondary' }}>Hole 17</Box>
      <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>
        ~
      </Box>
      <Box
        sx={{
          color: 'success.dark',
          display: 'inline',
          fontWeight: 'medium',
          mx: 0.5,
        }}
      >
      </Box>
    </Box>
    <Box
      sx={{
        bgcolor: 'background.paper',
        boxShadow: 24,
        borderRadius: 3,
        p: 1,
        minWidth: 50,
        Height: 80,
      }}
    >
      <Box sx={{ color: 'text.secondary' }}>Hole 18</Box>
      <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>
        ~
      </Box>
      <Box
        sx={{
          color: 'success.dark',
          display: 'inline',
          fontWeight: 'medium',
          mx: 0.5,
        }}
      >
      </Box>
    </Box>
    <Box
      sx={{
        bgcolor: 'background.paper',
        boxShadow: 24,
        borderRadius: 3,
        p: 1,
        minWidth: 50,
        Height: 80,
      }}
    >
      <Box sx={{ color: 'text.secondary' }}>Total</Box>
      <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>
        ~
      </Box>
      <Box
        sx={{
          color: 'success.dark',
          display: 'inline',
          fontWeight: 'medium',
          mx: 0.5,
        }}
      >
      </Box>
    </Box>
    </Box>
</div>
    );
}
  
export default Rounds;