import React from "react";
import "./Rightsidebar.css";
const Rightsidebar = () => {
  return (
    <>
      <div className="sidebarContainer">
        <div className="top">
          <div className="title">
            <b>Linked News</b>
          </div>
          <div className="box my-2">
            <ul>
              <li>
                <b>IT CXO Chrun Continues</b>
                <p>1d ago</p>
              </li>
              <li>
                <b>HR Focus On Experience First</b>
                <p>2d ago</p>
              </li>
              <li>
                <b>IT Jobs Layoff Continues</b>
                <p>1d ago</p>
              </li>
              <li>
                <b>Gain Skills With This</b>
                <p>1d ago</p>
              </li>
            </ul>
          </div>
        </div>

        {/* recents */}
        <div className="sidebarRecentContainer text-center mt-3 p-2">
          <span className="discount__text">
            Vaibhav , enjoy 50% off 2 months of LinkedIn Premium!
          </span>
          <div className="avatar__box p-1">
            <div className="avatar">
              <img
                src="https://media.licdn.com/dms/image/D5635AQFr0k_OnQu1aw/profile-framedphoto-shrink_100_100/0/1677936358399?e=1691852400&v=beta&t=pQIoow_AaCY5-owovx2urqBy8dIJhYa1ZyT9XZiDawI"
                alt="avatar"
                className="avatar"
              />
            </div>
            <div className="avatar">
              <img
                src="https://media.licdn.com/dms/image/C560EAQFi2OGWfxI4qA/rightRail-logo-shrink_200_200/0/1630998002580?e=1692252000&v=beta&t=eUjK1FevP8oLYDnoaGzNO4mUn4XO1h83mFFZr5K0ogs"
                alt="avatar"
                className="linkedin__logo avatar"
              />
            </div>
          </div>
          <p className="offer__text">
            Invest in your future with exclusive offer.
          </p>
          <button>Get 50% off today</button>
        </div>
      </div>
    </>
  );
};

export default Rightsidebar;
