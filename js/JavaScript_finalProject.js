//CALCULATE YOUR AGE AND WEIGHT ON OTHER PLANETS

    function ageInYears(){

      //declare variables
      var daysOld;
      var monthsOld;
      var output;
      var outputBegin;
      var outputEnd;
      var planet;
      var yearsOld;

      var planetAgeData = [
        {name: "Mercury" , oribtalPeriod: 88} ,
        {name: "Venus" , oribtalPeriod: 225} ,
        {name: "Earth" , oribtalPeriod: 365} ,
        {name: "Moon" , oribtalPeriod: 27} , 
        {name: "Mars" , oribtalPeriod: 687} ,
        {name: "Jupiter" , oribtalPeriod: 11.8 * 365} ,
        {name: "Saturn" , oribtalPeriod: 29.4 * 365} ,
        {name: "Uranus" , oribtalPeriod: 84 * 365} ,
        {name: "Neptune" , oribtalPeriod: 164 * 365} 
        ];

      //prompt for user info
      yearsOld = prompt("How many years old are you?" , "19");
      monthsOld = prompt("How many months have passed since your last birthday?" , "1"); 

      //convert to numbers
      yearsOld = Number(yearsOld);
      monthsOld = Number(monthsOld);
      daysOld = Number(daysOld);

      //convert years to days 
      daysOld = (yearsOld * 365) + (monthsOld * 30);
      outputBegin = "You are about ";
      outputEnd = " years old on ";

      //determine age on all planets
      for(var index = 0; index < planetAgeData.length; index++){

         planet = planetAgeData[index];
         yearsOld = daysOld / planet["oribtalPeriod"];

         output = document.getElementById( planet["name"] );
         output.innerHTML += "<p>" + outputBegin +  Math.round(yearsOld) + outputEnd + planet["name"] + "</p>";

      }
    }
	
    ageInYears();

	
    function weightInPounds() {

      //declare variables
      var output;
      var outputBegin;
      var outputEnd;
      var planet;
      var pounds;
      var weightPounds;

      var planetWeightData = [
        {name: "Mercury" , planetSurfaceGravity: 0.38} ,
        {name: "Venus" , planetSurfaceGravity: 0.91} ,
        {name: "Earth" , planetSurfaceGravity: 1.0} ,
        {name: "Moon" , planetSurfaceGravity: 0.17} , 
        {name: "Mars" , planetSurfaceGravity: 0.38} ,
        {name: "Jupiter" , planetSurfaceGravity: 2.53} ,
        {name: "Saturn" , planetSurfaceGravity: 1.06} ,
        {name: "Uranus" , planetSurfaceGravity: 0.90} ,
        {name: "Neptune" , planetSurfaceGravity: 1.20} 
      ];

      //prompt user for information
      pounds = prompt("What is your weight in pounds?" , "113");

      //convert to number
      pounds = Number(pounds);
      
      outputBegin = "\n\nYour weight is ";
      outputEnd = " pounds on ";

      //calculate weight on other planets
      for(var index = 0; index < planetWeightData.length; index++){

         planet = planetWeightData[index];
         weightPounds = pounds * planet["planetSurfaceGravity"];

         output = document.getElementById( planet["name"] );
         output.innerHTML += "<p>" + outputBegin +  Math.round(weightPounds) + outputEnd + planet["name"] + "</p>";

      }

      document.write(output); 

    }

    weightInPounds();
	
	
	