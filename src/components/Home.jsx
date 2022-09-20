import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import "./Home.css";
import { auth, db } from "../firebase";

function Home() {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, "ideas"));
      setPostList(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    };
    getPosts();
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "ideas", id));
    window.location.href = "/";
  };

  return (
    <div className="homepage">
      {postList.map((post) => {
        return (
          <div className="idea" key={post.id}>
            <div className="ideatitle">
              <h1>{post.title}</h1>
            </div>
            <div className="ideabody">
              <p>{post.body}</p>
            </div>
            {/* カテゴリーは複数設定できる */}
            <div className="ideacategory">
              <p>Category: {post.category.value}</p>
            </div>
            <div className="nameAndDelete">
              <h3>@{post.author.username}</h3>
              {/* Under the code is not working because auth.currentUser is not working. */}
              {/* {post.author.id === auth.currentUser.id && (
                <button
                  onClick={() => {
                    handleDelete(post.id);
                  }}
                >
                  Delete
                </button>
              )} */}
              <button
                onClick={() => {
                  handleDelete(post.id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
