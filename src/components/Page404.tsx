import { Box, Typography } from "@mui/material";

 const Page404: React.FC = () => {
  return (
    <Box sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Typography>
        404 - страница не найдена 
      </Typography>
    </Box>
  )
 }

 export default Page404;