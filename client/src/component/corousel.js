import React, { useState } from 'react';
//For get database
import axios from 'axios';
import Carousel from "react-bootstrap/Carousel";
import { Row } from "react-bootstrap";
import "../component/Carousel.css";

function ShowCorousel() {

    // กำหนดค่าไว้ดึงข้อมูล
    const [ctList, setctList] = useState([]);

    // ฟังก์ชั่น รับค่ามาจาก path
    function getctList() {
        axios.get('http://localhost:3001/ctList').then((response) => {
            setctList(response.data);
        })
    }

    return (
        <div onLoad= {() => this.getctList()}>
            <button className='btn btn-primary' onClick={getctList}>Show Corousel</button>
            
            {ctList.map((val, key) => {
                return (
                    <Carousel fade>
                        <Carousel.Item key={val.MovieId}>
                            <img
                            className="d-block w-100 rounded-5"
                            src={val.ImageLink}
                            alt="Data not found!"
                            />
                            <Carousel.Caption>
                            <h3>{val.Title}</h3>
                            <p>{val.Description}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                )
            })}
        </div>
    )
}

export default ShowCorousel;