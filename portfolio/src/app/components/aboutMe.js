import Image from 'next/image';

export default function AboutMe() {
    const technologies = [
      { name: 'Python', category: 'left' },
      { name: 'Pytorch', category: 'left' },
      { name: 'FastAPI', category: 'left' },
      { name: 'Docker', category: 'left' },
      { name: 'Node.js', category: 'left' },
      { name: 'Next.js', category: 'right' },
      { name: 'AWS', category: 'right' },
      { name: 'Java', category: 'right' },
      { name: 'Github Actions', category: 'right' },
      { name: 'Git', category: 'right' },
    ];
  
    const leftTech = technologies.filter(tech => tech.category === 'left');
    const rightTech = technologies.filter(tech => tech.category === 'right');
  
    return (
      <section className="section bg-black text-white">
        <div className="container">
          {/* Section Header */}
          <div className="flex items-center mb-12 md:mb-16">
            <span className="text-green-500 font-mono text-lg md:text-xl mr-4">01.</span>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mr-4 md:mr-8">About Me</h2>
            <div className="flex-1 h-px bg-green-500"></div>
          </div>
  
          {/* Content Grid */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-start">
            {/* Text Content - Takes up 2 columns */}
            <div className="md:col-span-2 space-y-4 md:space-y-6">
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              Hello! My name is Rachit, and I&apos;m passionate about turning data into powerful, adaptable, and production-ready AI systems. My journey started with building a zero-day attack detection system that&apos;s when I fell in love with the way machine learning can solve real-world problems. From there, I went on to develop a search platform powered by large language models and implemented neural collaborative filtering networks to enable personalized recommendations, further fueling my passion for integrating cutting-edge technologies into scalable services.
              </p>
  
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                Fast-forward to today, and I&apos;ve had the privilege of working at
                {' '}a <span className="text-green-500">data first company</span>, and 
                {' '}a <span className="text-green-500">consulting firm</span>. 
                My main focus these days is creating scalable backend services powered by machine learning, turning innovative ideas into reliable, high-impact products.
              </p>

              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                Here are a few technologies I&apos;ve been working with recently:
              </p>
  
              {/* Technologies Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 mt-6">
                <div className="space-y-2">
                  {leftTech.map((tech, index) => (
                    <div key={index} className="flex items-center">
                      <span className="text-green-500 mr-3">▶</span>
                      <span className="text-gray-200 font-mono text-sm md:text-base">{tech.name}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  {rightTech.map((tech, index) => (
                    <div key={index} className="flex items-center">
                      <span className="text-green-500 mr-3">▶</span>
                      <span className="text-gray-200 font-mono text-sm md:text-base">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
  
            {/* Image Section */}
            <div className="relative group mt-8 md:mt-0">
              {/* Border effect */}
              <div className="absolute -inset-1 border-2 border-green-500 rounded-lg"></div>
              
              {/* Image container */}
              <div className="relative w-full aspect-square bg-gray-800 rounded-lg overflow-hidden">
                {/* Green tinted overlay */}
                <div className="absolute inset-0 bg-green-500 opacity-10 rounded-lg group-hover:opacity-20 transition-opacity z-10"></div>
                
                <Image
                  src="/IMG_3355.jpg"
                  alt="Rachit Das"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}