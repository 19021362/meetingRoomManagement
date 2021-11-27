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
                        style= {{opacity: "0.7",  justifyContent:"center", maxHeight:"700px"}}
                    />
                    <Carousel.Caption style={{color:"Black"}}>
                        <h1>Tạo cuộc họp</h1>
                        <h2>Lên kế hoạch và tạo cuộc họp dễ dàng.</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt="Second slide"
                        style= {{opacity: "0.7",  justifyContent:"center", maxHeight:"700px" }}
                    />

                    <Carousel.Caption style={{color:"black"}}>
                        <h1>Quản lí lịch trình</h1>
                        <h2>Tiết kiệm thời gian bằng việc quản lí thời gian khoa học.</h2>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.pixabay.com/photo/2015/03/07/20/14/classroom-663437_960_720.jpg"
                        alt="Third slide"
                        style= {{opacity: "0.7",  justifyContent:"center", maxHeight:"700px" }}
                    />

                    <Carousel.Caption style={{color:"black"}}>
                        <h1>Quản lí phòng họp đơn giản, khoa học</h1>
                        <h2>
                            Giảm tải công việc cho các ban, phòng quản lí nhân lực trong việc tổ chức tìm kiếm phòng họp.
                        </h2>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Slide;