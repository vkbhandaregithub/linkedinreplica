import React from "react";
import { FaGlobeAmericas, FaPlus, FaTimes } from "react-icons/fa";
import { BsThreeDots, BsFillSendFill } from "react-icons/bs";
import { MdOutlineMessage, MdThumbUp, MdThumbUpOffAlt } from "react-icons/md";
import { BiRepost } from "react-icons/bi";
import "./Post.css";
const Post = () => {
  return (
    <>
      <div className="post__container my-3 p-3">
        <div className="post__header">
          <div className="post__header-left ">
            <div className="post__header__avatar">
              <img
                src="https://media.licdn.com/dms/image/D5635AQFr0k_OnQu1aw/profile-framedphoto-shrink_100_100/0/1677936358399?e=1691852400&v=beta&t=pQIoow_AaCY5-owovx2urqBy8dIJhYa1ZyT9XZiDawI"
                alt="avatar"
                className="avatar"
              />
            </div>
            <div className="post__header__user_info">
              <b className="username">Vaibhav K. Bhandare</b>
              <br />
              <span className="job_profile">Full Stack Developer</span>
              <div className="post__at">
                <p>12m</p>
                <p>
                  <FaGlobeAmericas />
                </p>
              </div>
            </div>
          </div>
          {/* post header left end */}
          {/* post header right */}
          <div className="post__header-right ">
            {/* <FaPlus />
            <span> Follow</span> */}
            <BsThreeDots className="dot__icon" />
            <FaTimes className="cancel__icon" />
          </div>
          {/* post header right end */}
        </div>
        <div className="post__text_content">
          <p>
            Hey connections! I'm starting a new postion as Software Developer at
            Tech Mahindra. <br /> Grateful to have received a certificate on
            Cloud Computing from Cloud Counselage Pvt. Ltd. as part of their
            inspiring Industry-Academia Community Internship! During this
            workshop, I gained valuable insights into the latest cloud
            technologies and their applications, empowering me to be
            future-ready in the dynamic tech landscape. Special thanks to Tushar
            Topale and Harshada Topale Social Entrepreneur for providing this
            fantastic opportunity to enhance my skills in the cloud computing
            domain. Excited for the future possibilities that lie ahead!
          </p>
        </div>
        <div className="post__image">
          <img
            src="https://media.licdn.com/dms/image/D5622AQGMkD5lDRShVg/feedshare-shrink_800/0/1690508374179?e=1694649600&v=beta&t=RtDcpGWjD8gPuDUraFJvbA0YR3CPZc4ydm30Y1sIXek"
            alt="post__img"
            className="post__img"
          />
        </div>

        <div className="bottom_line"></div>
        {/* footer */}
        <div className="post__footer">
          <div className="post_footer_box">
            <MdThumbUpOffAlt className="icon" />
            {/* <MdThumbUp /> */}
            <span className="mx-1">Like</span>
          </div>
          <div className="post_footer_box">
            <MdOutlineMessage className="icon" />
            {/* <MdThumbUp /> */}
            <span className="mx-1">Comment</span>
          </div>
          <div className="post_footer_box">
            <BiRepost className="icon" />
            {/* <MdThumbUp /> */}
            <span className="mx-1">Repost</span>
          </div>
          <div className="post_footer_box">
            <BsFillSendFill className="icon" />
            {/* <MdThumbUp /> */}
            <span className="mx-1">Send</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
