import BannerPage from "./banner/page";
import NavBar from "./components/side-nav";


export default function Home() {
  return (
    <main className="min-h-screen items-center justify-between ">
       <div className="bg-primary">
       <NavBar/>
       <BannerPage/>
       </div>

    </main>
  );
}
