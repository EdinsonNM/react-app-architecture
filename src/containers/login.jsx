import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../actions/auth';
import { changeInput } from '../actions/forms';

const Login = props =>
    (
        <div>
            <input id="username" type="text" value={props.username} onChange={props.onChange} />
            <input id="password" type="text" value={props.password} onChange={props.onChange} />
            <button onClick={props.handleSubmit}>HOLA</button>
        </div>
    );

Login.propTypes = {
    username: propTypes.string,
    password: propTypes.string,
    onChange: null,
    handleSubmit: null
};
Login.defaultProps = {
    username: '',
    password: '',
    onChange: null,
    handleSubmit: null
};
const mapStateToProps = state => ({
    username: state.username,
    password: state.password
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
