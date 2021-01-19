import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Report } from '../ui/screens/report/Report.screen.jsx';
import { ReportList } from '../ui/screens/report/ReportList.jsx'


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact>
                    <ReportList />
                </Route>
            </Switch>
            <Switch>
                <Route path='/report' exact>
                    <Report />
                </Route>
            </Switch>
        </BrowserRouter>

    )

}

export default Routes