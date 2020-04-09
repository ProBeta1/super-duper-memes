import React from "react";
import Meme from "./components/Meme";
import ReactPlayer from "react-player";
import "./styles/tailwind.css";
import { scaleRotate as Menu } from "react-burger-menu";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      firstMusic: "https://www.youtube.com/watch?v=-ThId6ZWqsE",
      secondMusic: "https://www.youtube.com/watch?v=3n9rDwpa6QA",
      thirdMusic: "https://www.youtube.com/watch?v=mIxlvVlOIS0",
      fourthMusic: "https://www.youtube.com/watch?v=EP_CDtyV41g",
      fifthMusic: "https://www.youtube.com/watch?v=hmE9f-TEutc",
      backVideoUrl: "https://www.youtube.com/watch?v=9zJnlIgavUI",
    };
  }

  setBTS = () => {
    this.setState({
      firstMusic: "https://www.youtube.com/watch?v=6gQcUWWY2qA",
      secondMusic: "https://www.youtube.com/watch?v=MBdVXkSdhwU",
      thirdMusic: "https://www.youtube.com/watch?v=-ThId6ZWqsE",
      fourthMusic: "https://www.youtube.com/watch?v=bIv16itYi_0",
      fifthMusic: "https://www.youtube.com/watch?v=5Wn85Ge22FQ",
      backVideoUrl: "https://www.youtube.com/watch?v=Lv3yF_IgXEE",
    });
  };

  setTwice = () => {
    this.setState({
      firstMusic: "https://www.youtube.com/watch?v=3ymwOvzhwHs",
      secondMusic: "https://www.youtube.com/watch?v=3n9rDwpa6QA",
      thirdMusic: "https://www.youtube.com/watch?v=CMNahhgR_ss",
      fourthMusic: "https://www.youtube.com/watch?v=c7rCyll5AeY",
      fifthMusic: "https://www.youtube.com/watch?v=0rtV5esQT6I",
      backVideoUrl: "https://www.youtube.com/watch?v=3n9rDwpa6QA",
    });
  };

  setWalker = () => {
    this.setState({
      firstMusic: "https://www.youtube.com/watch?v=WWCsGEarExg&t=22s",
      secondMusic: "https://www.youtube.com/watch?v=dhYOPzcsbGM",
      thirdMusic: "https://www.youtube.com/watch?v=hmE9f-TEutc",
      fourthMusic: "https://www.youtube.com/watch?v=-Ed-GNq2EyU",
      fifthMusic: "https://www.youtube.com/watch?v=M-P4QBt-FWw",
      backVideoUrl: "https://www.youtube.com/watch?v=mIxlvVlOIS0",
    });
  };

  setScore = () => {
    this.setState({
      firstMusic: "https://www.youtube.com/watch?v=b99r48grKGI",
      secondMusic: "https://www.youtube.com/watch?v=jecQcgbyetw",
      thirdMusic: "https://www.youtube.com/watch?v=cNld-AHw-Wg",
      fourthMusic: "https://www.youtube.com/watch?v=i3ucSSVJTL4",
      fifthMusic: "https://www.youtube.com/watch?v=XclXvB1Gmnc",
      backVideoUrl: "https://www.youtube.com/watch?v=EP_CDtyV41g",
    });
  };

  render() {
    return (
      <div className="App" id="outer-container">
        <div className="video-background " id="page-wrap">

          <div className="video-foreground" id="overlay">
            <ReactPlayer
              className="video-iframe opacity-50"
              url={this.state.backVideoUrl}
              playing={true}
              width="100%"
              height="100%"
              muted={true}
              loop={true}
            />
          </div>
        </div>

        <Menu
          width={"30%"}
          right
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
          disableAutoFocus
        >
          <div className="flex-wrap justify-between items-center">
            <div className="flex w-full justify-center">
            <button
              onClick={this.setBTS}
              className="bg-pink-600 rounded-lg border-pink-500 hover:bg-blue-700 p-1 m-1 xl:p-4 xl:m-4 font-bold hover:text-gray-200"
            >
              <img
                className="w-16 h-16"
                src="https://pm1.narvii.com/6907/a249d687dde15bd9e8a075afa6bf6b63c1da6e7br1-1417-1384v2_hq.jpg"
                alt="BTS"
              ></img>
            </button>
            </div>
            
            <div className="flex w-full justify-center">
            <button
              onClick={this.setTwice}
              className=" bg-purple-700 rounded-lg border-pink-500 hover:bg-orange-500 p-1 m-1 xl:p-4 xl:m-4 font-bold hover:text-gray-200"
            >
              <img
                className="w-16 h-16"
                src="https://cdn130.picsart.com/265496243012212.png?type=webp&to=min&r=640"
                alt="Twice"
              ></img>
            </button>
            </div>

            <div className="flex w-full justify-center">
            <button
              onClick={this.setWalker}
              className=" bg-pink-600 rounded-lg border-pink-500 hover:bg-blue-700 p-1 m-1 xl:p-4 xl:m-4 font-bold hover:text-gray-200"
            >
              <img
                className="w-16 h-16"
                src="https://www.pngitem.com/pimgs/m/66-669362_transparent-walker-png-alan-walker-logo-vector-png.png"
                alt="Walker"
              ></img>
            </button>
            </div>

            <div className="flex w-full justify-center">
            <button
              onClick={this.setScore}
              className="bg-purple-500 md:rounded-lg border-pink-500 hover:bg-orange-400 p-1 m-1 xl:p-4 xl:m-4 font-bold hover:text-gray-200"
            >
              <img
                className="w-16 h-16"
                src="https://pbs.twimg.com/profile_images/1035569260267954176/PPiidCm__400x400.jpg"
                alt="Score"
              ></img>
            </button>
            </div>

          </div>

          <div className="flex-wrap justify-center items-end">
            <div className="bg-indigo-500 border-1 md:border-2 md:rounded-sm lg:border-4 lg:rounded-full border-gray-100 text-xs text-center sm:text-base md:text-lg lg:text-xl xl:text-4xl font-bold font-mono md:mt-6 mt-2 lg:mt-10 align-center flex justify-center text-gray-200 leading-relaxed hover:bg-orange-300 hover:text-teal-700">
              ^Music PlayList - Tap on your fav band^
            </div>

            <div className="mt-4 md:mt-8 xl:mt-12 flex">
              <ReactPlayer
                className="my-1 md:my-2 lg:my-4"
                url={this.state.firstMusic}
                controls={true}
                height={100}
              />
            </div>

            <div className="flex">
              <ReactPlayer
                className="my-1 md:my-2 lg:my-4"
                url={this.state.secondMusic}
                controls={true}
                height={100}
              />
            </div>

            <div className="flex">
              <ReactPlayer
                className="my-1 md:my-2 lg:my-4"
                url={this.state.thirdMusic}
                controls={true}
                height={100}
              />
            </div>

            <div className="flex">
              <ReactPlayer
                className="my-1 md:my-2 lg:my-4"
                url={this.state.fourthMusic}
                controls={true}
                height={100}
              />
            </div>

            <div className="flex">
              <ReactPlayer
                className="my-1 md:my-2 lg:my-4"
                url={this.state.fifthMusic}
                controls={true}
                height={100}
              />
            </div>
          </div>
          <div className="flex justify-end">
            <div className="text-sm lg:text-lg xl:text-2xl font-bold text-white font-serif bg-gray-800 md:tracking-wide text-center md:text-right">
              ~ Made with loads of
              <span className="text-red-500 md:mx-2">&hearts;</span> by probeta ~
              &nbsp;
            </div>
          </div>
        </Menu>

        <div
          className="w-screen h-screen  flex justify-between items-center md:px-8 lg:px-16"
          id="page-wrap"
        >
          <Meme />
        </div>
      </div>
    );
  }
}

export default App;
