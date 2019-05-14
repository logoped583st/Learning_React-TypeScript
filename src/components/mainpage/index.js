import * as React from "react";
import {connect} from "react-redux";
import './mainpage.css'
import {createTask, deleteTask, getTasks, getUser, sendRequestAllUser, updateTask} from "../../requsets/Requests";
import {Button, Modal, Input} from "antd";


const {TextArea} = Input;

class MainPageComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            photo: '',
            fullName: '',
            admin: false,
            modaVisible: false,
            users: [],
            id: '',
            descriptionCreate: '',
            taskName: '',
            tasks: [],
            taskId: 0,
            descriptionUpdate: '',
            userDescription: '',
            taskNameUpdate: '',
            badges: [],
            posts: [],
        };

        this.props.getUser();
        this.props.getTasks();
    }

    setModalVisible = (modal1Visible) => {
        this.setState({modal1Visible: modal1Visible});
    };

    setModalUpdateVisible = (modalVisible, taskName, description, taskId) => {
        console.log(taskId);
        this.setState({descriptionUpdate: description, taskNameUpdate: taskName});
        console.log(this.state.taskId);
        this.setState({modalVisible})
    };


    createTaskClick = (modal1Visible) => {
        this.setState({modal1Visible: modal1Visible});
        this.props.createTask(this.state.id, this.state.descriptionCreate, this.state.taskName);
        this.state.descriptionCreate = '';
        this.state.taskName = '';
    };

    deleteTask = (id) => {
        this.props.deleteTask(id, this.props.id)
    };


    descriptionChange = (e) => {
        this.setState({descriptionCreate: e.target.value})
    };

    nameChange = (e) => {
        this.setState({taskName: e.target.value})
    };

    updateDescriptionChange = (e) => {
        this.setState({descriptionUpdate: e.target.value})
    };

    updateNameChange = (e) => {
        this.setState({taskNameUpdate: e.target.value})
    };


    updateTaskClick = (modalVisible) => {
        this.setState({modalVisible});

        this.props.updateTask(this.state.id, this.state.descriptionUpdate, this.state.taskNameUpdate);
        this.state.descriptionUpdate = '';
        this.state.taskNameUpdate = '';
    };


    render() {
        console.log(this.props.posts);
        const posts = this.props.posts.map((data) => {
            return <section className="taskArea">
                <section className="taskName">
                    <h2>{data.description.title}</h2>
                    <section className="buttonsEdit">
                        <Button type="primary" shape="circle" icon="edit" size="small"
                                onClick={() => {
                                    this.setModalUpdateVisible(true, data.description.title, data.description.description, data.id)
                                    this.setState({taskId: data.id});
                                }

                                }/>
                        <Button type="primary" shape="circle" icon="delete" size="small"
                                onClick={() => this.deleteTask(data.id)}/>
                    </section>
                </section>
                <section className="taskDescription">
                    {data.description.description}
                </section>
            </section>
        });

        return (
            <section className="mainPageSection">
                <section className="flexMain">
                    <Modal
                        title="Create Task"
                        style={{top: 20}}
                        visible={this.state.modal1Visible}
                        onOk={() => this.createTaskClick(false)}
                        onCancel={() => this.setModalVisible(false)}>
                        <TextArea id="textAreaOwn" placeholder="Name of task"
                                  value={this.state.taskName}
                                  onChange={this.nameChange}
                                  autosize={{minRows: 1, maxRows: 1}}/>
                        <TextArea id="textAreaOwn" placeholder="Description of task"
                                  onChange={this.descriptionChange}

                                  value={this.state.descriptionCreate}
                                  autosize={{minRows: 3, maxRows: 6}}/>
                    </Modal>


                    <Modal
                        title="Update Task"
                        style={{top: 20}}
                        visible={this.state.modalVisible}
                        onOk={() => this.updateTaskClick(false)}
                        onCancel={() => this.setModalUpdateVisible(false)}>
                        <TextArea id="textAreaOwn" placeholder="Name of task"
                                  onChange={this.updateNameChange}
                                  value={this.state.taskNameUpdate}
                                  autosize={{minRows: 1, maxRows: 1}}/>
                        <TextArea id="textAreaOwn" placeholder="Description of task"
                                  onChange={this.updateDescriptionChange}

                                  value={this.state.descriptionUpdate}
                                  autosize={{minRows: 3, maxRows: 6}}/>
                    </Modal>

                    <section>
                        <img className="avatar" src={this.props.photo} alt="avatar"/>
                        <h2 className="userText"> {this.props.nickname}</h2>
                        <h3 className="userText">{this.props.userDescription}</h3>
                        <Button className="editProfileButton" type="primary">Edit Profile</Button>
                    </section>

                    <section className="containerTasks">
                        {posts}
                    </section>

                </section>
                <Button className="fab" type="primary" shape="circle" icon="plus" size="large"
                        onClick={() => this.setModalVisible(true)}/>
            </section>
        );
    }


}


const getState = (state) => {

    console.log(state);

    return {
        posts: state.reducerTasks.activities,

        nickname: state.reducerUser.userName,
        photo: state.reducerUser.photo,
        badges: state.reducerUser.badges,
        skills: state.reducerUser.skills,
        userDescription: state.reducerUser.description,
        fullName: state.reducerUser.fullName,
        id: state.reducerUser.id,
    };
};

export default connect(getState, {
    sendRequestAllUser,
    getTasks,
    createTask,
    getUser,
    deleteTask,
    updateTask
})(MainPageComponent);