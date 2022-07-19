import React, { useEffect, useState } from "react";


function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("data,json")
      .then(response => response.json())
      .then(json => {
        setPosts(json);
        console.log("post",json)
        setLoading(false);
      })
      .catch(error => {
        // window.alert(error);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>Home Page</h1>
      {loading && <p className="loader">Fetching posts please wait...</p>}
      {!loading &&
        posts.map(({ title, body, id }) => (
          <div key={id} className="card">
            <h3>{title}</h3>
            {body}
          </div>
        ))}
    </div>
  );
}

export default Home;