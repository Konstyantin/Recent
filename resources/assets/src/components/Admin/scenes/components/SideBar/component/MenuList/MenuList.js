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
import {Link} from 'react-router-dom';

export const MenuList = () => (
    <div>
        <Divider />
        <List>
            <Link to={'/admin/users'}>
                <ListItem button key={'users'}>
                    <ListItemIcon><PersonIcon/></ListItemIcon>
                    <ListItemText>Users</ListItemText>
                </ListItem>
            </Link>
            <Link to={'/admin/services'}>
                <ListItem button key={'services'}>
                    <ListItemIcon><BuildIcon/></ListItemIcon>
                    <ListItemText>Services</ListItemText>
                </ListItem>
            </Link>
            <Link to={'/admin/comments'}>
                <ListItem button key={'comments'}>
                    <ListItemIcon><MessageIcon/></ListItemIcon>
                    <ListItemText>Comments</ListItemText>
                </ListItem>
            </Link>
            <Link to={'/admin/mails'}>
                <ListItem button key={'Mails'}>
                    <ListItemIcon><MailIcon/></ListItemIcon>
                    <ListItemText>Mails</ListItemText>
                </ListItem>
            </Link>
        </List>
    </div>
);