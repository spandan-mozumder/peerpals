import React from 'react';
import { navCategories } from '../constants/index';

const CategoriesHome = () => {
  return (
    <div className="h-full px-20 py-5">
      <h1
        className="gradient-text p-5 text-4xl"
        style={{ textShadow: '1px 1px 2px var(--colour-4)' }}
      >
        We have skilled Educators from Every Domain
      </h1>

      <div className="flex flex-row items-center justify-center gap-5 p-10">
        {navCategories.map((category, index) => (
          <div
            key={index}
            className="rounded-md border border-[var(--colour-4)] px-5 py-7 text-lg font-medium"
          >
            {category.domain}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesHome;
