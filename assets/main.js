/// Object var
var countryName = { bdCountry  : "Bangladesh", inCountry : "India", }
var divisionName = { dDivision : "Dhaka", kDivision : "Kulna",}
var districtName = { rDistrict : "Rajbari", fDistrict : "Furidpur" }



document.querySelector("#countrys").addEventListener("change", function(){


    var selectedCountry = document.querySelector("#countrys").value;

    // alert(selectedCountry)

    if( selectedCountry == "" ){

        document.querySelector(".department").style.display="none";
        document.querySelector(".district").style.display="none";
        document.querySelector(".tana").style.display="none";


    }else if( selectedCountry == "bd" ){

        document.querySelector(".department").style.display="block";


    } 



});


document.querySelector("#Divisions").addEventListener("change", function(){


    var selectedDivisions = document.querySelector("#Divisions").value;

    // alert(selectedDivisions)

    if( selectedDivisions == "" ){

        document.querySelector(".district").style.display="none";
        document.querySelector(".tana").style.display="none";

    }else if( selectedDivisions == "dk" ){

        document.querySelector(".district").style.display="block";


    } 



});

document.querySelector("#Divisions").addEventListener("change", function(){


    var selectedDivisions = document.querySelector("#Divisions").value;

    // alert(selectedDivisions)

    if( selectedDivisions == "" ){

        document.querySelector(".district").style.display="none";


    }else if( selectedDivisions == "dk" ){

        document.querySelector(".district").style.display="block";


    } 



});

document.querySelector("#districts").addEventListener("change", function(){


    var selectedDivisions = document.querySelector("#districts").value;

    // alert(selectedDivisions)

    if( selectedDivisions == "" ){

        document.querySelector(".tana").style.display="none";


    }else if( selectedDivisions == "ra" ){

        document.querySelector(".tana").style.display="block";
        document.querySelector(".others").innerHTML=" <h1> Select Something  </h1>";


    } 



});


document.querySelector("#tanas").addEventListener("change", function(){


    var selectedthana = document.querySelector("#tanas").value;

    // alert(selectedthana)

    if( selectedthana == "" ){

        document.querySelector(".others").innerHTML=" <h1> Select Something  </h1>";
        // document.querySelector(".tana").style.display="none";


    }else if( selectedthana == "ph" ){

        document.querySelector(".others").innerHTML=" <h1> That like is a good jobs</h1>";
        // document.querySelector(".tana").style.display="block";


    } 



});







