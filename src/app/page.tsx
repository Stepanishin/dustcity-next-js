import ProjectList from "@/components/ProjectList/ProjectList";

export default function Home() {
  return (
    <main className="flex flex-col mx-auto my-0 justify-center items-center">
      <div className="flex flex-col items-center gap-8 mt-10 sm:mt-14 mb-24 sm:mb-32 md:mb-48">
        <h1 className="text-4xl text-center md:text-9xl sm:text-5xl ">
          DUST CITY
        </h1>
        <h2 className="text-1xl text-center md:text-6xl sm:text-3xl ">
          SAVE THE WORLD & REVIVE CIVILIZATION
        </h2>
        <a
          href="https://magiceden.io/marketplace/dustcity"
          className="w-32 h-10 flex justify-center items-center bg-custom-color-yellow rounded-md text-primary-color-font hover:bg-color-color-yellow-hover mt-3 sm:mt-5 font-semibold "
        >
          Buy on ME
        </a>
      </div>
      <ProjectList />
    </main>
  );
}
