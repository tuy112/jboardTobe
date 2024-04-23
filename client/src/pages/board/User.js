import React from 'react';
import '../../css/User.css';
// import axios from "axios";

class User extends React.Component {
    render() {
        return(
            <div className='user'>
                <h1>방문자 정보</h1>
                <UserProfile id={this.props.id} image={this.props.image} name={this.props.name}/>
                <UserInfo birthday={this.props.birthday} gender={this.props.gender} job={this.props.job}/>
            </div>
        )
    }
}

class UserProfile extends React.Component {
    render() {
        return (
            <div className='userProfile'>
                <img src={this.props.image} alt='profile'></img>
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        );
    }
}

class UserInfo extends React.Component {
    render() {
        return(
            <div className='userInfo'>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>
            </div>
        );
    }
}

export default User;