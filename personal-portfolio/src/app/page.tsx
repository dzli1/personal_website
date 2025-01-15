import Image from "next/image";
import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export default function Home() {
  return (
    <div>
      <Head>
        <title>David Li</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 text-gray-800">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl">David Li</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl "/>
              </li>
              <li>
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white first-line:px-4 py-2 m-2 p-2 border-none" href="#">Resume</a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">David Li</h2>
            <h3 className="text-2xl py-2">Software Engineer</h3>
            <p className="text-md py-5 leading-8 text-gray-800">
              Undergraduate student at Columbia University in the City of New York interested in software engineering, quantitative trading, artificial intelligence, and algorithms. Contact me below! 
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillGithub />
          </div>
          <div className = "relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20">
            <Image 
              src="/P1050537.JPEG"
              alt="Temporary image of me"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </section>
        
        <section>
          <div>
            <h3 className="text-3xl py-1">About Me</h3>
            <h4></h4>
            <p className="text-md py-2 leading-8 text-gray-800">
            I’m always exploring, whether its discovering the intersection between AR, AI, and medical research in <span className="text-teal-500">opthalmology</span>, or teaching others. In my free time, catch me at Columbia Pops playing the French horn, getting KBBQ, or singing out of tune at karaoke. I enjoy hiking, traveling, and learning new stuff. 
            </p>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1">Skills</h3>
              <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 p-4">
                <div className="bg-gray-100 p-4">C/C++</div>
                <div className="bg-gray-100 p-4">Python</div>
                <div className="bg-gray-100 p-4">Javascript</div>
                <div className="bg-gray-100 p-4">Java</div>
                <div className="bg-gray-100 p-4">HTML/CSS</div>
                <div className="bg-gray-100 p-4">Node.js</div>
                <div className="bg-gray-100 p-4">React.js</div>
                <div className="bg-gray-100 p-4">C#</div>
                <div className="bg-gray-100 p-4">SQL</div>
                <div className="bg-gray-100 p-4">Pytorch</div>
                <div className="bg-gray-100 p-4">Git</div>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1">Projects</h3>
            <h4></h4>
            <p>
              
            </p>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1">Experience</h3>
            <h4></h4>
            <p>
              
            </p>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1">Contact</h3>
            <h4></h4>
            <p>

            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
