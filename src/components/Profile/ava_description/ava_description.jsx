import s from './ava_description.module.css';
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/images.png";
import StatusWithHooks from "../../Status/StatusWithHooks";
const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={s.profileInfo}>
            <section className={s.floatAva}>
              <img src={props.profile.photos.small?props.profile.photos.small:userPhoto} className={s.round} />
            </section>
            <section>
                <StatusWithHooks status={props.status} updateStatus={props.updateStatus} />
            </section>
      </div>
    );
}
export default ProfileInfo;