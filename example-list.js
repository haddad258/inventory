import React from "react";
import HelloWorld1 from "./examples/1-hello-world/1.HelloWorld1";
import HelloWorld2 from "./examples/1-hello-world/2.HelloWorld2";
import MomoLogin from "./examples/2-login-screen/1.MomoLogin";
import FacebookLogin from "./examples/2-login-screen/2.FacebookLogin";
import TheLight from "./examples/3-the-light/1.TheLight";
import TrafficLight from "./examples/3-the-light/2.TrafficLight";
import RegisterForm from "./examples/4-register-form/RegisterForm";
import InstagramFeed from "./examples/5-instagram-feed/InstagramFeed";
import RockPaperScissors from "./examples/6-rock-paper-scissors/RockPaperScissors";
import ScanQrCode from "./examples/7-scan-qr-code/ScanQrCode";
import StopWatch from "./examples/8-stopwatch/StopWatch";
import BMICalculator from "./examples/9-bmi-calculator/BMICalculator";
import MusicPlayer from "./examples/10-music-player/MusicPlayer";
import WorldwideNews from "./examples/11-news/WorldwideNews";
import Pokedex from "./examples/12-pokedex/Pokedex";
///////////////////////////////////////////////////////

import Zone from './src/Zone'
import Locations from './src/location'
import AddNew from "./src/local";
import AlLocalListl from "./src/local/listlocal";
///////////////////////////////////////////////////////
import CodeComptable from './Immobilier/Zone';
import CodeSystem from './Immobilier/location';
import AddNewIMob from "./Immobilier/local";
import ListImmob from "./Immobilier/local/newi";
//////////////////////////////////////////////////////////

import SyncList1 from './syncList/synclist1'
import SyncList2 from './syncList/syncList2'
export const EXAMPLE_LIST = [
  {
    name: "Hello World 1",
    level: 1,
    component: <HelloWorld1 />,
  },
  {
    name: "Hello World 2",
    level: 1,
    component: <HelloWorld2 />,
  },
  {
    name: "Momo Login Screen",
    level: 2,
    component: <MomoLogin />,
  },
  {
    name: "Facebook Login Screen",
    level: 2,
    component: <FacebookLogin />,
  },
  {
    name: "The Light",
    level: 3,
    component: <TheLight />,
  },
  {
    name: "Traffic Light",
    level: 3,
    component: <TrafficLight />,
  },
  {
    name: "Register Form",
    level: 4,
    component: <RegisterForm />,
  },
  {
    name: "Instagram Feed",
    level: 5,
    component: <InstagramFeed />,
  },
  {
    name: "Rock Paper Scissors",
    level: 6,
    component: <RockPaperScissors />,
  },
  {
    name: "Scan QR Code",
    level: 7,
    component: <ScanQrCode />,
  },
  {
    name: "Stop Watch",
    level: 8,
    component: <StopWatch />,
  },
  {
    name: "BMI Calculator",
    level: 9,
    component: <BMICalculator />,
  },
  {
    name: "Music Player",
    level: 10,
    component: <MusicPlayer />,
  },
  {
    name: "Worldwide News",
    level: 11,
    component: <WorldwideNews />,
  },
  {
    name: "Pokedex",
    level: 12,
    component: <Pokedex />,
  },



  ///////////////////////////////////////
  {
    name: "Site",
    level: 16,
    component: <Zone />,
  },
  {
    name: "Locations",
    level: 17,
    component: <Locations />,
  },
  {
    name: "Local",
    level: 18,
    component: <AddNew />,
  },
  {
    name: "AlLocalListl",
    level: 18,
    component: <AlLocalListl />,
  },
  ////////////////////////////////////////
  {
    name: "CodeComptable",
    level: 19,
    component: <CodeComptable />,
  },
  {
    name: "CodeSystem",
    level: 20,
    component: <CodeSystem />,
  },
  {
    name: "AddNewIMob",
    level: 21,
    component: <AddNewIMob />,
  },
  {
    name: "ListImmob",
    level: 22,
    component: <ListImmob />,
  },
  //////////////////////////////////////////////////
  {
    name: "SyncList1",
    level: 23,
    component: <SyncList1 />,
  },
  {
    name: "SyncList2",
    level: 24,
    component: <SyncList2 />,
  },
];
