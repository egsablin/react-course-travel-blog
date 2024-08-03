import React from "react"

export default function News(props) {

    return (
        <section>
            <div>
                <img src={"./images/"+props.imgUrl} className="news--img"></img>
            </div>
            <div className="news-context">
                <div className="news-location">
                    <img src="./images/point.png" className="news--point"></img>
                    <span className="news--country">{props.location}</span>
                    <a href={props.googleMapsUrl} className="news--locatioLink">View on Google Maps</a>
                </div>
                <h1 className="news--title">{props.title}</h1>
                <h3 className="news--dataRange">{props.startDate} - {props.endDate}</h3>
                <p className="news--description">{props.description}</p>
            </div>
        </section>
    )
}