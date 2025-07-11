import React, { useState, useEffect } from 'react';
import { Heart, IceCream, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [countdown, setCountdown] = useState(3);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const photos = [
    {
      src: "/lovable-uploads/76385d24-3018-4a40-b95f-557db3e9de24.png",
      message: "Thank you for being my friend, Pearlie"
    },
    {
      src: "/placeholder.svg?height=400&width=400",
      message: "You light up every room you enter"
    },
    {
      src: "/lovable-uploads/d21e98ae-e25c-4130-9039-51766abe9962.png",
      message: "Your laugh is the sweetest sound"
    },
    {
      src: "/placeholder.svg?height=400&width=400",
      message: "You've made my life so much brighter"
    },
    {
      src: "/placeholder.svg?height=400&width=400",
      message: "Every memory with you is precious"
    },
    {
      src: "/placeholder.svg?height=400&width=400",
      message: "You're not just a friend, you're family"
    }
  ];

  const heartfeltMessages = [
    "You've been there through every laugh and every tear",
    "Your kindness has no limits", 
    "You make the ordinary feel extraordinary",
    "Thank you for choosing to be in my life",
    "You're the friend everyone deserves but few are lucky enough to have",
    "Your heart is pure gold, Pearlie"
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
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [currentSection, photos.length]);

  const handleNext = () => {
    setCurrentSection(currentSection + 1);
  };

  if (currentSection === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50">
        <div className="text-center relative">
          <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 text-6xl animate-bounce">🍦</div>
          <div className="absolute -top-20 right-0 text-4xl animate-pulse" style={{animationDelay: '1s'}}>🍨</div>
          <div className="absolute -bottom-20 left-0 text-5xl animate-bounce" style={{animationDelay: '0.5s'}}>🧁</div>
          
          {countdown > 0 ? (
            <div className="text-9xl font-bold text-pink-400 animate-pulse drop-shadow-lg">
              {countdown}
            </div>
          ) : (
            <div className="animate-fade-in">
              <div className="text-6xl font-bold text-pink-600 mb-4 drop-shadow-lg">
                💕 For My Dearest Pearlie 💕
              </div>
              <div className="text-2xl text-pink-500 font-serif italic">
                A little something from your friend Edwin
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (currentSection === 1) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50 flex items-center justify-center p-8 relative overflow-hidden">
        <div className="absolute top-10 left-10 text-4xl animate-bounce">🍦</div>
        <div className="absolute top-20 right-20 text-3xl animate-pulse">🍨</div>
        <div className="absolute bottom-20 left-20 text-5xl animate-bounce" style={{animationDelay: '1s'}}>🧁</div>
        <div className="absolute bottom-10 right-10 text-4xl animate-pulse" style={{animationDelay: '2s'}}>🍰</div>
        
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-200 to-orange-200 rounded-3xl blur-xl opacity-50 animate-pulse"></div>
            <img 
              src={photos[currentPhotoIndex].src}
              alt="Beautiful memories with Pearlie"
              className="relative w-80 h-80 object-cover rounded-3xl mx-auto shadow-2xl border-4 border-white animate-scale-in transform hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute -top-6 -right-6 text-4xl animate-bounce">🌟</div>
            <div className="absolute -bottom-6 -left-6 text-4xl animate-bounce" style={{animationDelay: '0.5s'}}>✨</div>
            <div className="absolute top-1/2 -left-12 text-3xl animate-pulse">💖</div>
            <div className="absolute top-1/2 -right-12 text-3xl animate-pulse" style={{animationDelay: '1s'}}>💝</div>
          </div>
          
          <div className="mb-8">
            <p className="text-2xl font-serif text-pink-800 mb-6 animate-fade-in leading-relaxed px-4 py-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-pink-100">
              "{photos[currentPhotoIndex].message}"
            </p>
            
            <div className="flex justify-center gap-2 mb-6">
              {photos.map((_, index) => (
                <div 
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-500 ${
                    index === currentPhotoIndex 
                      ? 'bg-pink-500 scale-125 shadow-lg' 
                      : 'bg-pink-200 hover:bg-pink-300'
                  }`}
                />
              ))}
            </div>
            
            <div className="text-sm text-pink-600 mb-4 italic">
              Photo {currentPhotoIndex + 1} of {photos.length}
            </div>
          </div>

          <button 
            onClick={handleNext}
            className="bg-gradient-to-r from-pink-400 via-rose-400 to-orange-300 text-white px-10 py-4 rounded-full font-semibold hover:from-pink-500 hover:via-rose-500 hover:to-orange-400 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105"
          >
            Continue Reading 💕
          </button>
        </div>
      </div>
    );
  }

  if (currentSection === 2) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50 flex items-center justify-center p-8 relative">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 text-3xl animate-bounce">🎀</div>
          <div className="absolute top-40 right-20 text-4xl animate-pulse">💐</div>
          <div className="absolute bottom-40 left-20 text-3xl animate-bounce" style={{animationDelay: '1s'}}>🌸</div>
          <div className="absolute bottom-20 right-40 text-4xl animate-pulse" style={{animationDelay: '2s'}}>🦋</div>
          <div className="absolute top-60 left-1/3 text-2xl animate-bounce" style={{animationDelay: '1.5s'}}>✨</div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-12">
            <h2 className="text-5xl font-serif text-pink-700 mb-8 flex items-center justify-center gap-4">
              <Sparkles className="text-pink-400 animate-pulse" size={52} />
              A Message From My Heart
              <Sparkles className="text-pink-400 animate-pulse" size={52} />
            </h2>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border-2 border-pink-100 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-4xl">💕</div>
              <div className="absolute -top-2 -left-2 text-3xl animate-spin-slow">🌟</div>
              <div className="absolute -top-2 -right-2 text-3xl animate-bounce">✨</div>
              
              <p className="text-2xl font-serif text-pink-800 leading-relaxed mb-6">
                "Dearest Pearlie,
              </p>
              <p className="text-2xl font-serif text-pink-800 leading-relaxed mb-6">
                Thank you for being the most incredible friend anyone could ask for. 
                You've been my constant source of joy, my shoulder to lean on, and 
                the brightest light in so many of my days.
              </p>
              <p className="text-2xl font-serif text-pink-800 leading-relaxed mb-6">
                Your kindness knows no bounds, your laughter is contagious, and your 
                heart is pure gold. I am so grateful that life brought us together.
              </p>
              <p className="text-2xl font-serif text-pink-800 leading-relaxed mb-8">
                This little website is just a tiny way to show you how much you mean to me. 
                You deserve all the love and appreciation in the world."
              </p>
              <div className="text-pink-600 font-semibold text-xl flex items-center justify-center gap-2">
                <Heart className="text-pink-500" size={24} />
                Forever your friend, Edwin
                <Heart className="text-pink-500" size={24} />
              </div>
            </div>
          </div>

          <button 
            onClick={handleNext}
            className="bg-gradient-to-r from-pink-400 via-rose-400 to-orange-300 text-white px-10 py-4 rounded-full font-semibold hover:from-pink-500 hover:via-rose-500 hover:to-orange-400 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105"
          >
            See Your Special Stats 📊✨
          </button>
        </div>
      </div>
    );
  }

  if (currentSection === 3) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50 flex items-center justify-center p-8 relative">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 text-4xl animate-bounce">🏆</div>
          <div className="absolute top-20 right-10 text-3xl animate-pulse">⭐</div>
          <div className="absolute bottom-20 left-10 text-4xl animate-bounce" style={{animationDelay: '1s'}}>🎉</div>
          <div className="absolute bottom-10 right-20 text-3xl animate-pulse" style={{animationDelay: '2s'}}>💎</div>
        </div>
        
        <div className="max-w-2xl mx-auto relative z-10">
          <h2 className="text-5xl font-bold text-pink-700 mb-8 text-center flex items-center justify-center gap-4">
            🍦 Pearlie's Friendship Analytics 🍨
          </h2>
          
          <Card className="bg-white/95 backdrop-blur-sm border-2 border-pink-200 shadow-2xl">
            <CardContent className="p-10">
              <div className="space-y-8">
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl">
                  <span className="text-2xl font-semibold text-pink-800 flex items-center gap-2">
                    <Heart className="text-pink-600" size={24} />
                    Loyalty Level:
                  </span>
                  <span className="text-3xl font-bold text-pink-600">INFINITE/10 🍦</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-rose-50 to-orange-50 rounded-xl">
                  <span className="text-2xl font-semibold text-pink-800 flex items-center gap-2">
                    <Sparkles className="text-pink-600" size={24} />
                    Support Power:
                  </span>
                  <span className="text-3xl font-bold text-pink-600">10/10 🍨</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl">
                  <span className="text-2xl font-semibold text-pink-800 flex items-center gap-2">
                    <IceCream className="text-pink-600" size={24} />
                    Sweetness Factor:
                  </span>
                  <span className="text-3xl font-bold text-pink-600">MAXIMUM 🧁</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-rose-50 to-orange-50 rounded-xl">
                  <span className="text-2xl font-semibold text-pink-800">
                    Real Friend Status:
                  </span>
                  <span className="text-3xl font-bold text-pink-600">CERTIFIED ✅</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl">
                  <span className="text-2xl font-semibold text-pink-800">
                    Special Place in Heart:
                  </span>
                  <span className="text-3xl font-bold text-pink-600">PERMANENT 💖</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-8">
            <button 
              onClick={handleNext}
              className="bg-gradient-to-r from-pink-400 via-rose-400 to-orange-300 text-white px-10 py-4 rounded-full font-semibold hover:from-pink-500 hover:via-rose-500 hover:to-orange-400 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105"
            >
              See The Ultimate Ranking 🏆
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (currentSection === 4) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50 flex items-center justify-center p-8 relative">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 text-6xl animate-bounce">👑</div>
          <div className="absolute top-20 right-10 text-4xl animate-pulse">🎊</div>
          <div className="absolute bottom-20 left-10 text-5xl animate-bounce" style={{animationDelay: '1s'}}>🌟</div>
          <div className="absolute bottom-10 right-20 text-4xl animate-pulse" style={{animationDelay: '2s'}}>💫</div>
          <div className="absolute top-1/2 left-10 text-3xl animate-spin-slow">✨</div>
          <div className="absolute top-1/3 right-10 text-3xl animate-bounce" style={{animationDelay: '1.5s'}}>🎉</div>
        </div>
        
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <h2 className="text-5xl font-bold text-pink-700 mb-12 flex items-center justify-center gap-4">
            🏆 The Ultimate Friend Leaderboard 🏆
          </h2>
          
          <Card className="bg-white/95 backdrop-blur-sm border-2 border-pink-200 shadow-2xl mb-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-400 via-rose-400 to-orange-300"></div>
            <CardContent className="p-12">
              <div className="text-center">
                <div className="text-8xl mb-6 animate-bounce">👑</div>
                <div className="text-4xl font-bold text-pink-700 mb-4">
                  #1 PEARLIE
                </div>
                <div className="text-2xl text-pink-600 mb-6 font-serif italic">
                  "The Ultimate Best Friend"
                </div>
                <div className="bg-gradient-to-r from-pink-200 via-rose-200 to-orange-200 rounded-2xl p-6 mb-6 border-2 border-pink-300">
                  <span className="text-3xl font-bold text-pink-800 block mb-2">
                    🍦 LEGENDARY STATUS ACHIEVED 🍦
                  </span>
                  <span className="text-lg text-pink-700">
                    Hall of Fame - First Ballot Entry
                  </span>
                </div>
                <div className="space-y-2 text-pink-700 text-xl">
                  <p className="font-bold">🥇 Winner of: Best Friend Ever</p>
                  <p className="font-bold">🏆 Champion of: Unconditional Support</p>
                  <p className="font-bold">👑 Queen of: Making Everything Better</p>
                </div>
                <div className="mt-8 p-4 bg-pink-50 rounded-xl border border-pink-200">
                  <p className="text-2xl font-bold text-pink-800">
                    Nobody else even comes close! 💖
                  </p>
                  <p className="text-lg text-pink-600 mt-2">
                    The competition ended before it started
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <button 
            onClick={handleNext}
            className="bg-gradient-to-r from-pink-400 via-rose-400 to-orange-300 text-white px-10 py-4 rounded-full font-semibold hover:from-pink-500 hover:via-rose-500 hover:to-orange-400 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105"
          >
            One Final Sweet Message 💕
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50 flex items-center justify-center p-8 relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 text-4xl animate-bounce">🍦</div>
        <div className="absolute top-20 right-20 text-5xl animate-pulse">🍨</div>
        <div className="absolute bottom-20 left-20 text-4xl animate-bounce" style={{animationDelay: '1s'}}>🧁</div>
        <div className="absolute bottom-10 right-10 text-6xl animate-pulse" style={{animationDelay: '2s'}}>🍰</div>
        <div className="absolute top-1/2 left-20 text-3xl animate-spin-slow">✨</div>
        <div className="absolute top-1/3 right-20 text-4xl animate-bounce" style={{animationDelay: '1.5s'}}>💫</div>
        <div className="absolute bottom-1/3 left-1/4 text-3xl animate-pulse" style={{animationDelay: '3s'}}>🌟</div>
      </div>
      
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <div className="mb-12">
          <div className="text-7xl mb-8 animate-bounce">💕</div>
          <h2 className="text-4xl font-serif text-pink-700 mb-8">Just wanted you to know...</h2>
        </div>
        
        <Card className="bg-white/95 backdrop-blur-sm border-2 border-pink-200 shadow-2xl">
          <CardContent className="p-12">
            <p className="text-2xl font-serif text-pink-800 leading-relaxed mb-8">
              This entire website was coded with love, just for you, Pearlie. 
              Every animation, every color, every word - all chosen to make you smile 
              the way you've made me smile countless times.
            </p>
            <p className="text-2xl font-serif text-pink-800 leading-relaxed mb-8">
              You're as sweet as your favorite ice cream, and twice as special. 🍦
            </p>
            <div className="flex justify-center items-center gap-6 text-5xl mb-8">
              <IceCream className="text-pink-400 animate-pulse" size={60} />
              <Heart className="text-pink-500 animate-pulse" size={60} />
              <span className="text-pink-500 animate-bounce">🍨</span>
              <Sparkles className="text-pink-400 animate-pulse" size={60} />
            </div>
            <div className="text-2xl text-pink-600 font-bold">
              Made with endless love by your friend Edwin 💖
            </div>
            <div className="mt-6 text-lg text-pink-500 italic">
              (I hope this made you cry happy tears! 🥺💕)
            </div>
          </CardContent>
        </Card>
        
        <button 
          onClick={() => setCurrentSection(0)}
          className="mt-8 bg-gradient-to-r from-pink-400 via-rose-400 to-orange-300 text-white px-10 py-4 rounded-full font-semibold hover:from-pink-500 hover:via-rose-500 hover:to-orange-400 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105"
        >
          Experience This Beautiful Journey Again 🔄✨
        </button>
      </div>
    </div>
  );
};

export default Index;
