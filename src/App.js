import ReactGA from 'react-ga4';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Router from './Router'
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { DarkModeProvider } from "./context/dark_mode";
import { WalletProvider } from "@solana/wallet-adapter-react";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-phantom";
import "@solana/wallet-adapter-react-ui/styles.css";
import './App.css'

const Analytics = ({ measurementId }) => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize(measurementId)
  }, [measurementId]);

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location])

  return null
}

const App = () => {
  const wallets = [new PhantomWalletAdapter()]
  return (
    <WalletProvider wallets={wallets} autoConnect>
      <WalletModalProvider>
        <DarkModeProvider>
          <Analytics measurementId={'G-8B7FYC8ETC'}/>
          <Router />
        </DarkModeProvider>
      </WalletModalProvider>
    </WalletProvider>
  )

}

export default App;
