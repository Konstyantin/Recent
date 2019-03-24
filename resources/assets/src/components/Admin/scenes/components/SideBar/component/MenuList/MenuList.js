import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';
import MessageIcon from '@material-ui/icons/Message';
import MailIcon from '@material-ui/icons/Mail';
import BuildIcon from '@material-ui/icons/Build';
import Divider from '@material-ui/core/Divider';

export const MenuList = () => (
    <div>
        <Divider />
        <List>
            <ListItem button key={'users'}>
                <ListItemIcon><PersonIcon/></ListItemIcon>
                <ListItemText primary={'Users'} />
            </ListItem>
            <ListItem button key={'services'}>
                <ListItemIcon><BuildIcon/></ListItemIcon>
                <ListItemText primary={'Services'} />
            </ListItem>
            <ListItem button key={'comments'}>
                <ListItemIcon><MessageIcon/></ListItemIcon>
                <ListItemText primary={'Comments'} />
            </ListItem>
            <ListItem button key={'Mails'}>
                <ListItemIcon><MailIcon/></ListItemIcon>
                <ListItemText primary={'Mails'} />
            </ListItem>
        </List>
    </div>
);