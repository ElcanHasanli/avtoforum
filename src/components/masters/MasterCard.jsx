// src/components/masters/MasterCard.jsx
import React, { useState } from 'react';
import { Star, MapPin, Phone, MessageCircle, Award, Clock, CheckCircle, Heart, Share2, Eye } from 'lucide-react';

const MasterCard = ({ masterData }) => {
  const [isFavorite, setIsFavorite] = useState(masterData.isFavorite || false);
  const [rating, setRating] = useState(masterData.rating);

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < Math.floor(rating)
            ? 'text-yellow-500 fill-current'
            : index < rating
            ? 'text-yellow-500 fill-current opacity-50'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  const getServiceColor = (service) => {
    const colors = {
      'Mühərrik təmiri': 'from-red-500 to-red-600',
      'Boya işləri': 'from-blue-500 to-blue-600',
      'Elektrik sistemi': 'from-yellow-500 to-yellow-600',
      'Suspensiya': 'from-green-500 to-green-600',
      'Kondisioner': 'from-cyan-500 to-cyan-600',
      'Diaqnostika': 'from-purple-500 to-purple-600'
    };
    return colors[service] || 'from-gray-500 to-gray-600';
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-gray-800 to-gray-900 p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            {/* Master Avatar */}
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">
                  {masterData.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              {masterData.isVerified && (
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
              )}
              {masterData.isOnline && (
                <div className="absolute top-0 right-0 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
              )}
            </div>
            
            <div className="text-white">
              <h3 className="text-xl font-bold">{masterData.name}</h3>
              <p className="text-gray-300">{masterData.specialization}</p>
              <div className="flex items-center mt-2">
                <div className="flex items-center space-x-1">
                  {renderStars(rating)}
                </div>
                <span className="ml-2 text-yellow-400 font-medium">{rating}</span>
                <span className="ml-1 text-gray-400 text-sm">({masterData.reviewCount} rəy)</span>
              </div>
            </div>
          </div>

          {/* Favorite Button */}
          <button
            onClick={handleFavorite}
            className={`p-2 rounded-lg transition-colors ${
              isFavorite ? 'bg-red-100 text-red-600' : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Experience Badge */}
        {masterData.experience && (
          <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center">
            <Award className="w-4 h-4 mr-1" />
            {masterData.experience} il təcrübə
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Services */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-800 mb-3">Xidmətlər</h4>
          <div className="grid grid-cols-2 gap-2">
            {masterData.services?.slice(0, 4).map((service, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r ${getServiceColor(service)} p-3 rounded-lg text-white text-center`}
              >
                <div className="text-sm font-medium">{service}</div>
                {masterData.servicePrices && masterData.servicePrices[service] && (
                  <div className="text-xs opacity-90 mt-1">
                    {masterData.servicePrices[service]} AZN-dən
                  </div>
                )}
              </div>
            ))}
          </div>
          {masterData.services?.length > 4 && (
            <button className="w-full mt-2 text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors">
              +{masterData.services.length - 4} xidmət daha
            </button>
          )}
        </div>

        {/* Location & Contact */}
        <div className="space-y-3 mb-4">
          <div className="flex items-center text-gray-600">
            <MapPin className="w-4 h-4 mr-2 text-red-500" />
            <span className="text-sm">{masterData.location}</span>
            {masterData.distance && (
              <span className="ml-auto text-xs bg-gray-100 px-2 py-1 rounded-full">
                {masterData.distance} km uzaqda
              </span>
            )}
          </div>
          
          <div className="flex items-center text-gray-600">
            <Clock className="w-4 h-4 mr-2 text-green-500" />
            <span className="text-sm">{masterData.workingHours}</span>
            <span className={`ml-auto text-xs px-2 py-1 rounded-full ${
              masterData.isOpen ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            }`}>
              {masterData.isOpen ? 'Açıq' : 'Bağlı'}
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-4 p-3 bg-gray-50 rounded-lg">
          <div className="text-center">
            <div className="text-lg font-bold text-gray-800">{masterData.completedJobs}</div>
            <div className="text-xs text-gray-500">Tamamlanmış</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-gray-800">{masterData.responseTime}</div>
            <div className="text-xs text-gray-500">Cavab müddəti</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-gray-800">{masterData.repeatCustomers}%</div>
            <div className="text-xs text-gray-500">Təkrar müştəri</div>
          </div>
        </div>

        {/* Recent Reviews */}
        {masterData.recentReviews && masterData.recentReviews.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-800 mb-2">Son Rəylər</h4>
            <div className="space-y-2">
              {masterData.recentReviews.slice(0, 2).map((review, index) => (
                <div key={index} className="bg-gray-50 p-3 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center space-x-1">
                      {renderStars(review.rating)}
                    </div>
                    <span className="text-xs text-gray-500">{review.date}</span>
                  </div>
                  <p className="text-sm text-gray-700 line-clamp-2">{review.comment}</p>
                  <p className="text-xs text-gray-500 mt-1">- {review.customerName}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Certifications */}
        {masterData.certifications && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-800 mb-2">Sertifikatlar</h4>
            <div className="flex flex-wrap gap-2">
              {masterData.certifications.map((cert, index) => (
                <div key={index} className="flex items-center bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                  <Award className="w-3 h-3 mr-1" />
                  {cert}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
            <Phone className="w-4 h-4" />
            <span>Zəng Et</span>
          </button>
          
          <button className="flex-1 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2">
            <MessageCircle className="w-4 h-4" />
            <span>Mesaj</span>
          </button>
          
          <button className="px-4 py-3 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-lg transition-colors">
            <Share2 className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Book */}
        {masterData.quickBooking && (
          <button className="w-full mt-3 bg-purple-100 text-purple-700 py-2 rounded-lg text-sm font-medium hover:bg-purple-200 transition-colors">
            Tez Rezervasiya Et
          </button>
        )}

        {/* Price Range */}
        {masterData.priceRange && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Qiymət aralığı:</span>
              <span className="font-semibold text-gray-800">{masterData.priceRange}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MasterCard;