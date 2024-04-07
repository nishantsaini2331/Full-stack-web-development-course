import Product from "./components/Product"



function App({shoeData}) {
    // let a = 5;
    // let b = 5;
    // let c = a + b;
    // console.log(c);
    return (
        <div>
            {/* {shoeData.map((data) => {
                return <Product title={data.title} price={data.price} />;
            })} */}


            {/* {shoeData.map((data) => (
                <Product title={data.title} price={data.price} />
            ))} */}

            {shoeData.map((data) => <Product key={data.id} title={data.title} price={data.price} />)}
        </div>
    );
}

// const App = () => {
//     return <div>Hello sir</div>;
// }

export default App;
