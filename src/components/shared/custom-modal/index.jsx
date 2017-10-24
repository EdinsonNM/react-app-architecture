import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions } from '../../../actions/custom-modal';

import css from './custom-modal.css'

class CustomModal extends React.Component {
    constructor(props) {
        super(props);
        this.closeModal = this.closeModal.bind(this);
    }

    closeModal() {
        this.props.actions.closeModal();
    }

    render() {
        const customModal = this.props.customModal;
        return (
            (customModal.isOpen ?
            <div className={`d-flex flex-row ${css.customModal}`}>
                <div className={`align-self-center ${css.cmContainer}`}>
                    <div className={css.cmHeader}>
                        <span className={css.cmHeadercloseBtn} 
                              onClick={this.closeModal}>x</span>
                            {customModal.title ? <h5>{customModal.title}</h5> : null}
                    </div>
                    <div className={css.cmContainerBody}>
                        {customModal.summary ? <p>{customModal.summary}</p> : null}
                        {customModal.detail ? <p>{customModal.detail}</p> : null}
                    </div>
                </div>
            </div> 
            : null)
        );
    }
}

const mapStateToProps = state => {
    const { customModal } = state;
    return ({
        customModal
    });
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomModal);