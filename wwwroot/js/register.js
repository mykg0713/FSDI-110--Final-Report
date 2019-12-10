
function register(){
    console.log("registering car");

    //get values from fields
    //var ID = $("#txtID").val();
    var price = $("#txtPrice").val();
    var make = $("#txtMake").val();
    var model = $("#txtModel").val();
    var year = $("#txtYear").val();
    var capacity = $("#txtCapacity").val();
    var mileage = $("#txtMileage").val();
    var imageUrl = $("#txtImageUrl").val();
    var Stock = $("#txtStock").val();
    var hp = $("#txtHP").val();
    var cyls =$("#txtCyls").val();
    var desc = $("#txtDescription").val();

    var errorOccured = false;

    // data validations
    if(!year || isNaN(year)){
        //error with year
        errorOccured = true;
        $("#txtYear").addClass("error");
    }
    else{
        //parse year str into int
        //year = year * 1;
        year = parseInt(year);
        $("#txtYear").removeClass("error");
    }
    if(!price || isNaN(price)){
        //error with price
        errorOccured = true;
        $("#txtPrice").addClass("error");
    }
    else{
        //parse price str into float
        price = parseFloat(price);
        $("#txtPrice").removeClass("error");
    }
    if(errorOccured){

        //show an alert to tell the user to fix error 
        $("#errorAlert").removeClass("hide");
        return; //do not continue, we have errors
    }
        //hide the alert
        $("#errorAlert").addClass("hide");
        


    //create an object
    var car = {
        //Id : ID,
        DailyPrice : price,
        Make : make,
        Model : model,
        Year : year,
        PassengerCapacity : capacity,
        Mileage : mileage,
        ImageUrl : imageUrl,
        Stock : Stock,
        HP : hp,
        Cyls : cyls,
        Description : desc

    };

    console.log(car);

    
    

    //send the object on an Ajax req to the backend
    $.ajax({
        url: "/catalog/saveCar",
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(car),
        success : function(res){
            console.log("succees", res);

            //alert that Car has been saved
            $("#savedAlert").removeClass("hide");

            //set a timer to hide this alert after 3 secs
            setTimeout( function () {
                $("#savedAlert").addClass("hide");
            }, 3000);

            //clear the form
        },
        error: function(error){
            console.log("Error", error);
        }
    });

    //clear from

    //success notificiaton to user
}

function init(){
    console.log("Register Page");

    //hook events
    $("#btnSave").click(register);

}


window.onload = init;