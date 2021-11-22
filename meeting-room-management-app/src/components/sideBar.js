import '../styles/sidebar.css';
import { Container, LinkContainer, Nav } from 'react-router-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { auth } from '../data/auth';


const SideBar = () => {


    return (
        <>

            <div class="sidebar-container">
                <div class="sidebar-logo">
                    <i class="fa fa-bars" aria-hidden="true"></i> MENU
                </div>

                <ul class="sidebar-navigation">
                    <li>
                        <a href="#">
                            <i class="fa fa-cog" aria-hidden="true"></i> Cài đặt
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fa fa-briefcase" aria-hidden="true"></i> Cuộc họp của tôi
                        </a>
                    </li>
                </ul>
                <hr></hr>



            </div>




        </>
    );
};


export default SideBar;