import * as React from "react";
import {connect} from "react-redux";

class MainPageComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nickname: '',
            photo: '',
            fullName: ''
        }
    }


    render() {
        return (
            <section className="mainPageSection">
                <img className="avatar" src={this.props.photo} alt="avatar"/>

                <h2 className="userText"> {this.props.nickname}</h2>
            </section>


        );
    }
}

const getState = (state) => {
    return {
        nickname: state.reducerUser.nickname,
        photo: state.reducerUser.photo,
        fullName: state.reducerUser.fullName,
    };
};

export default connect(getState)(MainPageComponent);