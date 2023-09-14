import React from "react";
import { Tabs } from "antd";
// import { useSelector, useDispatch } from "react-redux";
import PageTitle from "../../components/PageTitle";
import TheatresList from "./TheatreList";
import Bookings from "./Bookings";
// import Bookings from "./Bookings";
function Profile() {
  return (
    <div>
      <PageTitle title="Profile" />

      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Bookings" key="1">
           <Bookings/>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Apply for Theater" key="2">
           <TheatresList/>
           {/* <h1>Theatre List</h1> */}
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}

export default Profile;