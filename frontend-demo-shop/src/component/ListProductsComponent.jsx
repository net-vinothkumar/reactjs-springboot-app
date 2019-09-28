import React, { Component } from 'react'
import ProductService from '../service/ProductService';

class ListProductsComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            message: null
        }
        this.deleteProductClicked = this.deleteProductClicked.bind(this)
        this.updateProductClicked = this.updateProductClicked.bind(this)
        this.addProductClicked = this.addProductClicked.bind(this)
        this.refreshProducts = this.refreshProducts.bind(this)
    }

    componentDidMount() {
        this.refreshProducts();
    }

    refreshProducts() {
        ProductService.retrieveAllProducts()//HARDCODED
            .then(
                response => {
                    //console.log(response);
                    this.setState({ products: response.data })
                }
            )
    }

    deleteProductClicked(id) {
        ProductService.deleteProduct(id)
            .then(
                response => {
                    this.setState({ message: `Delete of product ${id} Successful` })
                    this.refreshProducts()
                }
            )

    }

    addProductClicked() {
        this.props.history.push(`/products/-1`)
    }

    updateProductClicked(id) {
        console.log('update ' + id)
        this.props.history.push(`/products/${id}`)
    }

    render() {
        console.log('render')
        return (
            <div className="container">
                <h3>All Products</h3>
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Description</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.products.map(
                                    product =>
                                        <tr key={product.id}>
                                            <td>{product.id}</td>
                                            <td>{product.description}</td>
                                            <td><button className="btn btn-success" onClick={() => this.updateProductClicked(product.id)}>Update</button></td>
                                            <td><button className="btn btn-danger" onClick={() => this.deleteProductClicked(product.id)}>Delete</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-primary" onClick={this.addProductClicked}>Add</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListProductsComponent