import { FC, useEffect } from 'react'
import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom'
import Home from './components/Home'
import AppLayout from './components/AppLayout'
import ReactGA from 'react-ga4';

const Analytics = ({measurementId}: any): null => {
    const location = useLocation();
  
    useEffect(() => {
      ReactGA.initialize(measurementId)
    }, [measurementId]);
  
    useEffect(() => {
      ReactGA.send({ hitType: "pageview", page: location.pathname });
    }, [location])
  
    return null
  }

const Router: FC = () => (
        <BrowserRouter>
            <AppLayout>
                <Analytics measurementId={'G-8B7FYC8ETC'}/>
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                </Switch>
            </AppLayout>
        </BrowserRouter>
)


export default Router;