import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import {withStyles} from "@material-ui/core/styles/index";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import { Editor } from '@tinymce/tinymce-react';
import InputLabel from '@material-ui/core/InputLabel';
import {DropZoneIcon} from './../DropZoneIcon';

const styles = theme => ({
    root: {
        display: 'flex',
        padding: 20,
        flexWrap: 'wrap',
    },
    textField: {
        marginRight: theme.spacing.unit,
        width: '100%',
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
});

class Create extends Component {

    constructor(props) {
        super(props);

        this.handleChangeEditor = this.handleChangeEditor.bind(this);
    }

    handleChangeEditor(e) {
        console.log('handler change editor');
    }

    render() {

        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={8}>
                        <Grid container spacing={16}>
                            <Grid item xs={6}>
                                <TextField
                                    id="service-title"
                                    label="Title"
                                    className={classes.textField}
                                    type="text"
                                    autoComplete="service title"
                                    margin="normal"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    id="service-short-description"
                                    label="Short description"
                                    className={classes.textField}
                                    type="text"
                                    autoComplete="service short description"
                                    margin="normal"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <InputLabel>Description</InputLabel>
                                <Editor
                                    initialValue="<p>This is the initial content of the editor</p>"
                                    init={{
                                        plugins: 'link image code',
                                        toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
                                    }}
                                    onChange={this.handleChangeEditor}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <InputLabel>Service Icon</InputLabel>
                                <DropZoneIcon/>
                            </Grid>
                            <Grid item xs={6}>
                                <p>Upload service image</p>
                            </Grid>
                            <Grid item xs={8}>
                                <Button variant="contained" color="primary" className={classes.button}>
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

const styledCreate = withStyles(styles)(Create);

export {styledCreate as Create};