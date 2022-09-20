import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="homepage">
      <div className="idea">
        <div className="ideatitle">
          <h1>Title</h1>
        </div>
        <div className="ideabody">
          <p>body</p>
        </div>
        {/* カテゴリーは複数設定できる */}
        <div className="ideacategory">
          <p>category</p>
        </div>
        <div className="nameAndDelete">
          {/* <h3>@{post.author.username}</h3> */}
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
          // onClick={() => {
          //   handleDelete(post.id);
          // }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
