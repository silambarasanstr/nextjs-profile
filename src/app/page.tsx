"use client";
import Aboutpage from "./about/page";
import BannerPage from "./banner/page";
import NavBar from "./components/side-nav";
import ContactPages from "./contact/pages";
import Projectspages from "./projects/pages";
import ResumePages from "./resume/pages";


export default function Home() {
  return (
    <main className="min-h-screen items-center justify-between ">
       <div className="bg-primary">
       <NavBar/>
       <BannerPage/>
       <Aboutpage/>
       <Projectspages/>
       <ResumePages/>
       <ContactPages/>
       </div>

    </main>
  );
}
