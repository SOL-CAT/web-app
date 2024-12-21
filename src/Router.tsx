import { FC } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import AppLayout from './components/AppLayout'


const Router: FC = () => (
        <BrowserRouter>
            <AppLayout>
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                </Switch>
            </AppLayout>
        </BrowserRouter>
)


export default Router;