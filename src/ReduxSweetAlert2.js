import React, { Component } from 'react';
import SweetAlert from 'react-sweetalert2';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import {closeAlert} from './actions'
 
class ReduxSweetAlert2 extends Component {

    constructor(props){
        super(props);

        this.onClose = this.onClose.bind(this);
    }

    onClose(){
        if(this.props.sweetalert2.onClose != null)
            this.props.sweetalert2.onClose();
        this.props.closeAlert();
    }

    render() {
        const {onClose, ...restProps} = this.props.sweetalert2;
        return (
            <SweetAlert onClose={this.onClose} {...restProps} />
        );
    }
}

const mapStateToProps = state => ({
    sweetalert2: state.sweetalert2
});

ReduxSweetAlert2.propTypes = {
    sweetalert2: PropTypes.object.isRequired,
    closeAlert: PropTypes.func.isRequired
}

export default connect(mapStateToProps, {
    closeAlert
})(ReduxSweetAlert2);