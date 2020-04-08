import React from "react";
import poster from "./poster.png";

class Meme extends React.Component {
  constructor() {
    super();
    this.state = {
      pictures:poster,
      memes: [],
      newMemes: [],
      count: 0,
    };
  }

  componentDidMount() {
    this.getData();
    setInterval(this.updateMeme, 5000);
  }

  getData = () => {
    fetch("https://cors-anywhere.herokuapp.com/meme-api.herokuapp.com/gimme/100")
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        let love = data.memes;
        this.setState({
          newMemes: love,
        });
      })
      .catch((err) => console.log(err));
  };

  updateMeme = () => {
    let memeURL = this.state.pictures;

    let x = this.state.newMemes;
    let y = this.state.count;

    if(x.length!==0){

      console.log("length is - " + x.length);
      if( y < (x.length - 5)){
        memeURL = x[y].url;
  
        this.setState( prevState => {
          return{
            count : prevState.count + 1
          }
        })
      }
      else{
        this.getData();
        this.setState({
          count : 0
        })
      }
    }

    this.setState({
      pictures : memeURL
    })

  }

  render() {
    return (
      <div className="bg-orange-300 md:border-4 border-purple-400 rounded-sm md:rounded-lg ml-2 md:ml-8 lg:ml-16 hover:border-8 hover:border-purple-800 hover:rounded-full">
        <div className="bg-blue-400 hover:bg-gray-400 max-w-sm sm:max-w-md md:max-w-lg max-h-sm sm:max-h-md md:max-h-lg ">
          {
            <img
              src={this.state.pictures}
              alt="Hold Up Tight ! God has perfect timing; never early, never late."
              max-width="100%"
              max-height="100%"
            />
          }
        </div>
      </div>
    );
  }
}

export default Meme;
