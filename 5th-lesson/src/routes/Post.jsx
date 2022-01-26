import React from "react";
import { useParams } from "react-router-dom";
import Loading from "../hooks/Loading";
import { useFetch } from "../hooks/useFetch";

const Post = () => {
  const params = useParams();
  const { data, error, loading } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );

  if (loading) {
    return <Loading />;
  }

  if (error !== "") {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <h2>
        {data.id}. {data.title}
      </h2>
      <p>{data.body}</p>
    </div>
  );
};

export default Post;
