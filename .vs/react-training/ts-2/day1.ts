{

    type user = {
        name:string,
        age:number ,
        status:string

    }

    const user1:user = {name:"Carlos",age:40,status:"active"};
    const user2:user = {name:"Melanie",age:30,status:"active"};

    const users:user[] = [user1, user2];

    console.log("User1",user1);
    console.log("User2 Name:",user2.name);
    
    





}