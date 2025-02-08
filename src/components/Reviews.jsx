import React from "react";

const Reviews = ({ reviews }) => {
  return (
    <div className="mt-4">
      <h3 className="text-lg font-bold mb-2">Reviews:</h3>
      {reviews.length === 0 ? (
        <p>No reviews yet. Be the first to review!</p>
      ) : (
        reviews.map((review, index) => (
          <div key={index} className="border-t pt-2 mt-2">
            <p className="font-semibold">{review.name}:</p>
            <p>{review.comment}</p>
            <p className="text-sm text-gray-500">Rating: {review.rating}/5</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Reviews;
