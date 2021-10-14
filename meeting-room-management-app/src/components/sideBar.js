import '../styles/sidebar.css';

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
                            <i class="fa fa-home" aria-hidden="true"></i> Homepage
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fa fa-tachometer" aria-hidden="true"></i> Dashboard
                        </a>
                    </li>
                    
                    <li>
                        <a href="#">
                            <i class="fa fa-users" aria-hidden="true"></i> Profile
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fa fa-cog" aria-hidden="true"></i> Settings
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fa fa-info-circle" aria-hidden="true"></i> Information
                        </a>
                    </li>
                </ul>

                
            </div>




        </>
    );
};


export default SideBar;