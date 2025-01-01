import { ChangeEvent, FC, useEffect, useState } from "react";
import useBreakPoint from "../hooks/useBreakpoint";
import { isValidEmail } from "../utils";
import { saveUserEmail } from "../api/actions";

const Home: FC = () => {
    const { isMobile, isTablet, isDesktop } = useBreakPoint()
    const [userEmail, setUserEmail] = useState<string>('')
    const [isEmailEntered, setIsEmailEntered] = useState<boolean>(false)
    const [isEmailValid, setIsEmailValid] = useState<boolean>(false)
    const [isEmailSubmitted, setIsEmailSubmitted] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [uiMessage, setUiMessage] = useState<string>('')

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserEmail(e?.target?.value)
        setIsEmailValid(true)
        setIsEmailEntered(false)
        setIsEmailSubmitted(false)
    }

    const handleEmailSubmit = async () => {
        setIsEmailEntered(true)
        setIsEmailValid(isValidEmail(userEmail))
        if (isValidEmail(userEmail)) {
            setIsLoading(true)
            const id = await saveUserEmail(userEmail)
            if (id) {
                setIsEmailSubmitted(true)
                setTimeout(() => {
                    setUserEmail('')
                    setUiMessage('')
                    setIsEmailEntered(false)
                }, 3000)
            }
            else setIsEmailSubmitted(false)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        if(isEmailEntered && !isEmailValid) setUiMessage('Please enter a valid email!')
        if(isLoading) setUiMessage('Loading!')
        else if(isEmailEntered && !isEmailSubmitted && isEmailValid) setUiMessage('Some error occured, please try again!')
        else if(isEmailEntered && isEmailSubmitted) setUiMessage('You\'re now catofied!')
    }, [isEmailEntered, isEmailValid, isLoading, isEmailSubmitted])

    return (
        <>
            <div className="flex flex-row items-center h-screen justify-center p-10 ml-[5%] 
                max-sm:p-0 md-lg:p-0 max-sm:ml-0 md-lg:ml-0">
                <div className="max-sm:w-[95%] md-lg:w-[95%]">
                    {(isMobile || isTablet) && <img src="/img/cato_cat.png" alt="big-cato"
                        className="max-h-[375px] mx-auto" />
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
                    <div className="relative h-[90px]">
                        <input
                            type="text"
                            placeholder="Enter your email"
                            className="h-[52px] w-3/5 focus:outline-none p-2.5 max-sm:w-3/5 md-lg:w-3/5"
                            onChange={handleEmailChange}
                            value={userEmail}
                        />
                        <button
                            className="h-[52px] w-2/5 max-sm:w-2/5 md-lg:w-2/5 bg-yellow focus:outline-none"
                            onClick={handleEmailSubmit}>
                            Submit
                        </button>
                        {(isEmailEntered && !isEmailValid) && (
                            <div className="flex flex-row items-center absolute bottom-0">
                                <img src="/img/red-cross.png" alt="red-cross" className="rounded-[100%] h-8 w-8" />
                                <span className="font-bold">{uiMessage}</span>
                            </div>
                        )}
                        {isLoading ? (
                            <div className="flex flex-row items-center">
                                <span className="font-bold">{uiMessage}</span>
                            </div>
                            ) : (isEmailEntered && !isEmailSubmitted && isEmailValid) ? (
                                <div className="flex flex-row items-center">
                                    <img src="/img/red-cross.png" alt="red-cross" className="rounded-[100%] h-8 w-8" />
                                    <span className="font-bold">{uiMessage}</span>
                                </div>
                            ) : (isEmailEntered && isEmailSubmitted) ? (
                                <div className="flex flex-row items-center">
                                    <img src="/img/green-tick.png" alt="green-tick" className="rounded-[100%] h-8 w-8"/>
                                    <span className="font-bold">{uiMessage}</span>
                                </div>
                            ) : <></>
                        }
                    </div>
                    <div className="flex flex-row max-sm:justify-center md-lg:justify-center max-sm:mt-10 md-lg:mt-10 mt-[100px]">
                        <img src="img/brand-1.svg" alt="brand-logo" className="mr-5 max-sm:w-[55px]"/>
                        <img src="img/brand-3.svg" alt="brand-logo" className="mr-6 max-sm:w-[55px]"/>
                        <img src="img/brand-2.svg" alt="brand-logo" className="max-sm:w-[200px]"/>
                    </div>
                </div>
                {isDesktop && <img src="/img/cato_cat.png" alt="big-cato" />}
            </div>
        </>
    )
}

export default Home