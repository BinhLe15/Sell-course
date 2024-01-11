import React, { useState } from 'react';
import RatingStars from 'react-rating-stars-component';
import { useSnackbar } from 'notistack';
import axios from 'axios';

import './CourseRating.css';

const CourseRating = ({ courseId, props }) => {
  const [rating, setRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const submitRating = async () => {
    setIsSubmitting(true);
    // try {
      const response = await handleRatingSubmit(courseId, rating);
      enqueueSnackbar('Đánh giá của bạn đã được gửi thành công!', {
        variant: 'success',
      });
      // setRating(0); // Reset rating after successful submission
    // } catch (error) {
    //   enqueueSnackbar('Đã xảy ra lỗi khi gửi đánh giá. Vui lòng thử lại sau.', {
    //     variant: 'error',
    //   });
    // } finally {
    //   setIsSubmitting(false);
    // }
  };

  const handleRatingSubmit = async (courseId, rating) => {
    // Add API call logic here:
    const response = await axios.post('/api/courses/rate', {
      courseId,
      rating,
    });
    return response.data; // Or handle the response as needed
  };

  return (
    <div className='rating_container'>
      <RatingStars
        classNames={'s'}
        rating={rating}
        starRatedColor="gold"
        changeRating={handleRatingChange}
      />
      <button
        type='button' // Use button type for non-form actions
        className='btn btn-primary'
        disabled={isSubmitting} // Disable button during submission
        onClick={submitRating}
      >
        {isSubmitting ? 'Đang gửi đánh giá...' : 'Gửi đánh giá của bạn'}
      </button>
    </div>
  );
};

export default CourseRating;
