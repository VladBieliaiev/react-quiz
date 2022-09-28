import * as React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ThemeProvider } from "@emotion/react";
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
   palette: {
      primary: {
         main: '#8c84d6',
         // #8c84d6
      },
   },
});


export const ProgressBar = ({ step }) => {



   return (
      <>
         <ThemeProvider theme={theme}>
            <Box sx={{ width: '10rem' }}>
               <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: "column" }}>
                  <Box sx={{ width: "30rem" }}>
                     <LinearProgress variant="determinate" value={step * 10}
                        color="primary"
                        style={{ width: '30rem', height: "0.6rem", borderRadius: "24px", background: "#fcf6f0", marginTop: "2rem" }} />
                  </Box>
                  <Box sx={{ minWidth: 50 }}>
                     {/* <Typography variant="body2" color="text.secondary">{step}</Typography> */}
                  </Box>
               </Box>
            </Box>
         </ThemeProvider>
      </>
   )
}