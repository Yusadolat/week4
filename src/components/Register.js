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

let Register = ({data}) =>{
    const handleSubmit = (e) => {
        e.preventDefault()
        if(data.values.password !== data.values.password2 ) return alert('Passwords do not match');
        axios.post('/user/signup', {
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
        <h3>Sign up</h3>
        <Field className="input" name='email' type="email" label="Email" component={renderInput}/>
        <Field name="password" type="password" label="Password" component={renderInput}/>
        <Field name="password2" type="password" label="Repeat Password" component={renderInput}/>
        <button type="submit">Submit</button>
        <p>Have an account? <Link to="/">Login</Link></p>
    </form>
    )
}

    Register = reduxForm({
        form:'register'
    })(Register)

function mapStateToProps(state) {
    
    return {
        data: state.form.register
        }
    }


    export default connect(mapStateToProps, { })(Register);