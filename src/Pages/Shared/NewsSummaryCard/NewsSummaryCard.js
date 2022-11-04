import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { FaRegBookmark, FaShareAlt, FaStar, FaEye } from "react-icons/fa";

const NewsSummaryCard = ({ news }) => {
  const { _id, title, details, total_view, author, image_url, rating } = news;

  return (
    <Card className="mb-4">
      <Card.Header>
        <div className="d-flex justify-content-between align-items-center">
          {" "}
          <div className="d-flex">
            <Image
              roundedCircle
              className="me-2"
              src={author.img}
              style={{ height: "60px" }}
            ></Image>
            <div className="">
              <p className="mb-0">{author?.name}</p>
              <p>{author?.published_date}</p>
            </div>
          </div>
          <div>
            <FaRegBookmark className="me-2"></FaRegBookmark>
            <FaShareAlt></FaShareAlt>
          </div>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length > 250 ? (
            <>
              {details.slice(0, 250) + "..."}{" "}
              <Link to={`/news/${_id}`}>Read more</Link>
            </>
          ) : (
            details
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between">
        <div className="text-align-center">
          <FaStar className="text-warning me-2"></FaStar> {rating?.number}
        </div>
        <div>
          {" "}
          <FaEye className="me-2"></FaEye> {total_view}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsSummaryCard;
