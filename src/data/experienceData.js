import React from 'react';

const P = ({ children }) => {
  return <p className="py-1">{children}</p>
}

const laptop = <span role="img" aria-label="laptop" style={{ fontSize: "160px" }}>&#128187;</span>
const work = <span role="img" aria-label="work" style={{ fontSize: "160px" }}>&#127970;</span>
const uni = <span role="img" aria-label="uni" style={{ fontSize: "160px" }}>&#127891;</span>

const experience = [
  {
    name: 'Makers Academy',
    title: 'Software Development Bootcamp',
    location: 'London, UK',
    dates: '01/2020 - 05/2020',
    icon: laptop,
    description: <div>
                  <P>Makers is a 16-week, self-led learning coding bootcamp, split between a 4-week pre-course, 7 weeks of pair programming and 5 weeks of group project work.</P>
                  <P>During my time at Makers, I built full stack applications using Behaviour Driven Development and Object Oriented Programming.</P>
                  <P>Successfully worked in teams using agile processes, task management applications and ran stand ups and retros.</P>
                  <P>With the use of GitHub workflows and code reviews, I ensured code was readable, maintainable and well tested.</P>
                </div>,
  },
  {
    name: 'BGRS Global UK Limited',
    title: 'Finance Team Leader',
    location: 'London, UK',
    dates: '10/2013 - 02/2020',
    icon: work,
    description: <div>
                  <P><b>Leadership & Team Building:</b> Successfully led a team through team meetings and one-on-ones, working with team members to manage workloads and assisting them in meeting their deliverables.</P>
                  <P><b>Mentorship:</b> Skilled and personable mentor, demonstrated by several of my team members being promoted to senior roles. </P>
                  <P><b>Problem Solving:</b> Used an analytical approach to break down client inquiries and identify the root cause. As a result, I worked with various teams within the business to resolve issues.</P>
                  <P><b>Reporting & Analysis:</b> Took initiative to simplify processes by designing and testing new reports. This resulted in a 40% reduction in the time spent by the team on manual manipulation of reports.</P>
                </div>
  },
  {
    name: 'ACCA',
    title: 'Financial Accountancy Qualification',
    location: 'London, UK',
    dates: '2011 - 2014',
    icon: uni,
  },
  {
    name: 'Kreston GTA',
    title: 'Accounts Assistant',
    location: 'Toronto, Canada',
    dates: '2011 - 2012',
    icon: work,
  },
  {
    name: 'Building Schools for the Future Investments LLP',
    title: 'Administrative & Accounts Assistant',
    location: 'London, UK',
    dates: '2008 - 2011',
    icon: work,
  },
  {
    name: 'PPP Corp',
    title: 'Project Coordinator',
    location: 'Toronto, Canada',
    dates: '2006 - 2007',
    icon: work,
  },
  {
    name: 'Ryerson University',
    title: 'Bachelor of Technology, Graphic Communications Management',
    location: 'Toronto, Canada',
    dates: '2001 - 2006',
    icon: uni,
    description: <div>
                  <P>A business management course focused on the printing industry. Studies included bringing projects from concept and design through to completion, as well as marketing and accounting.</P>
                </div>,
  },
]

export default experience;