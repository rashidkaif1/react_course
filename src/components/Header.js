import React from 'react'

export default function Header() {
  return (
    <div className="topbar">
        <div className="topbar-left">
            <div className="text-center">
                <a href="index.html" className="logo"><img src="assets/images/logo.png" alt="logo-img" /></a>
                <a href="index.html" className="logo-sm"><img src="assets/images/logo_sm.png" alt="logo-img" /></a>
            </div>
        </div>
        

        <nav className="navbar navbar-default" role="navigation">
            <div className="container-fluid">
                <ul className="list-inline menu-left mb-0">
                    <li className="float-left">
                        <button className="button-menu-mobile open-left waves-light waves-effect">
                            <i className="mdi mdi-menu"></i>
                        </button>
                    </li>
                    <li className="hide-phone app-search float-left">
                        <form role="search" className="navbar-form">
                            <input type="text" placeholder="Search..." className="form-control search-bar"/>
                            <a href="/" className="btn-search"><i className="fa fa-search"></i></a>
                        </form>
                    </li>
                </ul>

                <ul className="nav navbar-right float-right list-inline">
                    <li className="dropdown d-none d-sm-block">
                        <a href="/" data-target="#" className="dropdown-toggle waves-effect waves-light notification-icon-box" data-toggle="dropdown" aria-expanded="true">
                            <i className="fa fa-bell"></i> <span className="badge badge-xs badge-danger"></span>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-lg">
                            <li className="text-center notifi-title">Notification <span className="badge badge-xs badge-success">3</span></li>
                            <li className="list-group">
                                <a href="/" className="list-group-item">
                                    <div className="media">
                                        <div className="media-heading">Your order is placed</div>
                                        <p className="m-0">
                                        <small>Dummy text of the printing and typesetting industry.</small>
                                        </p>
                                    </div>
                                </a>
                                <a href="/" className="list-group-item">
                                    <div className="media">
                                        <div className="media-body clearfix">
                                        <div className="media-heading">New Message received</div>
                                        <p className="m-0">
                                            <small>You have 87 unread messages</small>
                                        </p>
                                        </div>
                                    </div>
                                </a>
                                <a href="/" className="list-group-item">
                                    <div className="media">
                                        <div className="media-body clearfix">
                                        <div className="media-heading">Your item is shipped.</div>
                                        <p className="m-0">
                                            <small>It is a long established fact that a reader will</small>
                                        </p>
                                        </div>
                                    </div>
                                </a>
                                <a href="/" className="list-group-item">
                                    <small className="text-primary">See all notifications</small>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="d-none d-sm-block">
                        <a href="/" id="btn-fullscreen" className="waves-effect waves-light notification-icon-box"><i className="mdi mdi-fullscreen"></i></a>
                    </li>
                    
                    <li className="dropdown">
                        <a href="/" className="dropdown-toggle profile waves-effect waves-light" data-toggle="dropdown" aria-expanded="true">
                            <img src="assets/images/users/avatar-1.jpg" alt="user-img" className="rounded-circle"/>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-right">
                            <li><a href="/" className="dropdown-item"> Profile</a></li>
                            <li><a href="/" className="dropdown-item"><span className="badge badge-success float-right">5</span> Settings </a></li>
                            <li><a href="/" className="dropdown-item"> Lock screen</a></li>
                            <li className="dropdown-divider"></li>
                            <li><a href="/" className="dropdown-item"> Logout</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}



    



   
