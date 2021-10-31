

import React from 'react';
import SideBar from "../components/sideBar";

import RoomDetail from '../components/roomDetail.js'
import '../styles/content.css';
import '../styles/sidebar.css';





const Profile = () => {

    const [roomId, setRoomId] = React.useState(0);

    var roomDetail = new RoomDetail();
    var rooms = roomDetail.getRoomsDetail();


    return (
        <>
            <SideBar />
            <div class="content-container">

                <div class="container-fluid" style={{ backgroundColor: "lavender" }}>

                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-12 col-lg-10 col-xl-8 mx-auto">
                                <div class="my-4">
                                    <form>
                                        <div class="row mt-5 align-items-center">
                                            <div class="col-md-3 text-center mb-5">
                                                <div class="avatar avatar-xl">
                                                    <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="..." class="avatar-img rounded-circle" />
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="row align-items-center">
                                                    <div class="col-md-7">
                                                        <h4 class="mb-1">Brown, Asher</h4>
                                                
                                                    </div>
                                                </div>
                                                <div class="row mb-4">
                                                    <div class="col-md-7">
                                                        <p class="text-muted">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit nisl ullamcorper, rutrum metus in, congue lectus. In hac habitasse platea dictumst. Cras urna quam, malesuada vitae risus at,
                                                            pretium blandit sapien.
                                                        </p>
                                                    </div>
                                                    <div class="col">
                                                        <p class="small mb-0 text-muted">Nec Urna Suscipit Ltd</p>
                                                        <p class="small mb-0 text-muted">P.O. Box 464, 5975 Eget Avenue</p>
                                                        <p class="small mb-0 text-muted">(537) 315-1481</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr class="my-4" />
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label for="firstname">Họ và tên</label>
                                                <input type="text" id="firstname" class="form-control" placeholder="Brown Asher" />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="inputEmail4">Email</label>
                                            <input type="email" class="form-control" id="inputEmail4" placeholder="brown@asher.me" />
                                        </div>
                                        <div class="form-group">
                                            <label for="inputAddress5">Địa chỉ</label>
                                            <input type="text" class="form-control" id="inputAddress5" placeholder="P.O. Box 464, 5975 Eget Avenue" />
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label for="inputCompany5">Công ty</label>
                                                <input type="text" class="form-control" id="inputCompany5" placeholder="Nec Urna Suscipit Ltd" />
                                            </div>
                                            <div class="form-group col-md-4">
                                                <label for="inputState5">Trụ sở</label>
                                                <select id="inputState5" class="form-control">
                                                    <option selected="">Choose...</option>
                                                    <option>...</option>
                                                </select>
                                            </div>
                                            
                                        </div>
                                        <hr class="my-4" />
                                        <div class="row mb-4">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label for="inputPassword4">Mật khẩu cũ</label>
                                                    <input type="password" class="form-control" id="inputPassword5" />
                                                </div>
                                                <div class="form-group">
                                                    <label for="inputPassword5">Mật khẩu mới</label>
                                                    <input type="password" class="form-control" id="inputPassword5" />
                                                </div>
                                                <div class="form-group">
                                                    <label for="inputPassword6">Xác nhận mật khẩu</label>
                                                    <input type="password" class="form-control" id="inputPassword6" />
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" class="btn btn-primary">Cập nhật</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );



};

export default Profile;