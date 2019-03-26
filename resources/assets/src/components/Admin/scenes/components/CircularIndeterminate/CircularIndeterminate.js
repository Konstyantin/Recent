import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

/**
 * Circular indeterminate
 *
 * @param props
 */
export const CircularIndeterminate = (props) => {
    const { classes } = props;

    return (
        <div>
            <CircularProgress className={classes.progress} />
        </div>
    );
};