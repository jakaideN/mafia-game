import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';

class MessageForm extends Component {
    static defaultProps = {};

    static propTypes = {};

    state = {};

    render() {
        return (
            <div className={"c_message_form"}>

                <TextField className={"c_left c_input"} id="outlined-basic" variant="outlined" />

                <Button
                    variant="contained"
                    color="primary">
                    <Icon>send</Icon>
                </Button>
            </div>
        );
    }
}

export default MessageForm;
