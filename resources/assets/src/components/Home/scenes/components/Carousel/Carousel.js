import React, {Component} from "react";
import {withStyles} from "@material-ui/core/styles/index";

const styles = theme => ({

});

/**
 * Carousel
 * @returns {*}
 * @constructor
 */
class Carousel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>Carousel component</div>
        );
    }
};

export default withStyles(styles)(Carousel);