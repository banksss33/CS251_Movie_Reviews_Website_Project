import React, { useState } from 'react';
//For get database
import axios from 'axios';

function ShowAccount() {

    // กำหนดค่าไว้ดึงข้อมูล
    const [accountList, setAccountList] = useState([]);

    // ฟังก์ชั่น รับค่ามาจาก path
    function getAccount() {
        axios.get('http://localhost:3001/showmember').then((response) => {
            setAccountList(response.data);
        })
    }

    return (
        <div>
            <button className='btn btn-primary' onClick={getAccount}>Show member account</button>
            {/* map get 2 parameter val and key */}
            {accountList.map((val, key) => {
                return (
                    <div className='card'>
                        <div className='card-body text-left'>
                            <p className='card-text'>username: {val.username}</p>
                            <p className='card-text'>username: {val.password}</p>
                        </div>

                    </div>
                )
            })}
        </div>
    )
}

export default ShowAccount;