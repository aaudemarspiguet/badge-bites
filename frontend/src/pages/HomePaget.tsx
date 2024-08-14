import landingImage from "../assets/landing.png"
import iosImage from "../assets/iosPreorder.png"
import andImage from "../assets/andPreorder.png"


const HomePage = () => {
    return (
        <div className = "flex flex-col gap-12">
            <div className = "bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
                <h1 className = "text-5xl font-bold tracking-tight text-red-600">
                    Conquer your cravings
                </h1>
                <span className = "text-xl">Hunger's just a tap from home.</span>
            </div>
            <div className = "grid md:grid-cols-2 gap-5">
                <img src = {landingImage} />
                <div className = "flex flex-col items-center justify-center gap-4 text-center">
                    <span className = "font-bond text-3xl tracking-tighter">
                        Exciting food, just around the corner!
                    </span>
                    <span>
                        Get ready for faster ordering with BadgeBites, your soon-to-be favorite food ordering app.
                    </span>
                    <div className="flex justify-between gap-4">
                        <a href="https://www.apple.com/app-store/">
                            <img src={iosImage} alt="Pre-register on App Store" />
                        </a>
                        <a href="https://play.google.com/store/">
                            <img src={andImage} alt="Pre-register on Google Play" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;