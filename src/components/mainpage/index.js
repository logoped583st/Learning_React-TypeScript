import * as React from "react";
import {connect} from "react-redux";
import './mainpage.css'
import {createTask, getTasks, sendRequestAllUser} from "../../requsets/Requests";
import {Button, Modal, Input} from "antd";


const {TextArea} = Input;

class MainPageComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nickname: '',
            photo: '',
            fullName: '',
            admin: false,
            modaVisible: false,
            users: [],
            id: '',
            descriptionCreate: ''
        }
    }

    setModalVisible = (modal1Visible) => {
        this.setState({modal1Visible});
    };


    createTaskClick = (modal1Visible) => {
        this.setState({modal1Visible});
        console.log(this.props.id);

        this.props.createTask(this.props.id, this.state.descriptionCreate)
    };


    descriptionChange = (e) => {
        this.setState({descriptionCreate: e.target.value})
    };


    render() {
        if (this.props.admin && this.props.users.length < 1) {
            this.props.sendRequestAllUser(this.props.nickname)
        }


        const a = this.props.users.map((data) => {
            return <p>{data.email}</p>
        });

        const admin = this.props.admin;
        return (
            <section className="mainPageSection">
                <Modal
                    title="Create Tasl"
                    style={{top: 20}}
                    visible={this.state.modal1Visible}
                    onOk={() => this.createTaskClick(false)}
                    onCancel={() => this.setModalVisible(false)}>
                    <TextArea placeholder="Description of task" onChange={this.descriptionChange}
                              autosize={{minRows: 3, maxRows: 6}}/>
                </Modal>
                <img className="avatar" src={this.props.photo} alt="avatar"/>
                <h2 className="userText"> {this.props.nickname}</h2>

                {admin === true && <h2>All users</h2>}
                {a}

                <Button className="fab" type="primary" shape="circle" icon="plus" size="large"
                        onClick={() => this.setModalVisible(true)}/>
            </section>
        );
    }
}

const getState = (state) => {

    console.log(state.reducerUser);
    if (state.reducerUser.id !== '') {
        getTasks(state.reducerUser.id)
    }


    return {
        nickname: state.reducerUser.email,
        photo: state.reducerUser.photo,
        fullName: state.reducerUser.fullName,
        admin: state.reducerUser.admin,
        id: state.reducerUser.id,
        users: state.reducerAllUsers.users,
        tasks: state.reducerTasks
    };
};

export default connect(getState, {sendRequestAllUser, getTasks, createTask})(MainPageComponent);