import React from "react";

import ReviewsBlock from "./ReviewsBlock";
import homepageContent from "../../content/home";

export default {
  title: "Landing Blocks/Hero",
};

export const Default = () => (
  <ReviewsBlock content={homepageContent.reviewsBlockContent} />
);
