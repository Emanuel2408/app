import React from "react";

export default function Section(props) {
  return (
    <div className="container">
      <section className="item">
        <img src={props.item.imageURL} alt="location"></img>
        <div className="section-right">
          <span className="location">{props.item.location}</span>
          <a href={props.item.googleMapsLink} className="gmapsLink">
            View on Google Maps
          </a>
          <h1 className="title">{props.item.title}</h1>
          <div className="date">
            <span>{props.item.date.start}</span> -{" "}
            <span>{props.item.date.end}</span>
          </div>
          <p className="description">{props.item.description}</p>
        </div>
      </section>
    </div>
  );
}
