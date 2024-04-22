import React from 'react';
import { useNavigate } from 'react-router-dom';
import image2 from "/home/sricharan24/SwiftServe/swiftserve/src/assets/Girias.png";
import image3 from "/home/sricharan24/SwiftServe/swiftserve/src/assets/goodrej.png";
import image4 from "/home/sricharan24/SwiftServe/swiftserve/src/assets/urbancompany.png";

const categories = [
  {
    id: 1,
    name: 'Category 1',
    imageUrl: image2,
  },
  {
    id: 2,
    name: 'Category 2',
    imageUrl: image3,
  },
  {
    id: 3,
    name: 'Category 3',
    imageUrl: image4,
  },
];

export const Categories = () => {
  const navigate = useNavigate();

  return (
    <div className="categories">
      {categories.map((category) => (
        <div
          key={category.id}
          className="category-box"
          onClick={() => navigate(`/services/${category.id}`)}
        >
          <img src={category.imageUrl} alt={category.name} />
        </div>
      ))}
    </div>
  );
};
