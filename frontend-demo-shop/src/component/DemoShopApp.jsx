import React, { Component } from 'react';
import ListProductsComponent from './ListProductsComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ProductComponent from './ProductComponent';

class DemoShopApp extends Component {
    render() {
        return (
            <Router>
                <>
                    <h1>Online Demo Shop Application</h1>
                    <Switch>
                        <Route path="/" exact component={ListProductsComponent} />
                        <Route path="/products" exact component={ListProductsComponent} />
                        <Route path="/products/:id" component={ProductComponent} />
                    </Switch>
                </>
            </Router>
        )
    }
}

export default DemoShopApp