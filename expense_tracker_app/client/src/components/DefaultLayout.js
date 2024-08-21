import React from "react";
import { Dropdown, Button } from "antd";
import { useNavigate } from 'react-router-dom';
import "../resources/default-layout.css";

function DefaultLayout(props) {
  const user = JSON.parse(localStorage.getItem("expensetracker"));
  const navigate = useNavigate();

  const menuItems = [
    {
      key: '1',
      label: (
        <span
          onClick={() => {
            localStorage.removeItem('expensetracker');
            navigate("/login");
          }}
          >
          Logout
        </span>
      ),
    },
  ];

  return (
    <div className="layout">
      <div className="header d-flex justify-content-between align-items-center">
        <div>
          <h1 className="logo">EXPENSE TRACKER</h1>
        </div>
        <div>
          <Dropdown
            menu={{ items: menuItems }}
            placement="bottomLeft"
          >
            <Button className="user_name">{user?.name}</Button>
          </Dropdown>
        </div>
      </div>

      <div className="content">{props.children}</div>
    </div>
  );
}

export default DefaultLayout;
