import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Menu = ({cat}) => {

  const [posts, setPosts] = useState([])

  useEffect( () => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/?cat=${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat])
    // const posts = [
    //     {
    //       id:1,
    //       title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    //       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi condimentum bibendum dolor sit amet tempor. Cras et egestas urna, sit amet iaculis sapien. Nullam fermentum in purus quis condimentum.",
    //       img: "https://images.pexels.com/photos/9380588/pexels-photo-9380588.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
    //     },
    //     {
    //       id:2,
    //       title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    //       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi condimentum bibendum dolor sit amet tempor. Cras et egestas urna, sit amet iaculis sapien. Nullam fermentum in purus quis condimentum.",
    //       img: "https://images.pexels.com/photos/2669164/pexels-photo-2669164.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
    //     },
    //     {
    //       id:3,
    //       title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi condimentum bibendum dolor sit amet tempor. Cras et egestas urna, sit amet iaculis sapien. Nullam fermentum in purus quis condimentum.",
    //       img: "https://images.pexels.com/photos/2389122/pexels-photo-2389122.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
    //     },
    //     {
    //       id:4,
    //       title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    //       desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi condimentum bibendum dolor sit amet tempor. Cras et egestas urna, sit amet iaculis sapien. Nullam fermentum in purus quis condimentum.",
    //       img: "https://images.pexels.com/photos/1472635/pexels-photo-1472635.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
    //     }
    //   ]

  return (
    <div className='menu'>
        <h1>Other posts you may like</h1>
        {posts.map(post => (
            <div className="post" key={post.id}>
                <img src={`../upload/${post?.img}`} alt="" />
                <h2>{post.title}</h2>
                <button>Read more</button>
            </div>
        ))}
    </div>
  )
}

export default Menu