import gql from "graphql-tag";
import React from "react";
import { graphql } from "react-apollo";

class SongList extends React.Component {
  render() {
    console.log(this.props);
    return <div>SongList</div>;
  }
}

const query = gql`
  {
    songs {
      title
    }
  }
`;

export default graphql(query)(SongList);
