import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: 50
    },
    list: {
        padding: 12
    },
    item: {
        textAlign: 'center'
    },
    value: {
        fontSize: 50,
        marginBottom: 0
    },
    dimension: {
        fontSize: 25,
        paddingLeft: 10
    },
    img: {
        width: '100%'
    }
});

class Context extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <Grid container justify={'center'}>
                    <Grid item xs={8}>
                        <Grid container alignItems={'center'}>
                            <Grid item xs={6}>
                                <h2>Welcome to Recovery Center</h2>
                                <p>
                                    The first mate and his Skipper too will do their very best to make the others
                                    comfortable in their tropic island nest these men promptly escaped from a maximum
                                    security stockade to the Los Angeles underground texas tea maybe you and me were
                                    never meant once in a while.
                                </p>
                                <p>
                                    These men promptly escaped from a maximum security stockade to the Los Angeles
                                    underground texas tea.
                                </p>
                                <Divider/>
                                <Grid container direction={'row'} justify={'space-between'} spacing={24} className={classes.list}>
                                    <Grid item xs={4} className={classes.item}>
                                        <p className={classes.value}>25<span className={classes.dimension}>+</span></p>
                                    </Grid>
                                    <Grid item xs={4} className={classes.item}>
                                        <p className={classes.value}>88<span className={classes.dimension}>k</span></p>
                                    </Grid>
                                    <Grid item xs={4} className={classes.item}>
                                        <p className={classes.value}>100<span className={classes.dimension}>%</span></p>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={6}>
                                <img className={classes.img} src="http://t.commonsupport.com/catania/images/resource/image-1.png" alt=""/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(Context)