import React from "react";
import { useFetch } from "../hooks/useFetch";
import Loading from "../hooks/Loading";
import { Link, useSearchParams } from "react-router-dom";

const Blog = () => {
  const { data, error, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  let [searchParams, setSearchParams] = useSearchParams();

  if (loading) {
    return <Loading />;
  }

  if (error !== "") {
    return <h2>{error}</h2>;
  }

  const handleChange = (e) => {
    let filter = e.target.value;
    if (filter) {
      setSearchParams({ filter });
    } else {
      setSearchParams({ filter });
    }
  };

  return (
    <div>
      <h2>Blog</h2>
      <input
        className="form-control mb-2"
        type="text"
        value={searchParams.get("filter") || ""}
        onChange={handleChange}
      />
      {data
        .filter((item) => {
          let filter = searchParams.get("filter");
          if (!filter) return true;

          let title = item.title.toLowerCase();
          return title.startsWith(filter.toLowerCase());
        })
        .map((item) => (
          <h4 key={item.id}>
            <Link to={`/blog/${item.id}`}>
              {item.id}. {item.title}
            </Link>
          </h4>
        ))}
    </div>
  );
};

export default Blog;
