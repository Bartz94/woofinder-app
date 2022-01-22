//Jacek
import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import Logout from '@mui/icons-material/Logout';
import ArticleIcon from '@mui/icons-material/Article';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import VpnKeyIcon from '@mui/icons-material/VpnKey';




export const UserPanel = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleShowLogForm = () => {
    console.log("panel logowania")


  }


  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Typography sx={{ minWidth: 100 }}><Button onClick={handleShowLogForm} sx={{ color: 'black', textTransform: 'capitalize' }}>Zaloguj</Button></Typography>

        <Typography sx={{ minWidth: 100 }}><Button sx={{ color: 'black', textTransform: 'capitalize' }}>Zarejestruj</Button></Typography>
        <Tooltip title="Panel użytkownika">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 56, height: 56 }} />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 56,
              height: 56,
              ml: -0.5,
              mr: 25,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 25,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <Avatar sx={{ my: 2, width: 56, height: 56 }} />
        </MenuItem>
        <MenuItem>
          <VpnKeyIcon sx={{ color: 'rgba(0, 0, 0, 0.54);' }} />
          <Button>Zmień hasło</Button>
        </MenuItem>
        <MenuItem>
          <AddAPhotoIcon sx={{ color: 'rgba(0, 0, 0, 0.54);' }} />
          <Button>Dodaj zdjęcie</Button>
        </MenuItem>
        <MenuItem>
          <ArticleIcon sx={{ color: 'rgba(0, 0, 0, 0.54);' }} />
          <Button>Dodaj ogłoszenie</Button>
        </MenuItem>
        <MenuItem>
          <Button variant='outlined' sx={{ color: 'black', fontSize: '16px', border: 'none ', borderRadius: '20px', backgroundColor: '#E2E2E2' }}>Zamknij ogłoszenie</Button>

        </MenuItem>
        <Divider />
        <MenuItem>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          <Button>Wyloguj się</Button>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
