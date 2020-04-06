import React from "react";

class Meme extends React.Component {
  constructor() {
    super();
    this.state = {
      pictures: "https://i.redd.it/bj7mo8cqstq41.jpg",
      memes:[],
      newMemes:[],
      count:0,
    };

  }

  componentDidMount() {
    console.log(this.props.play)
    if(this.props.play === true){
      this.getData();
      setInterval(this.getData, 10000);
    }
  }

  getData = () => {
    fetch("https://meme-api.herokuapp.com/gimme")
      .then(results => {
         return results.json();
      })
      .then(data => {
        let pc = data.url;
        //let love = data.memes;
        this.setState({
          pictures: pc,
          //newMemes : love
        });
      })
      .catch(err=>console.log(err))
  };

  render() {
    return (
      <div className="bg-orange-300 border-4 border-purple-400 rounded-lg ml-16 hover:border-8 hover:border-purple-800 hover:rounded-full">
        <div className="bg-blue-400 hover:bg-gray-400">
          <img
            src={this.state.pictures}
            alt="Please refresh the page if no meme is showing up"
            height="900px"
            width="600px"
          />
        </div>
      </div>
    );
  }
}

export default Meme;