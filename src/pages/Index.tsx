
import React, { useState, useEffect } from 'react';
import { Heart, IceCream } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [countdown, setCountdown] = useState(3);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const photos = [
    {
      src: "/lovable-uploads/76385d24-3018-4a40-b95f-557db3e9de24.png",
      message: "Thank you for being my friend"
    },
    {
      src: "/placeholder.svg",
      message: "You're always there when I need you"
    },
    {
      src: "/placeholder.svg", 
      message: "Your smile brightens every day"
    },
    {
      src: "/placeholder.svg",
      message: "Grateful for all our memories"
    }
  ];

  const friendshipMessages = [
    "Thank you for being my friend",
    "You're always there when I need you", 
    "Your smile brightens every day",
    "Grateful for all our memories",
    "You make everything better"
  ];

  // Countdown effect
  useEffect(() => {
    if (currentSection === 0 && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (currentSection === 0 && countdown === 0) {
      setTimeout(() => setCurrentSection(1), 500);
    }
  }, [countdown, currentSection]);

  // Photo gallery auto-advance
  useEffect(() => {
    if (currentSection === 1) {
      const interval = setInterval(() => {
        setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [currentSection, photos.length]);

  const handleNext = () => {
    setCurrentSection(currentSection + 1);
  };

  if (currentSection === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-orange-50">
        <div className="text-center">
          {countdown > 0 ? (
            <div className="text-9xl font-bold text-pink-400 animate-pulse">
              {countdown}
            </div>
          ) : (
            <div className="text-6xl font-bold text-pink-500 animate-fade-in">
              🍦 For Pearlie 🍦
            </div>
          )}
        </div>
      </div>
    );
  }

  if (currentSection === 1) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50 flex items-center justify-center p-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="relative mb-8">
            <img 
              src={photos[currentPhotoIndex].src}
              alt="Pearlie"
              className="w-80 h-80 object-cover rounded-3xl mx-auto shadow-2xl border-4 border-pink-200 animate-scale-in"
            />
            <div className="absolute -top-4 -right-4 text-4xl animate-bounce">🍨</div>
            <div className="absolute -bottom-4 -left-4 text-4xl animate-bounce" style={{animationDelay: '0.5s'}}>🍦</div>
          </div>
          
          <div className="mb-8">
            <p className="text-2xl font-serif text-pink-700 mb-4 animate-fade-in">
              {photos[currentPhotoIndex].message}
            </p>
            <div className="flex justify-center gap-2 mb-6">
              {photos.map((_, index) => (
                <div 
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentPhotoIndex ? 'bg-pink-400' : 'bg-pink-200'
                  }`}
                />
              ))}
            </div>
          </div>

          <button 
            onClick={handleNext}
            className="bg-gradient-to-r from-pink-400 to-orange-300 text-white px-8 py-3 rounded-full font-semibold hover:from-pink-500 hover:to-orange-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Continue 🍦
          </button>
        </div>
      </div>
    );
  }

  if (currentSection === 2) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50 flex items-center justify-center p-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-4xl font-serif text-pink-700 mb-8 flex items-center justify-center gap-4">
              <IceCream className="text-pink-400" size={48} />
              A Sweet Message
              <IceCream className="text-pink-400" size={48} />
            </h2>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-pink-100">
              <p className="text-2xl font-serif text-pink-800 leading-relaxed mb-6">
                "Thank you for being my friend.
              </p>
              <p className="text-2xl font-serif text-pink-800 leading-relaxed mb-6">
                You've been a constant, a light, and someone I'll always be grateful for.
              </p>
              <p className="text-2xl font-serif text-pink-800 leading-relaxed">
                This is just a small way to remind you how appreciated you are."
              </p>
              <div className="mt-8 text-pink-600 font-semibold text-lg">
                - Edwin 💖
              </div>
            </div>
          </div>

          <button 
            onClick={handleNext}
            className="bg-gradient-to-r from-pink-400 to-orange-300 text-white px-8 py-3 rounded-full font-semibold hover:from-pink-500 hover:to-orange-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            See Friendship Stats 📊
          </button>
        </div>
      </div>
    );
  }

  if (currentSection === 3) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50 flex items-center justify-center p-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-pink-700 mb-8 text-center flex items-center justify-center gap-4">
            🍨 Pearlie's Friendship Stats 🍨
          </h2>
          
          <Card className="bg-white/90 backdrop-blur-sm border-pink-200 shadow-2xl">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-semibold text-pink-800">Loyalty:</span>
                  <span className="text-2xl font-bold text-pink-600">10/10 🍦</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-xl font-semibold text-pink-800">Support:</span>
                  <span className="text-2xl font-bold text-pink-600">9.8/10 🍨</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-xl font-semibold text-pink-800">Kindness:</span>
                  <span className="text-2xl font-bold text-pink-600">11/10 🍧</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-xl font-semibold text-pink-800">Presence:</span>
                  <span className="text-2xl font-bold text-pink-600">100% 🍰</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-xl font-semibold text-pink-800">Realness:</span>
                  <span className="text-2xl font-bold text-pink-600">Off the charts 📈</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-8">
            <button 
              onClick={handleNext}
              className="bg-gradient-to-r from-pink-400 to-orange-300 text-white px-8 py-3 rounded-full font-semibold hover:from-pink-500 hover:to-orange-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              See Leaderboard 🏆
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (currentSection === 4) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50 flex items-center justify-center p-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-pink-700 mb-8 flex items-center justify-center gap-4">
            🏆 Friendship Leaderboard 🏆
          </h2>
          
          <Card className="bg-white/90 backdrop-blur-sm border-pink-200 shadow-2xl mb-8">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="text-6xl mb-4">👑</div>
                <div className="text-3xl font-bold text-pink-700 mb-2">#1 Pearlie</div>
                <div className="text-lg text-pink-600 mb-4">The Ultimate Friend</div>
                <div className="bg-gradient-to-r from-pink-200 to-orange-200 rounded-full p-4 mb-4">
                  <span className="text-2xl font-bold text-pink-800">🍦 LEGENDARY STATUS 🍦</span>
                </div>
                <p className="text-pink-700 font-semibold text-xl">
                  Nobody's even close.
                </p>
              </div>
            </CardContent>
          </Card>

          <button 
            onClick={handleNext}
            className="bg-gradient-to-r from-pink-400 to-orange-300 text-white px-8 py-3 rounded-full font-semibold hover:from-pink-500 hover:to-orange-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Final Message 💖
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50 flex items-center justify-center p-8">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <div className="text-6xl mb-6 animate-bounce">🍦</div>
          <h2 className="text-4xl font-serif text-pink-700 mb-8">Just wanted you to know</h2>
        </div>
        
        <Card className="bg-white/90 backdrop-blur-sm border-pink-200 shadow-2xl">
          <CardContent className="p-12">
            <p className="text-2xl font-serif text-pink-800 leading-relaxed mb-6">
              This site's coded just for you — as sweet as your favorite ice cream.
            </p>
            <div className="flex justify-center items-center gap-4 text-4xl">
              <IceCream className="text-pink-400 animate-pulse" size={48} />
              <Heart className="text-pink-500 animate-pulse" size={48} />
              <span className="text-pink-500">🍨</span>
            </div>
            <div className="mt-8 text-pink-600 font-semibold text-xl">
              Made with love by Edwin 💖
            </div>
          </CardContent>
        </Card>
        
        <button 
          onClick={() => setCurrentSection(0)}
          className="mt-8 bg-gradient-to-r from-pink-400 to-orange-300 text-white px-8 py-3 rounded-full font-semibold hover:from-pink-500 hover:to-orange-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Start Over 🔄
        </button>
      </div>
    </div>
  );
};

export default Index;
