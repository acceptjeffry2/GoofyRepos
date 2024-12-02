
import { FaCrown } from "react-icons/fa6";
import { FaKeyboard } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";


function NavBar (){
    return (
    <div className="row">
        <div className="col">
            <h3 className="comic-neue-regular">Tylek</h3>
            <button class="bttn"><FaKeyboard /></button>
            <button class="bttn"><FaCrown /></button>
            <button class="bttn"><FaInfo /></button>
            <button class="bttn"><IoIosSettings /></button>
        </div>

        <div className="col">
            <button class="bttn"><IoIosNotifications /></button>
            <button class="bttn"><CgProfile /></button>
        </div>

        <div className="box">
            <button className="bttnBox">a</button>
        </div>
    </div>
    );
}

export default NavBar