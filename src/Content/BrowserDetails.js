import ChromeIcon from "../images/logo-chrome.svg";
import FirefoxIcon from "../images/logo-firefox.svg";
import OperaIcon from "../images/logo-opera.svg";

const BrowserDetails = [
  {
    id: 1,
    imageSource: ChromeIcon,
    altText: "Add to Chrome",
    browserName: "Add to Chrome",
    minimumVersion: "Minimum version 62",
    buttonText: "Add & Install Extension",
  },
  {
    id: 2,
    imageSource: FirefoxIcon,
    altText: "Add to Firefox",
    browserName: "Add to Firefox",
    minimumVersion: "Minimum version 55",
    buttonText: "Add & Install Extension",
  },
  {
    id: 3,
    imageSource: OperaIcon,
    altText: "Add to Firefox",
    browserName: "Add to Opera",
    minimumVersion: "Minimum version 46",
    buttonText: "Add & Install Extension",
  },
];

export default BrowserDetails;

export { ChromeIcon, FirefoxIcon, OperaIcon };
