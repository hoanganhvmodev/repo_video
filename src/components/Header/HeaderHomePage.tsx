import { useState } from 'react'
import { styled, alpha } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import InputBase from '@mui/material/InputBase'
import Badge from '@mui/material/Badge'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import AccountCircle from '@mui/icons-material/AccountCircle'
import NotificationsIcon from '@mui/icons-material/Notifications'
import MoreIcon from '@mui/icons-material/MoreVert'
import Avatar from '@mui/material/Avatar'
import Image from 'mui-image'
import logo from '../../img/Logo.png'
import { Link } from '@mui/material'
import { logout } from '@redux/slices/auth/authSlice'
import { useAuth } from '@hooks/useAuth'

export default function Header() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    useState<null | HTMLElement>(null)

  const isMenuOpen = Boolean(anchorEl)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const { logout } = useAuth()

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
    handleMobileMenuClose()
  }

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const menuId = 'primary-search-account-menu'
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose} sx={{ fontSize: '14px' }}>
        Profile
      </MenuItem>
      <MenuItem onClick={handleMenuClose} sx={{ fontSize: '14px' }}>
        My account
      </MenuItem>
      <MenuItem
        onClick={async () => {
          await logout()
        }}
        sx={{ fontSize: '14px' }}
      >
        Logout
      </MenuItem>
    </Menu>
  )

  const mobileMenuId = 'primary-search-account-menu-mobile'
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          size='large'
          aria-label='show 17 new notifications'
          color='inherit'
        >
          <Badge badgeContent={17} color='error'>
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size='large'
          aria-label='account of current user'
          aria-controls='primary-search-account-menu'
          aria-haspopup='true'
          color='inherit'
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  )

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position='static'
        sx={{ bgcolor: 'whitesmoke', paddingX: '48px' }}
      >
        <Toolbar sx={{ px: 12 }}>
          <Box sx={{ pr: 12 }}>
            <Link href='#' underline='none'>
              <Image src={logo} duration={0} />
            </Link>
          </Box>
          <Box
            sx={{
              position: 'relative',
              borderRadius: '5px',
              backgroundColor: (theme) =>
                alpha(theme.palette.common.white, 0.15),
              '&:hover': {
                backgroundColor: (theme) =>
                  alpha(theme.palette.common.white, 0.25)
              },
              marginRight: 2,
              marginLeft: 0,
              width: {
                md: '100%',
                sm: 'auto'
              }
            }}
          >
            <Box
              sx={{
                padding: 2,
                height: '100%',
                position: 'absolute',
                pointerEvents: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <SearchIcon sx={{ color: '#666666', fontSize: '20px' }} />
            </Box>
            <InputBase
              placeholder='Search…'
              inputProps={{ 'aria-label': 'search' }}
              sx={{
                color: '#666666',
                border: '#666666 1px solid',
                borderRadius: '5px',
                fontSize: '14px',

                '& .MuiInputBase-input': {
                  padding: '6px',
                  // vertical padding + font size from searchIcon
                  paddingLeft: '46px',
                  width: '60ch'
                }
              }}
            />
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              size='large'
              aria-label='show 17 new notifications'
              color='inherit'
            >
              <Badge badgeContent={17} color='error'>
                <NotificationsIcon
                  sx={{ color: '#666666', fontSize: '22px' }}
                />
              </Badge>
            </IconButton>
            <IconButton
              aria-controls={menuId}
              aria-haspopup='true'
              onClick={handleProfileMenuOpen}
              sx={{ ml: 5 }}
            >
              <Avatar
                alt='user img'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuJnCUrJkF-ngdeUM6hgIJybb6YfyqP83GfQ&usqp=CAU'
                sx={{ width: 40, height: 40 }}
              />
            </IconButton>
            <Box
              sx={{
                display: {
                  xs: 'flex',
                  alignItems: 'center',
                  color: '#3C3C3C',
                  width: '15ch'
                }
              }}
            >
              {'Hi, Nguyen anh' || ''}
            </Box>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='show more'
              aria-controls={mobileMenuId}
              aria-haspopup='true'
              onClick={handleMobileMenuOpen}
              color='inherit'
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  )
}
