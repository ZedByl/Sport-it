import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import "./Status.scss"
import ellipsisSvg from "../../Content/img/ellipsis.svg";

const Status = ({online, fullname}) => (
  <div className="chat__dialog-header">
    <div className="chat__dialog-header-center">
      <b className="chat__dialog-header-fullName">{fullname}</b>
      {/*  <div className="chat__dialog-header-status">*/}
      {/*    <span className={classNames("status", {"status--online": online})}>*/}
      {/*  {online ? "онлайн" : "офлайн"}*/}
      {/*</span>*/}
      {/*  </div>*/}
      {/*<button><img className="chat__image" src={ellipsisSvg} alt="ellipsis"/></button>*/}
    </div>
  </div>

)

Status.propTypes = {
  online: PropTypes.bool
};

export default Status