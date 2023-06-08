import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
// import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
// import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Link from "next/link";

const drawerWidth = 240;

const items = [
    {
         id:6,
         title:'Client-Side', url:'/features/'
    }, 
    {
         id:3,
        title:'RealTime', url:'/features/realtime'
    },
    {
        id:1,
       title:'Static Post', url:'/features/static'
    }, 
    {
        id:2,
       title:'Static Post With Rev', url:'/features/static-revalidation'
    },
    {
         id:4,
        title:'SSR', url:'/features/server-rendered'
    }
]

export default function SideNav() {
  return (
    <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
      <Toolbar />
      <Box sx={{ overflow: 'auto',  marginTop:'30px', }}>
        <List>
          {(items || [])?.map(item => (
            <ListItem key={item.id} disablePadding>
              <Link href={`${item.url}`}>
                <ListItemButton>
                  <ListItemIcon><KeyboardDoubleArrowRightIcon /> </ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Box>
    </Drawer>

  );
}