export default function Certifications() {
    return (
      <div className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
        <div className="relative group/spotlight">
          <div
            className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
            style={{
              background:
                "radial-gradient(600px at 325px 535px, rgba(29, 78, 216, 0.15), transparent 80%)",
            }}
          ></div>
  
          <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
            {/* Skip to Content Button */}
            <a
              href="#content"
              className="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold 
              uppercase tracking-widest text-white focus-visible:translate-x-0"
            >
              Skip to Content
            </a>
  
            <div className="lg:py-24">
              {/* Back Link */}
              <a
                className="group mb-2 inline-flex items-center font-semibold leading-tight text-teal-300"
                href="/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  />
                </svg>
                Liann Finlayson
              </a>
  
              {/* Page Title */}
              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                Courses and Certifications
              </h1>
  
              {/* Table */}
              <table id="content" className="mt-12 w-full border-collapse text-left">
                <thead className="sticky top-0 z-10 border-b border-slate-300/10 bg-slate-900/75 px-6 py-5 backdrop-blur">
                  <tr>
                    <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Year</th>
                    <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Certification</th>
                    <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">Modules</th>
                    <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">Institution</th>
                    <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">Certificate</th>
                  </tr>
                </thead>

                <tbody>
                <tr className="border-b border-slate-300/10 last:border-none">
                    <td className="py-4 pr-4 align-top text-sm">
                      <div className="translate-y-px">2025</div>
                    </td>
                    <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                      <div>Google IT Automation with Python</div>
                    </td>
                    <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200 text-sm">
                    
                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-5 w-5 bg-green-500 rounded-full p-1">
                    <path fillRule="evenodd" d="M4.5 12.75l6 6 9-12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Crash Course on Python
                    </div>

                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-5 w-5 bg-yellow-500 rounded-full p-1">
                    <path fillRule="evenodd" d="M4.5 12.75l6 6 9-12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Using Python to Interact with the Operating System
                    </div>

                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-5 w-5 bg-gray-500 rounded-full p-1">
                    <path fillRule="evenodd" d="M4.5 12.75l6 6 9-12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Introduction to Git and GitHub
                    </div>

                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-5 w-5 bg-gray-500 rounded-full p-1">
                    <path fillRule="evenodd" d="M4.5 12.75l6 6 9-12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Troubleshooting and Debugging Techniques
                    </div>

                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-5 w-5 bg-gray-500 rounded-full p-1">
                    <path fillRule="evenodd" d="M4.5 12.75l6 6 9-12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Configuration Management and the Cloud
                    </div>

                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-5 w-5 bg-gray-500 rounded-full p-1">
                    <path fillRule="evenodd" d="M4.5 12.75l6 6 9-12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Automating Real-World Tasks with Python
                    </div>
                    </td>
                    
                    <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
                        <ul className="space-y-1">
                        <li className="my-1 mr-1.5">
                                <div className="inline-block rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Google</div>
                            </li>
                        </ul>
                    </td>


                    <td className="hidden py-4 pr-4 align-top text-sm sm:table-cell">
                    <a href="/google_python_certification.pdf" rel="noreferrer noopener" target="_blank" className="text-teal-300 hover:underline">
                        View certificate
                      </a>
                    </td>
                  </tr> 
                
                
                <tr className="border-b border-slate-300/10 last:border-none">
                    <td className="py-4 pr-4 align-top text-sm">
                      <div className="translate-y-px">2025</div>
                    </td>
                    <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                      <div>CS50's Introduction to Computer Science</div>
                    </td>

                    <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200 text-sm">
                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-5 w-5 bg-green-500 rounded-full p-1">
                    <path fillRule="evenodd" d="M4.5 12.75l6 6 9-12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Scratch
                    </div>

                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-5 w-5 bg-green-500 rounded-full p-1">
                    <path fillRule="evenodd" d="M4.5 12.75l6 6 9-12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    C
                    </div>
                    
                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-5 w-5 bg-green-500 rounded-full p-1">
                    <path fillRule="evenodd" d="M4.5 12.75l6 6 9-12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Arrays
                    </div>
                    
                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-5 w-5 bg-green-500 rounded-full p-1">
                    <path fillRule="evenodd" d="M4.5 12.75l6 6 9-12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Algorithms
                    </div>
                   
                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-5 w-5 bg-green-500 rounded-full p-1">
                    <path fillRule="evenodd" d="M4.5 12.75l6 6 9-12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Memory
                    </div>

                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-5 w-5 bg-green-500 rounded-full p-1">
                    <path fillRule="evenodd" d="M4.5 12.75l6 6 9-12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Data Structures
                    </div>

                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-5 w-5 bg-green-500 rounded-full p-1">
                    <path fillRule="evenodd" d="M4.5 12.75l6 6 9-12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Python
                    </div>

                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-5 w-5 bg-green-500 rounded-full p-1">
                    <path fillRule="evenodd" d="M4.5 12.75l6 6 9-12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    SQL
                    </div>

                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-5 w-5 bg-green-500 rounded-full p-1">
                    <path fillRule="evenodd" d="M4.5 12.75l6 6 9-12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    HTML, CSS, JavaScript
                    </div>

                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-5 w-5 bg-green-500 rounded-full p-1">
                    <path fillRule="evenodd" d="M4.5 12.75l6 6 9-12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Flask
                    </div>

                    </td>
                    
                    <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
                        <ul className="space-y-1">
                        <li className="my-1 mr-1.5">
                                <div className="inline-block rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">HarvardX</div>
                            </li>
                        </ul>
                    </td>


                    <td className="hidden py-4 pr-4 align-top text-sm  sm:table-cell">
                    <a href="/cs50x_certification.pdf" rel="noreferrer noopener" target="_blank" className="text-teal-300 hover:underline">
                        View certificate
                      </a>
                    </td>
                  </tr>

                  
                  <tr className="border-b border-slate-300/10 last:border-none">
                    <td className="py-4 pr-4 align-top text-sm">
                      <div className="translate-y-px">2025</div>
                    </td>
                    <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                      <div>Python for Data Analysis: Pandas & Numpy</div>
                    </td>
                    <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200 text-sm">
                    
                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-5 w-5 bg-green-500 rounded-full p-1">
                    <path fillRule="evenodd" d="M4.5 12.75l6 6 9-12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Numpy arrays
                    </div>

                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-5 w-5 bg-green-500 rounded-full p-1">
                    <path fillRule="evenodd" d="M4.5 12.75l6 6 9-12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Numpy built-in methods and functions
                    </div>
                    
                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-5 w-5 bg-green-500 rounded-full p-1">
                    <path fillRule="evenodd" d="M4.5 12.75l6 6 9-12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Mathematical Operations
                    </div>
                    
                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-5 w-5 bg-green-500 rounded-full p-1">
                    <path fillRule="evenodd" d="M4.5 12.75l6 6 9-12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Arrays slicing and indexing
                    </div>
                   
                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-5 w-5 bg-green-500 rounded-full p-1">
                    <path fillRule="evenodd" d="M4.5 12.75l6 6 9-12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Pandas with CSV and HTML data
                    </div>

                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-5 w-5 bg-green-500 rounded-full p-1">
                    <path fillRule="evenodd" d="M4.5 12.75l6 6 9-12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Pandas Operations
                    </div>

                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-5 w-5 bg-green-500 rounded-full p-1">
                    <path fillRule="evenodd" d="M4.5 12.75l6 6 9-12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Pandas with functions
                    </div>
                    

                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-5 w-5 bg-green-500 rounded-full p-1">
                    <path fillRule="evenodd" d="M4.5 12.75l6 6 9-12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Sorting and ordering in Pandas
                    </div>
                    </td>
  
                    <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
                        <ul className="space-y-1">
                        <li className="my-1 mr-1.5">
                                <div className="inline-block rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Coursera</div>
                            </li>
                        </ul>
                    </td>


                    <td className="hidden py-4 pr-4 align-top text-sm sm:table-cell">
                    <a href="/data_analysis_pa_np.pdf" rel="noreferrer noopener" target="_blank" className="text-teal-300 hover:underline">
                        View certificate
                      </a>
                    </td>
                  </tr>  

                  <tr className="border-b border-slate-300/10 last:border-none">
                    <td className="py-4 pr-4 align-top text-sm">
                      <div className="translate-y-px">2025</div>
                    </td>
                    <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                      <div>Python for Data Visualization:Matplotlib & Seaborn </div>
                    </td>
                    <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200 text-sm">
                    
                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-5 w-5 bg-green-500 rounded-full p-1">
                    <path fillRule="evenodd" d="M4.5 12.75l6 6 9-12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Line plots
                    </div>

                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-5 w-5 bg-green-500 rounded-full p-1">
                    <path fillRule="evenodd" d="M4.5 12.75l6 6 9-12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Scatterplots
                    </div>
                    
                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-5 w-5 bg-green-500 rounded-full p-1">
                    <path fillRule="evenodd" d="M4.5 12.75l6 6 9-12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Pie charts
                    </div>
                    
                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-5 w-5 bg-green-500 rounded-full p-1">
                    <path fillRule="evenodd" d="M4.5 12.75l6 6 9-12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Histograms
                    </div>
                   
                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-5 w-5 bg-green-500 rounded-full p-1">
                    <path fillRule="evenodd" d="M4.5 12.75l6 6 9-12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Subplots
                    </div>

                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-5 w-5 bg-green-500 rounded-full p-1">
                    <path fillRule="evenodd" d="M4.5 12.75l6 6 9-12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    3D Plots
                    </div>

                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-5 w-5 bg-green-500 rounded-full p-1">
                    <path fillRule="evenodd" d="M4.5 12.75l6 6 9-12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Seaborn Scatterplots & Countplots
                    </div>
                    

                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-5 w-5 bg-green-500 rounded-full p-1">
                    <path fillRule="evenodd" d="M4.5 12.75l6 6 9-12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Seaborn Pairplots
                    </div>
                    

                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-5 w-5 bg-green-500 rounded-full p-1">
                    <path fillRule="evenodd" d="M4.5 12.75l6 6 9-12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Seaborn Heatmaps
                    </div>
                    </td>
  
                    <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
                        <ul className="space-y-1">
                        <li className="my-1 mr-1.5">
                                <div className="inline-block rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Coursera</div>
                            </li>
                        </ul>
                    </td>

                    
                    <td className="hidden py-4 pr-4 align-top text-sm sm:table-cell">
                    <a href="/data_analysis_matplotlib.pdf" rel="noreferrer noopener" target="_blank" className="text-teal-300 hover:underline">
                        View certificate
                      </a>
                    </td>
                  </tr> 

                  <tr className="border-b border-slate-300/10 last:border-none">
                    <td className="py-4 pr-4 align-top text-sm">
                      <div className="translate-y-px">2025</div>
                    </td>
                    <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                      <div>Google Analytics Certification</div>
                    </td>
                    <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200 text-sm">
                    
                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-5 w-5 bg-green-500 rounded-full p-1">
                    <path fillRule="evenodd" d="M4.5 12.75l6 6 9-12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Get Started using GA4
                    </div>

                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-5 w-5 bg-green-500 rounded-full p-1">
                    <path fillRule="evenodd" d="M4.5 12.75l6 6 9-12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Manage GA4 Data and Learn to Read Reports
                    </div>
                    
                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-5 w-5 bg-green-500 rounded-full p-1">
                    <path fillRule="evenodd" d="M4.5 12.75l6 6 9-12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Dive Deeper into GA4 Data and Reports
                    </div>
                    
                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-5 w-5 bg-green-500 rounded-full p-1">
                    <path fillRule="evenodd" d="M4.5 12.75l6 6 9-12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Use GA4 with Other Tools and Data Sources
                    </div>
                    </td>
                    
                    <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
                        <ul className="space-y-1">
                        <li className="my-1 mr-1.5">
                                <div className="inline-block rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Google</div>
                            </li>
                        </ul>
                    </td>


                    <td className="hidden py-4 pr-4 align-top text-sm sm:table-cell">
                    <a href="/google_analytics_certification.pdf" rel="noreferrer noopener" target="_blank" className="text-teal-300 hover:underline">
                        View certificate
                      </a>
                    </td>
                  </tr>


                  <tr className="border-b border-slate-300/10 last:border-none">
                    <td className="py-4 pr-4 align-top text-sm">
                      <div className="translate-y-px">2024</div>
                    </td>
                    <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                      <div>CS50 Computer Science for Databases using SQL</div>
                    </td>
                    <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200 text-sm">
                    
                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-5 w-5 bg-green-500 rounded-full p-1">
                    <path fillRule="evenodd" d="M4.5 12.75l6 6 9-12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Querying
                    </div>

                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-5 w-5 bg-green-500 rounded-full p-1">
                    <path fillRule="evenodd" d="M4.5 12.75l6 6 9-12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Relating
                    </div>
                    
                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-5 w-5 bg-green-500 rounded-full p-1">
                    <path fillRule="evenodd" d="M4.5 12.75l6 6 9-12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Designing
                    </div>
                    
                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-5 w-5 bg-green-500 rounded-full p-1">
                    <path fillRule="evenodd" d="M4.5 12.75l6 6 9-12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Writing
                    </div>
                   
                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-5 w-5 bg-green-500 rounded-full p-1">
                    <path fillRule="evenodd" d="M4.5 12.75l6 6 9-12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Viewing
                    </div>

                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-5 w-5 bg-green-500 rounded-full p-1">
                    <path fillRule="evenodd" d="M4.5 12.75l6 6 9-12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Optimizing
                    </div>

                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-5 w-5 bg-green-500 rounded-full p-1">
                    <path fillRule="evenodd" d="M4.5 12.75l6 6 9-12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Scaling
                    </div>
                    </td>
                    
                    <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
                        <ul className="space-y-1">
                        <li className="my-1 mr-1.5">
                                <div className="inline-block rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">HarvardX</div>
                            </li>
                        </ul>
                    </td>


                    <td className="hidden py-4 pr-4 align-top text-sm sm:table-cell">
                    <a href="/cs50_sql_all.pdf" rel="noreferrer noopener" target="_blank" className="text-teal-300 hover:underline">
                        View certificate
                      </a>
                    </td>
                  </tr>   

                  <tr className="border-b border-slate-300/10 last:border-none">
                    <td className="py-4 pr-4 align-top text-sm">
                      <div className="translate-y-px">2023</div>
                    </td>
                    <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                      <div>Lean Management Certification</div>
                    </td>
                    <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200 text-sm">
                    
                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-5 w-5 bg-green-500 rounded-full p-1">
                    <path fillRule="evenodd" d="M4.5 12.75l6 6 9-12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    7+1
                    </div>

                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-5 w-5 bg-green-500 rounded-full p-1">
                    <path fillRule="evenodd" d="M4.5 12.75l6 6 9-12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Overprocessing
                    </div>
                    
                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-5 w-5 bg-green-500 rounded-full p-1">
                    <path fillRule="evenodd" d="M4.5 12.75l6 6 9-12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Waiting
                    </div>
                    
                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-5 w-5 bg-green-500 rounded-full p-1">
                    <path fillRule="evenodd" d="M4.5 12.75l6 6 9-12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Motion and Transport
                    </div>
                   
                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-5 w-5 bg-green-500 rounded-full p-1">
                    <path fillRule="evenodd" d="M4.5 12.75l6 6 9-12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Defect/Inspections
                    </div>

                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-5 w-5 bg-green-500 rounded-full p-1">
                    <path fillRule="evenodd" d="M4.5 12.75l6 6 9-12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Inventory
                    </div>

                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-5 w-5 bg-green-500 rounded-full p-1">
                    <path fillRule="evenodd" d="M4.5 12.75l6 6 9-12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    8th form of waste
                    </div>
                    

                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-5 w-5 bg-green-500 rounded-full p-1">
                    <path fillRule="evenodd" d="M4.5 12.75l6 6 9-12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Muda Mura Muri
                    </div>

                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-5 w-5 bg-green-500 rounded-full p-1">
                    <path fillRule="evenodd" d="M4.5 12.75l6 6 9-12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Value stream
                    </div>
                    </td>
                    
                    <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
                        <ul className="space-y-1">
                        <li className="my-1 mr-1.5">
                                <div className="inline-block rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">SixSigma Ac.</div>
                            </li>
                        </ul>
                    </td>


                    <td className="hidden py-4 pr-4 align-top text-sm sm:table-cell">
                    <a href="/2023_lean.pdf" rel="noreferrer noopener" target="_blank" className="text-teal-300 hover:underline">
                        View certificate
                      </a>
                    </td>
                  </tr>  

                  <tr className="border-b border-slate-300/10 last:border-none">
                    <td className="py-4 pr-4 align-top text-sm">
                      <div className="translate-y-px">2023</div>
                    </td>
                    <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                      <div>Build Solutions with Power Apps, Power Automate & SharePoint</div>
                    </td>
                    <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200 text-sm">
                    
                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-5 w-5 bg-green-500 rounded-full p-1">
                    <path fillRule="evenodd" d="M4.5 12.75l6 6 9-12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    SharePoint Crash Course
                    </div>

                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-5 w-5 bg-green-500 rounded-full p-1">
                    <path fillRule="evenodd" d="M4.5 12.75l6 6 9-12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Power Automate Crash Course
                    </div>
                    
                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-5 w-5 bg-green-500 rounded-full p-1">
                    <path fillRule="evenodd" d="M4.5 12.75l6 6 9-12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Power Apps Crash Course
                    </div>
                    
                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-5 w-5 bg-green-500 rounded-full p-1">
                    <path fillRule="evenodd" d="M4.5 12.75l6 6 9-12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Power Apps to SharePoint
                    </div>
                   
                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-5 w-5 bg-green-500 rounded-full p-1">
                    <path fillRule="evenodd" d="M4.5 12.75l6 6 9-12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    SharePoint to Power Automate
                    </div>

                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-5 w-5 bg-green-500 rounded-full p-1">
                    <path fillRule="evenodd" d="M4.5 12.75l6 6 9-12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Power Automate to Power Apps
                    </div>

                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-5 w-5 bg-green-500 rounded-full p-1">
                    <path fillRule="evenodd" d="M4.5 12.75l6 6 9-12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Third Party Interactions
                    </div>
                    

                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-5 w-5 bg-green-500 rounded-full p-1">
                    <path fillRule="evenodd" d="M4.5 12.75l6 6 9-12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    User Interface Integrations
                    </div>
                    </td>
                    
                    <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
                        <ul className="space-y-1">
                        <li className="my-1 mr-1.5">
                                <div className="inline-block rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 "></div>
                            </li>
                        </ul>
                    </td>


                    <td className="hidden py-4 pr-4 align-top text-sm sm:table-cell">
                    <a href="/2023_powerautomate.pdf" rel="noreferrer noopener" target="_blank" className="text-teal-300 hover:underline">
                        View certificate
                      </a>
                    </td>
                  </tr>  

                

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }