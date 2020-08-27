import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



/*
class Message extends Component {
    
    state = {
        open: true,
        data: [],
        loading: false
    }
    
    toggleOpenClosed = () => {
        this.setState(prevState => ({
            open: !prevState.open
        })
        
        )
    } 

    componentDidMount(){
        this.setState({loading: true})
        fetch("http://hplussport.com/api/products/order/price/sort/asc/qty/1")
        .then(data => data.json())
        .then(data => this.setState({data, loading: false}))
    }

    componentDidUpdate(){
        console.log("Updated Successfully!")
    }
    
    render() {
        
        return (
            <div>
            <button onClick={this.toggleOpenClosed}>change</button>
            
                <h1>The library is: {this.state.open ? "open" : "closed"}</h1>

                {this.state.loading ? "Loading ..." :
                <div>
                    {this.state.data.map(product => {
            
                        return (
                            <div key={product.id}>
                                <h4>{product.name}</h4>
                                <p>{product.description}</p>
                                <img alt={product.name} src={product.image} />
                            </div>
                        )
            })}
                </div>
                }
            
            </div>
        )
    }
}
*/


class MyForm extends React.Component {
    
    state = {
        value: ""
    }

    newVal = (v) =>{
        this.setState({value: v.target.value})
    }
    
    render() {
        return (
            <section>
            <form>
                <label>Choose Color: 
                    <input type="color"
                    onChange = {this.newVal}
                
                    />
                
                </label>
            
                </form>
            
            <div>
                Value: {this.state.value}
            </div>
            </section>

        )
        
    }
}


ReactDOM.render(
    <MyForm />,
    document.getElementById("root")
    
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
