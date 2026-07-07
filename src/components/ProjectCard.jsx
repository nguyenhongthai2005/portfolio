import React from 'react';

const ProjectCard = ({ project }) => {
  const { title, description, technologies, githubUrl, demoUrl, youtubeUrl, imageUrl, isCaseStudy, stats, codeSnippet } = project;

  return (
    <div className={`group border border-outline-variant/30 rounded-2xl overflow-hidden bg-surface flex flex-col ${isCaseStudy ? 'lg:flex-row' : ''} hover:shadow-md transition-all`}>
      <div className={`${isCaseStudy ? 'lg:w-1/2 p-lg space-y-md' : 'p-lg'}`}>
        {isCaseStudy && (
          <div className="flex items-center gap-xs text-primary font-label-sm uppercase tracking-wider mb-sm">
            <span className="material-symbols-outlined text-sm">rocket_launch</span> Case Study
          </div>
        )}
        
        {!isCaseStudy && (
          <div className="w-full h-48 bg-surface-container-low rounded-lg mb-md relative overflow-hidden">
            <img loading="lazy" src={imageUrl} alt={title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
        )}

        <h3 className={`${isCaseStudy ? 'font-headline-md text-headline-md' : 'font-headline-md text-headline-md mb-xs'} group-hover:text-primary transition-colors`}>{title}</h3>
        <p className={`text-secondary ${isCaseStudy ? 'font-body-md' : 'font-body-sm mb-md'}`}>{description}</p>
        
        {isCaseStudy && stats && (
          <div className="flex gap-lg py-sm">
            {stats.map((stat, idx) => (
              <div key={idx}>
                <div className="text-primary font-bold text-headline-md">{stat.value}</div>
                <div className="text-secondary text-label-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        )}

        {isCaseStudy && codeSnippet && (
          <div className="code-container text-xs my-sm">
            <pre><code>
              <span className="code-comment">{codeSnippet.split('\n')[0]}</span>
              {'\n'}
              <span className="code-keyword">{codeSnippet.split('\n')[1]}</span>
              {'\n'}
              {codeSnippet.split('\n').slice(2).join('\n')}
            </code></pre>
          </div>
        )}

        <div className={`flex gap-sm ${isCaseStudy ? 'pt-md' : 'justify-between items-center mt-auto'}`}>
          <div className="flex gap-xs flex-wrap">
            {technologies.map(tech => (
              <span key={tech} className="px-sm py-xs bg-surface-container text-secondary rounded text-label-sm">
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex gap-3">
             {githubUrl && !isCaseStudy && (
              <a href={githubUrl} className="text-primary flex items-center gap-xs font-label-md hover:underline">
                GitHub <span className="material-symbols-outlined text-[18px]">arrow_outward</span>
              </a>
            )}
            {demoUrl && (
               <a href={demoUrl} className="text-primary flex items-center gap-xs font-label-md hover:underline">
                 Live Demo <span className="material-symbols-outlined text-[18px]">open_in_new</span>
               </a>
            )}
            {youtubeUrl && (
               <a href={youtubeUrl} className="text-primary flex items-center gap-xs font-label-md hover:underline">
                 YouTube <span className="material-symbols-outlined text-[18px]">play_circle</span>
               </a>
            )}
          </div>
        </div>
      </div>

      {isCaseStudy && (
        <div className="lg:w-1/2 min-h-[300px] bg-surface-container-high relative overflow-hidden">
          <img loading="lazy" src={imageUrl} alt={title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
