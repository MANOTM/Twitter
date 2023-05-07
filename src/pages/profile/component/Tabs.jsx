import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Tab } from "../style/profile";


const Tabs = (props) => {
  const { user } = useSelector((state) => state.Auth);
  // TabList -> [{path,name,title}]
  const { tabList } = props;
  const theme = useSelector((state) => state.theme);
  const { username, activity } = useParams();
  const activeStyle = {
    borderBottom: "2px solid rgb(29,161,242)",
    color: "rgb(29,161,242)",
  };

  return (
    <Tab>
      {tabList.map((tab, index) => {
        const to =
          tab.name === "tweets"
            ? `/profile/${user.pseudo}`
            : `/profile/${user.pseudo}${tab.path}`;
        return (
          <React.Fragment key={index}>
            <Link
              to={to}
              replace={true}
              style={
                activity === tab.name ||
                (activity == undefined && tab.name === "tweets")
                  ? activeStyle
                  : {}
              }
            >
              <div>{tab.title}</div>
            </Link>
          </React.Fragment>
        );
      })}
    </Tab>
  );
};

export default Tabs;