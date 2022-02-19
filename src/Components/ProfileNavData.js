import React from 'react'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PasswordIcon from '@mui/icons-material/Password';
import HomeIcon from '@mui/icons-material/Home';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export const ProfileNavData = [

  {
    title:"Home",
    icon:<ManageAccountsIcon />,
    link:"/home"
  },
  {
    title:"Name change",
    icon:<AccountCircleIcon />,
    link:"/Name-change"
  },
  {
    title:"Username change",
    icon:<AccountCircleIcon />,
    link:"/home"
  },
  {
    title:"Password change",
    icon:<PasswordIcon />,
    link:"/Username-change"
  },
  {
    title:"Address",
    icon:<HomeIcon />,
    link:"/Address"
  },
  {
    title:"E-mail info",
    icon:<AlternateEmailIcon />,
    link:"/E-mail"
  },
  {
    title:"Delete account",
    icon:<DeleteForeverIcon />,
    link:"/Delete-account"
  },
  
]
 

export default ProfileNavData