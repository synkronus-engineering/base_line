import * as React from 'react';
import {Box, Drawer, Toolbar, List, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
// import AppBar from '@mui/material/AppBar';
import {KeyboardDoubleArrowRight} from '@mui/icons-material';
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
                  <ListItemIcon><KeyboardDoubleArrowRight /> </ListItemIcon>
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