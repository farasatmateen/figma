import slider1 from "../../../public3/slide2.jpg"
import slider2 from "../../../public3/slide3.jpg"
import slider3 from "../../../public3/slide4.jpg"
import slider4 from "../../../public3/slide5.jpg"
import slider5 from "../../../public3/slide6.jpg"
import slider6 from "../../../public3/slide7.jpg"
import Image from "next/image"
export default function Blog(){
    return(
        <>
        <h1>B<div className="bg-white font-sans">
      <div className="max-w-6xl mx-auto p-4">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-800 inline-block relative after:absolute after:w-4/6 after:h-1 after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:bg-pink-400 after:rounded-lg-full">LATEST BLOGS</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-lg:max-w-3xl max-md:max-w-md mx-auto">
          <div className="bg-white cursor-pointer rounded-lg overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
          <Image src={slider1} alt="slider1" 
            className="w-full h-96 object-cover" />
            <div className="p-6 absolute bottom-0 left-0 right-0 bg-pink-200 opacity-90">
              <span className="text-sm block text-gray-800 mb-2">10 FEB 2023 | BY JOHN DOE</span>
              <h3 className="text-xl font-bold text-gray-800">Igniting Your Imagination</h3>
              <div className="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                <p className="text-gray-800 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
              </div>
            </div>
          </div>
          <div className="bg-white cursor-pointer rounded-lg overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
          <Image src={slider2} alt="slider2" 
            className="w-full h-96 object-cover" />
            <div className="p-6 absolute bottom-0 left-0 right-0 bg-pink-200 opacity-90">
              <span className="text-sm block text-gray-800 mb-2">7 JUN 2023 | BY MARK ADAIR</span>
              <h3 className="text-xl font-bold text-gray-800">Hacks to Supercharge Your Day</h3>
              <div className="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                <p className="text-gray-800 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
              </div>
            </div>
          </div>
          <div className="bg-white cursor-pointer rounded-lg overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
          <Image src={slider3} alt="slider3" 
         className="w-full h-96 object-cover" />
            <div className="p-6 absolute bottom-0 left-0 right-0 bg-pink-200 opacity-90">
              <span className="text-sm block text-gray-800 mb-2">5 OCT 2023 | BY SIMON KONECKI</span>
              <h3 className="text-xl font-bold text-gray-800">Trends and Predictions</h3>
              <div className="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                <p className="text-gray-800 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
              </div>
            </div>
          </div>
          <div className="bg-white cursor-pointer rounded-lg overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
          <Image src={slider4} alt="slider4" 
            className="w-full h-96 object-cover" />
            <div className="p-6 absolute bottom-0 left-0 right-0 bg-pink-200 opacity-90">
              <span className="text-sm block text-gray-800 mb-2">5 OCT 2023 | BY SIMON KONECKI</span>
              <h3 className="text-xl font-bold text-gray-800">Trends and Predictions</h3>
              <div className="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                <p className="text-gray-800 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
              </div>
            </div>
          </div>
          <div className="bg-white cursor-pointer rounded-lg overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
          <Image src={slider5} alt="slider5" 
            className="w-full h-96 object-cover" />
            <div className="p-6 absolute bottom-0 left-0 right-0 bg-pink-200 opacity-90">
              <span className="text-sm block text-gray-800 mb-2">5 OCT 2023 | BY SIMON KONECKI</span>
              <h3 className="text-xl font-bold text-gray-800">Trends and Predictions</h3>
              <div className="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                <p className="text-gray-800 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
              </div>
            </div>
          </div>
          <div className="bg-white cursor-pointer rounded-lg overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
          <Image src={slider6} alt="slider6"  
          className="w-full h-96 object-cover" />
            <div className="p-6 absolute bottom-0 left-0 right-0 bg-pink-200 opacity-90">
              <span className="text-sm block text-gray-800 mb-2">5 OCT 2023 | BY SIMON KONECKI</span>
              <h3 className="text-xl font-bold text-gray-800">Trends and Predictions</h3>
              <div className="h-0 overflow-hidden group-hover:h-16 group-hover:mt-4 transition-all duration-300">
                <p className="text-gray-800 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div></h1>
        </>
    )
}