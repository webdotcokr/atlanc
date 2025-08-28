import React from 'react';

export interface BlogCardProps {
  title: string;
  excerpt?: string;
  image?: string;
  date?: string;
  category?: string;
  onClick?: () => void;
  className?: string;
}

export default function BlogCard({
  title,
  excerpt,
  image,
  date,
  category,
  onClick,
  className = ""
}: BlogCardProps) {
  const cardContent = (
    <>
      {/* Image */}
      {image && (
        <div className="w-full h-48 md:h-52 bg-gray-200 rounded-lg overflow-hidden mb-4">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      {/* Category & Date */}
      <div className="flex items-center gap-3 mb-3">
        {category && (
          <span className="text-sm text-green-600 font-semibold uppercase tracking-wide">
            {category}
          </span>
        )}
        {date && (
          <span className="text-sm text-gray-500">
            {date}
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight line-clamp-2">
        {title}
      </h3>

      {/* Excerpt */}
      {excerpt && (
        <p className="text-gray-600 leading-relaxed line-clamp-3">
          {excerpt}
        </p>
      )}
    </>
  );

  if (onClick) {
    return (
      <article
        onClick={onClick}
        className={`
          bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300
          p-5 md:p-6 cursor-pointer hover:-translate-y-1
          ${className}
        `}
      >
        {cardContent}
      </article>
    );
  }

  return (
    <article className={`bg-white rounded-lg shadow-lg p-5 md:p-6 ${className}`}>
      {cardContent}
    </article>
  );
}