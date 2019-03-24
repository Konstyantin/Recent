import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import {withStyles} from "@material-ui/core/styles/index";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Editor } from '@tinymce/tinymce-react';
import InputLabel from '@material-ui/core/InputLabel';
import {DropzoneArea} from 'material-ui-dropzone'


const styles = theme => ({
    root: {
        display: 'flex',
        padding: '5px 20px',
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
        this.state = {
            icon: null,
            image: null,
        };

        this.handleChangeEditor = this.handleChangeEditor.bind(this);
        this.handleChangeIcon = this.handleChangeIcon.bind(this);
        this.handleChangeImage = this.handleChangeImage.bind(this);
    }

    handleChangeEditor(e) {
        console.log('handler change editor');
    }

    handleChangeIcon(file) {
        this.setState({
            icon: file
        });
    }

    handleChangeImage(file) {
        this.setState({
            image: file
        });
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
                                <DropzoneArea onChange={this.handleChangeIcon}/>
                            </Grid>
                            <Grid item xs={6}>
                                <InputLabel>Service Image</InputLabel>
                                <DropzoneArea onChange={this.handleChangeIcon}/>
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