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
                title="SabaiCode Bootcamp 5"
                // company="CITO COMPUTER CENTER"
                project="Data Catalog"
                role="Full Stack Developer"
                period="06/2024 - 01/2025"
                responsibilities={[
                  "Designed and developed a data catalog project to ETL (Extract, Transform, Load) process and manage data collection from multiple sources.",
                  "Implemented advance data cleaning technique to ensure data quality.",
                  "Built interactive data visualizations to provide actionable insights for stakeholders, data-driven decision-making.",
                  "Collaborate with team members to optimize workflow and enhance system performance."
                ]}
              />
              <Experience
                title="Norton University Exhibition"
                // company="SBK UNIVERSITY"
                project="MultiGrab"
                period="11/2023 - 12/2023"
                responsibilities={[
                  "Download video from multiple streaming platform.",
                  " User-friendly interface for easy navigation and functionality.",
                  " Secure and optimize for large-scale downloads.",
                ]}
              />
              <Experience
                title="SBK UNIVERSITY"
                company="Volunteer SBK University"
                period="04/2023 - 2024"
                responsibilities={[
                  "Provided comprehensive student support through academic guidance",
                  "Acted as communication liaison between students and university faculty/staff",
                  "Supported institutional outreach by promoting events and maximizing student engagement"
                ]}
              />
               <Experience
                title="SPMS Hight School"
                company="Volunteer Teacher Information"
                period="02/2022 - 2023"
                responsibilities={[
                  " Delivered comprehensive instructional sessions on Microsoft Office suite (Word, Excel, PowerPoint).",
                  "Provided personalized technical troubleshooting student challenges ",
                  "Guided student research initiatives."
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