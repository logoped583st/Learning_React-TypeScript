import * as React from "react";
import {connect} from "react-redux";
import './mainpage.css'
import {createTask, getTasks, getUser, sendRequestAllUser} from "../../requsets/Requests";
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
            descriptionCreate: '',
            taskName: '',
            tasks: []
        };

        console.log(this.props.id);
        if (this.state.nickname === '') {
            console.log(localStorage.getItem('id'));
            this.props.getUser(localStorage.getItem('id'))
        }

        this.props.getTasks(localStorage.getItem('id'))

    }

    setModalVisible = (modal1Visible) => {
        this.setState({modal1Visible});
    };


    createTaskClick = (modal1Visible) => {
        this.setState({modal1Visible});
        console.log(this.props.id);

        this.props.createTask(this.props.id, this.state.descriptionCreate, this.state.taskName)
    };


    descriptionChange = (e) => {
        this.setState({descriptionCreate: e.target.value})
    };

    nameChange = (e) => {
        this.setState({taskName: e.target.value})
    };


    render() {
        if (this.props.admin && this.props.users.length < 1) {
            this.props.sendRequestAllUser(this.props.nickname)
        }

        console.log(this.props.tasks);
        const a = this.props.users.map((data) => {
            return <p>{data.email}</p>
        });

        const tasks = this.props.tasks.map((data) => {
            return <section className="taskArea">
                <h2 className="taskName">{data.nameTask}</h2>
                    <section className="taskDescription">
                        {data.description}
                    </section>
            </section>
        });

        const admin = this.props.admin;
        return (
            <section className="mainPageSection">
                <section className="flexMain">
                    <Modal
                        title="Create Task"
                        style={{top: 20}}
                        visible={this.state.modal1Visible}
                        onOk={() => this.createTaskClick(false)}
                        onCancel={() => this.setModalVisible(false)}>
                    <TextArea placeholder="Name of task" onChange={this.nameChange}
                              autosize={{minRows: 1, maxRows: 1}}/>
                        <TextArea placeholder="Description of task" onChange={this.descriptionChange}
                                  autosize={{minRows: 3, maxRows: 6}}/>
                    </Modal>
                    <section>
                        <img className="avatar" src={this.props.photo} alt="avatar"/>
                        <h2 className="userText"> {this.props.nickname}</h2>

                        {admin === true && <h2>All users</h2>}
                        {a}
                    </section>


                    <section className="containerTasks">
                        {tasks}
                    </section>


                    {/*<section className="taskArea">*/}
                    {/*fffffasdfasdfasdfghdfggddfgsdfgsadfsadfdfsadfsadfsadfsadfsdfsdfsdfsaadfsadfsfsaadfsadfsadfsadfsdfasadfsadfsadfsdfsadfsaadfsadfsadfsadfsadfsadfsadfsadfs*/}
                    {/*</section>*/}


                </section>
                <Button className="fab" type="primary" shape="circle" icon="plus" size="large"
                        onClick={() => this.setModalVisible(true)}/>
            </section>
        );
    }

}


const getState = (state) => {

    if (state.reducerUser.id !== '') {
        localStorage.setItem('id', state.reducerUser.id);
    }

    return {
        nickname: state.reducerUser.email,
        photo: state.reducerUser.photo,
        fullName: state.reducerUser.fullName,
        admin: state.reducerUser.admin,
        id: state.reducerUser.id,
        users: state.reducerAllUsers.users,
        tasks: state.reducerTasks.tasks
    };
};

export default connect(getState, {sendRequestAllUser, getTasks, createTask, getUser})(MainPageComponent);