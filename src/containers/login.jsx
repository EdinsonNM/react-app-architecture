import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../actions/auth';
import { changeInput } from '../actions/forms';

const Login = props =>
    (
        <div className="row">
            <input id="username" type="text" value={props.username} onChange={props.onChange} />
            <input id="password" type="text" value={props.password} onChange={props.onChange} />
            { (props.inProgress) ? <div>In progress..</div> : null }
            <button className="btn btn-primary" onClick={props.handleSubmit}>HOLA</button>
        </div>
    );

Login.propTypes = {
    inProgress: propTypes.bool,
    username: propTypes.string,
    password: propTypes.string,
    onChange: propTypes.func,
    handleSubmit: propTypes.func
};
Login.defaultProps = {
    inProgress: false,
    username: '',
    password: '',
    onChange: null,
    handleSubmit: null
};
const mapStateToProps = state => ({
    username: state.forms.username,
    password: state.forms.password,
    inProgress: state.auth.inProgress
});
const mapDispatchToProps = (dispatch, props) => ({
    handleSubmit: () => {
        dispatch(login(props.username, props.password));
    },
    onChange: (e) => {
        dispatch(changeInput(e));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
