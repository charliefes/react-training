{

    type user = {
        name:string,
        age:number ,
        status:string

    }

    const user1:user = {name:"Carlos",age:40,status:"active"};
    const user2:user = {name:"Melanie",age:30,status:"inactive"};

    const users:user[] = [user1, user2];

    console.log("User1",user1);
    console.log("User2 Name:",user2.name);
    let statux = user1.status == "active"? user1.status: "not loged in"

    const divusers:HTMLDivElement = document.getElementById("users") as HTMLDivElement;

    const ulelement1 = `<li>${user1.name} ${user1.age}   ${statux}</li>`

    statux = user2.status == "active"? user2.status: "not loged in"

    const ulelement2 = `<li>${user2.name} ${user2.age}  ${statux}</li>`

    const olelement = `<ol>${ulelement1} ${ulelement2} </ol>`

    divusers.innerHTML = olelement;


    const activeusers:HTMLDivElement = document.getElementById("activeusers") as HTMLDivElement;
    
    let olelement2 = "<ol>"
   for(const element of users){
        if(element.status === "active")
            olelement2 += `<li>${element.name} ${element.age}  ${element.status}</li>`

   }
    
   olelement2 += "</ol>"
   activeusers.innerHTML = olelement2;
    





}