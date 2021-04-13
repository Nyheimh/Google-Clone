import "./Home.css";
import React from "react";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import Search from '../../components/Search/Search'


function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home__headerRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>
      <div className="home__body">
        <img
          src="https://www.google.com/logos/doodles/2021/wear-a-mask-save-lives-apr-6-6753651837109262.2-law.gif"
          alt=""
        />
        <div className="home__inputContainer">
        <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
