import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import {withStyles} from "@material-ui/core/styles/index";
import Button from '@material-ui/core/Button';
import { Editor } from '@tinymce/tinymce-react';
import InputLabel from '@material-ui/core/InputLabel';
import {DropzoneArea} from 'material-ui-dropzone'
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator'
import {connect} from 'react-redux';
import {serviceActions} from "../../../../../_actions";
import {CircularIndeterminate} from './../../../../../components/CircularIndeterminate';

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
    circleContainer: {
        textAlign: 'center'
    },
    imagePreview: {
        padding: 10
    }
});

class Edit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            short_description: '',
            description: '',
            icon: null,
            image: null,
            iconChange: false,
            imageChange: false,
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeEditor = this.handleChangeEditor.bind(this);
        this.handleChangeIcon = this.handleChangeIcon.bind(this);
        this.handleChangeImage = this.handleChangeImage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeIcon = this.changeIcon.bind(this);
        this.changeImage = this.changeImage.bind(this);
    }

    componentDidMount() {
        const {dispatch} = this.props;
        const id = this.props.match.params.id;

        dispatch(serviceActions.show(id));
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

        if (title || short_description || description || icon || image) {
            console.log('edit');
            console.log(this.state);
            // dispatch(serviceActions.create(this.state));
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

    changeIcon(e) {
        e.preventDefault();
        this.setState({iconChange: true})
    }

    changeImage(e) {
        e.preventDefault();
        this.setState({imageChange: true})
    }

    render() {

        const {classes, service} = this.props;

        const {iconChange, imageChange, title, short_description} = this.state;

        return (
            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={8}>
                        {service.requested &&
                        <div className={classes.circleContainer}>
                            <CircularIndeterminate classes={classes}/>
                        </div>
                        }
                        {!service.requested && service.data &&

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
                                        defaultValue={service.data.title}
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
                                        defaultValue={service.data.short_description}
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
                                        initialValue={service.data.description}
                                        init={{
                                            plugins: 'link image code',
                                            toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
                                        }}
                                        onChange={this.handleChangeEditor}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <InputLabel>Service Icon</InputLabel>
                                    {!iconChange &&
                                        <div>
                                            <img className={classes.imagePreview}
                                                 src={`/images/vendor/services/image/${service.data.icon}`} alt=""/>
                                            <a href="" onClick={this.changeIcon}>Edit</a>
                                        </div>
                                    }
                                    {iconChange &&
                                        <DropzoneArea onChange={this.handleChangeIcon}/>
                                    }
                                </Grid>
                                <Grid item xs={6}>
                                    <InputLabel>Service Image</InputLabel>
                                    {!imageChange &&
                                        <div>
                                            <img className={classes.imagePreview}
                                                 src={`/images/vendor/services/image/${service.data.image}`} alt=""/>
                                            <a href="" onClick={this.changeImage}>Edit</a>
                                        </div>
                                    }
                                    {imageChange &&
                                        <DropzoneArea onChange={this.handleChangeImage}/>
                                    }
                                </Grid>
                                <Grid item xs={8}>
                                    <Button variant="contained" color="primary" className={classes.button} type={'submit'}>
                                        Submit
                                    </Button>
                                </Grid>
                            </Grid>
                        </ValidatorForm>
                        }
                    </Grid>
                </Grid>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {service} = state;
    return {service};
}

const styledEdit = withStyles(styles)(Edit);
const connectedEdit = connect(mapStateToProps)(styledEdit);

export {connectedEdit as Edit};