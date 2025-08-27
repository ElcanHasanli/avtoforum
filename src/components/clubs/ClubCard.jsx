import React, { useState } from 'react';
import { Users, Calendar, MessageCircle, Star, MapPin, Crown, UserPlus, Eye } from 'lucide-react';

const ClubCard = ({ clubData }) => {
  const [isJoined, setIsJoined] = useState(clubData.isJoined || false);
  const [memberCount, setMemberCount] = useState(clubData.memberCount);

  const handleJoinClub = () => {
    setIsJoined(!isJoined);
    setMemberCount(isJoined ? memberCount - 1 : memberCount + 1);
  };

  const getBrandLogo = (brand) => {
    const brandColors = {
      'BMW': 'from-blue-600 to-blue-800',
      'Mercedes': 'from-gray-600 to-gray-900',
      'Audi': 'from-red-500 to-red-700',
      'Toyota': 'from-red-600 to-red-800',
      'Lexus': 'from-blue-800 to-gray-900',
      'Porsche': 'from-yellow-500 to-yellow-700'
    };
    return brandColors[brand] || 'from-gray-500 to-gray-700';
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className={`h-32 bg-gradient-to-br ${getBrandLogo(clubData.brand)} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-4 left-4 flex items-center space-x-2">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">{clubData.brand[0]}</span>
          </div>
          <div className="text-white">
            <h3 className="font-bold text-lg">{clubData.name}</h3>
            <p className="text-sm opacity-90">{clubData.brand} Klubu</p>
          </div>
        </div>
        
        {clubData.isPremium && (
          <div className="absolute top-4 right-4 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center">
            <Crown className="w-3 h-3 mr-1" />
            Premium
          </div>
        )}

        <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm flex items-center">
          <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
          {clubData.onlineMembers} online
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center">
            <div className="text-xl font-bold text-gray-800">{memberCount}</div>
            <div className="text-xs text-gray-500">Üzv</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-gray-800">{clubData.posts}</div>
            <div className="text-xs text-gray-500">Post</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-gray-800">{clubData.events}</div>
            <div className="text-xs text-gray-500">Event</div>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {clubData.description}
        </p>

        <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-1" />
            {clubData.location}
          </div>
          <div className="flex items-center">
            <Star className="w-4 h-4 mr-1 text-yellow-500 fill-current" />
            {clubData.rating}
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-3 mb-4">
          <h4 className="text-sm font-semibold text-gray-800 mb-2">Son Fəaliyyət</h4>
          <div className="space-y-2">
            {clubData.recentActivity?.slice(0, 2).map((activity, index) => (
              <div key={index} className="flex items-center space-x-2 text-xs text-gray-600">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  {activity.type === 'post' ? <MessageCircle className="w-3 h-3 text-blue-600" /> : 
                   activity.type === 'event' ? <Calendar className="w-3 h-3 text-green-600" /> :
                   <Users className="w-3 h-3 text-purple-600" />}
                </div>
                <span className="flex-1 truncate">{activity.description}</span>
                <span className="text-gray-400">{activity.timeAgo}</span>
              </div>
            ))}
          </div>
        </div>

        {clubData.popularModels && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-800 mb-2">Populyar Modellər</h4>
            <div className="flex flex-wrap gap-2">
              {clubData.popularModels.slice(0, 3).map((model, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium"
                >
                  {model}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="flex space-x-3">
          <button
            onClick={handleJoinClub}
            className={`flex-1 flex items-center justify-center space-x-2 py-3 rounded-lg font-semibold transition-all duration-200 ${
              isJoined
                ? 'bg-green-100 text-green-700 hover:bg-green-200'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {isJoined ? (
              <>
                <Users className="w-4 h-4" />
                <span>Üzvüsən</span>
              </>
            ) : (
              <>
                <UserPlus className="w-4 h-4" />
                <span>Qoşul</span>
              </>
            )}
          </button>
          
          <button className="px-4 py-3 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-lg transition-colors">
            <Eye className="w-4 h-4" />
          </button>
        </div>

        {clubData.leader && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Crown className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-600">Klub Lideri</p>
                <p className="font-semibold text-gray-800">{clubData.leader.name}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-500">Üzv oldu</p>
                <p className="text-xs font-medium text-gray-700">{clubData.leader.joinDate}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClubCard;