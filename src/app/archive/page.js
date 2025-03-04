export default function Archive() {
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
                All Projects
              </h1>
  
              {/* Table */}
              <table id="content" className="mt-12 w-full border-collapse text-left">
                <thead className="sticky top-0 z-10 border-b border-slate-300/10 bg-slate-900/75 px-6 py-5 backdrop-blur">
                  <tr>
                    <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Year</th>
                    <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Project</th>
                    <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">Built with</th>
                    <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">Links</th>
                  </tr>
                </thead>
  
                <tbody>
                  <tr className="border-b border-slate-300/10 last:border-none">
                    <td className="py-4 pr-4 align-top text-sm">
                      <div className="translate-y-px">2025</div>
                    </td>
                    <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                      <div>Biodiversity Analysis</div>
                    </td>
                    <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
                        <ul className="flex -translate-y-1.5 flex-wrap">
                        <li className="my-1 mr-1.5">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Python</div>
                            </li>
                            <li className="my-1 mr-1.5">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">pandas</div>
                            </li>
                            <li className="my-1 mr-1.5">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">seaborn</div>
                            </li>
                            <li className="my-1 mr-1.5">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">numpy</div>
                            </li>
                            <li className="my-1 mr-1.5">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Jupyter Notebook</div>
                            </li>
                        </ul>
                    </td>
                    <td className="hidden py-4 pr-4 align-top text-sm sm:table-cell">
                      <a href="https://github.com/liannfinlayson26/biodiversity-analysis.git" rel="noreferrer noopener" target="_blank" className="text-teal-300 hover:underline">
                        View code
                      </a>
                    </td>
                  </tr>

                  <tr className="border-b border-slate-300/10 last:border-none">
                    <td className="py-4 pr-4 align-top text-sm">
                      <div className="translate-y-px">2025</div>
                    </td>
                    <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                      <div>Airline Analysis</div>
                    </td>
                    <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
                        <ul className="flex -translate-y-1.5 flex-wrap">
                            <li className="my-1 mr-1.5">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Python</div>
                            </li>
                            <li className="my-1 mr-1.5">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">pandas</div>
                            </li>
                            <li className="my-1 mr-1.5">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">seaborn</div>
                            </li>
                            <li className="my-1 mr-1.5">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">numpy</div>
                            </li>
                            <li className="my-1 mr-1.5">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Jupyter Notebook</div>
                            </li>
                        </ul>
                    </td>
                    <td className="hidden py-4 pr-4 align-top text-sm sm:table-cell">
                    <a href="https://github.com/liannfinlayson26/airline-analysis/blob/main/Airline%20Analysis%20copy.ipynb" rel="noreferrer noopener" target="_blank" className="text-teal-300 hover:underline">
                        View code
                      </a>
                    </td>
                  </tr>

                  <tr className="border-b border-slate-300/10 last:border-none">
                    <td className="py-4 pr-4 align-top text-sm">
                      <div className="translate-y-px">2025</div>
                    </td>
                    <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                      <div>Trivia Game</div>
                    </td>
                    <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
                        <ul className="flex -translate-y-1.5 flex-wrap">
                            <li className="my-1 mr-1.5">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">SQLite3</div>
                            </li>
                            <li className="my-1 mr-1.5">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Flask</div>
                            </li>
                            <li className="my-1 mr-1.5">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Python</div>
                            </li>
                            <li className="my-1 mr-1.5">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Javascript</div>
                            </li>
                            <li className="my-1 mr-1.5">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">HTML</div>
                            </li>
                            <li className="my-1 mr-1.5">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Bootstrap</div>
                            </li>
                            <li className="my-1 mr-1.5">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">CSS</div>
                            </li>
                        </ul>
                    </td>
                    <td className="hidden py-4 pr-4 align-top text-sm sm:table-cell">
                    <a href="https://github.com/liannfinlayson26/trivia-game.git" rel="noreferrer noopener" target="_blank" className="text-teal-300 hover:underline">
                        View code
                      </a>
                      <br />
                      <a href="https://trivia-game-yu1e.onrender.com" rel="noreferrer noopener" target="_blank" className="text-teal-300 hover:underline">
                        View web page
                      </a>
                    </td>
                  </tr>  

                  <tr className="border-b border-slate-300/10 last:border-none">
                    <td className="py-4 pr-4 align-top text-sm">
                      <div className="translate-y-px">2024</div>
                    </td>
                    <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                      <div>Shut the Box - Three Piece Game</div>
                    </td>
                    <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
                        <ul className="flex -translate-y-1.5 flex-wrap">
                        <li className="my-1 mr-1.5">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Scratch</div>
                            </li>  
                        </ul>
                    </td>
                    <td className="hidden py-4 pr-4 align-top text-sm sm:table-cell">
                      <a href="https://scratch.mit.edu/projects/1067097561" rel="noreferrer noopener" target="_blank" className="text-teal-300 hover:underline">
                        View web page
                      </a>
                    </td>
                  </tr>  

                  <tr className="border-b border-slate-300/10 last:border-none">
                    <td className="py-4 pr-4 align-top text-sm">
                      <div className="translate-y-px">2024</div>
                    </td>
                    <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                      <div>Cousera Database Analysis</div>
                    </td>
                    <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
                        <ul className="flex -translate-y-1.5 flex-wrap">
                        <li className="my-1 mr-1.5">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">mySQL</div>
                        </li>
                        </ul>
                    </td>
                    <td className="hidden py-4 pr-4 align-top text-sm sm:table-cell">
                      <a href="https://github.com/liannfinlayson26/Coursera-Courses-Analysis-SQL.git" rel="noreferrer noopener" target="_blank" className="text-teal-300 hover:underline">
                        View code
                      </a>
                    </td>
                  </tr> 

                  <tr className="border-b border-slate-300/10 last:border-none">
                    <td className="py-4 pr-4 align-top text-sm">
                      <div className="translate-y-px">2024</div>
                    </td>
                    <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                      <div>World Layoffs Database Analysis</div>
                    </td>
                    <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
                        <ul className="flex -translate-y-1.5 flex-wrap">
                        <li className="my-1 mr-1.5">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">mySQL</div>
                        </li>
                        <li className="my-1 mr-1.5">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Docker</div>
                        </li>
                        <li className="my-1 mr-1.5">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Tableau</div>
                        </li>  
                        </ul>
                    </td>
                    <td className="hidden py-4 pr-4 align-top text-sm sm:table-cell">
                      <a href="https://github.com/liannfinlayson26/World-Layoffs-Analysis-SQL.git" rel="noreferrer noopener" target="_blank" className="text-teal-300 hover:underline">
                        View code
                      </a>
                      <br />
                      <a href="https://public.tableau.com/app/profile/liann.finlayson4647/viz/WorldLayoffs_17186015941360/Dashboard1" rel="noreferrer noopener" target="_blank" className="text-teal-300 hover:underline">
                      View dashboard
                      </a>
                    </td>
                  </tr>   

                   <tr className="border-b border-slate-300/10 last:border-none">
                    <td className="py-4 pr-4 align-top text-sm">
                      <div className="translate-y-px">2024</div>
                    </td>
                    <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                      <div>Dental Clinic Database Analysis</div>
                    </td>
                    <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
                        <ul className="flex -translate-y-1.5 flex-wrap">
                        <li className="my-1 mr-1.5">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">mySQL</div>
                        </li>
                        <li className="my-1 mr-1.5">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Docker</div>
                        </li>
                        </ul>
                    </td>
                    <td className="hidden py-4 pr-4 align-top text-sm sm:table-cell">
                      <a href="https://github.com/liannfinlayson26/dental_clinic_sql.git" rel="noreferrer noopener" target="_blank" className="text-teal-300 hover:underline">
                        View code
                      </a>
                    </td>
                  </tr>   

                    <tr className="border-b border-slate-300/10 last:border-none">
                    <td className="py-4 pr-4 align-top text-sm">
                      <div className="translate-y-px">2024</div>
                    </td>
                    <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                      <div>Financial Extraction Data</div>
                    </td>
                    <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
                        <ul className="flex -translate-y-1.5 flex-wrap">
                        <li className="my-1 mr-1.5">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Python</div>
                        </li>
                        <li className="my-1 mr-1.5">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Jupyter Notebook</div>
                        </li>
                        </ul>
                    </td>
                    <td className="hidden py-4 pr-4 align-top text-sm sm:table-cell">
                    <a href="https://github.com/liannfinlayson26/Financial-Web-Extract-Python/blob/main/README.md" rel="noreferrer noopener" target="_blank" className="text-teal-300 hover:underline">
                        View code
                      </a>
                    </td>
                  </tr>   

                  <tr className="border-b border-slate-300/10 last:border-none">
                    <td className="py-4 pr-4 align-top text-sm">
                      <div className="translate-y-px">2024</div>
                    </td>
                    <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                      <div>Python Essentials</div>
                    </td>
                    <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
                        <ul className="flex -translate-y-1.5 flex-wrap">
                        <li className="my-1 mr-1.5">
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Python</div>
                        </li>
                        </ul>
                    </td>
                    <td className="hidden py-4 pr-4 align-top text-sm sm:table-cell">
                      <a href="https://github.com/liannfinlayson26/Essential-Learning-Portfolio-Python.git" rel="noreferrer noopener" target="_blank" className="text-teal-300 hover:underline">
                        View code
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