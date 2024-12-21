import { FC } from "react";
import useBreakPoint from "../hooks/useBreakpoint";

const Home: FC = () => {
    const {isMobile, isTablet, isDesktop} = useBreakPoint()

    return (
        <>
            <div className="flex flex-row items-center h-screen justify-center p-10 ml-[5%] 
                max-sm:p-0 md-lg:p-0 max-sm:ml-0 md-lg:ml-0">
                <div className="max-sm:w-[95%] md-lg:w-[95%]">
                    {(isMobile || isTablet) && 
                    <img src="/img/cato_cat.png" alt="big-cato" 
                    className="max-h-[375px] mx-auto"/>
                    }
                    <div className="font-sans text-[4.5vw] mb-8 max-sm:text-center md-lg:text-center">
                        The OG First CAT on Solana from 2021
                    </div>
                    <div className="flex flex-row mb-10 items-center w-[120%] max-sm:justify-center md-lg:justify-center max-sm:w-full md-lg:w-full">
                        <span className="font-sans font-normal text-[18px] max-sm:text-[3vw] md-lg:text-[3vw]">
                            CA: 5p2zjqCd1WJzAVgcEnjhb9zWDU7b9XVhFhx4usiyN7jB
                        </span>
                        <a href="https://solscan.io/token/5p2zjqCd1WJzAVgcEnjhb9zWDU7b9XVhFhx4usiyN7jB"
                            className="cursor-pointer"
                            target="_blank"
                            rel="noopener noreferrer">
                            <img src="/img/solscan.jpg" alt="solscan" className="h-5 w-5 rounded-[50%] ml-1" />
                        </a>
                    </div>
                    <div>
                        <input 
                            type="text"
                            placeholder="Enter your email"
                            className="h-[52px] w-3/5 focus:outline-none p-2.5 max-sm:w-3/5 md-lg:w-3/5"
                        />
                        <button className="h-[52px] w-2/5 max-sm:w-2/5 md-lg:w-2/5 bg-yellow focus:outline-none">
                            Submit
                        </button>
                    </div>
                    <div className="flex flex-row max-sm:justify-center md-lg:justify-center max-sm:mt-10 md-lg:mt-10 mt-[100px]">
                        <img src="img/brandLogos.svg" alt="brand-logos" />
                    </div>
                </div>
                {isDesktop && <img src="/img/cato_cat.png" alt="big-cato" />}
            </div>
        </>
    )
}

export default Home