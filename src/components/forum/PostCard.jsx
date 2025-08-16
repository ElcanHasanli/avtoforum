// src/components/forum/PostCard.jsx
import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, Bookmark, Eye, Clock, User, Award, Pin } from 'lucide-react';

const PostCard = ({ postData }) => {
  const [liked, setLiked] = useState(postData.isLiked || false);
  const [likeCount, setLikeCount] = useState(postData.likes);
  const [bookmarked, setBookmarked] = useState(postData.isBookmarked || false);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  const handleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Texniki Məsələlər': 'bg-red-100 text-red-700',
      'Tövsiyələr': 'bg-green-100 text-green-700',
      'Təcrübələr': 'bg-blue-100 text-blue-700',
      'Satış': 'bg-purple-100 text-purple-700',
      'Alış': 'bg-yellow-100 text-yellow-700',
      'Ümumi': 'bg-gray-100 text-gray-700'
    };
    return colors[category] || 'bg-gray-100 text-gray-700';
  };

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
  };

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100">
      {/* Post Header */}
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            {/* User Avatar */}
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm">
                  {postData.author.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              {postData.author.isVerified && (
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                  <Award className="w-2 h-2 text-white" />
                </div>
              )}
            </div>
            
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <h4 className="font-semibold text-gray-800">{postData.author.name}</h4>
                {postData.author.badge && (
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">
                    {postData.author.badge}
                  </span>
                )}
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-500 mt-1">
                <div className="flex items-center space-x-1">
                  <Clock className="w-3 h-3" />
                  <span>{postData.timeAgo}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Eye className="w-3 h-3" />
                  <span>{postData.views}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Category & Pin */}
          <div className="flex items-center space-x-2">
            {postData.isPinned && (
              <Pin className="w-4 h-4 text-yellow-500" />
            )}
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(postData.category)}`}>
              {postData.category}
            </span>
          </div>
        </div>
      </div>

      {/* Post Content */}
      <div className="p-4">
        {/* Title */}
        <h3 className="text-lg font-bold text-gray-800 mb-2 hover:text-blue-600 cursor-pointer transition-colors">
          {postData.title}
        </h3>

        {/* Content */}
        <p className="text-gray-600 mb-4 leading-relaxed">
          {truncateText(postData.content, 200)}
        </p>

        {/* Images */}
        {postData.images && postData.images.length > 0 && (
          <div className="mb-4">
            {postData.images.length === 1 ? (
              <img 
                src={postData.images[0]} 
                alt="Post image"
                className="w-full h-48 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
              />
            ) : (
              <div className="grid grid-cols-2 gap-2">
                {postData.images.slice(0, 4).map((image, index) => (
                  <div key={index} className="relative">
                    <img 
                      src={image} 
                      alt={`Post image ${index + 1}`}
                      className="w-full h-24 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                    />
                    {index === 3 && postData.images.length > 4 && (
                      <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                        <span className="text-white font-semibold">+{postData.images.length - 4}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tags */}
        {postData.tags && postData.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {postData.tags.map((tag, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full hover:bg-blue-100 hover:text-blue-700 cursor-pointer transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Post Footer */}
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
              <span className="text-sm font-medium">{postData.comments}</span>
            </button>

            {/* Share Button */}
            <button className="flex items-center space-x-1 px-3 py-2 bg-gray-100 text-gray-600 hover:bg-green-100 hover:text-green-600 rounded-lg transition-all duration-200">
              <Share2 className="w-4 h-4" />
              <span className="text-sm font-medium">Paylaş</span>
            </button>
          </div>

          {/* Bookmark Button */}
          <button 
            onClick={handleBookmark}
            className={`p-2 rounded-lg transition-all duration-200 ${
              bookmarked 
                ? 'bg-blue-100 text-blue-600' 
                : 'bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-600'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-current' : ''}`} />
          </button>
        </div>
      </div>

      {/* Solved Badge */}
      {postData.isSolved && (
        <div className="px-4 pb-4">
          <div className="bg-green-100 border border-green-200 rounded-lg p-3 flex items-center space-x-2">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <Award className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-green-800 font-medium text-sm">Problem həll edildi</p>
              <p className="text-green-600 text-xs">Bu post həll edilmiş kimi qeyd edilib</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostCard;