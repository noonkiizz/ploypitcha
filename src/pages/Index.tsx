import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Calendar, User, Download, ExternalLink, Trophy, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import ThemeToggle from '@/components/ThemeToggle';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'certificates', 'experience', 'awards', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const awardsData = {
    2024: [
      "🎨 HACKCULTURE 2023: Illuminate Thai Fashion",
      "📰 Digital Cultural Heritage Press Event, 20 Feb 2024",
      "🥇 1st Place, NocNoc Hackathon 2024 (AI/Data AI Challenge)",
      "🥇 1st Place, BITKUB BLOCKATHON 2024",
      "🥈 2nd Prize, Viction Horizon Startup Hackathon (Ho Chi Minh)",
      "🏆 Winner Prize, Health & Innovation Asia Hackathon 2024"
    ],
    2023: [
      "🌱 HACK FOR GOOD: Well‑Being Creation (Chiang Mai)",
      "🥇 Thailand Winner, HAPATHON 2023 (Web 3.0 Global Startup)",
      "🚀 AXELA ONLINE HACKATHON 2023",
      "🥈 2nd Runner‑Up, Bangkok Blockathon (SCB 10X)",
      "🥇 1st Place, MAKATHON 2023",
      "🌐 Thailand Rep., APEC App Challenge 2023 (Seattle)"
    ],
    2018: [
      "🥇 Excellent SMEs Startup Awards 2018 (National)"
    ],
    2017: [
      "🏆 Best Hacker & Team's Choice, Asia Open Data Hackathon",
      "🏅 Innovative FinTech Award, FinTech Challenge",
      "🚀 Accelerated by SCB Digital Ventures (PetInsure Thailand)",
      "🏆 SAMART Innovative Award (Young Technopreneur)",
      "🎤 Guest Speaker, Government‑Supported Startup & Hackathon Events",
      "🥇 Standard SMEs Startup Awards (National)",
      "🥇 1st Winner, Young Technopreneur 2017",
      "🥈 SMEs Startup Awards 2017 (National)",
      "🏆 Best Hackers, Intl. Data Economy Summit, Taipei"
    ],
    2016: [
      "🏆 Winner, Thailand Grand Hackathon 2016 (Startup Thailand)",
      "🥈 Runner‑Up, LAMBDA HACKATHON #1",
      "🏆 Winner & Thailand Rep., AngelHack Bangkok 2016",
      "🥈 Runner‑Up, SEA Makerthon 2016",
      "🎖 Women Entrepreneur Thailand",
      "🌍 OH! MY JEJU HACKATHON, Jeju, South Korea"
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F7FA] to-[#E3E8F0] dark:from-gray-900 dark:to-gray-800 font-inter transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-glass bg-white/20 dark:bg-gray-900/20 border-b border-white/20 dark:border-gray-700/20">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-poppins font-bold text-gray-800 dark:text-white">Ploypitcha Boontavipitak</h1>
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex space-x-6">
                {['About', 'Education', 'Certificates', 'Experience', 'Awards', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`font-medium transition-colors ${
                      activeSection === item.toLowerCase()
                        ? 'text-lavender'
                        : 'text-gray-600 dark:text-gray-300 hover:text-lavender'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Main Content */}
            <div className="backdrop-blur-glass bg-white/30 dark:bg-gray-800/30 rounded-3xl p-12 border border-white/40 dark:border-gray-700/40 shadow-xl animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-poppins font-bold text-gray-800 dark:text-white mb-6">
                Smart Female Entrepreneur
              </h1>
              <h2 className="text-xl md:text-2xl font-poppins font-medium text-gray-700 dark:text-gray-200 mb-8">
                & Innovation Marketer
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
                Passionate about driving innovation through strategic marketing and entrepreneurial ventures
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-lavender hover:bg-lavender/90 text-white font-medium px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:backdrop-brightness-125"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => scrollToSection('contact')}
                  className="border-teal text-teal hover:bg-teal hover:text-white font-medium px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                >
                  Contact Me
                </Button>
              </div>
            </div>

            {/* Profile Photo */}
            <div className="backdrop-blur-glass bg-white/30 dark:bg-gray-800/30 rounded-3xl p-12 border border-white/40 dark:border-gray-700/40 shadow-xl animate-fade-in flex items-center justify-center">
              <div className="text-center w-full">
                <div className="relative group">
                  <img
                    src="/placeholder.svg"
                    alt="Ploypitcha Boontavipitak - Professional Profile Photo"
                    className="w-80 h-80 mx-auto rounded-2xl shadow-lg transition-all duration-300 group-hover:scale-105 object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-6 italic">
                  Professional entrepreneur and innovation marketer
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-poppins font-bold text-center text-gray-800 dark:text-white mb-16">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="backdrop-blur-glass bg-white/30 dark:bg-gray-800/30 border-white/40 dark:border-gray-700/40 p-8 animate-fade-in">
              <h3 className="text-xl font-poppins font-semibold mb-6 text-gray-800 dark:text-white">Personal Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-lavender" />
                  <span className="text-gray-700 dark:text-gray-300">ploypitcha.b@hotmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-lavender" />
                  <span className="text-gray-700 dark:text-gray-300">+66 9 2365 6564</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-lavender" />
                  <span className="text-gray-700 dark:text-gray-300">423/49 The City Ekkamai-Ladprao, Bangkok</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-lavender" />
                  <span className="text-gray-700 dark:text-gray-300">29 June 1989</span>
                </div>
                <div className="flex items-center space-x-3">
                  <User className="h-5 w-5 text-lavender" />
                  <span className="text-gray-700 dark:text-gray-300">Thai Nationality</span>
                </div>
              </div>
            </Card>
            <Card className="backdrop-blur-glass bg-white/30 dark:bg-gray-800/30 border-white/40 dark:border-gray-700/40 p-8 animate-fade-in">
              <h3 className="text-xl font-poppins font-semibold mb-6 text-gray-800 dark:text-white">Objective</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                To contribute my enthusiasm and skills in a challenging career environment, leveraging my expertise 
                in innovation marketing, entrepreneurship, and strategic business development to drive meaningful 
                growth and create lasting impact in the technology and business landscape.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-poppins font-bold text-center text-gray-800 dark:text-white mb-16">Education</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="backdrop-blur-glass bg-white/30 dark:bg-gray-800/30 border-white/40 dark:border-gray-700/40 p-8 animate-fade-in">
              <div className="text-center">
                <h3 className="text-xl font-poppins font-semibold text-gray-800 dark:text-white mb-2">MBA</h3>
                <p className="text-lavender font-medium mb-2">Assumption University</p>
                <p className="text-gray-600 dark:text-gray-300">2012 – 2013</p>
              </div>
            </Card>
            <Card className="backdrop-blur-glass bg-white/30 dark:bg-gray-800/30 border-white/40 dark:border-gray-700/40 p-8 animate-fade-in">
              <div className="text-center">
                <h3 className="text-xl font-poppins font-semibold text-gray-800 dark:text-white mb-2">BBA (Marketing, IMC)</h3>
                <p className="text-lavender font-medium mb-2">Assumption University</p>
                <p className="text-gray-600 dark:text-gray-300">2007 – 2011</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-poppins font-bold text-center text-gray-800 dark:text-white mb-16">Certificates</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Critical Thinking Business", provider: "Chula MOOC", date: "Jan 2020" },
              { title: "Fundamentals of Digital Marketing", provider: "Google", date: "Jan 2020" },
              { title: "Digital Skills: Digital Marketing", provider: "Accenture", date: "Oct 2018" },
              { title: "Digital Skills: Social Media", provider: "Accenture", date: "Oct 2018" }
            ].map((cert, index) => (
              <Card key={index} className="backdrop-blur-glass bg-white/30 dark:bg-gray-800/30 border-white/40 dark:border-gray-700/40 p-6 text-center animate-fade-in">
                <h3 className="font-poppins font-semibold text-gray-800 dark:text-white mb-2">{cert.title}</h3>
                <p className="text-lavender font-medium mb-2">{cert.provider}</p>
                <p className="text-gray-600 text-sm mb-4">{cert.date}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-poppins font-bold text-center text-gray-800 dark:text-white mb-16">Professional Experience</h2>
          <div className="space-y-8">
            {[
              {
                title: "CMO & Co-Founder",
                company: "Dong Sung Ki Innovation",
                period: "Jul 2016 – Present",
                highlights: [
                  "Led strategic marketing initiatives for AI and blockchain solutions",
                  "Developed Web3 innovation platforms and digital transformation strategies",
                  "Built strategic partnerships with technology companies and startups",
                  "Managed cross-functional teams to deliver cutting-edge solutions"
                ]
              },
              {
                title: "Founder",
                company: "PetInsure Thailand",
                period: "Jul 2016 – Present",
                highlights: [
                  "Launched Thailand's first comprehensive online pet insurance platform",
                  "Developed digital insurance technology and customer acquisition strategies",
                  "Established market leadership in the pet insurance sector",
                  "Built partnerships with veterinary clinics and pet care providers"
                ]
              },
              {
                title: "Consultant (FMCG)",
                company: "Robert Walters",
                period: "Jan 2016 – Jul 2016",
                highlights: [
                  "Provided strategic FMCG consulting for multinational clients",
                  "Conducted market analysis and consumer behavior insights",
                  "Supported client relationship management and business development",
                  "Delivered recommendations for market entry and expansion strategies"
                ]
              },
              {
                title: "Assistant Brand Manager",
                company: "Henkel",
                period: "Aug 2014 – Dec 2015",
                highlights: [
                  "Managed FMCG brands including Schwarzkopf and Persil in Thai market",
                  "Developed brand strategy and campaign management for consumer products",
                  "Conducted market research and competitive analysis",
                  "Collaborated with sales teams to optimize distribution strategies"
                ]
              },
              {
                title: "Marketing Executive",
                company: "Luxasia",
                period: "Jun 2013 – Jul 2014",
                highlights: [
                  "Managed luxury beauty brands in premium market segments",
                  "Executed brand positioning strategies for international brands",
                  "Developed retail partnerships and in-store marketing activations",
                  "Analyzed market trends and consumer insights to drive brand growth"
                ]
              },
              {
                title: "Trade Activation Coordinator",
                company: "L'Oréal",
                period: "Jan 2013 – Jun 2013",
                highlights: [
                  "Coordinated trade marketing activities for beauty brands",
                  "Managed retail partnerships and promotional campaigns",
                  "Executed product launch strategies and market activations",
                  "Supported sales teams with marketing materials and trade support"
                ]
              }
            ].map((job, index) => (
              <Card key={index} className="backdrop-blur-glass bg-white/30 dark:bg-gray-800/30 border-white/40 dark:border-gray-700/40 p-8 animate-fade-in">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-poppins font-semibold text-gray-800 dark:text-white">{job.title}</h3>
                    <p className="text-lavender font-medium">{job.company}</p>
                  </div>
                  <span className="text-gray-600 font-medium">{job.period}</span>
                </div>
                <ul className="space-y-2">
                  {job.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-gray-700 flex items-start">
                      <span className="text-teal mr-2">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-poppins font-bold text-center text-gray-800 dark:text-white mb-16">Awards & Hackathons</h2>
          <div className="space-y-12">
            {Object.entries(awardsData)
              .sort(([yearA], [yearB]) => parseInt(yearB) - parseInt(yearA))
              .map(([year, awards]) => (
                <Card key={year} className="backdrop-blur-glass bg-white/30 dark:bg-gray-800/30 border-white/40 dark:border-gray-700/40 p-8 animate-fade-in">
                  <div className="flex items-center gap-3 mb-6">
                    <Trophy className="h-8 w-8 text-lavender" />
                    <h3 className="text-3xl font-poppins font-bold text-gray-800 dark:text-white">{year}</h3>
                  </div>
                  <div className="space-y-3">
                    {awards.map((award, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Award className="h-5 w-5 text-teal mt-1 flex-shrink-0" />
                        <span className="text-gray-700 leading-relaxed">{award}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-poppins font-bold text-center text-gray-800 dark:text-white mb-16">Contact</h2>
          <Card className="backdrop-blur-glass bg-white/30 dark:bg-gray-800/30 border-white/40 dark:border-gray-700/40 p-8 animate-fade-in">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="backdrop-blur-sm bg-white/50 border-white/60"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    className="backdrop-blur-sm bg-white/50 border-white/60"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  rows={5}
                  className="backdrop-blur-sm bg-white/50 border-white/60"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-lavender to-teal hover:from-lavender/90 hover:to-teal/90 text-white font-medium py-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/20 dark:border-gray-700/20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © 2024 Ploypitcha Boontavipitak. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="mailto:ploypitcha.b@hotmail.com" className="text-lavender hover:text-lavender/80 transition-colors">
              <Mail className="h-6 w-6" />
            </a>
            <a href="#" className="text-lavender hover:text-lavender/80 transition-colors">
              <ExternalLink className="h-6 w-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
