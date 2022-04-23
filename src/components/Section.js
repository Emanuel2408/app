import React from "react";

export default function Section(props) {
  return (
    <div className="container">
      <section className="item">
        <img src={props.item.imageURL} alt="location"></img>
        <div className="section-right">
          <span className="location">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-geo-alt-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
            </svg>{" "}
            {props.item.location}
          </span>
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
