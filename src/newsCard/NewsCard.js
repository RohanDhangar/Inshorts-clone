import React from "react";
// import "./NewsCard.css";

const NewsCard = ({ NewsItem }) => {
  console.log(NewsItem);
  const fulldate = new Date(NewsItem.publishedAt);
  var date = fulldate.toString().split(" ");
  const hour = parseInt(date[4].substring(0, 2));
  const time = hour > 12 ? true : false;

  return (
    <div className="newsCard">
      <img
        alt={NewsItem.title}
        src={
          NewsItem.urlToImage
            ? NewsItem.urlToImage
            : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
        }
        className="newsImage"
      />
      <div className="newsText">
        <div>
          <span className="title">{NewsItem.title}</span>
          <br />{" "}
          <span className="author">
            <a href={NewsItem.url} target="__blank">
              <b>Short </b>
            </a>
            <span className="muted">
              by {NewsItem.author ? NewsItem.author : "Unkonwn"} /{" "}
              {time
                ? `${hour - 12}:${date[4].substring(3, 5)} pm`
                : `${hour}:${date[4].substring(3, 5)} am`}{" "}
              on {date[2]} {date[1]} {date[3]},{date[0]}
            </span>
          </span>
        </div>
        <div className="lowerNewsText">
          <div className="description">{NewsItem.description}</div>
          <span className="readmore">
            read more at{" "}
            <a href={NewsItem.url} target="__blank" className="source">
              <b>{NewsItem.source.name}</b>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
