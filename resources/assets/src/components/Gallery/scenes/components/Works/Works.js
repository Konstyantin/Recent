import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
        flexGrow: 1,
        margin: '50px 0'
    },
    title: {
        marginBottom: 50,
        textAlign: 'center'
    }
});

/**
 * Photo list image
 * @type {*[]}
 */
const photos = [
    {src: 'http://t.commonsupport.com/catania/images/gallery/5.jpg', width: 3, height: 2},
    {src: 'http://t.commonsupport.com/catania/images/gallery/6.jpg', width: 3, height: 2},
    {src: 'http://t.commonsupport.com/catania/images/gallery/7.jpg', width: 3, height: 2},
    {src: 'http://t.commonsupport.com/catania/images/gallery/8.jpg', width: 3, height: 2},
    {src: 'http://t.commonsupport.com/catania/images/gallery/9.jpg', width: 3, height: 2},
    {src: 'http://t.commonsupport.com/catania/images/gallery/10.jpg', width: 3, height: 2},
    {src: 'http://t.commonsupport.com/catania/images/gallery/11.jpg', width: 3, height: 2},
    {src: 'http://t.commonsupport.com/catania/images/gallery/12.jpg', width: 3, height: 2},
    {src: 'http://t.commonsupport.com/catania/images/gallery/13.jpg', width: 3, height: 2},
];

/**
 * Works component
 */
class Works extends Component {
    constructor(props) {
        super(props);
        this.state = {currentImage: 0};
        this.closeLightbox = this.closeLightbox.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
    }

    /**
     * Open light box
     *
     * @param event
     * @param obj
     */
    openLightbox(event, obj) {
        this.setState({
            currentImage: obj.index,
            lightboxIsOpen: true,
        });
    }

    /**
     * Close light box
     */
    closeLightbox() {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }

    /**
     * Go to previous
     */
    gotoPrevious() {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }

    /**
     * Go to next
     */
    gotoNext() {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }

    /**
     * Render component
     *
     * @returns {*}
     */
    render() {

        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <Grid container justify={'center'}>
                    <Grid item lg={10} xl={8}>
                        <div className={classes.title}>
                            <h2>Our gallery</h2>
                            <p>These men promptly escaped from a maximum security stockade to the Los Angeles underground texas
                                tea.</p>
                        </div>
                        <Gallery photos={photos} onClick={this.openLightbox} margin={0}/>
                        <Lightbox images={photos}
                                  onClose={this.closeLightbox}
                                  onClickPrev={this.gotoPrevious}
                                  onClickNext={this.gotoNext}
                                  currentImage={this.state.currentImage}
                                  isOpen={this.state.lightboxIsOpen}
                        />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(Works)