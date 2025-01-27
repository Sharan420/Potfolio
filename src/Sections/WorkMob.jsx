/* eslint-disable react/jsx-key */
import { Projects } from './Work'

const WorkMob = () => {
  return (
    <section
      className="md:hidden flex relative flex-col min-h-[200px] px-[11vw] pt-10 pb-[120px] bg-background items-center justify-center"
      id="workm"
    >
      <h1 className="font-inconsolata text-[3.5rem] text-white font-bold pb-6">
        Projects
      </h1>
      <div className="flex flex-col gap-10">
        {Projects.map((project, index) => (
          <div
            key={index}
            className="grid grid-cols-10 grid-rows-10 items-center justify-center gap-10 min-h-[30vh] w-[74vw] h-full gap-x-4"
          >
            <div className="flex flex-col items-center justify-center gap-4 col-span-full row-start-1 z-10 bg-secondary/90 h-full rounded-xl px-6 py-6">
              <h1 className="text-[2rem] text-white font-bold text-center font-inconsolata">
                {project.name}
              </h1>
              <span className="flex flex-row text-slightoffwhite gap-2">
                {project.icon.map((icon, index) => {
                  return <span key={index}>{icon}</span>
                })}
              </span>
              <hr className="h-px w-full bg-gray-200 border-0 " />
              <p className="text-[#ffff] text-center font-inconsolata">
                {project.description}
              </p>
              <div className="flex flex-row items-center justify-center gap-4">
                {project.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row items-center justify-center gap-2 text-white"
                  >
                    {link.icon}
                    <p className="text-[#ffff] font-inconsolata">{link.name}</p>
                  </a>
                ))}
              </div>
            </div>
            <div
              className="h-full w-full col-span-full row-start-1 rounded-xl"
              style={{
                backgroundImage: `url(${project.Image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
          </div>
        ))}
      </div>
      <div className={'custom-shape-divider-bottom-1706648784 mt-10'}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  )
}

export default WorkMob
