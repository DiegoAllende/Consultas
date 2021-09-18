import {
  AppBar, Box, Button, IconButton, Toolbar,
  Menu as Menu2, MenuItem
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../hooksReact/context/AuthContext';

export const Menu = () => {

  const {logout} = useContext(AuthContext)

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorE2, setAnchorE2] = React.useState(null);
  const [anchorE3, setAnchorE3] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick2 = (event) => {
    setAnchorE2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorE2(null);
  };

  const handleClick3 = (event) => {
    setAnchorE3(event.currentTarget);
  };

  const handleClose3 = () => {
    setAnchorE3(null);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Box display='flex' sx={{ flexGrow: 1, gap: 10, alignItems: 'center' }}>
            <IconButton size="medium" edge="start" color="inherit" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Button aria-controls="simple-menu1" aria-haspopup="true" color="inherit" onClick={handleClick}>
              Pacientes
            </Button>
            <Button aria-controls="simple-menu2" aria-haspopup="true" color="inherit" onClick={handleClick2}>
              Pagos
            </Button>
            <Button aria-controls="simple-menu3" aria-haspopup="true" color="inherit" onClick={handleClick3}>
              Mantenimiento
            </Button>
          </Box>
          <Button color="inherit" onClick={logout}>LogOut</Button>
        </Toolbar>
      </AppBar>
      <Menu2
        id="simple-menu1"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><Link to="/">Registro de atención</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/">Registro de especialistas</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/">Registro de especialistas</Link></MenuItem>
      </Menu2>
      <Menu2
        id="simple-menu2"
        anchorEl={anchorE2}
        keepMounted
        open={Boolean(anchorE2)}
        onClose={handleClose2}
      >
        <MenuItem onClick={handleClose2}><Link to="/">Pendientes de Pago</Link></MenuItem>
        <MenuItem onClick={handleClose2}><Link to="/">Pagados</Link></MenuItem>
      </Menu2>
      <Menu2
        id="simple-menu3"
        anchorEl={anchorE3}
        keepMounted
        open={Boolean(anchorE3)}
        onClose={handleClose3}
      >
        <MenuItem onClick={handleClose3}><Link to="/usuario">Usuarios</Link></MenuItem>
        <MenuItem onClick={handleClose3}><Link to="/forma-pago">Forma de Pago</Link></MenuItem>
      </Menu2>
    </div>

  )
}
