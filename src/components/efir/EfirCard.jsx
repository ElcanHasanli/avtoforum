// src/components/efir/EfirCard.jsx
import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, MapPin, Clock, User, Eye } from 'lucide-react';

const EfirCard = ({ carData }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(carData.likes);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img 
          src={carData.image} 
          alt={`${carData.carBrand} ${carData.carModel}`}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Online Status Badge */}
        {carData.isOnline && (
          <div className="absolute top-3 left-3 flex items-center space-x-1 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <span>Canlı</span>
          </div>
        )}

        {/* Views Counter */}
        <div className="absolute top-3 right-3 flex items-center space-x-1 bg-black bg-opacity-60 text-white px-2 py-1 rounded-full text-xs">
          <Eye className="w-3 h-3" />
          <span>{carData.views || 0}</span>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* User Info */}
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-800">{carData.user}</h3>
            <div className="flex items-center space-x-3 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <Clock className="w-3 h-3" />
                <span>{carData.timeAgo}</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin className="w-3 h-3" />
                <span>{carData.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Car Info */}
        <div className="mb-4">
          <h2 className="text-xl font-bold text-gray-800 mb-1">
            {carData.carBrand} {carData.carModel}
          </h2>
          <div className="flex items-center justify-between">
            <span className="text-gray-600 font-medium">{carData.year} il</span>
            <div className="flex items-center space-x-1">
              <div className="w-6 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-sm"></div>
              <span className="text-sm text-gray-500 font-medium">{carData.carBrand}</span>
            </div>
          </div>
        </div>

        {/* Description (if available) */}
        {carData.description && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {carData.description}
          </p>
        )}

        {/* Tags (if available) */}
        {carData.tags && (
          <div className="flex flex-wrap gap-2 mb-4">
            {carData.tags.slice(0, 3).map((tag, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="flex items-center space-x-4">
            {/* Like Button */}
            <button 
              onClick={handleLike}
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                liked 
                  ? 'bg-red-100 text-red-600 hover:bg-red-200' 
                  : 'bg-gray-100 text-gray-600 hover:bg-red-100 hover:text-red-600'
              }`}
            >
              <Heart className={`w-4 h-4 ${liked ? 'fill-current' : ''}`} />
              <span className="text-sm font-medium">{likeCount}</span>
            </button>

            {/* Comment Button */}
            <button className="flex items-center space-x-1 px-3 py-2 bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-600 rounded-lg transition-all duration-200">
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm font-medium">{carData.comments}</span>
            </button>
          </div>

          {/* Share Button */}
          <button className="p-2 bg-gray-100 text-gray-600 hover:bg-green-100 hover:text-green-600 rounded-lg transition-all duration-200">
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EfirCard;