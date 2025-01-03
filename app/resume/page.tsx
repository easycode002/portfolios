import React from "react";
import { Header } from "../components/molecules/resume/Header";
import { Timeline } from "../components/molecules/resume/Timeline";
import { Education } from "../components/molecules/resume/Education";
import { Experience } from "../components/molecules/resume/Experience";

const Resume = () => {
  return (
    <main className="flex min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 py-8">
      <div className="flex flex-col w-full max-w-7xl mx-auto">
        <Header />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-8 sm:mt-12">
          {/* Section - Education */}
          <section className="print:break-inside-avoid">
            <h2 className="text-xl md:text-2xl font-ubuntubold mb-5 border-b pb-2">
              Education
            </h2>
            
            <Timeline>
              <Education
                degree="BACHELOR OF SOFTWARE DEVELOPMENT"
                period="2022 - Present"
                school="Norton University, Phnom Penh, Cambodia"
              />
              <Education
                degree="BACHELOR OF SOFTWARE DEVELOPMENT"
                period="2018 - 2021"
                school="SPMS High School, Kandal, Cambodia"
              />
              <Education
                degree="BACHELOR OF SOFTWARE DEVELOPMENT"
                period="2015 - 2018"
                school="Trapeang Arak Secondary School, Kompong Thom Cambodia"
              />
            </Timeline>
          </section>

          {/* Section - Experience */}
          <section className="print:break-inside-avoid">
            <h2 className="text-xl md:text-2xl font-ubuntubold mb-5 border-b pb-2">
              Professional Experience
            </h2>
            <Timeline>
              <Experience
                title="Teacher Information Technologies (Part Time)"
                company="CITO COMPUTER CENTER"
                period="01-Feb-2024 - 25-May-2024"
                responsibilities={[
                  "Designing and planning lessons that align with the course objectives",
                  "Organizing assignments and exams to evaluate student progress",
                  "Developing course materials, including lecture slides, practical exercises, and coding projects"
                ]}
              />
              <Experience
                title="Web Developer"
                company="SBK UNIVERSITY"
                period="2023 - 15-Jan-2024"
                responsibilities={[
                  "Developed and maintained university website using HTML, CSS, JavaScript, and Laravel framework",
                  "Implemented user-friendly web design with responsive and visually appealing interfaces",
                  "Collaborated with stakeholders to design and execute website features",
                  "Managed content management systems (CMS) for efficient website updates"
                ]}
              />
              <Experience
                title="Volunteer"
                company="SBK UNIVERSITY"
                period="10-Aug-2022 - 2023"
                responsibilities={[
                  "Provided comprehensive student support through academic guidance",
                  "Acted as communication liaison between students and university faculty/staff",
                  "Supported institutional outreach by promoting events and maximizing student engagement"
                ]}
              />
            </Timeline>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Resume;