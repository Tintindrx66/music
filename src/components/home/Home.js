import React from "react";
import axios from "axios";
import Banner from "./Banner";
import ArtistsList from "./ArtistsList";
import Footers from "../footer/Footers";
//import { Input } from "antd";

const URL_ARTIST = "http://localhost:3004/artists";

class Home extends React.Component {
  state = {
    artists: [],
    searchField: ""
  };
  componentDidMount() {
    axios.get(URL_ARTIST).then(res => {
      this.setState({ artists: res.data });
    });
  }

  render() {
    //console.log(this.state);
    const { searchField, artists } = this.state;
    const filteredArtists = artists.filter(artist =>
      artist.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <>
        <Banner />
        <div
          style={{
            textAlign: "center",
            verticalAlign: "middle"
          }}
        >
          <input
            placeholder="artists' name"
            onChange={e => this.setState({ searchField: e.target.value })}
            style={{ fontSize: "33px" }}
          />
        </div>
        <ArtistsList allArtists={filteredArtists} />
        <Footers />
      </>
    );
  }
}
export default Home;
