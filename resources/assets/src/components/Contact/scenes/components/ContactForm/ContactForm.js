import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: 50
    },
    image: {
        width: '100%'
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 19,
    },
    form: {
        paddingLeft: 50
    },
    margin: {
        margin: theme.spacing.unit,
    },
});

/**
 * Contact form component
 */
class ContactForm extends Component {

    /**
     * Constructor
     *
     * @param props
     */
    constructor(props) {
        super(props);
    }

    /**
     * Render component
     * @returns {*}
     */
    render() {

        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <Grid container justify={'center'}>
                    <Grid item xs={8}>
                        <Grid container>
                            <Grid item xs={4}>
                                <img className={classes.image} src="http://t.commonsupport.com/catania/images/resource/user.png" alt=""/>
                            </Grid>
                            <Grid item xs={8} className={classes.form}>
                                <h2>Get in touch</h2>
                                <form action="">
                                    <Grid container spacing={16}>
                                        <Grid item xs={6}>
                                            <TextField
                                                id="standard-with-placeholder"
                                                label="Name"
                                                placeholder="Name"
                                                className={classes.textField}
                                                margin="normal"
                                                fullWidth={true}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                id="standard-with-placeholder"
                                                label="Email"
                                                placeholder="Email"
                                                className={classes.textField}
                                                margin="normal"
                                                fullWidth={true}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                id="standard-with-placeholder"
                                                label="Subject"
                                                placeholder="Subject"
                                                className={classes.textField}
                                                margin="normal"
                                                fullWidth={true}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                id="standard-with-placeholder"
                                                label="Message"
                                                placeholder="Message"
                                                className={classes.textField}
                                                margin="normal"
                                                fullWidth={true}
                                                multiline={true}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button variant="contained" color="primary" className={classes.button}>
                                                Submit
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(ContactForm);