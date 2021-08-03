import React, {Component} from 'react';
import _ from 'lodash';
import {TextField, Grid, Typography, Button} from '@material-ui/core';
import {loginRequest} from "../../../store/actions/users";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {},
            register: false
        }
    }

    handlePage = () => {
        this.setState({
            register: true
        })
    }

    handleChange = (path, value) => {
        const {formData} = this.state;
        _.set(formData, path, value);
        this.setState({formData})
    }

    handleSubmit = (ev) => {
        console.log('sasd')
        ev.preventDefault();
        const {formData} = this.state;
        this.props.loginRequest(formData.email, formData.password);
    }
    render() {
        const { token, user } = this.props;
        console.log(token)
        const {formData, register} = this.state;
        return (
            <Grid container justify='center' alignItems='center' direction='column'>
                <Typography variant='h2' component='h2' color='primary'>LOG IN</Typography>
                <br/>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        type="email"
                        className="first"
                        placeholder="email"
                        value={formData.email || ''}
                        onChange={(ev) => this.handleChange('email', ev.target.value)}/>
                    <br/>
                    <TextField
                        type="password"
                        className="first"
                        placeholder="password"
                        value={formData.password || ''}
                        onChange={(ev) => this.handleChange('password', ev.target.value)}/>
                    <br/>
                    <Button variant="contained" color="primary" type="submit" size='large' fullWidth>Sign in</Button>
                    <br/>
                    <Button variant="contained" color="secondary" onClick={this.handlePage} size='small' fullWidth style={{marginTop:'25px',marginBottom:'15px'}}>Registration</Button>
                </form>
                {register && <Redirect to='/register'/>}
                {this.props.token && <Redirect to='/admin' />}
            </Grid>
        );
    }
}

const mapStateToProps = (state) => ({
    token: state.users.token,
    user: state.users.user,
});
const mapDispatchToProps = {
    loginRequest,
}
const Container = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Login)

export default Container;
