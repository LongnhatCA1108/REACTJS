import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TerminalIcon from '@mui/icons-material/Terminal';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import './styles.scss'
import Register from 'features/Auth/components/Register';

export default function Header() {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">

      <Dialog open={open} onClose={handleClose} disableEscapeKeyDown>
        <DialogContent>
          <DialogContentText>
            <Register closeDialog={handleClose} />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>

        <Toolbar>
          <TerminalIcon
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </TerminalIcon>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link className='link' to = '/'> Long Nhật </Link>
          </Typography>
          <Link className='link' >
            <Button color="inherit" onClick={handleClickOpen}>Đăng ký đi</Button>
          </Link>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}