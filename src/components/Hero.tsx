import React from 'react';
import { ArrowRight, Globe, Users, Target } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative bg-gradient-to-br from-blue-50 to-green-50 py-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-400 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo principal */}
          <div className="flex justify-center mb-8">
            <img 
              src="/src/assets/logo-ducle.png" 
              alt="ArribasComUnica Logo" 
              className="w-24 h-24 object-contain"
            />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Transforma tu voz,
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600"> transforma tu vida</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Para empresas y directivos que buscan destacar en un mundo multicultural y multicanal
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={() => scrollToSection('servicios')}
              className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              Descubre nuestros servicios
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <button 
              onClick={() => scrollToSection('contacto')}
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Contactar ahora
            </button>
          </div>
          
          {/* Key features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Globe className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Alcance Internacional</h3>
              <p className="text-gray-600">España, Portugal y México con equipo multiidioma</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Equipo Experto</h3>
              <p className="text-gray-600">14 profesionales especializados en comunicación</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Estrategia Integral</h3>
              <p className="text-gray-600">Enfoque 360° en tecnología, equipo y comunicación</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;