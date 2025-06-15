"use client"

import React, { useState } from 'react';

const Experience = () => {
  const [selectedCompany, setSelectedCompany] = useState('SolvusAI');

  const companies = {
    'SolvusAI': {
      role: 'AI/ML Engineer',
      period: 'October 2024 - April 2025',
      responsibilities: [
        'Engineered a custom agent framework for information retrieval, reducing processing time by 40%',
        'Developed preprocessing and OCR techniques to extract biomarkers from medical reports, improving analysis accuracy by 30%',
        'Developed a Machine learning based caching system using ANNOY that saved LLM costs by 20%.',
        'Designed and developed a custom LLM evaluation framework using first-principles Linear Algebra, significantly enhancing user trust in model outputs.',
        'Engineered a chunking strategy for sentiment analysis using BERT to incorporate long document analysis.',
        'Developed a search system using redis-stack facilitating < 100ms outputs.',
        'Engineered a deployment pipeline using Docker and Github actions to deploy LLM based products cutting down deployment time by 50%.',
        'Enhanced the accuracy of correcting medicine names from prescriptions by 20% through the implementation of a custom fuzzy matching algorithm.'
      ]
    },
    'Xfusion Technologies': {
      role: 'Product Engineer Intern',
      period: 'April 2024 - July 2024',
      responsibilities: [
        'Streamlined the existing ML pipeline by creating a universal module for time series forecasting using PyCaret and Statsmodels.',
        'Improved the model evaluation process by incorporating the permutation importance metric into the existing workflow.'
      ]
    },
    'Open Source Contributor':{
        role:'Open Source Contributor',
        period:'Lifetime',
        responsibilities:[
            'Built an OpenAPI parser for the DocsGPT organization that parses yaml files to convert API data into prompts for large language models.',
            'Engineered 4 web crawlers as part of the AllThePlaces project that scrape data from the web and organize that data that is used by businesses all over the world.'
        ]
    }
  };

  return (
    <div className="bg-black text-white min-h-screen px-8">
      <div className="max-w-6xl mx-auto">
      <div className="flex items-center mb-16">
            <span className="text-green-500 font-mono text-xl mr-4">02.</span>
            <h2 className="text-4xl font-semibold text-white mr-8">Experience</h2>
            <div className="flex-1 h-px bg-green-500"></div>
        </div>
        
        <div className="flex gap-8">
          {/* Left sidebar - Company list */}
          <div className="flex flex-col min-w-[200px]">
            {Object.keys(companies).map((company) => (
              <button
                key={company}
                onClick={() => setSelectedCompany(company)}
                className={`text-left px-6 py-4 font-mono text-sm transition-all duration-200 border-l-2 ${
                  selectedCompany === company
                    ? 'border-green-500 bg-green-500/10 text-green-500'
                    : 'border-gray-600 text-gray-400 hover:border-green-500/50 hover:bg-green-500/5 hover:text-green-500'
                }`}
              >
                {company}
              </button>
            ))}
          </div>

          {/* Right side - Job details */}
          <div className="flex-1 pl-8">
            <div className="mb-6">
            <h3 className="text-2xl font-light mb-2">
                {companies[selectedCompany].role}{' '}
                <span className="text-green-500">
                    {/* Only show "@ ..." if the company IS NOT the fallback or is not empty */}
                    {selectedCompany !== 'Open Source Contributor' && (
                    <>@ {selectedCompany}</>
                    )}

                </span>
                </h3>
              <p className="text-gray-400 font-mono text-sm">
                {companies[selectedCompany].period}
              </p>
            </div>

            <div className="space-y-4">
              {companies[selectedCompany].responsibilities.map((responsibility, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="text-green-500 mt-2 text-sm">▶</div>
                  <p className="text-gray-300 leading-relaxed">
                    {responsibility}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;