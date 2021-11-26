import React, { useEffect, useState } from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import "./Dashboard.css";
import useAuth from "../../../Hooks/useAuth";
import Pay from "../Pay/Pay";
import Myorder from "../Myorder/Myorder";
import Review from "../Review/Review";
import Manageall from "../Manageall/Manageall";
import PrivateRoute from "../../Auth/PrivateRoute/PrivateRoute";
import Addmobile from "../../Main/Addmobile/Addmobile";
import Makeadmin from "../Makeadmin/Makeadmin";
import Myadmin from "../Myadmin/Myadmin";

const Dashbaord = () => {
  let { path, url } = useRouteMatch();
  const { user, admin } = useAuth();

  return (
    <div>
      <div className="mt-4">
        <div className="row">
          <div className="col-md-3 main">
            <div className="dashboard container">
              <h2>Dashboard</h2>
              <Link className="list" to={`${url}`}>
                <li className="dashboard-menu mt-2">Dashboard</li>
              </Link>

              <Link className="list" to={`${url}/pay`}>
                <li className="dashboard-menu mt-2">Pay</li>
              </Link>

              <Link className="list" to={`${url}/myorder`}>
                <li className="dashboard-menu mt-2">My Order</li>
              </Link>
              <Link className="list" to={`${url}/review`}>
                <li className="dashboard-menu mt-2">Review</li>
              </Link>
              {admin && (
                <div>
                  <Link className="list" to={`${url}/manageAll`}>
                    <li className="dashboard-menu mt-2">Manage All Order</li>
                  </Link>
                  <Link className="list" to={`${url}/addMobile`}>
                    <li className="dashboard-menu mt-2">Add Service</li>
                  </Link>
                  <Link className="list" to={`${url}/makeadmin`}>
                    <li className="dashboard-menu mt-2">Make Admin</li>
                  </Link>
                  <Link className="list" to={`${url}/alladmin`}>
                    <li className="dashboard-menu mt-2">All Admin</li>
                  </Link>
                </div>
              )}
            </div>
          </div>
          <div className="col-md-9">
            <Switch>
              <Route exact path={path}>
                <h2 className="text-success text-center">
                  This is my Dashboard
                </h2>
              </Route>
              <Route exact path={`${path}/pay`}>
                <Pay></Pay>
              </Route>
              <PrivateRoute exact path={`${path}/myorder`}>
                <Myorder></Myorder>
              </PrivateRoute>
              <Route exact path={`${path}/review`}>
                <Review></Review>
              </Route>
              <PrivateRoute exact path={`${path}/manageAll`}>
                <Manageall></Manageall>
              </PrivateRoute>
              <Route exact path={`${path}/addMobile`}>
                <Addmobile></Addmobile>
              </Route>
              <Route exact path={`${path}/makeadmin`}>
                <Makeadmin></Makeadmin>
              </Route>
              <Route exact path={`${path}/alladmin`}>
                <Myadmin></Myadmin>
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashbaord;
