import { Box } from "@mui/material";

const Navbar = () => {
  return (
    
    <Box sx={{height: '10vh', width: 'full', mb: '5vh', display: "flex", justifyContent: 'center', alignItems: 'center', fontFamily: 'Bungee', fontSize: '3rem', color: 'text.primary'}}>

      To

       <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: 'primary.main', color: 'background.default', px: '0.5rem', ml: '0.5rem', borderRadius: '0.25rem'}}>

        Do

      </Box>

    </Box>

  );
}

export default Navbar;