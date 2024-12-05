


const Greeting =(myname:GreetingType) : React.ReactElement => {
    return (
        <p>Hello world! fron componet Greeting - {myname.message}</p>
    );
}

type GreetingType = {
message : string
language ? : string
}

export default Greeting
