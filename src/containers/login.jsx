import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/auth';
import { changeInput } from '../actions/forms';

export const Login = (props, state) => {
    return (
        <div>
            <input id="username" type="text" value={props.username} onChange={props.onChange} />
            <input id="password" type="text" value={props.password} onChange={props.onChange} />
            <button onClick={props.handleSubmit.bind(this, props)}>HOLA</button>
        </div>
    );
};
const mapStateToProps = state => ({
    user: state.user,
    password: state.password
});
const mapDispatchToProps = dispatch => ({
    handleSubmit: (model) => {
        dispatch(login(model.user, model.password));
    },
    onChange: (e) => {
        dispatch(changeInput(e));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
