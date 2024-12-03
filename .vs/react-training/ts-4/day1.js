{
    var user1 = { name: "Carlos", age: 40, status: "active" };
    var user2 = { name: "Melanie", age: 30, status: "inactive" };
    var users_1 = [user1, user2];
    console.log("User1", user1);
    console.log("User2 Name:", user2.name);
    var statux = user1.status == "active" ? user1.status : "not loged in";
    var divusers_1 = document.getElementById("users");
    var ulelement1 = "<li>".concat(user1.name, " ").concat(user1.age, "   ").concat(statux, "</li>");
    statux = user2.status == "active" ? user2.status : "not loged in";
    var ulelement2 = "<li>".concat(user2.name, " ").concat(user2.age, "  ").concat(statux, "</li>");
    var olelement = "<ol>".concat(ulelement1, " ").concat(ulelement2, " </ol>");
    divusers_1.innerHTML = olelement;
    var activeusers_1 = document.getElementById("activeusers");
    var logInUsers = function () {
        var olelement2 = "<ol>";
        for (var _i = 0, users_2 = users_1; _i < users_2.length; _i++) {
            var element = users_2[_i];
            if (element.status === "active")
                olelement2 += "<li>".concat(element.name, " ").concat(element.age, "  ").concat(element.status, "</li>");
            else {
                element.status = "active";
                olelement2 += "<li>".concat(element.name, " ").concat(element.age, "  ").concat(element.status, "</li>");
            }
        }
        olelement2 += "</ol>";
        activeusers_1.innerHTML = olelement2;
    };
    var printUsers = function () {
        var olelement = "<ol>";
        for (var _i = 0, users_3 = users_1; _i < users_3.length; _i++) {
            var element = users_3[_i];
            olelement += "<li>".concat(element.name, " ").concat(element.age, " <button onclick=activateUser()> ").concat(element.status, " </button> </li>");
        }
        olelement += "</ol>";
        divusers_1.innerHTML = olelement;
    };
    printUsers();
}
