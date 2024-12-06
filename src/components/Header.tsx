import { FC } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import "../App.css"
import Logo from "./Logo";
import { useDarkMode } from "../context/dark_mode";

const Header: FC = () => {
    const { mode, toggleMode } = useDarkMode()
    return(
        <div className="w-screen flex items-center fixed top-0 z-[10] h-[56px]">
        <Logo />
        <div className="flex flex-row items-center absolute right-0 mr-5">
            <div className="bg-red-900 h-10 w-10 flex flex-row items-center 
            justify-center rounded-[50px] mr-2.5 cursor-pointer"
            onClick={toggleMode}>
                <img src={`/img/${mode}.svg`} alt="dark-mode-icn" height={20} width={20} />
            </div>
            <WalletMultiButton />
        </div>
    </div>
    )
}

export default Header;