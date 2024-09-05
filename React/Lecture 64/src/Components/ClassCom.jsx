import React, { Component } from "react";
class ClassCom extends Component {
    constructor() {
        super();

        this.state = {
            num: 7,
            num2: 733456,
        };
        
        // this.timer = setInterval(() => {
        //     console.log("hello class component")
        // }, 1000);

        console.log("constructor");

        
    }

    async fetchData() {
        //fetching
        console.log("data fetching start....");
    }

    componentDidMount(){
         this.fetchData();
    }

    componentDidUpdate(prevProps,prevState){
        
        // console.log(prevProps,prevState);
        if(prevState.num !== this.state.num){
            this.fetchData()
        }
    }
    
    componentWillUnmount(){
        // clearInterval(this.timer)
        console.log("unmount");
    }

    render() {
        console.log("render");
        

        // fetchData();

        const {
            props: { name },
            state: { num, num2 },
        } = this;
        // console.log(name);
        return (
            <div>
                <p>{console.log("dom rendered")}</p>
                <h1>{name}</h1>
                <h1>class Component</h1>
                <button
                    onClick={() => {
                        this.setState({
                            num: num + 1,
                        });
                    }}
                >
                    increment
                </button> 
                <p>{num}</p>
            </div>
        );
    }
}

export default ClassCom;
