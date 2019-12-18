import React, { Component } from "react";

import axios from "axios";

class AllPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
    posts:[],
    };
    this.loadPosts = this.loadPosts.bind(this);
  }

  componentWillMount() {
    this.loadPosts();
  }

  async loadPosts()
  {
    const promise = await axios.get("http://localhost:8000/api/all_posts");
    const status = promise.status;
    if(status===200)
    {
      // returns array of Objects
      const data = promise.data;
      var arr = [];
      data.forEach(function (ob) {
	arr.push(ob['fields']['title'] + ob['fields']['body']);
      })
      this.setState({posts:arr});
    }
  }

  render() {
    return(
      <div>
        <h1>Posts</h1>
            {this.state.posts.map((value,index)=>{return <h4 key={index}>{value}</h4>})}
      </div>
    )
  }
}

export default AllPosts
