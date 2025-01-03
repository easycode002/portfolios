import { CardSkill } from "../components/molecules/skill/CardSkill";
import { SkillBar } from "../components/molecules/skill/SkillBar";
import {
  apiTools,
  backSkill,
  databaseSkills,
  devopsSkill,
  frontSkill,
  languageSkills,
} from "@/data/skill";

const  Skill=()=> {
  return (
    <section className="px-4 sm:px-6 mb-6 mt-12 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center mb-12 text-2xl md:text-3xl lg:text-4xl font-ubuntubold uppercase underline underline-offset-4">
          SKILL
        </h2>
        {/* Language Skills */}
        <div className="mb-8">
          <h3 className="text-xl md:text-2xl font-ubuntubold mb-4">Language</h3>
          <div className="space-y-2">
            {languageSkills.map((skill) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                percentage={skill.percentage}
              />
            ))}
          </div>
        </div>

        {/* Web Technology */}
        <h4 className="text-lg md:text-xl font-ubuntubold mt-8 mb-4">Web Technology</h4>
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12">
          {/* Front End */}
          <div className="md:w-1/2">
            <h5 className="text-base md:text-lg font-ubunturegular mb-4">Front End</h5>
            <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
              {frontSkill.map((item, index) => (
                <CardSkill
                  key={index}
                  name={item.name}
                  image={item.image}
                  alt={item.alt}
                />
              ))}
            </div>
          </div>

          {/* Back End */}
          <div className="md:w-1/2">
            <h5 className="text-base md:text-lg font-ubunturegular mb-4">Back End</h5>
            <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
              {backSkill.map((item, index) => (
                <CardSkill
                  key={index}
                  name={item.name}
                  image={item.image}
                  alt={item.alt}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Additional Technologies */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8">
          {/* Database Management */}
          <div>
            <h4 className="text-lg md:text-xl font-ubuntubold mb-4">
              Database Management
            </h4>
            <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
              {databaseSkills.map((item, index) => (
                <CardSkill
                  key={index}
                  name={item.name}
                  image={item.image}
                  alt={item.alt}
                />
              ))}
            </div>
          </div>

          {/* API & Tools */}
          <div>
            <h4 className="text-lg md:text-xl font-ubuntubold mb-4">API and Tools</h4>
            <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
              {apiTools.map((item, index) => (
                <CardSkill
                  key={index}
                  name={item.name}
                  image={item.image}
                  alt={item.alt}
                />
              ))}
            </div>
          </div>

          {/* DevOps */}
          <div>
            <h4 className="text-lg md:text-xl font-ubuntubold mb-4">DevOps</h4>
            <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
              {devopsSkill.map((item, index) => (
                <CardSkill
                  key={index}
                  name={item.name}
                  image={item.image}
                  alt={item.alt}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill