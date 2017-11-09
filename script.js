$(document).ready(function () {


    function Car(brand, modal, year, km) {
        this.newBrand = brand;
        this.newModel = model;
        this.newYear = year;
        this.newKm = km;
        //this.fullName = this.firstName + " " + this.lastName;
        this.errCar = function () { return this.firstName + " " + this.lastName };

            alert("Submitted");
    };




    $("#btn-add").click(function () {
        // Read all data
        var brand = document.getElementById("brand").value;
        var modal = document.getElementById("model").value;
        var year = document.getElementById("year").value;
        var km = document.getElementById("km").value;


        // Create car instance using the data above
        // var car = new Car(...)

        // Add car to array
        // arrCar.push(car);


    });
});

