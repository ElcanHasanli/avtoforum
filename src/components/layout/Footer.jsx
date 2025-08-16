// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Car, Mail, Phone, MapPin, Facebook, Instagram,
  Youtube, Twitter, MessageSquare, Users, Wrench,
  Radio, Shield, Heart, ExternalLink, Send
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Platform',
      links: [
        { name: 'Forum', href: '/forum', icon: MessageSquare },
        { name: 'Klublar', href: '/clubs', icon: Users },
        { name: 'Ustalar', href: '/masters', icon: Wrench },
        { name: 'Canlı Efir', href: '/efir', icon: Radio }
      ]
    },
    {
      title: 'Şirkət',
      links: [
        { name: 'Haqqımızda', href: '/about' },
        { name: 'Komanda', href: '/team' },
        { name: 'Karyera', href: '/careers' },
        { name: 'Mətbuat', href: '/press' }
      ]
    },
    {
      title: 'Dəstək',
      links: [
        { name: 'Yardım Mərkəzi', href: '/help' },
        { name: 'Əlaqə', href: '/contact' },
        { name: 'API Sənədləri', href: '/api-docs' },
        { name: 'Buraxılış Qeydləri', href: '/changelog' }
      ]
    },
    {
      title: 'Hüquqi',
      links: [
        { name: 'Məxfilik Siyasəti', href: '/privacy' },
        { name: 'İstifadə Şərtləri', href: '/terms' },
        { name: 'Cookie Siyasəti', href: '/cookies' },
        { name: 'Lisenziyalar', href: '/licenses' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com/carclub.az', icon: Facebook, color: 'text-blue-600' },
    { name: 'Instagram', href: 'https://instagram.com/carclub.az', icon: Instagram, color: 'text-pink-600' },
    { name: 'YouTube', href: 'https://youtube.com/carclub.az', icon: Youtube, color: 'text-red-600' },
    { name: 'Twitter', href: 'https://twitter.com/carclub_az', icon: Twitter, color: 'text-blue-400' }
  ];

  const carBrands = [
    'Mercedes-Benz', 'BMW', 'Audi', 'Toyota', 'Honda', 'Nissan',
    'Hyundai', 'Kia', 'Volkswagen', 'Ford', 'Lada', 'GAZ'
  ];

  const stats = [
    { label: 'Aktiv İstifadəçi', value: '1,200+' },
    { label: 'Forum Postları', value: '3,400+' },
    { label: 'Həll Olunmuş Problem', value: '2,800+' },
    { label: 'Aylık Ziyarətçi', value: '15K+' }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 w-full">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        {/* <div className="py-12 border-b border-gray-800">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Azərbaycanda №1 Avtomobil İcması</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Minlərlə avtomobil həvəskarı bir arada. Problemlərinizi həll edin, təcrübə paylaşın və yeni dostlar tapın.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Newsletter Section */}
        <div className="py-12 border-b border-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Xəbər bülleteni</h3>
              <p className="text-gray-400 mb-6">
                Yeni avtomobil xəbərləri, texniki məqalələr və icma yeniliklərindən xəbərdar olun.
              </p>
            </div>

            <div>
              <form className="flex space-x-3">
                <div className="flex-1">
                  <input
                    type="email"
                    placeholder="E-mail ünvanınız"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Abunə ol
                </button>
              </form>
              <p className="text-xs text-gray-500 mt-2">
                İstədiyiniz vaxt abunəlikdən çıxa bilərsiniz.
              </p>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="py-12 border-b border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Car className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-xl font-bold text-white">Avto</span>
                  <span className="text-xl font-bold text-blue-400">Forum</span>
                </div>
              </Link>

              <p className="text-gray-400 mb-6 leading-relaxed">
                Azərbaycanda avtomobil sahəsində ən böyük və aktiv icma.
                Hər növ avtomobil probleminə peşəkar cavab tapın.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span className="text-sm">Bakı, Azərbaycan</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <span className="text-sm">+994 XX XXX XX XX</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span className="text-sm">info@avtoforum.az</span>
                </div>
              </div>
            </div>

            {/* Footer Sections */}
            {footerSections.map((section, index) => (
              <div key={index}>
                <h3 className="text-white font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        to={link.href}
                        className="text-gray-400 hover:text-white transition-colors flex items-center group"
                      >
                        {link.icon && (
                          <link.icon className="w-4 h-4 mr-2 text-gray-500 group-hover:text-blue-400" />
                        )}
                        {link.name}
                        {link.href.startsWith('http') && (
                          <ExternalLink className="w-3 h-3 ml-1 text-gray-500" />
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Car Brands Section */}
        {/* <div className="py-8 border-b border-gray-800">
          <h3 className="text-white font-semibold mb-4 text-center">Dəstəklənən Markalar</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {carBrands.map((brand, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-800 text-gray-400 rounded-full text-sm hover:bg-gray-700 hover:text-white transition-colors cursor-pointer"
              >
                {brand}
              </span>
            ))}
          </div>
        </div> */}

        {/* Bottom Section */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Bizi izləyin:</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors ${social.color} hover:scale-110 transform`}
                  title={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>© {currentYear} AvtoForum</span>
              <span>/</span>
              <span className="flex items-center">
                Powered by KhamsaCraft              </span>
              <span>/</span>
              <span>Bütün hüquqlar qorunur</span>
            </div>

            {/* Admin Link */}
            <div>
              <Link
                to="/admin"
                className="flex items-center text-xs text-gray-500 hover:text-gray-400 transition-colors"
              >
                <Shield className="w-3 h-3 mr-1" />
                Admin Panel
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <div className="fixed bottom-8 right-8 z-40">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110"
          title="Yuxarı qayıt"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;