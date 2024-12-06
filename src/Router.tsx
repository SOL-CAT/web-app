import { FC } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import AppLayout from './components/AppLayout'


const Router: FC = () => (
    <AppLayout>
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    </AppLayout>
)


export default Router;