$(document).ready(function () {
    var cars = [];

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
        var model = document.getElementById("model").value;
        var year = document.getElementById("year").value;
        var km = document.getElementById("km").value;
        cars = [brand, model, year, km]
    


        // Create car instance using the data above


/*
        // This creates an instance of the object Person
        var nir = new Person("Nir", "Channes");
        var john = new Person("John", "Doe");
        console.log(person);
        console.log(nir);
        console.log(nir.fullName());
        // var car = new Car(...)

        // Add car to array
        // arrCar.push(car);
*/

    });
});

