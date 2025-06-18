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
              Hi, I&apos;m Rachit, <span className='text-green-500'>3x national hackathon winner</span>, <span className='text-green-500'>5x finalist</span>  and an incoming <span className='text-green-500'>CS graduate student</span> at <span className='text-green-500'>The George Washington University</span>. I've developed machine learning based zero day attack systems with a research paper supporting it. Working on a recommendation system using small language models and clustering algorithms and training GAN's.
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