import React from 'react';
import { createStyles, createMuiTheme, Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Title from 'components/atoms/Title';
import {
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Drawer,
} from '@material-ui/core';

const drawerWidth = '20%';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: 'auto',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);

//適用できていない
// const StyledMenuItem = withStyles((theme) => ({
//   root: {
//     '&:focus': {
//       backgroundcolor: theme.palette.info.light, //'linear-gradient(#008897 0%, #B6DAF3 100%) no-repeat 49% 51% / 100% 100%',,
//     },
//   },
// }))(MenuItem);

const NavBar = () => {
  const classes = useStyles();
  // return focus to the button when we transitioned from !open -> open

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Title size="3rem" />
      <Toolbar />
      <div className={classes.drawerContainer}>
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
};

export default NavBar;
