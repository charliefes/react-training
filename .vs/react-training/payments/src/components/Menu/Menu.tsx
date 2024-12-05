
const Menu =() : React.ReactElement => {
    return (
        <ul className = "menu">
                <Title/>
                <li > Find transaction</li>
                <li> New transaction</li>     
        </ul>
       
    );
}


const Title =() : React.ReactElement => {
    return (
  
                <li className = "title">Payments Application</li>    
    
       
    );
}



export default Menu