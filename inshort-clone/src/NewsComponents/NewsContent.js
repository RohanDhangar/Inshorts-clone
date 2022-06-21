import { Container } from "@material-ui/core";
import React from "react";
import "./NewsContent.css";
import NewsCard from "../newsCard/NewsCard";
const NewsContent = ({ newsArray, newsResults, loadmore, setloadmore }) => {
  return (
    <Container maxWidth="md">
      <div className="content">
        <div className="download">
          <span className="downloadText">
            For the best experience use inshorts app on your smartphone
          </span>
          <img
            alt="app store"
            height="80%"
            src="https://assets.inshorts.com/website_assets/images/appstore.png"
          />
          <img
            alt="play store"
            height="80%"
            src="https://assets.inshorts.com/website_assets/images/playstore.png"
          />
        </div>

        {newsArray.map((NewsItem) => (
          <NewsCard NewsItem={NewsItem} key={NewsItem.title} />
        ))}

        {loadmore <= newsResults && (
          <>
            <hr />
            <button className="loadmore" onClick={()=>setloadmore(loadmore+20)}>Load More</button>
          </>
        )}
      </div>
    </Container>
  );
};

export default NewsContent;
