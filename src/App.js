import React, { Fragment, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SnackbarProvider } from "notistack";

import ChartRenderingContainer from "./components/Chart_rendering/Container";
import Signin from "./components/authentication/Signin";
import OpCen2 from "./components/bakun/OpCen2";
import Events from "./components/bakun/Events";
import Communication from "./components/bakun/Communication";
import Analysis from "./components/bakun/Analysis";
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
// marirong components
import MarirongHeader from "./components/marirong/utils/MarirongHeader";
import MarirongSignin from "./components/marirong/authentication/Signin";
import MarirongOpcen from "./components/marirong/marirong/OpCen2";
import MarirongEvents from "./components/marirong/marirong/Events";
import MarirongCommunication from "./components/marirong/marirong/Communication";
import MarirongAnalysis from "./components/marirong/marirong/Analysis";
import MarirongCRA from "./components/marirong/marirong/CRA";
import MarirongGroundData from "./components/marirong/marirong/GroundData";
import MarirongCaV from "./components/marirong/marirong/CaV";
import MarirongRainfall from "./components/marirong/marirong/Rainfall";
import MarirongSubsurface from "./components/marirong/marirong/Subsurface";
import MarirongSurficial from "./components/marirong/marirong/Surficial";
import MarirongEarthquake from "./components/marirong/marirong/Earthquake";
import MarirongSurficialMarkers from "./components/marirong/marirong/SurficialMarkers";
import MarirongMoms from "./components/marirong/marirong/Moms";
import MarirongFeedback from "./components/marirong/marirong/Feedback";
import MarirongChangePassword from "./components/marirong/utils/ChangePassword";
import MarirongProfileSettings from "./components/marirong/utils/ProfileSettings";
import MarirongBulletin from "./components/marirong/utils/Bulletin";

import { CBEWSL_SITE_NAME } from "./host";

const App = (props) => {
  const [nav, setNav] = useState(null);
  const [site, setSite] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(false);
  const Header = () => {
    let location = window.location.pathname;
    console.log(location);
    if (location !== `/${CBEWSL_SITE_NAME}` || location !== `/` && isSignedIn) {
      if (localStorage.getItem("credentials") !== null) {
        if (location.includes("bakun")) {
          setSite("bakun");
          return <BakunHeader />;
        } else {
          setSite("marirong");
          return <MarirongHeader />;
        }
      }
    } else {
      return ""
    }
  };

  useEffect(() => {
    if (window.location.pathname === `/${CBEWSL_SITE_NAME}` || window.location.pathname === `/`){
      localStorage.clear("credentials")
      setIsSignedIn(false)
    }
  }, [window.location.pathname]);

  useEffect(() => {
      Header();
      setNav(Header());
  }, [props]);

  return (
    <Fragment>
      <SnackbarProvider>
        <Router>
          {nav}
          {/* {Header()} */}
          {/* {site === "" && (
            <Routes>
              <Route exact path="" element={<MarirongSignin />} />
              <Route exact path={`/signin`} element={<MarirongSignin />} />
              <Route exact path={`/feedback`} element={<MarirongFeedback />} />
            </Routes>
          )} */}

          <Routes>
            <Route exact path="" element={<MarirongSignin />} />
            <Route exact path={`/signin`} element={<MarirongSignin />} />
            <Route exact path={`/feedback`} element={<MarirongFeedback />} />
            <Route exact path={`/${CBEWSL_SITE_NAME}`} element={<Signin />} />
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
            {/* <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <h2>Webpage not found</h2>
                </main>
              }
            /> */}
          </Routes>

          {localStorage.getItem("credentials") != null && (
            <Routes>
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

              <Route exact path={`/opcen`} element={<MarirongOpcen />} />
              <Route exact path={`/bulletin`} element={<MarirongBulletin />} />
              <Route exact path={`/events`} element={<MarirongEvents />} />
              <Route
                exact
                path={`/communication`}
                element={<MarirongCommunication />}
              />
              <Route exact path={`/analysis`} element={<MarirongAnalysis />} />
              <Route exact path={`/cra`} element={<MarirongCRA />} />
              <Route
                exact
                path={`/ground_data`}
                element={<MarirongGroundData />}
              />
              <Route exact path={`/cav`} element={<MarirongCaV />} />
              <Route exact path={`/rainfall`} element={<MarirongRainfall />} />
              <Route
                exact
                path={`/subsurface`}
                element={<MarirongSubsurface />}
              />
              <Route
                exact
                path={`/surficial`}
                element={<MarirongSurficial />}
              />
              <Route
                exact
                path={`/earthquake`}
                element={<MarirongEarthquake />}
              />
              <Route
                exact
                path={`/change-password`}
                element={<MarirongChangePassword />}
              />
              <Route
                exact
                path={`/profile-settings`}
                element={<MarirongProfileSettings />}
              />
              <Route
                exact
                path={`/surficial_markers`}
                element={<MarirongSurficialMarkers />}
              />
              <Route exact path={`/moms`} element={<MarirongMoms />} />
            </Routes>
          )}
        </Router>
      </SnackbarProvider>
    </Fragment>
  );
};

export default App;
