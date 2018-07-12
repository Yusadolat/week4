import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';

const renderInput = ({input, meta, name, label, type}) => (
    <div className="input-field">
        <input id={name} type={type} required="true" className="validate" {...input}/>
        <label htmlFor={name} >{label}</label>
    </div>
)

let Login = ({data}) =>{
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('/user/login', {
            email: data.values.email,
            password: data.values.password
        })
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err.response)
            return alert(err.response.data.msg)
        });
    }
    return (
        <form onSubmit={handleSubmit}>
            <h3>Login</h3>
            <Field name='email' type="email" label="Email" component={renderInput}/>
            <Field name="password" type="password" label="Password" component={renderInput}/>
            <button type="submit">Submit</button>
            <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </form>
    )
}

    Login = reduxForm({
        form:'register'
    })(Login)

function mapStateToProps(state) {
    
    return {
        data: state.form.register
        }
    }


    export default connect(mapStateToProps, { })(Login);