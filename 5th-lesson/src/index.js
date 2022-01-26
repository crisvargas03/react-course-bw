import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//Routes
import Home from "./routes/Home";
import Blog from "./routes/Blog";
import Contact from "./routes/Contact";
import NotFound from "./routes/NotFound";
import Post from "./routes/Post";
import UserProvider from "./context/UserProvider";
import Protected from "./routes/Protected";
import { CheckUser } from "./components/CheckUser";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:id" element={<Post />} />
            <Route path="contact" element={<Contact />} />
            <Route
              path="private"
              element={
                <CheckUser>
                  <Protected />
                </CheckUser>
              }
            />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
