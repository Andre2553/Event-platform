import { DefaultUi, Player, Youtube } from "@vime/react";
import { FileArrowDown, GithubLogo, YoutubeLogo, CaretRight } from "phosphor-react";
import '@vime/core/themes/default.css';

interface VideoProps{
   lessonSlug:string
}

export function Video(props:VideoProps) {
   return (
      <div className="flex-1">
         <div className="bg-black flex justify-center">
            <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
               <Player>
                  <Youtube videoId="qT0VMdx7vuI"/>
                  <DefaultUi/>
               </Player>
            </div>
         </div>

         <div className="p-8 max-w-[1100px] mx-auto">
            <div className="flex items-start gap-16">
               <div className="flex-1">
                  <h1 className="text-2xl font-bold">fdsfdfdfsdfdsf</h1>
                  <p className="mt-4 text-gray-200 leading-relaxed">dsfsdfdsfsdfdsfdsfsdfds</p>
                  <div className="flex items-center gap-4 mt-6">
                     <img
                        src="https://github.com/andre2553.png"
                        alt=""
                        className="w-16 h-16 rounded-full border-2 border-blue-500"
                     />
                     <div className="leading-relaxed">
                        <strong className=" font-bold text-2xl block">Andre Lima</strong>
                        <span className="text-gray-200 text0sm block">fdsfgsdfgsdfsd</span>
                     </div>
                  </div>
               </div>

               <div className="flex flex-col gap-4">
                  <a href="" className="p-4 text-sm bg-red-600 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-red-800 transition-colors">
                     <YoutubeLogo size={24} />
                     Youtube channel
                  </a>
                  <a href="" className="p-4 text-sm bg-gray-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-gray-600 transition-colors">
                     <GithubLogo size={24} />
                     Access GitHub
                  </a>
               </div>
            </div>
            <div className="gap-8 mt-20 grid grid-cols-2">
               <a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                  <div className="bg-green-700 h-full p-6 flex items-center">
                     <FileArrowDown size={40} />
                  </div>
                  <div className="py-6 leading-relaxed">
                     <strong className="text-2xl">Download GitHub Desktop</strong>
                     <p className="text-sm text-gray-200 mt-2">
                        Download the GitHub Desktop app for Mac, Windows, and Linux. And make it easier to commit and review new codes.
                     </p>
                  </div>
                  <div className="h-full p-6 flex items-center">
                     <CaretRight size={24} />
                  </div>

               </a>
               <a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                  <div className="bg-green-700 h-full p-6 flex items-center">
                     <FileArrowDown size={40} />
                  </div>
                  <div className="py-6 leading-relaxed">
                     <strong className="text-2xl">Wallpapers</strong>
                     <p className="text-sm text-gray-200 mt-2">
                        Download GitHub's Wallpapers
                     </p>
                  </div>
                  <div className="h-full p-6 flex items-center">
                     <CaretRight size={24} />
                  </div>

               </a>

            </div>
         </div>
      </div>
   );
}