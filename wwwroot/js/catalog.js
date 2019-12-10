
function getCatalog(){
    //create AJAX req to getcatalog
    //print the catalog

    $.ajax({
        url: "/catalog/getCatalog",
        type: 'GET',
        success : function(res) {
            console.log("succeed", res);
            for(var i=0; i< res.length; i++){
                var item = res[i];
                displayCar(item);
            }   
        },
        error: function(error){
            console.log("Error", error);
        }
    });
}

function displayCar(car){
    // get the root element (where you want to display it)
    var container = $("#catalogContainer");

    //create the template for the car
    var template = 
    `<div class="col-4 item">

        <div class="row">
            <div class="col-7">
                <img src="${car.imageUrl}">
            </div>
               
            <div class="col-5">
            <label class="info-title">Year</label>
            <label class="info-value">${car.year}</label>
            <br>

            <label class="info-title">Make</label>
            <label class="info-value">${car.make}</label>
            <br>

            <label class="info-title">Model</label>
            <label class="info-value">${car.model}</label>
            <br>
                
            </div>
        </div>

        <div class="row">
            <div class="col-12">
            <label class="info-title">Description</label>
                <p>${car.description}</p>
            </div>
        </div>
    </div>`;

    //add the template to the root element
    container.append(template);
}

function init(){
    conosole.log("Catalog Page");

    getCatalog();
}



window.onload = init;

//VACATIONS:
// 21 DEC - 5 JAN