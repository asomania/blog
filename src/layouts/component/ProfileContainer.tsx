import "./styles/profile-container.css";
import Input from "../../components/base/Input";
const ProfileContainer = () => {
  return (
    <>
      <div className="p-40 d-flex columns j-space-between a-center ibm-font">
        <div className="avatar-img d-flex columns gap-25 w-100">
          <img src="avatar.jpg" alt="" className="denem" />
          <div className="ibm-font">
            <p className="bold">Aso Dev</p>
            <p className="grey-text">Esnaf / Developer at Google</p>
          </div>
        </div>
        <div className="d-flex columns gap-25">
          <p>Recommended Topics</p>
          <div className="d-flex flex-wrap gap-25 ">
            <div className="text-box">Software</div>
            <div className="text-box"> Web</div>
            <div className="text-box">Backend</div>
            <div className="text-box"> Technical</div>
            <div className="text-box">Algortihm</div>
          </div>
        </div>
        <div className="d-flex columns">
          <p className="bold">Subscribe to me</p>
          <p className="grey-text">
            Sign up now to get access to the library of members-only issues.
          </p>
          <Input type="text" placeholder="Your- email" />
        </div>
        <div></div>
      </div>
    </>
  );
};

export default ProfileContainer;
