import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Drawer, Dropdown } from "antd";
import { FC, useState } from "react";
import { Link } from "react-router-dom";

export const HeaderMobile: FC = () => {

    const items = [
        {
          key: '1',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://x.com/SolanaCATO"
              className="flex flex-row items-center justify-content">
              <img src="/img/x.png" alt="Twitter" className="h-5 w-5 rounded-[50px] mr-2" />
              <span>Twitter</span>
            </a>
          ),
        },
        {
          key: '2',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://t.me/SolanaCAT"
              className="flex flex-row items-center justify-content">
              <img src="/img/telegram.png" alt="Telegram" className="h-5 w-5 rounded-[50px] mr-2" />
              <span>Telegram</span>
            </a>
          ),
        },
        {
          key: '3',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/solanascato"
              className="flex flex-row items-center justify-content">
              <img src="/img/discord.jpg" alt="Discord" className="h-5 w-5 rounded-[50px] mr-2" />
              <span>Discord</span>
            </a>
          ),
        },
        {
          key: '4',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/SOL-CAT"
              className="flex flex-row items-center justify-content">
              <img src="/img/github.png" alt="Github" className="h-5 w-5 rounded-[50px] mr-2" />
              <span>Github</span>
            </a>
          ),
        }
      ]

    const [openDrawer, setOpenDrawer] = useState(false)

    return (
        <div>
            <div onClick={() => setOpenDrawer(true)}>
                <img src="/img/hamburger.jpg" alt="hamburger" className="h-12 w-12 absolute left-0 top-0" />
            </div>
            <Drawer
                title={null}
                onClose={() => setOpenDrawer(false)}
                open={openDrawer}
                placement="left"
                className="mobile-header-drawer"
                closeIcon={<div className="text-white text-[25px]">X</div>}
                width="100%">
                <div className="flex flex-col items-center w-full p-10">
                    <Link to="/">
                        <img src="/img/cato.png" alt="logo" height={80} width={80} className="rounded-[50px]" />
                    </Link>
                    <nav className="mt-[60px]">
                        <div className="text-[#1D0D00] text-center mb-10 text-[25px]">
                            <a target="_blank" 
                                rel="noopener noreferrer" 
                                href="https://docs.ogcato.com" 
                                className="visited:text-[#1D0D00]">
                                    <span>Docs</span>
                            </a>
                        </div>
                        <div className="text-[#1D0D00] text-center mb-10 text-[25px]">
                            <a target="_blank" 
                                rel="noopener noreferrer" 
                                href="https://jup.ag/swap/USDC-5p2zjqCd1WJzAVgcEnjhb9zWDU7b9XVhFhx4usiyN7jB"
                                className="visited:text-[#1D0D00]">
                                <span>Buy $CATO</span>
                            </a>
                        </div>
                        <div className="text-[#1D0D00] text-center mb-10 text-[25px]">
                            <a target="_blank"
                                rel="noopener noreferrer"
                                href="https://dexscreener.com/solana/gumfurfqvpaj2e5uecekyjmymnqbv34gu9tmikzyrkiv"
                                className="visited:text-[#1D0D00]">
                                <span>Dexscreener</span>
                            </a>
                        </div>
                        <div className="text-[#1D0D00] text-center text-[25px]">
                            <Dropdown menu={{ items }} placement="bottom">
                                <div>Socials</div>
                            </Dropdown>
                        </div>
                    </nav>
                </div>
            </Drawer>
            <div className="absolute right-2.5 top-2.5">
                <WalletMultiButton disabled={true} />
            </div>
        </div>
    )
}