import About from "../components/About";
import Intro from "../components/Intro";
import LandingBar from "../components/LandingBar";


function Home(){
    return(
        <div className="space-y-12">
            <LandingBar/>
            <Intro/>
            <About/>
        </div>
    )
}

export default Home;