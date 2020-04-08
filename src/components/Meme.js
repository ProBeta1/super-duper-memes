import React from "react";

class Meme extends React.Component {
  constructor() {
    super();
    this.state = {
      pictures: "https://lh3.googleusercontent.com/6ZRoybylmuPyFc5cMqrqpo73GnRjk2QrriqSjhRHC2MZn7j0NjtsmCFQ82mi5prQK-2o5EyeSEQ9wAqW9fik0Kdv6pz-hjsOB3WR_cDGMGCQzDdW0Hh_jZmtWkjSzZ1L678STQizRuWfKDbE7mLuqygoB3eYwN4EdSeb8E_Wyijw3HyQfioLFcBRSul9fJ7vLvNfHbJ5pt65hWZj8bJe-CqnUUdCAIHj2TF1hDibcMVgtlQFffz4Fatyo0ukj3dGGPio6vwlGuQRIUypzdLD9ED-aV2oKgLb7TAmz2Ll_BrsQgHmKuqlnU3uPH42olxOIQkEOjuV-vKVc5TQlajj7W2OlHoMb13dOh0mpnY9Z6zLkOkqCZjUn9eZbsEX2u_txBoBL8a8vNUmOiYSuozlDdNl7yOXPqgFcQhkesMiX-yIs1l78aQCPQ8MDw0NeK_ghCeWyTJzdBQVUZvN-qnUXxY0oLrP3GdTTSh6W0dbJr-fdpB64VzpUD1-vFYG79leUnUjhMzYyt5bivbpql6oeO0tmYsLQFEosUuFt2ZKFE6WYgC6MmZKcER6Hoo4DRCtzORmgD5YCzpD0EP7gRB45mUnwljqBbNAlxCZubKg3CjhMx61nhbFDg7ew51kx5dadNVNQ-yquYiCJ5QiaOlj75cebQ-j97FJXaumU_te82TgjnWH-6o7hlkm379DXg=w691-h977-no",
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
    //console.log(this.state.newMemes);

    return (
      <div className="bg-orange-300 md:border-4 border-purple-400 rounded-sm md:rounded-lg ml-2 md:ml-8 lg:ml-16 hover:border-8 hover:border-purple-800 hover:rounded-full">
        <div className="bg-blue-400 hover:bg-gray-400 max-w-sm sm:max-w-md md:max-w-lg max-h-sm sm:max-h-md md:max-h-lg ">
          {
            <img
              src={this.state.pictures}
              alt="Please refresh the page if no meme is showing up"
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
