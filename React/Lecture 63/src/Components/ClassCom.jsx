import React, { Component } from "react";
class ClassCom extends Component {
    constructor() {
        super();

        this.state = {
            num: 7,
            num2: 733456,
        };
    }

    render() {
        const { props: { name }, state: { num, num2 }  } = this;
        console.log(name);
        return (
            <div>
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
