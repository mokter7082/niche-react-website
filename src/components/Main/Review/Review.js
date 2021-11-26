import React, { useEffect, useState } from "react";
import Rating from "react-rating";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://enigmatic-escarpment-96711.herokuapp.com/allReview")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <h2 className="text-center text-success my-3">Our Review</h2>
      {reviews.map((rv) => (
        <div className="container mt-4">
          <h4>Email: {rv.email}</h4>
          <h4>Review: {rv.comments}</h4>
          <Rating
            initialRating={rv?.rating}
            emptySymbol="far fa-star"
            fullSymbol="fas fa-star"
            readonly
          />
        </div>
      ))}
    </div>
  );
};

export default Review;
