// src/components/common/SearchBar.jsx
import React, { useState, useRef, useEffect } from 'react';
import { Search, X, Clock, TrendingUp, Filter, SlidersHorizontal } from 'lucide-react';

const SearchBar = ({ 
  placeholder = "Axtar...", 
  onSearch, 
  showSuggestions = true,
  showFilters = false,
  filters = [],
  onFilterChange,
  recentSearches = [],
  trendingSearches = [],
  className = "" 
}) => {
  const [query, setQuery] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [showSuggestionsPanel, setShowSuggestionsPanel] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [showFiltersPanel, setShowFiltersPanel] = useState(false);
  
  const searchRef = useRef(null);
  const suggestionsRef = useRef(null);

  // Mock suggestions based on query
  const getSuggestions = (searchQuery) => {
    if (!searchQuery.trim()) return [];
    
    const mockSuggestions = [
      'BMW M3 problem',
      'Mercedes C63 təcrübəsi', 
      'Audi A4 satış',
      'Toyota Camry alış',
      'Avtoyuyma tövsiyə',
      'Mühərrik səsi',
      'Fren problemi',
      'Suspensiya təmiri'
    ];
    
    return mockSuggestions.filter(suggestion => 
      suggestion.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 6);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setShowSuggestionsPanel(value.length > 0 && showSuggestions);
  };

  const handleSearch = (searchQuery = query) => {
    if (searchQuery.trim()) {
      onSearch?.(searchQuery.trim(), selectedFilters);
      setShowSuggestionsPanel(false);
      setIsActive(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    handleSearch(suggestion);
  };

  const handleFilterToggle = (filter) => {
    setSelectedFilters(prev => {
      const newFilters = prev.includes(filter)
        ? prev.filter(f => f !== filter)
        : [...prev, filter];
      onFilterChange?.(newFilters);
      return newFilters;
    });
  };

  const clearSearch = () => {
    setQuery('');
    setShowSuggestionsPanel(false);
  };

  const clearFilters = () => {
    setSelectedFilters([]);
    onFilterChange?.([]);
  };

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchRef.current && !searchRef.current.contains(event.target) &&
        suggestionsRef.current && !suggestionsRef.current.contains(event.target)
      ) {
        setShowSuggestionsPanel(false);
        setIsActive(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const suggestions = getSuggestions(query);

  return (
    <div className={`relative ${className}`} ref={searchRef}>
      {/* Main Search Input */}
      <div className={`
        flex items-center bg-white border-2 rounded-xl px-4 py-3 transition-all duration-200
        ${isActive ? 'border-blue-500 shadow-lg' : 'border-gray-200 hover:border-gray-300'}
      `}>
        <Search className="w-5 h-5 text-gray-400 mr-3" />
        
        <input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={handleInputChange}
          onFocus={() => {
            setIsActive(true);
            if (query.length > 0) setShowSuggestionsPanel(true);
          }}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          className="flex-1 outline-none text-gray-700 placeholder-gray-400"
        />

        {/* Active Filters Count */}
        {selectedFilters.length > 0 && (
          <div className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium mr-2">
            {selectedFilters.length} filtr
          </div>
        )}

        {/* Clear Button */}
        {query && (
          <button
            onClick={clearSearch}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors mr-2"
          >
            <X className="w-4 h-4 text-gray-400" />
          </button>
        )}

        {/* Filters Button */}
        {showFilters && (
          <button
            onClick={() => setShowFiltersPanel(!showFiltersPanel)}
            className={`p-2 rounded-lg transition-colors ${
              showFiltersPanel || selectedFilters.length > 0 
                ? 'bg-blue-100 text-blue-600' 
                : 'hover:bg-gray-100 text-gray-400'
            }`}
          >
            <SlidersHorizontal className="w-4 h-4" />
          </button>
        )}

        {/* Search Button */}
        <button
          onClick={() => handleSearch()}
          className="ml-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          Axtar
        </button>
      </div>

      {/* Suggestions Panel */}
      {showSuggestionsPanel && (isActive || query) && (
        <div 
          ref={suggestionsRef}
          className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl z-50 max-h-96 overflow-y-auto"
        >
          {/* Search Suggestions */}
          {suggestions.length > 0 && (
            <div className="p-2">
              <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Təkliflər
              </div>
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="w-full text-left px-3 py-2 hover:bg-gray-50 rounded-lg transition-colors flex items-center space-x-3"
                >
                  <Search className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-700">{suggestion}</span>
                </button>
              ))}
            </div>
          )}

          {/* Recent Searches */}
          {recentSearches.length > 0 && query.length === 0 && (
            <div className="p-2 border-t border-gray-100">
              <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide flex items-center">
                <Clock className="w-3 h-3 mr-2" />
                Son Axtarışlar
              </div>
              {recentSearches.slice(0, 5).map((search, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(search)}
                  className="w-full text-left px-3 py-2 hover:bg-gray-50 rounded-lg transition-colors flex items-center space-x-3"
                >
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-700">{search}</span>
                </button>
              ))}
            </div>
          )}

          {/* Trending Searches */}
          {trendingSearches.length > 0 && query.length === 0 && (
            <div className="p-2 border-t border-gray-100">
              <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide flex items-center">
                <TrendingUp className="w-3 h-3 mr-2" />
                Populyar Axtarışlar
              </div>
              {trendingSearches.slice(0, 5).map((trend, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(trend)}
                  className="w-full text-left px-3 py-2 hover:bg-gray-50 rounded-lg transition-colors flex items-center space-x-3"
                >
                  <TrendingUp className="w-4 h-4 text-orange-500" />
                  <span className="text-gray-700">{trend}</span>
                </button>
              ))}
            </div>
          )}

          {/* No Results */}
          {suggestions.length === 0 && query.length > 0 && (
            <div className="p-4 text-center text-gray-500">
              <Search className="w-8 h-8 mx-auto mb-2 text-gray-300" />
              <p className="text-sm">Heç bir nəticə tapılmadı</p>
            </div>
          )}
        </div>
      )}

      {/* Filters Panel */}
      {showFiltersPanel && showFilters && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl z-50 p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-800 flex items-center">
              <Filter className="w-4 h-4 mr-2" />
              Filtrlər
            </h3>
            {selectedFilters.length > 0 && (
              <button
                onClick={clearFilters}
                className="text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                Təmizlə
              </button>
            )}
          </div>

          <div className="space-y-4">
            {filters.map((filterGroup, groupIndex) => (
              <div key={groupIndex}>
                <h4 className="text-sm font-medium text-gray-700 mb-2">
                  {filterGroup.label}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {filterGroup.options.map((option, optionIndex) => (
                    <button
                      key={optionIndex}
                      onClick={() => handleFilterToggle(option.value)}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                        selectedFilters.includes(option.value)
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {option.label}
                      {option.count && (
                        <span className="ml-1 opacity-75">({option.count})</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Compact Search Bar for smaller spaces
export const CompactSearchBar = ({ onSearch, placeholder = "Axtar..." }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim()) {
      onSearch?.(query.trim());
    }
  };

  return (
    <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
      <Search className="w-4 h-4 text-gray-400 mr-2" />
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        className="flex-1 bg-transparent outline-none text-sm"
      />
      {query && (
        <button
          onClick={() => setQuery('')}
          className="p-1 hover:bg-gray-200 rounded transition-colors"
        >
          <X className="w-3 h-3 text-gray-400" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;