//account.js
import React, { useEffect, useState } from "react";
//For get database
import axios from "axios";

function ShowAccount() {
  // กำหนดค่าไว้ดึงข้อมูล
  const [accountList, setAccountList] = useState([]);

  // ฟังก์ชั่น รับค่ามาจาก path
  useEffect(() => {
    const getAccount = () => {
      axios.get("http://localhost:3001/showmmber").then((response) => {
        setAccountList(response.data);
      });
    };

    getAccount();
  }, []);

  return (
    <div>
      {/* map get 2 parameter val and key */}
      {accountList.map((val, key) => {
        return (
          <div>
            <p>{val.username}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ShowAccount;
