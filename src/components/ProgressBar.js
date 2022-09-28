import * as React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
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
            <Box sx={{ width: '100&' }}>
               <Box >
                  <Box sx={{ width: "100%" }}>
                     <LinearProgress variant="determinate" value={step * 10}
                        color="primary"
                        style={{ height: "0.5rem", borderRadius: "24px", background: "#fcf6f0", margin: "1.5rem 2rem 0rem", }} />
                  </Box>
                  <Box sx={{ minWidth: 50 }}>
                  </Box>
               </Box>
            </Box>
         </ThemeProvider>
      </>
   )
}
