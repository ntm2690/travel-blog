import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const cat = useLocation().search;
  console.log(cat);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  // const posts = [
  //   {
  //     id:1,
  //     title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi condimentum bibendum dolor sit amet tempor. Cras et egestas urna, sit amet iaculis sapien. Nullam fermentum in purus quis condimentum.",
  //     img: "https://images.pexels.com/photos/9380588/pexels-photo-9380588.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
  //   },
  //   {
  //     id:2,
  //     title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi condimentum bibendum dolor sit amet tempor. Cras et egestas urna, sit amet iaculis sapien. Nullam fermentum in purus quis condimentum.",
  //     img: "https://images.pexels.com/photos/2669164/pexels-photo-2669164.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
  //   },
  //   {
  //     id:3,
  //     title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi condimentum bibendum dolor sit amet tempor. Cras et egestas urna, sit amet iaculis sapien. Nullam fermentum in purus quis condimentum.",
  //     img: "https://images.pexels.com/photos/2389122/pexels-photo-2389122.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
  //   },
  //   {
  //     id:4,
  //     title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi condimentum bibendum dolor sit amet tempor. Cras et egestas urna, sit amet iaculis sapien. Nullam fermentum in purus quis condimentum.",
  //     img: "https://images.pexels.com/photos/1472635/pexels-photo-1472635.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
  //   }
  // ]

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={`../upload/${post.img}`} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{getText(post.desc)}</p>
              <Link className="link" to={`/post/${post.id}`}>
                <button>Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
