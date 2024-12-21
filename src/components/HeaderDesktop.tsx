import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Dropdown } from "antd";
import { FC } from "react";
import { Link } from "react-router-dom";

export const HeaderDesktop: FC = () => {

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

  return (
    <div className="flex flex-row items-center w-full">
        <Link to="/">
            <img src="/img/cato.png" alt="logo" height={40} width={40} className="rounded-[50px] mr-10" />
        </Link>
        <nav className="mr-auto">
            <div className="inline-block mr-10 text-[#1D0D00] cursor-pointer hover:text-white">
                <a target="_blank" rel="noopener noreferrer" href="https://docs.ogcato.com">
                    <span>Docs</span>
                </a>
            </div>
            <div className="inline-block mr-10 text-[#1D0D00] cursor-pointer hover:text-white">
                <a target="_blank" rel="noopener noreferrer" href="https://jup.ag/swap/USDC-5p2zjqCd1WJzAVgcEnjhb9zWDU7b9XVhFhx4usiyN7jB">
                    <span>Buy $CATO</span>
                </a>
            </div>
            <div className="inline-block mr-10 text-[#1D0D00] cursor-pointer hover:text-white">
                <a target="_blank"
                    rel="noopener noreferrer"
                    href="https://dexscreener.com/solana/gumfurfqvpaj2e5uecekyjmymnqbv34gu9tmikzyrkiv">
                    <span>Dexscreener</span>
                </a>
            </div>
            <div className="inline-block text-[#1D0D00] cursor-pointer hover:text-white mr-auto">
                <Dropdown menu={{ items }} placement="bottom">
                    <div>Socials</div>
                </Dropdown>
            </div>
        </nav>
        <WalletMultiButton disabled={true} />
    </div>
    )
}