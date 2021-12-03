import React from "react";
import { useState } from "react";
import { Carousel } from "react-bootstrap";

const Slide = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            <Carousel activeIndex={index} onSelect={handleSelect} style={{justifyContent:"center", boxShadow:"1px 1px 2px 2px"}}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt="First slide"
                        style= {{opacity: "0.9",  justifyContent:"center", maxHeight:"700px"}}
                    />
                    <Carousel.Caption style={{backgroundColor: "white", opacity:"0.8", color:"black"}}>
                        <h1>Tạo cuộc họp</h1>
                        <h2>Lên kế hoạch và tạo cuộc họp dễ dàng.</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt="Second slide"
                        style= {{opacity: "0.9",  justifyContent:"center", maxHeight:"700px" }}
                    />

                    <Carousel.Caption style={{backgroundColor: "white", opacity:"0.8", color:"black"}}>
                        <h1>Tìm kiếm phòng họp thông minh</h1>
                        <h2>Phù hợp với từng mục đích hay nhu cầu sử dụng, .</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1624969862293-b749659ccc4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        alt="Second slide"
                        style= {{opacity: "0.9",  justifyContent:"center", maxHeight:"700px" }}
                    />

                    <Carousel.Caption style={{backgroundColor: "white", opacity:"0.8", color:"black"}}>
                        <h1>Quản lí lịch trình</h1>
                        <h2>Tiết kiệm thời gian bằng việc quản lí lịch trình khoa học.</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.pixabay.com/photo/2015/03/07/20/14/classroom-663437_960_720.jpg"
                        alt="Third slide"
                        style= {{opacity: "0.9",  justifyContent:"center", maxHeight:"700px" }}
                    />

                    <Carousel.Caption style={{backgroundColor: "white", opacity:"0.8", color:"black"}}>
                        <h1>Quản lí phòng họp đơn giản, khoa học</h1>
                        <h2>
                            Giảm tải công việc cho các ban, phòng quản lí nhân lực trong việc tổ chức, quản lí phòng họp.
                        </h2>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Slide;