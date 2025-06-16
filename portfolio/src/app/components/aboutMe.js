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
      <section className="section bg-card-background text-card-foreground">
        <div className="container">
          {/* Section Header */}
          <div className="flex items-center mb-12 md:mb-16">
            <span className="text-green-500 font-mono text-lg md:text-xl mr-4">01.</span>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mr-4 md:mr-8">About Me</h2>
            <div className="flex-1 h-px bg-green-500"></div>
          </div>
  
          {/* Content Grid */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-start">
            {/* Text Content - Takes up 2 columns */}
            <div className="md:col-span-2 space-y-4 md:space-y-6">
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Hi, I&apos;m Rachit—a passionate engineer dedicated to transforming data into powerful, production-ready AI systems that solve real-world challenges. My journey began with developing a zero-day attack detection system, an experience that ignited my fascination with machine learning's potential to tackle complex problems. This initial spark led me to build a search platform powered by large language models and implement neural collaborative filtering networks for personalized recommendations, deepening my expertise in integrating cutting-edge technologies into scalable solutions.
              </p>
  
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                Fast-forward to today, and I&apos;ve had the privilege of working at
                {' '}a <span className="text-green-500">data native company</span>, and 
                {' '}a <span className="text-green-500">consulting firm</span>. 
                Currently, I focus on model development, ML optimization, and interpretability while creating scalable backend services that transform innovative AI concepts into reliable, high-impact products. As an incoming Master's student at George Washington University, I'm excited to deepen my expertise and continue pushing the boundaries of what's possible with machine learning.
              </p>

              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                Here are a few technologies I&apos;ve been working with recently:
              </p>
  
              {/* Technologies Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 mt-6">
                <div className="space-y-2">
                  {leftTech.map((tech, index) => (
                    <div key={index} className="flex items-center">
                      <span className="text-green-500 mr-3">▶</span>
                      <span className="text-foreground font-mono text-sm md:text-base">{tech.name}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  {rightTech.map((tech, index) => (
                    <div key={index} className="flex items-center">
                      <span className="text-green-500 mr-3">▶</span>
                      <span className="text-foreground font-mono text-sm md:text-base">{tech.name}</span>
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
              <div className="relative w-full aspect-square bg-hover-background rounded-lg overflow-hidden">
                <Image
                  src="/profile.jpeg"
                  alt="Image"
                  fill
                  sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
                  quality={85}
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