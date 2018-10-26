import {Button, Form,  Icon, Input} from "antd";
import {sendRequestUser} from "../../requsets/Requests";
import {connect} from "react-redux";
import * as React from "react";
import Link from "react-router-dom/es/Link";


const FormItem = Form.Item;


class LoginComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    onSubmit = (e) => {
        e.preventDefault();

        this.setState({
            emailError: '',
            passwordError: '',
        });


        console.log("clock");
        sendRequestUser('logoped', 'test');
    };

    render() {
        return (
            <Form className="login-form" onSubmit={this.onSubmit}>
                <FormItem>
                    <Input prefix={<Icon type="user"/>}
                           placeholder="Username"/>
                </FormItem>
                <FormItem>
                    <Input prefix={<Icon type="lock"/>} type="password"
                           placeholder="Password"/>
                </FormItem>
                <FormItem>
                    <Button
                        type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    Or <Link to="/registration">register now!</Link>
                </FormItem>
            </Form>
        );
    }


}

export default connect(null, {sendRequestUser})(LoginComponent);