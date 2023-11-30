import React, { Fragment, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SnackbarProvider } from "notistack";

import ChartRenderingContainer from "./components/Chart_rendering/Container";
import Signin from "./components/authentication/Signin";
import OpCen from "./components/bakun/OpCen";
import OpCen2 from "./components/bakun/OpCen2";
import Events from "./components/bakun/Events";
import Communication from "./components/bakun/Communication";
import Analysis from "./components/bakun/Analysis";
import Assessment from "./components/bakun/Assessment";
import BakunHeader from "./components/utils/BakunHeader";
import CRA from "./components/bakun/CRA";
import GroundData from "./components/bakun/GroundData";
import CaV from "./components/bakun/CaV";
import Rainfall from "./components/bakun/Rainfall";
import Subsurface from "./components/bakun/Subsurface";
import Surficial from "./components/bakun/Surficial";
import Earthquake from "./components/bakun/Earthquake";
import SurficialMarkers from "./components/bakun/SurficialMarkers";
import Moms from "./components/bakun/Moms";
import Feedback from "./components/bakun/Feedback";
import ChangePassword from "./components/utils/ChangePassword";
import ProfileSettings from "./components/utils/ProfileSettings";
import Bulletin from "./components/utils/Bulletin";
import "./components/bakun/css/sandbox.css";
import "./components/bakun/css/embla.css";

import { CBEWSL_SITE_NAME } from "./host";

const App = (props) => {
  const [nav, setNav] = useState(null);
  const Header = () => {
    let location = window.location.pathname;
    if (
      location !== `${CBEWSL_SITE_NAME}/signin` &&
      location !== `/${CBEWSL_SITE_NAME}`
    ) {
      return <BakunHeader />;
    }
  };

  useEffect(() => {
    Header();
    setNav(Header());
  }, [props]);

  return (
    <Fragment>
      <SnackbarProvider>
        <Router>
          {nav}
          <Routes>
            <Route exact path={`${CBEWSL_SITE_NAME}`} element={<Signin />} />
            <Route
              exact
              path={`${CBEWSL_SITE_NAME}/signin`}
              element={<Signin />}
            />
            <Route
              exact
              path={`${CBEWSL_SITE_NAME}/feedback`}
              element={<Feedback />}
            />
            <Route
              path="/lpa/:chart_type"
              element={<ChartRenderingContainer />}
            />
            {/* <Route
              path="*"
              element={
                <main style={{padding: '1rem'}}>
                  <h2>Webpage notafefe found</h2>
                </main>
              }
            /> */}
          </Routes>

          {localStorage.getItem("credentials") != null ? (
            <Routes>
              {/* <Route exact path={`${CBEWSL_SITE_NAME}`} element={<OpCen2 />} /> */}
              <Route
                exact
                path={`${CBEWSL_SITE_NAME}/opcen`}
                element={<OpCen2 />}
              />
              <Route
                exact
                path={`${CBEWSL_SITE_NAME}/bulletin`}
                element={<Bulletin />}
              />
              <Route
                exact
                path={`${CBEWSL_SITE_NAME}/events`}
                element={<Events />}
              />
              <Route
                exact
                path={`${CBEWSL_SITE_NAME}/communication`}
                element={<Communication />}
              />
              <Route
                exact
                path={`${CBEWSL_SITE_NAME}/analysis`}
                element={<Analysis />}
              />
              {/* <Route
                exact
                path={`${CBEWSL_SITE_NAME}/assessment`}
                element={<Assessment />}
              /> */}
              <Route exact path={`${CBEWSL_SITE_NAME}/cra`} element={<CRA />} />
              <Route
                exact
                path={`${CBEWSL_SITE_NAME}/ground_data`}
                element={<GroundData />}
              />
              <Route exact path={`${CBEWSL_SITE_NAME}/cav`} element={<CaV />} />
              <Route
                exact
                path={`${CBEWSL_SITE_NAME}/rainfall`}
                element={<Rainfall />}
              />
              <Route
                exact
                path={`${CBEWSL_SITE_NAME}/subsurface`}
                element={<Subsurface />}
              />
              <Route
                exact
                path={`${CBEWSL_SITE_NAME}/surficial`}
                element={<Surficial />}
              />
              <Route
                exact
                path={`${CBEWSL_SITE_NAME}/earthquake`}
                element={<Earthquake />}
              />
              <Route
                exact
                path={`${CBEWSL_SITE_NAME}/change-password`}
                element={<ChangePassword />}
              />
              <Route
                exact
                path={`${CBEWSL_SITE_NAME}/profile-settings`}
                element={<ProfileSettings />}
              />
              <Route
                exact
                path={`${CBEWSL_SITE_NAME}/surficial_markers`}
                element={<SurficialMarkers />}
              />
              <Route
                exact
                path={`${CBEWSL_SITE_NAME}/moms`}
                element={<Moms />}
              />
            </Routes>
          ) : (
            window.location.pathname != `/${CBEWSL_SITE_NAME}` &&
            window.location.pathname != `${CBEWSL_SITE_NAME}` &&
            window.location.pathname != `${CBEWSL_SITE_NAME}/signin` &&
            window.location.pathname != `${CBEWSL_SITE_NAME}/feedback` &&
            (window.location = `/${CBEWSL_SITE_NAME}`)
          )}
        </Router>
      </SnackbarProvider>
    </Fragment>
  );
};

export default App;
