import About from "../components/About";
import Intro from "../components/Intro";
import LandingBar from "../components/LandingBar";


function Home(){
    return(
        <div className="space-y-2 w-[80%] mx-auto">
            <LandingBar/>
            <Intro/>
            <div className="bg-[#1F1E1E] h-24 -ms-48 -me-48"></div>
            <About/>
        </div>
    )
}

export default Home;