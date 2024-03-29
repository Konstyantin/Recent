import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import {withStyles} from "@material-ui/core/styles/index";
import Button from '@material-ui/core/Button';
import { Editor } from '@tinymce/tinymce-react';
import InputLabel from '@material-ui/core/InputLabel';
import {DropzoneArea} from 'material-ui-dropzone'
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import {serviceActions} from './../../../../../_actions';
import {connect} from 'react-redux';
import {CustomSnackBar} from './../../../../../../../../scenes/components/CustomSnackBar'

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

const CreateServiceErrorSnackBar = ({service}) => {
    const {message, errors} = service;

    if (!$.isEmptyObject(service) && errors !== undefined) {
        let messageArray = Object.keys(errors).map((k) => errors[k]);

        return messageArray.map((error, i) => (
            <CustomSnackBar key={i} message={error.shift()} variant={'error'}/>
        ));
    }

    return null;
};

/**
 * Create service component
 */
class Create extends Component {

    /**
     * Constructor
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            short_description: '',
            description: '',
            icon: null,
            image: null,
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeEditor = this.handleChangeEditor.bind(this);
        this.handleChangeIcon = this.handleChangeIcon.bind(this);
        this.handleChangeImage = this.handleChangeImage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /**
     * Handle change
     *
     * @param e
     */
    handleChange(e) {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    /**
     * Handle submit form
     *
     * @param e
     */
    handleSubmit(e) {
        e.preventDefault();

        const {dispatch} = this.props;
        const {title, short_description, description, icon, image} = this.state;
        this.setState({submitted: true});

        if (title && short_description) {
            dispatch(serviceActions.create(this.state));
        }
    }

    handleChangeEditor(e) {
        this.setState({description: e.target.getContent()});
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

        const {classes,service} = this.props;

        const {title, short_description, description, icon, image} = this.state;

        return (
            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={8}>
                        <CreateServiceErrorSnackBar service={service}/>
                        <ValidatorForm
                            ref="form"
                            onSubmit={this.handleSubmit}
                            onError={errors => console.log(errors)}
                        >
                            <Grid container spacing={16}>
                                <Grid item xs={6}>
                                    <TextValidator
                                        id="service-title"
                                        label="Title"
                                        onChange={this.handleChange}
                                        className={classes.textField}
                                        name="title"
                                        margin="normal"
                                        placeholder="Title"
                                        value={title}
                                        validators={['required', 'minStringLength:5', 'maxStringLength:45']}
                                        errorMessages={[
                                            'this field is required',
                                            'input must be more 5 letters',
                                            'input must be less 5 letters'
                                        ]}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextValidator
                                        id="service-short-description"
                                        label="Short description"
                                        onChange={this.handleChange}
                                        className={classes.textField}
                                        name="short_description"
                                        margin="normal"
                                        placeholder="Short description"
                                        value={short_description}
                                        validators={['required', 'minStringLength:5', 'maxStringLength:45']}
                                        errorMessages={[
                                            'this field is required',
                                            'input must be more 5 letters',
                                            'input must be less 5 letters'
                                        ]}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <InputLabel>Description</InputLabel>
                                    <Editor
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
                                    <DropzoneArea onChange={this.handleChangeImage}/>
                                </Grid>
                                <Grid item xs={8}>
                                    <Button variant="contained" color="primary" className={classes.button} type={'submit'}>
                                        Submit
                                    </Button>
                                </Grid>
                            </Grid>
                        </ValidatorForm>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {error, service} = state;
    return {error, service};
};

const styledCreate = withStyles(styles)(Create);
const connectedCreate = connect(mapStateToProps)(styledCreate);

export {connectedCreate as Create};