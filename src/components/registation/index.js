import * as React from "react";
import {Button, Form, Icon, Input} from "antd";


const FormItem = Form.Item;

class RegistrationComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    render() {
        return (
            <Form className="login-form">
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
                        Register
                    </Button>
                </FormItem>
            </Form>
        );
    }
}

export default RegistrationComponent