import Hero from "../Components/Hero";
import How_it_Works_Sections from "../Components/How_it_Works_Sections";
import { CreateIMG, Ignite, Share } from "../public/index";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="w-full bg-black text-white py-10 ">
        <h1 className="text-center text-3xl font-bold">How it Works</h1>
        <div className="">
          <How_it_Works_Sections
            title="Create"
            description="logic design and development"
            image={CreateIMG}
          />
          <How_it_Works_Sections
            className=""
            title="Ignite"
            description="logic design and development"
            image={Ignite}
          />
          <How_it_Works_Sections
            title="Share"
            description="logic design and development"
            image={Share}
          />
        </div>
      </div>
    </>
  );
}
