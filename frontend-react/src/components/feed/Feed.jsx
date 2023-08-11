import React from "react";
import styled from "styled-components";
import { HiPhoto } from "react-icons/hi2";
import { RiArticleLine } from "react-icons/ri";
import { ImYoutube } from "react-icons/im";
import { MdBusinessCenter } from "react-icons/md";
import "./Feed.css";
const Feed = () => {
  return (
    <>
      <div className="feed__container">
        <div className="new__post">
          <div className="new__post__top">
            <div className="profile__pic">
              <img
                src="https://media.licdn.com/dms/image/D5635AQFr0k_OnQu1aw/profile-framedphoto-shrink_100_100/0/1677936358399?e=1691852400&v=beta&t=pQIoow_AaCY5-owovx2urqBy8dIJhYa1ZyT9XZiDawI"
                alt="avatar"
                className="avatar"
              />
            </div>
            <form>
              <input
                type="text"
                placeholder="Start a post"
                className="newFeed__input"
              />
            </form>
          </div>
          <div className="new__post__bottom">
            <div className="post__type">
              <div className="icon blue__bg">
                <HiPhoto />
              </div>
              <h5>Photo</h5>
            </div>
            <div className="post__type">
              <div className="icon green_bg">
                <ImYoutube />
              </div>
              <h5>Video</h5>
            </div>
            <div className="post__type">
              <div className="icon purple__bg">
                <MdBusinessCenter />
              </div>
              <h5>Job</h5>
            </div>
            <div className="post__type">
              <div className="icon darkorange__bg">
                <RiArticleLine />
              </div>
              <h5>Article</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feed;
