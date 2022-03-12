import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friend from './Friend/Friend';
import MyContext from "../../MyContext";
import {connect} from "react-redux";
import Navbar from "./Navbar";
let mapStateToProps = (state) => {
    return {
        navbar: state.navbar
    }
}
const NavbarContainer = connect(mapStateToProps) (Navbar);
export default NavbarContainer;