{

    type transaction = {
        amount:number ,
        date:Date,
        description:string

    }


    const transactions:transaction[] = [];
    let balance = 0;

    const viewtransactions:HTMLDivElement = document.getElementById("viewtransactions") as HTMLDivElement;

    const printTransactions = ()  =>{
        let olelement = "<ol>"
        for(const element of transactions){        
                    olelement += `<li>${element.description} ${element.amount} ${element.date} </li>`
        }

        olelement += "</ol>"
        viewtransactions.innerHTML = olelement;
        let balancetag: HTMLSpanElement  = document.getElementById("balance") as HTMLSpanElement;
        balancetag.innerHTML = String(balance);

    }

    const addTransaction = ()  =>{
        let amountI: HTMLInputElement  = document.getElementById("amount") as HTMLInputElement;
        let amount: number = +amountI.value;
        balance += amount;
        amountI.value ="";

        let descriptionI: HTMLInputElement  = document.getElementById("description") as HTMLInputElement;
        let description: string = descriptionI.value;
        let newtransaction: transaction = {amount:amount, date:new Date, description}
        descriptionI.value = "";
        transactions.push(newtransaction);
        printTransactions();
    }


}


   


