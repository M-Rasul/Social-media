import s from './Profile.module.css';
import ProfileInfo from './ava_description/ava_description';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
const Profile = (props) => {
    return (
        <div>
            <div>
                <img src='https://cdn.wallpapersafari.com/47/76/FBuwQl.jpg' className={s.contentBack} />
            </div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
            <MyPostsContainer />
        </div>
    );
}
export default Profile;