import FirstTabIcon from "../images/illustration-features-tab-1.svg";
import SecondTabIcon from "../images/illustration-features-tab-2.svg";
import ThirdTabIcon from "../images/illustration-features-tab-3.svg";

const TabDetails = [
  {
    id: 0,
    title: "Simple Bookmarking",
    ImageSource: FirstTabIcon,
    heading: "Bookmark in one click",
    description:
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    buttonText: "More Info",
  },
  {
    id: 1,
    title: "Speedy Searching",
    ImageSource: SecondTabIcon,
    heading: "Intelligent search",
    description:
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks",
    buttonText: "More Info",
  },
  {
    id: 2,
    title: "Easy Sharing",
    ImageSource: ThirdTabIcon,
    heading: "Share your bookmark",
    description:
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button",
    buttonText: "More Info",
  },
];

export default TabDetails;

export { FirstTabIcon, SecondTabIcon, ThirdTabIcon };
