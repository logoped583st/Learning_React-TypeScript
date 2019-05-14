import * as React from "react";
import {Button, Form, Icon, Input} from "antd";
import connect from "react-redux/es/connect/connect";
import {registerUser} from "../../requsets/Requests";
import {Redirect} from "react-router-dom";


let FormItem = Form.Item;

class RegistrationComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            token: '',
        }
    }

    handleLoginChange = (e) => {
        this.setState({email: e.target.value});
    };


    handlePasswordChange = (e) => {
        this.setState({password: e.target.value});
    };

    onSubmit = (e) => {
        e.preventDefault();

        this.props.registerUser(this.state.email, this.state.password);
    };

    render() {
        console.log(this.props.token);
        if (this.props.token !== '') {
            localStorage.setItem('token', this.props.token);
            return <Redirect to='/tempMaimPage'/>
        }

        return (
            <Form className="login-form" onSubmit={this.onSubmit}>
                <FormItem>
                    <Input prefix={<Icon type="user"/>}
                           placeholder="Username"
                           onChange={this.handleLoginChange}
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
                        Register
                    </Button>
                </FormItem>
            </Form>
        );
    }
}


const getState = (state) => {
    console.log(state);
    return {
        token: state.reducerToken.token,
    }

};

export default connect(getState, {registerUser})(RegistrationComponent);