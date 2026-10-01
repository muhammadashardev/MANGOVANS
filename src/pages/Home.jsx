import React from "react";
import { motion } from "framer-motion";
import BetterExperience from "../components/BetterExperience";
import CustomBuildFeatures from "../components/CustomBuildFeatures";
import Customerstories from "../components/Customerstories";
import Footer from "../components/Footer";
import Herosection from "../components/Herosection";
import LatestVanBuilds from "../components/LatestVanBuilds";
import MeetCrew from "../components/MeetCrew";
import OurStory from "../components/OurStory";
import Quality from "../components/Quality";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="overflow-x-hidden"
    >
      <div id="home"><Herosection /></div>
      <div id="quality"><Quality /></div>
      <div id="adventure-vans"><BetterExperience /></div>
      <div id="our-story"><OurStory /></div>
      {/* <MeetCrew /> */}
      <div id="commercial"><CustomBuildFeatures /></div>
      <div id="our-work"><LatestVanBuilds /></div>
      <div id="reviews"><Customerstories /></div>
      <div id="contact"><Footer /></div>
    </motion.div>
  );
}

export default Home;
