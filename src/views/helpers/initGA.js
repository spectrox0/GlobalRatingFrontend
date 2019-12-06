import ReactGA from "react-ga";
export const initGA = () => {
  //process.env.REACT_APP_GA_TRACKING_NO
  ReactGA.initialize("UA-154080918-1");
  ReactGA.pageview(window.location.pathname + window.location.search);
};
