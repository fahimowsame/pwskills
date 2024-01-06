let TypeofPackege = "express"

switch (TypeofPackege) {
    case "standard":
        console.log ("your package will delivered 3-5 days");
        break;

    case "express":
        console.log ("your package will delivered 1-2 days");
        break;

    case "overnight":
        console.log ("your package will delivered next day");
        break;

    default:
        console("You did not orderd yet")   

}