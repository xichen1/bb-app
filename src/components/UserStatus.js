import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const UserStatus = ({ user, logout }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    user === null ?
      <div>
        <AccountCircleIcon
          aria-controls="customized-menu"
          aria-haspopup='true'
          variant='contained'
          onClick={handleClick}
          style={{
            fontSize: 40,
            color: 'black',
            cursor: 'pointer'
          }}>
          open
        </AccountCircleIcon>
        <StyledMenu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <Link to='/login' style={{ color: 'black', textDecoration: 'none' }}>
            <MenuItem>Sign In</MenuItem>
          </Link>
          <MenuItem>My account</MenuItem>
        </StyledMenu>
      </div>
      :
      <div>
        <AccountCircleIcon
          aria-controls="customized-menu"
          aria-haspopup='true'
          variant='contained'
          onClick={handleClick}
          style={{
            fontSize: 50,
            color: 'black',
            cursor: 'pointer'
          }}>
          open
        </AccountCircleIcon>
        <StyledMenu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem>My account</MenuItem>
          <MenuItem onClick={logout}>Logout</MenuItem>
        </StyledMenu>
      </div>
  );

}

export default UserStatus;