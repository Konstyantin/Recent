import React, {Component} from 'react';
import {DropzoneArea} from 'material-ui-dropzone'

class DropZoneIcon extends Component {

    constructor(props) {
        super(props);
        this.state = {
            files: []
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(files){
        this.setState({
            files: files
        });
    }

    render() {
        return (
            <DropzoneArea
                onChange={this.handleChange.bind(this)}
            />
        )
    }
}

export {DropZoneIcon};