import React from 'react';
import { ValidatorComponent } from 'react-material-ui-form-validator';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

class TextValidatorElement extends ValidatorComponent {

    render() {
        const { errorMessages, validators, requiredError, validatorListener, alert, ...rest } = this.props;

        console.log(this.state, this);

        return (
            <div>
                <TextValidator
                    validators={validators}
                    errorMessages={errorMessages}
                    {...rest}
                    ref={(r) => { this.input = r; }}
                />
                {/*{this.errorText()}*/}
            </div>
        );
    }

    errorText() {
        const { isValid } = this.state;
        const { alert, name } = this.props;


        if (!$.isEmptyObject(alert)) {
            const {message} = alert;

            if (message.hasOwnProperty(name)) {
                const errorMessage = message[name];

                // this.makeInvalid();
                // return (
                //     <div style={{ color: 'red' }}>
                //         {errorMessage}
                //     </div>
                // );
            }
        }

        if (isValid) {
            return null;
        }

        return (
            <div style={{ color: 'red' }}>
                {this.getErrorMessage()}
            </div>
        );
    }
}

export {TextValidatorElement};