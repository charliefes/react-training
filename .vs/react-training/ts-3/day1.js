{
    var user1 = { name: "Carlos", age: 40, status: "active" };
    var user2 = { name: "Melanie", age: 30, status: "inactive" };
    var users = [user1, user2];
    console.log("User1", user1);
    console.log("User2 Name:", user2.name);
    var statux = user1.status == "active" ? user1.status : "not loged in";
    var divusers = document.getElementById("users");
    var ulelement1 = "<li>".concat(user1.name, " ").concat(user1.age, "   ").concat(statux, "</li>");
    statux = user2.status == "active" ? user2.status : "not loged in";
    var ulelement2 = "<li>".concat(user2.name, " ").concat(user2.age, "  ").concat(statux, "</li>");
    var olelement = "<ol>".concat(ulelement1, " ").concat(ulelement2, " </ol>");
    divusers.innerHTML = olelement;
    var activeusers = document.getElementById("activeusers");
    var olelement2 = "<ol>";
    for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
        var element = users_1[_i];
        if (element.status === "active")
            olelement2 += "<li>".concat(element.name, " ").concat(element.age, "  ").concat(element.status, "</li>");
    }
    olelement2 += "</ol>";
    activeusers.innerHTML = olelement2;
}
