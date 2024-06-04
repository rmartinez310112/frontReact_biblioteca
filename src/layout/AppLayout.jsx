
import { Toolbar } from '@mui/material';
import { Box } from '@mui/system'
import NavBar from '../components/NavBar';


const drawerWidth = 280;

const AppLayout = ({children}) => {
  return (
    <Box >

        <NavBar  />

        <Box 
            component='main'
            sx={{ flexGrow: 1, p: 3 }}
        >
            <Toolbar />

            { children }
            
        </Box>
    </Box>
  )
}

export default AppLayout
