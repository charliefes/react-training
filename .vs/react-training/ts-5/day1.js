{
    var transactions_1 = [];
    var balance_1 = 0;
    var viewtransactions_1 = document.getElementById("viewtransactions");
    var printTransactions_1 = function () {
        var olelement = "<ol>";
        for (var _i = 0, transactions_2 = transactions_1; _i < transactions_2.length; _i++) {
            var element = transactions_2[_i];
            olelement += "<li>".concat(element.description, " ").concat(element.amount, " ").concat(element.date, " </li>");
        }
        olelement += "</ol>";
        viewtransactions_1.innerHTML = olelement;
        var balancetag = document.getElementById("balance");
        balancetag.innerHTML = String(balance_1);
    };
    var addTransaction = function () {
        var amountI = document.getElementById("amount");
        var amount = +amountI.value;
        balance_1 += amount;
        amountI.value = "";
        var descriptionI = document.getElementById("description");
        var description = descriptionI.value;
        var newtransaction = { amount: amount, date: new Date, description: description };
        descriptionI.value = "";
        transactions_1.push(newtransaction);
        printTransactions_1();
    };
}
