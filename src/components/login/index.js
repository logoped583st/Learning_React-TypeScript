import {Button, Form, Icon, Input} from "antd";
import {sendRequestUser} from "../../requsets/Requests";
import {connect} from "react-redux";
import * as React from "react";
import {Redirect, Link} from 'react-router-dom'


const FormItem = Form.Item;


class LoginComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            login: '',
            error: ''
        };
    }

    handleLoginChange = (e) => {
        this.setState({email: e.target.value});
    };


    handlePasswordChange = (e)  =>{
        this.setState({password: e.target.value});
    };

    onSubmit = (e) => {
        e.preventDefault();

        this.props.sendRequestUser(this.state.email, this.state.password);
    };

    render() {
        console.log(this.props.login);
        const a = this.props;
        if (a.login !== '') {
            return <Redirect to='/tempMaimPage'/>
        }

        return (

            <Form className="login-form" onSubmit={this.onSubmit}>
                <FormItem>
                    <Input prefix={<Icon type="user"/>}
                           placeholder="Username"
                           onChange = {this.handleLoginChange}
                           type="text"/>

                </FormItem>
                <FormItem>
                    <Input prefix={<Icon type="lock"/>}
                           type="password"
                           placeholder="Password"
                           onChange={this.handlePasswordChange}/>
                </FormItem>
                <FormItem>
                    <Button
                        type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    Or <Link to="/registration">register now!</Link>
                </FormItem>
                {a.error ===true && <h2>Incorrect login or password</h2>}
            </Form>

        );
    }


}

const getState = (state) => {
    return {
        login: state.reducerUser.email,
        error: state.reducerUser.error
    }

};

export default connect(getState, {sendRequestUser})(LoginComponent);