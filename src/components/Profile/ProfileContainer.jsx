import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, setProfileThunk, setUserProfile, updateStatus} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/authRedirect";
import {compose} from "redux";
class ProfileContainer extends React.Component  {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = this.props.userId;
        }
        this.props.setProfileThunk(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                         updateStatus={this.props.updateStatus} />
            </div>
        );
    }
}
let mapStateToProps = (state) => ({
   profile: state.profile.profile,
   status: state.profile.status,
   userId: state.auth.userId
});
export default compose(
    // eslint-disable-next-line no-undef
    connect(mapStateToProps, {setUserProfile, setProfileThunk, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);