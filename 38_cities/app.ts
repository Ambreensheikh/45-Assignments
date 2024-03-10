 //function that subscribe name of its city and its country

    function describe_city(cityName : string ,countryName : string = 'Pakistan.'){

      console.log(`${cityName} is in ${countryName}`);
    }
describe_city(`Karachi`);
describe_city(`Agra`,`India.`);
describe_city(`tehran`, `Iran.`);
describe_city(`hyderabad`);