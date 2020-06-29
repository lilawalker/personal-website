import React from 'react';

class Experience extends React.Component {

  render() {

    const experience = [
      {
      name: 'Makers Academy',
      title: 'Software Development Bootcamp',
      location: 'London, UK',
      dates: 'Jan 2020 - May 2020',
      description: <div>
                    <p className="py-1">Makers is a 16-week, self-led learning coding bootcamp, split between a 4-week pre-course, 7 weeks of pair programming and 5 weeks of group project work.</p>
                    <p className="py-1">During my time at Makers, I built full stack applications using behaviour driven development and object oriented programming.</p>
                    <p className="py-1">Successfully worked in teams using agile processes, task management applications and ran standups and retros.</p>
                    <p className="py-1">With the use of GitHub workflows and code reviews I ensured code was readable, maintainable and well tested.</p>
                  </div>,
      icon: <span role="img" aria-label="uni" style={{ fontSize: "80px" }}>&#128187;</span>
    },
    {
      name: 'BGRS Global UK Limited',
      title: 'Finance Team Leader',
      location: 'London, UK',
      dates: '2013 - 2020',
      icon: <span role="img" aria-label="uni" style={{ fontSize: "80px" }}>&#127970;</span>
    },
    {
      name: 'ACCA',
      title: 'Financial Accountancy Qualification',
      location: 'London, UK',
      dates: '2011 - 2014',
      icon: <span role="img" aria-label="uni" style={{ fontSize: "80px" }}>&#127891;</span>
    },
    {
      name: 'Kreston GTA',
      title: 'Accounts Assistant',
      location: 'Toronto',
      dates: '2011-2012',
      icon: <span role="img" aria-label="uni" style={{ fontSize: "80px" }}>&#127970;</span>
    },
    {
      name: 'Building Schools for the Future Investments LLP',
      title: 'Administrative & Accounts Assistant',
      location: 'London',
      dates: '2008-2011',
      icon: <span role="img" aria-label="uni" style={{ fontSize: "80px" }}>&#127970;</span>
    },
    {
      name: 'PPP Corp',
      title: 'Project Coordinator',
      location: 'Toronto',
      dates: '2006-2007',
      icon: <span role="img" aria-label="uni" style={{ fontSize: "80px" }}>&#127970;</span>
    },
    {
      name: 'Ryerson University',
      title: 'Bachelor of Technology, Graphic Communications Management',
      location: 'Toronto, Canada',
      dates: '2001 - 2006',
      description: '',
      icon: <span role="img" aria-label="uni" style={{fontSize: "80px"}}>&#127891;</span>
    },
  ]

  const pin = {
    path: <path d="M256,0C161.896,0,85.333,76.563,85.333,170.667c0,28.25,7.063,56.26,20.49,81.104L246.667,506.5
    c1.875,3.396,5.448,5.5,9.333,5.5s7.458-2.104,9.333-5.5l140.896-254.813c13.375-24.76,20.438-52.771,20.438-81.021
    C426.667,76.563,350.104,0,256,0z M256,256c-47.052,0-85.333-38.281-85.333-85.333c0-47.052,38.281-85.333,85.333-85.333
    s85.333,38.281,85.333,85.333C341.333,217.719,303.052,256,256,256z" />
  }

  const calendar = {
    path: <g>
            <g>
            <g>
              <path d="M119.467,0C110.041,0,102.4,7.641,102.4,17.067V51.2h34.133V17.067C136.533,7.641,128.892,0,119.467,0z"/>
            </g>
          </g>
          <g>
            <g>
              <path d="M358.4,0c-9.426,0-17.067,7.641-17.067,17.067V51.2h34.133V17.067C375.467,7.641,367.826,0,358.4,0z"/>
            </g>
          </g>
          <g>
            <g>
              <path d="M426.667,51.2h-51.2v68.267c0,9.426-7.641,17.067-17.067,17.067s-17.067-7.641-17.067-17.067V51.2h-204.8v68.267
                c0,9.426-7.641,17.067-17.067,17.067s-17.067-7.641-17.067-17.067V51.2H51.2C22.923,51.2,0,74.123,0,102.4v324.267
                c0,28.277,22.923,51.2,51.2,51.2h375.467c28.277,0,51.2-22.923,51.2-51.2V102.4C477.867,74.123,454.944,51.2,426.667,51.2z
                M443.733,426.667c0,9.426-7.641,17.067-17.067,17.067H51.2c-9.426,0-17.067-7.641-17.067-17.067V204.8h409.6V426.667z"/>
            </g>
          </g>
          <g>
            <g>
              <path d="M136.533,238.933H102.4c-9.426,0-17.067,7.641-17.067,17.067s7.641,17.067,17.067,17.067h34.133
                c9.426,0,17.067-7.641,17.067-17.067S145.959,238.933,136.533,238.933z"/>
            </g>
          </g>
          <g>
            <g>
              <path d="M256,238.933h-34.133c-9.426,0-17.067,7.641-17.067,17.067s7.641,17.067,17.067,17.067H256
                c9.426,0,17.067-7.641,17.067-17.067S265.426,238.933,256,238.933z"/>
            </g>
          </g>
          <g>
            <g>
              <path d="M375.467,238.933h-34.133c-9.426,0-17.067,7.641-17.067,17.067s7.641,17.067,17.067,17.067h34.133
                c9.426,0,17.067-7.641,17.067-17.067S384.892,238.933,375.467,238.933z"/>
            </g>
          </g>
          <g>
            <g>
              <path d="M136.533,307.2H102.4c-9.426,0-17.067,7.641-17.067,17.067c0,9.426,7.641,17.067,17.067,17.067h34.133
                c9.426,0,17.067-7.641,17.067-17.067C153.6,314.841,145.959,307.2,136.533,307.2z"/>
            </g>
          </g>
          <g>
            <g>
              <path d="M256,307.2h-34.133c-9.426,0-17.067,7.641-17.067,17.067c0,9.426,7.641,17.067,17.067,17.067H256
                c9.426,0,17.067-7.641,17.067-17.067C273.067,314.841,265.426,307.2,256,307.2z"/>
            </g>
          </g>
          <g>
            <g>
              <path d="M375.467,307.2h-34.133c-9.426,0-17.067,7.641-17.067,17.067c0,9.426,7.641,17.067,17.067,17.067h34.133
                c9.426,0,17.067-7.641,17.067-17.067C392.533,314.841,384.892,307.2,375.467,307.2z"/>
            </g>
          </g>
          <g>
            <g>
              <path d="M136.533,375.467H102.4c-9.426,0-17.067,7.641-17.067,17.067S92.974,409.6,102.4,409.6h34.133
                c9.426,0,17.067-7.641,17.067-17.067S145.959,375.467,136.533,375.467z"/>
            </g>
          </g>
          <g>
            <g>
              <path d="M256,375.467h-34.133c-9.426,0-17.067,7.641-17.067,17.067s7.641,17.067,17.067,17.067H256
                c9.426,0,17.067-7.641,17.067-17.067S265.426,375.467,256,375.467z"/>
            </g>
          </g>
          <g>
            <g>
              <path d="M375.467,375.467h-34.133c-9.426,0-17.067,7.641-17.067,17.067s7.641,17.067,17.067,17.067h34.133
                c9.426,0,17.067-7.641,17.067-17.067S384.892,375.467,375.467,375.467z"/>
            </g>
          </g>
        </g>
  }

    return (
      <div className="mt-3 mb-3">
        {
          experience.map((institution, index) => {
            return (
              <div
                key={index}
                className="max-w-sm w-full lg:max-w-full lg:flex py-3 px-3"
              >
                <div className="h-48 lg:h-auto lg:w-48 flex items-center align-middle bg-gray-400 rounded-t lg:rounded-t-none lg:rounded-l">
                  <div className="ml-12">{institution.icon}</div>
                </div>

                <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">

                  <div className="font-bold text-xl mb-2">
                    {institution.title}
                  </div>

                  <div className="text-gray-700 text-base">
                    {institution.name}
                  </div>

                  <div className="flex py-2">
                    <div className="flex w-1/2">
                      <div>
                        <svg className="fill-current text-gray-600 w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          {pin.path}
                      </svg>
                      </div>
                      <div className="text-gray-600 text-sm px-1">
                        {institution.location}
                      </div>
                    </div>
                    <div className="flex w-1/2">
                      <div>
                        <svg className="fill-current text-gray-600 w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477.867 477.867">
                          {calendar.path}
                      </svg>
                      </div>
                      <div className="text-gray-600 text-sm px-1">
                        {institution.dates}
                      </div>
                    </div>
                  </div>

                  <div className="text-gray-700 text-sm">
                    {institution.description}
                  </div>
                </div>
              </div>
            );
          })
        }
      </div>
    )
  }
}

export default Experience;
