// serializar el input en función de un regex

const dataSplitter = (data) => {
  /**
   * Función que permite, en función de la data pasada, devolver el número y la unidad enviada por el cliente
   * data @type {string}
   * @type {Array}
   */
  const number = input.match(/[.\d\/]+/g) || ["1"];
  const string = input.match(/[a-z][A-Z]+/g)[0];

  return [number[0], string]
}

const checkDivision = (potentialFraction) => {
  /**
   * Función que permite checkear división de 2 números si se ingresa 
   * 2/3 -> return ["2","3"]
   * 2 -> ["2"]
   * 2/3/3 -> false
   */
  const nums = potentialFraction.split('/'); // En caso de que exista un dígito /
  if(nums.length > 2){ // Si 
    return false
  }
  return nums
}

const defUnits = {
  km: ["mi", "kilometers"],
  mi: ["km", "miles"],

  gal: ["L", "galons" ],
  L: ["gal", "liters"],

  lbs: ["kg", "pounds"],
  kg: ["lbs", "kilograms"],

}

const units = Object.keys(defUnits);

function ConvertHandler() {
  
  this.getNum = function(input) {
    const data = dataSplitter(input)[0];
    const nums = checkDivision(data);

    if(!nums){
      return undefined
    }
    
    const num1 = nums[0];
    const num2 = nums[1] || "1";

    if(isNaN(num1) || isNaN(num2)){
      return undefined
    }

    const result = parseFloat(num1) / parseFloat(num2);
    
    return result;
  };
  
  this.getUnit = function(input) {
    const result = dataSplitter(input)[1].toLowerCase(); // We should pass it as Lower Case
    
    // Check if the result is in the array of units
    if (!units.includes(result)){
      return undefined
    }

    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    const _unit = initUnit.toLowerCase();
    const unitData = units.find(unit => {
      // if (defUnits[unit][0] === "l"){
      //   return "L"
      // }
      unit === _unit
    })[0];


    
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
