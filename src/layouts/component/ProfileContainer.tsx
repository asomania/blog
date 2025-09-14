import "./styles/profile-container.css";
//import Input from "../../components/base/Input";
//import Button from "../../components/base/Button";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { useSelector } from "react-redux";
const ProfileContainer = () => {
  const theme = useSelector(
    (state: { themePick: { theme: boolean } }) => state.themePick.theme
  );
  return (
    <>
      <div className="p-40 d-flex columns j-space-between a-center ibm-font mvh-100 gap-25">
        <div className="avatar-img d-flex columns gap-25 w-100">
          <img src="avatar.jpg" alt="" className="denem" />
          <div className="ibm-font">
            <p className="bold">Eren Küçük</p>
            <p className="grey-text">Software Developer and Blogger</p>
          </div>
        </div>
        <div className="d-flex columns gap-15">
          <p>Recommended Topics</p>
          <div className="d-flex flex-wrap gap-15 text-12 ">
            <div className="text-box ">Software</div>
            <div className="text-box"> Web</div>
            <div className="text-box">Backend</div>
            <div className="text-box"> Technical</div>
            <div className="text-box">Algortihm</div>
          </div>
        </div>
        {/*
        <div className="d-flex columns">
          <p className="bold">Subscribe to me</p>
          <p className="grey-text">
            Sign up now to get access to the library of members-only issues.
          </p>
          <Input type="text" placeholder="Your- email" />
          <Button />
        </div>
        */}
        <div className="d-flex gap-25">
          <FaSquareXTwitter size={30} color={theme ? "black" : "white"} />
          <FaSquareGithub size={30} color={theme ? "black" : "white"} />
        </div>
      </div>
    </>
  );
};

export default ProfileContainer;
