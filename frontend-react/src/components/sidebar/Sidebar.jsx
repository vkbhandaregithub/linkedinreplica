import { BsFillBookmarkFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <>
      <div className="sidebarContainer">
        <div className="sidebarProfile">
          <img
            src="https://th.bing.com/th?id=OIP.a4f8i4MOoVXnzDTw5nhTIQHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
            alt="img"
            className="sidebar-avatar-bg-img"
          />
          <div className="details d-flex justify-content-center align-items-center flex-column">
            <img
              src="https://media.licdn.com/dms/image/D5635AQFr0k_OnQu1aw/profile-framedphoto-shrink_100_100/0/1677936358399?e=1691852400&v=beta&t=pQIoow_AaCY5-owovx2urqBy8dIJhYa1ZyT9XZiDawI"
              alt="avatar"
              className="avatar-sidebar"
            />
            <div className="userInfo d-flex justify-content-center align-items-center flex-column">
              <h5 className="userInfo__username mt-3">
                <u>Vaibhav Bhandare</u>
              </h5>
              <p>Frontend Developer || Full Stack Developer</p>
            </div>
            <div className="bottomline"></div>
          </div>
          {/* profile stats */}
          <div className="statsContainer">
            <div className="profileStats px-2 pt-2">
              <span className="title">Who's viewed your profile</span>
              <span className="views">158</span>
            </div>
            <div className="profileStats px-2 py-2">
              <span className="title">Impressions on your post</span>
              <span className="views">318</span>
            </div>
          </div>
          <div className="bottomline"></div>
          <div className="primelinkContainer p-2">
            <span>Access exclusive tools & insights</span>
            <p className="d-flex justify-content-start align-items-center gap-2">
              <div className="goldenbox"></div>
              <u>
                <b>Reactivate Premium: 50% Off</b>
              </u>
            </p>
          </div>
          <div className="bottomline"></div>

          <div className="sidebar__myterms">
            <BsFillBookmarkFill />
            <b>My Terms</b>
          </div>
        </div>

        {/* recents */}
        <div className="sidebarRecentContainer  mt-3 p-2">
          <span className="title">Recents</span>
          <div className="recentBox p-1">
            <div className="singleRecent">
              <p>
                <FaUsers className="icon" />
                <span className="mx-3"> Reactjs</span>
              </p>
              <p>
                <FaUsers className="icon" />
                <span className="mx-3"> Python</span>
              </p>
              <p>
                <FaUsers className="icon" />
                <span className="mx-3"> React-Native</span>
              </p>
              <p>
                <FaUsers className="icon" />
                <span className="mx-3"> Web Dev </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
