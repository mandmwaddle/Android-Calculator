showElement("spin");
// This sets the app in motion
var Na = "NaN";
hide();
penUp();
moveTo(46, 355);
penDown();
moveTo(24, 355);
moveTo(24, 80);
penUp();
moveTo(284, 355);
penDown();
moveTo(284, 314);
turnRight(90);
moveForward(25);
turnLeft(90);
moveForward(39);
turnLeft(90);
moveTo(275, 275);
moveTo(275, 82);
turnRight(90);
moveForward(50);
penUp();
onEvent("page1", "click", function() {
  setScreen("screen2");
});
onEvent("page2", "click", function() {
  setScreen("screen1");
});
onEvent("french", "click", function() {
  setProperty("french", "text", "Please restart the app to get back to english/Veuillez redémarrer l'application pour revenir à l'anglais");
  setProperty("label1", "text", "Calculatrice");
  setPosition("label1", 65, 15);
  setProperty("add", "text", "Ajouter");
  setProperty("sub", "text", "Soustraire");
  setProperty("times", "text", "Multiplier");
  setProperty("divide", "text", "Diviser");
  setProperty("label2", "text", "Réalisé par Michael Waddle");
  setProperty("clear", "text", "Clair");
  setProperty("save", "text", "sauvegarder");
  setProperty("save", "font-size", "10");
});
onEvent("pi", "click", function() {
  setNumber("savet", 3.14159);
});
//this is the math area 
onEvent("add", "click", function() {
  showElement("spin");
  setText("equals", "");
  var x = getNumber("input1");
  var y = getNumber("input2");
  var m = x + y;
  setNumber("equals", m);
  hideElement("spin");
  if (getText("equals") == Na) {
    setText("equals", "0");
  }
});
onEvent("sub", "click", function() {
  showElement("spin");
  setText("equals", "");
  var x = getNumber("input1");
  var y = getNumber("input2");
  var m = x - y;
  setNumber("equals", m);
  hideElement("spin");
  if (getText("equals") == Na) {
    setText("equals", "0");
  }
});
onEvent("times", "click", function() {
  showElement("spin");
  setText("equals", "");
  var x = getNumber("input1");
  var y = getNumber("input2");
  var m = x * y;
  setNumber("equals", m);
  hideElement("spin");
  if (getText("equals") == Na) {
    setText("equals", "0");
  }
});
onEvent("divide", "click", function() {
  showElement("spin");
  setText("equals", "");
  var x = getNumber("input1");
  var y = getNumber("input2");
  var m = x / y;
  setNumber("equals", m);
  hideElement("spin");
  if (getText("equals") == Na) {
    setText("equals", "0");
  }
});
//this makes a random number 
onEvent("randnum", "click", function() {
  showElement("spin");
  setText("equals", "");
  setScreen("screen1");
  setText("equals", randomNumber(0, 9999));
  hideElement("spin");
});
//this shows the changelog 
onEvent("Change", "click", function() {
  setScreen("screen3");
});
onEvent("page1c", "click", function() {
  setScreen("screen1");
});
//this is the clear, move and save area
onEvent("clear", "click", function() {
  setText("equals", "");
  setText("input1", "");
  setText("input2", "");
  setText("savet", "");
  setText("numpaddrop", "Entry Box 1");
  if (getText("numpaddrop") == "Entry Box 1") {
    setText("numpadbox", "");
    numpaddigit = 1;
    setText("numpadsent", "");
    numpad1 = "0";
    numpad2 = "0";
    numpad3 = "0";
    numpad4 = "0";
    numpad5 = "0";
    numpad6 = "0";
    numpad7 = "0";
    numpad8 = "0";
  }
});
onEvent("toinput1", "click", function() {
  setNumber("input1", getNumber("equals"));
  if (getText("input1") == Na) {
    setText("input1", "0");
  }
});
onEvent("toinput2", "click", function() {
  setNumber("input2", getNumber("equals"));
  if (getText("input2") == Na) {
    setText("input2", "0");
  }
});
onEvent("save", "click", function() {
  setNumber("savet", getNumber("equals"));
  setNumber("savet2", getNumber("equals"));
  setNumber("savet3", getNumber("equals"));
  setNumber("savet4", getNumber("equals"));
  setNumber("savet5", getNumber("equals"));
  if (getText("savet4") == Na) {
    setText("savet4", "0");
  }
  if (getText("savet") == Na) {
    setText("savet", "0");
  }
  if (getText("savet2") == Na) {
    setText("savet2", "0");
  }
  if (getText("savet3") == Na) {
    setText("savet3", "0");
  }
  if (getText("savet5") == Na) {
    setText("savet5", "0");
  }
});
onEvent("save2", "click", function() {
  setNumber("savet", getNumber("convertdone"));
  setNumber("savet2", getNumber("convertdone"));
  setNumber("savet3", getNumber("convertdone"));
  setNumber("savet4", getNumber("convertdone"));
  setNumber("savet5", getNumber("convertdone"));
  if (getText("savet4") == Na) {
    setText("savet4", "0");
  }
  if (getText("savet") == Na) {
    setText("savet", "0");
  }
  if (getText("savet2") == Na) {
    setText("savet2", "0");
  }
  if (getText("savet3") == Na) {
    setText("savet3", "0");
  }
  if (getText("savet5") == Na) {
    setText("savet5", "0");
  }
});
onEvent("save3", "click", function() {
  setNumber("savet", getNumber("Convertdone"));
  setNumber("savet2", getNumber("Convertdone"));
  setNumber("savet3", getNumber("Convertdone"));
  setNumber("savet4", getNumber("Convertdone"));
  setNumber("savet5", getNumber("Convertdone"));
  if (getText("savet4") == Na) {
    setText("savet4", "0");
  }
  if (getText("savet") == Na) {
    setText("savet", "0");
  }
  if (getText("savet2") == Na) {
    setText("savet2", "0");
  }
  if (getText("savet3") == Na) {
    setText("savet3", "0");
  }
  if (getText("savet5") == Na) {
    setText("savet5", "0");
  }
});
onEvent("save4", "click", function() {
  setNumber("savet", getNumber("COnvertdone"));
  setNumber("savet2", getNumber("COnvertdone"));
  setNumber("savet3", getNumber("COnvertdone"));
  setNumber("savet4", getNumber("COnvertdone"));
  setNumber("savet5", getNumber("COnvertdone"));
  if (getText("savet4") == Na) {
    setText("savet4", "0");
  }
  if (getText("savet") == Na) {
    setText("savet", "0");
  }
  if (getText("savet2") == Na) {
    setText("savet2", "0");
  }
  if (getText("savet3") == Na) {
    setText("savet3", "0");
  }
  if (getText("savet5") == Na) {
    setText("savet5", "0");
  }
});
onEvent("save5", "click", function() {
  setNumber("savet", getNumber("Volanswer"));
  setNumber("savet2", getNumber("Volanswer"));
  setNumber("savet3", getNumber("Volanswer"));
  setNumber("savet4", getNumber("Volanswer"));
  setNumber("savet5", getNumber("Volanswer"));
  if (getText("savet4") == Na) {
    setText("savet4", "0");
  }
  if (getText("savet") == Na) {
    setText("savet", "0");
  }
  if (getText("savet2") == Na) {
    setText("savet2", "0");
  }
  if (getText("savet3") == Na) {
    setText("savet3", "0");
  }
  if (getText("savet5") == Na) {
    setText("savet5", "0");
  }
});
onEvent("saveinput1", "click", function() {
  setNumber("input1", getNumber("savet"));
  if (getText("input1") == Na) {
    setText("input1", "0");
  }
});
onEvent("saveinput2", "click", function() {
  setNumber("input2", getNumber("savet"));
  if (getText("input2") == Na) {
    setText("input2", "0");
  }
});
onEvent("saveconvert1", "click", function() {
  setNumber("convertin", getNumber("savet2"));
  if (getText("convertin") == Na) {
    setText("convertin", "0");
  }
});
onEvent("saveconvert2", "click", function() {
  setNumber("Convertin", getNumber("savet3"));
  if (getText("Convertin") == Na) {
    setText("Convertin", "0");
  }
});
onEvent("saveconvert3", "click", function() {
  setNumber("COnvertin", getNumber("savet4"));
  if (getText("COnvertin") == Na) {
    setText("COnvertin", "0");
  }
});
onEvent("savevolL", "click", function() {
  setNumber("Vollength", getNumber("savet5"));
  if (getText("Vollength") == Na) {
    setText("Vollength", "0");
  }
});
onEvent("savevolW", "click", function() {
  setNumber("Volwidth", getNumber("savet5"));
  if (getText("Volwidth") == Na) {
    setText("Volwidth", "0");
  }
});
onEvent("savevolH", "click", function() {
  setNumber("Volhight", getNumber("savet5"));
  if (getText("Volhight") == Na) {
    setText("Vollength", "0");
  }
});
onEvent("savevolB", "click", function() {
  setNumber("Volbase", getNumber("savet5"));
  if (getText("Volbase") == Na) {
    setText("Volbase", "0");
  }
});
//This is the Dev console
onEvent("version", "click", function() {
  if (getNumber("equals") == 59094) {
    setScreen("screen4");
  }
  setText("equals", "WIP");
  setText("input1", "");
  setText("input2", "");
});
onEvent("version", "click", function() {
  if (getUserId() == "rJPge86JvKdSCwcrehTDVG/dfcw") {
    setScreen("screen4");
  }
  setText("equals", "WIP");
  setText("input1", "");
  setText("input2", "");
});
onEvent("page1h", "click", function() {
  setScreen("screen1");
});
onEvent("spinon", "click", function() {
  showElement("spin");
});
onEvent("spinoff", "click", function() {
  hideElement("spin");
});
onEvent("ID", "click", function() {
  setText("IDi", getUserId());
});
onEvent("placeholder2", "click", function() {
  showElement("xtoy");
  showElement("french");
});
onEvent("add", "click", function() {
  if (getText("input1") == "get") {
    if (getText("input2") == "id") {
      setText("equals", getUserId());
    }
  }
});
onEvent("goback", "click", function() {
  setScreen("screen1");
});
//this is the distance converter
var Inches = "Inches";
var Feet = "Feet";
var Meters = "Meters";
var Millimeters = "Millimeters";
var Centimeters = "Centimeters";
var Kilometers = "Kilometers";
var Miles = "Miles";
onEvent("convertb", "click", function() {
  setScreen("screen5");
});
onEvent("page1g", "click", function() {
  setScreen("screen1");
});
onEvent("convert", "click", function() {
  var C = getNumber("convertin");
  //Centimeters 
  if (getText("convertfrom") == Centimeters) {
    if (getText("convertto") == Inches) {
      setNumber("convertdone", C / 2.54);
    }
    if (getText("convertto") == Millimeters) {
      setNumber("convertdone", C * 10);
    }
    if (getText("convertto") == Feet) {
      setNumber("convertdone", C / 30.48);
    }
    if (getText("convertto") == Meters) {
      setNumber("convertdone", C / 100);
    }
    if (getText("convertto") == Kilometers) {
      setNumber("convertdone", C / 100000 );
    }
    if (getText("convertto") == Miles) {
      setNumber("convertdone", C / 160934.4 );
    }
  }
  // Inches
  if (getText("convertfrom") == Inches) {
    if (getText("convertto") == Centimeters) {
      setNumber("convertdone", C * 2.54);
    }
    if (getText("convertto") == Millimeters) {
      setNumber("convertdone", C * 25.4);
    }
    if (getText("convertto") == Feet) {
      setNumber("convertdone", C / 12);
    }
    if (getText("convertto") == Meters) {
      setNumber("convertdone", C * 0.0254);
    }
    if (getText("convertto") == Kilometers) {
      setNumber("convertdone", C * 0.0000254 );
    }
    if (getText("convertto") == Miles) {
      setNumber("convertdone", C / 63360 );
    }
  }
  //Feet 
  if (getText("convertfrom") == Feet) {
    if (getText("convertto") == Centimeters) {
      setNumber("convertdone", C * 30.48);
    }
    if (getText("convertto") == Millimeters) {
      setNumber("convertdone", C * 304.8);
    }
    if (getText("convertto") == Meters) {
      setNumber("convertdone", C * 0.3048);
    }
    if (getText("convertto") == Inches) {
      setNumber("convertdone", C * 12);
    }
    if (getText("convertto") == Kilometers) {
      setNumber("convertdone", C * 0.0003048 );
    }
    if (getText("convertto") == Miles) {
      setNumber("convertdone", C / 5280 );
    }
  }
  // Meters
  if (getText("convertfrom") == Meters) {
    if (getText("convertto") == Centimeters) {
      setNumber("convertdone", C * 100);
    }
    if (getText("convertto") == Millimeters) {
      setNumber("convertdone", C * 1000);
    }
    if (getText("convertto") == Feet) {
      setNumber("convertdone", C / 0.3048);
    }
    if (getText("convertto") == Inches) {
      setNumber("convertdone", C / 0.0254);
    }
    if (getText("convertto") == Kilometers) {
      setNumber("convertdone", C / 1000 );
    }
    if (getText("convertto") == Miles) {
      setNumber("convertdone", C / 1609.344 );
    }
  }
  //Millimeters 
  if (getText("convertfrom") == Millimeters) {
    if (getText("convertto") == Centimeters) {
      setNumber("convertdone", C / 10);
    }
    if (getText("convertto") == Feet) {
      setNumber("convertdone", C / 304.8);
    }
    if (getText("convertto") == Meters) {
      setNumber("convertdone", C / 1000);
    }
    if (getText("convertto") == Inches) {
      setNumber("convertdone", C / 25.4);
    }
    if (getText("convertto") == Kilometers) {
      setNumber("convertdone", C / 1000000 );
    }
    if (getText("convertto") == Miles) {
      setNumber("convertdone", C / 1609344 );
    }
  }
  // Kilometers
  if (getText("convertfrom") == Kilometers) {
    if (getText("convertto") == Centimeters) {
      setNumber("convertdone", C * 100000);
    }
    if (getText("convertto") == Millimeters) {
      setNumber("convertdone", C * 1000000);
    }
    if (getText("convertto") == Feet) {
      setNumber("convertdone", C / 0.0003048);
    }
    if (getText("convertto") == Meters) {
      setNumber("convertdone", C * 1000);
    }
    if (getText("convertto") == Inches) {
      setNumber("convertdone", C / 0.0000254);
    }
    if (getText("convertto") == Miles) {
      setNumber("convertdone", C / 1.609344 );
    }
  }
  //Miles
  if (getText("convertfrom") == Miles) {
    if (getText("convertto") == Centimeters) {
      setNumber("convertdone", C * 160934.4);
    }
    if (getText("convertto") == Millimeters) {
      setNumber("convertdone", C * 1609344);
    }
    if (getText("convertto") == Feet) {
      setNumber("convertdone", C * 5280);
    }
    if (getText("convertto") == Meters) {
      setNumber("convertdone", C * 1609.344);
    }
    if (getText("convertto") == Inches) {
      setNumber("convertdone", C * 63360);
    }
    if (getText("convertto") == Kilometers) {
      setNumber("convertdone", C * 1.609344 );
    }
  }
});
//This is the weight converter  
var Pounds = "Pounds";
var Kilograms = "Kilograms";
var Grams = "Grams";
var Ounces = "Ounces";
var Tons = "Tons";
var Milligrams = "Milligrams";
onEvent("page1b", "click", function() {
  setScreen("screen1");
});
onEvent("wconvert", "click", function() {
  setScreen("screen6");
});
onEvent("Convert", "click", function() {
  var C = getNumber("Convertin");
  //pounds
  if (getText("Convertfrom") == Pounds) {
    if (getText("Convertto") == Kilograms) {
    setNumber("Convertdone", C * 0.45359237);
    }
    if (getText("Convertto") == Grams) {
    setNumber("Convertdone", C * 453.59237);
    }
    if (getText("Convertto") == Ounces) {
    setNumber("Convertdone", C * 16);
    }
    if (getText("Convertto") == Tons) {
    setNumber("Convertdone", C * 0.00045359237);
    }
    if (getText("Convertto") == Milligrams) {
    setNumber("Convertdone", C * 453592.37);
    }
  }
  //kilograms
  if (getText("Convertfrom") == Kilograms) {
    if (getText("Convertto") == Pounds) {
    setNumber("Convertdone", C / 0.45359237);
    }
    if (getText("Convertto") == Grams) {
    setNumber("Convertdone", C * 1000);
    }
    if (getText("Convertto") == Ounces) {
    setNumber("Convertdone", C / 0.0283495231);
    }
    if (getText("Convertto") == Tons) {
    setNumber("Convertdone", C / 1000);
    }
    if (getText("Convertto") == Milligrams) {
    setNumber("Convertdone", C * 1000000);
    }
  }
  //grams
  if (getText("Convertfrom") == Grams) {
    if (getText("Convertto") == Kilograms) {
    setNumber("Convertdone", C / 1000);
    }
    if (getText("Convertto") == Pounds) {
    setNumber("Convertdone", C / 453.59237);
    }
    if (getText("Convertto") == Ounces) {
    setNumber("Convertdone", C / 28.3495231);
    }
    if (getText("Convertto") == Tons) {
    setNumber("Convertdone", C / 1000000);
    }
    if (getText("Convertto") == Milligrams) {
    setNumber("Convertdone", C * 1000);
    }
  }
  //Ounces
  if (getText("Convertfrom") == Ounces) {
    if (getText("Convertto") == Kilograms) {
    setNumber("Convertdone", C * 0.0283495231);
    }
    if (getText("Convertto") == Pounds) {
    setNumber("Convertdone", C / 16);
    }
    if (getText("Convertto") == Grams) {
    setNumber("Convertdone", C * 28.3495231);
    }
    if (getText("Convertto") == Tons) {
    setNumber("Convertdone", C * 0.0000283495231);
    }
    if (getText("Convertto") == Milligrams) {
    setNumber("Convertdone", C * 28349.5231);
    }
  }
    //Tons
  if (getText("Convertfrom") == Tons) {
    if (getText("Convertto") == Kilograms) {
    setNumber("Convertdone", C * 1000);
    }
    if (getText("Convertto") == Grams) {
    setNumber("Convertdone", C * 1000000);
    }
    if (getText("Convertto") == Ounces) {
    setNumber("Convertdone", C / 0.0000283495231);
    }
    if (getText("Convertto") == Pounds) {
    setNumber("Convertdone", C / 0.00045359237);
    }
    if (getText("Convertto") == Milligrams) {
    setNumber("Convertdone", C * 1000000000);
    }
  }
  //Milligrams
  if (getText("Convertfrom") == Milligrams) {
    if (getText("Convertto") == Kilograms) {
    setNumber("Convertdone", C / 1000000);
    }
    if (getText("Convertto") == Grams) {
    setNumber("Convertdone", C / 1000);
    }
    if (getText("Convertto") == Ounces) {
    setNumber("Convertdone", C / 28349.5231);
    }
    if (getText("Convertto") == Tons) {
    setNumber("Convertdone", C / 1000000000);
    }
    if (getText("Convertto") == Pounds) {
    setNumber("Convertdone", C / 453592.37);
    }
  }
});
//this is the volume converter
var Liter = "Liter";
var Gallon = "Gallon";
var Cup = "Cup";
var Teaspoon  = "Teaspoon";
var Tablespoon = "Tablespoon";
var Milliliters = "Milliliters";
onEvent("Page1", "click", function() {
  setScreen("screen1");
});
onEvent("vconvert", "click", function() {
  setScreen("screen7");
});
onEvent("COnvert", "click", function() {
  var C = getNumber("COnvertin");
  //Litres
  if (getText("COnvertfrom") == Liter) {
    if (getText("COnvertto") == Gallon) {
    setNumber("COnvertdone", C / 3.785411784);
    }
    if (getText("COnvertto") == Cup) {
    setNumber("COnvertdone", C / 0.2365882365);
    }
    if (getText("COnvertto") == Tablespoon) {
    setNumber("COnvertdone", C / 0.0147867648);
    }
    if (getText("COnvertto") == Teaspoon) {
    setNumber("COnvertdone", C / 0.00492892159);
    }
    if (getText("COnvertto") == Milliliters) {
    setNumber("COnvertdone", C * 1000);
    }
  }
  //Gallons
  if (getText("COnvertfrom") == Gallon) {
    if (getText("COnvertto") == Liter) {
    setNumber("COnvertdone", C * 3.785411784);
    }
    if (getText("COnvertto") == Cup) {
    setNumber("COnvertdone", C * 16);
    }
    if (getText("COnvertto") == Tablespoon) {
    setNumber("COnvertdone", C * 256);
    }
    if (getText("COnvertto") == Teaspoon) {
    setNumber("COnvertdone", C * 768);
    }
    if (getText("COnvertto") == Milliliters) {
    setNumber("COnvertdone", C * 3785.411784);
    }
  }
  //Cups
  if (getText("COnvertfrom") == Cup) {
    if (getText("COnvertto") == Liter) {
    setNumber("COnvertdone", C * 0.2365882365);
    }
    if (getText("COnvertto") == Gallon) {
    setNumber("COnvertdone", C / 16);
    }
    if (getText("COnvertto") == Tablespoon) {
    setNumber("COnvertdone", C * 16);
    }
    if (getText("COnvertto") == Teaspoon) {
    setNumber("COnvertdone", C * 48);
    }
    if (getText("COnvertto") == Milliliters) {
    setNumber("COnvertdone", C * 236.5882365);
    }
  }
  //Tablespoons
  if (getText("COnvertfrom") == Tablespoon) {
    if (getText("COnvertto") == Liter) {
    setNumber("COnvertdone", C * 0.0147867648);
    }
    if (getText("COnvertto") == Gallon) {
    setNumber("COnvertdone", C / 256);
    }
    if (getText("COnvertto") == Cup) {
    setNumber("COnvertdone", C / 16);
    }
    if (getText("COnvertto") == Teaspoon) {
    setNumber("COnvertdone", C * 3);
    }
    if (getText("COnvertto") == Milliliters) {
    setNumber("COnvertdone", C * 14.7867648);
    }
  }
  //Teaspoons
  if (getText("COnvertfrom") == Teaspoon) {
    if (getText("COnvertto") == Liter) {
    setNumber("COnvertdone", C * 0.00492892159);
    }
    if (getText("COnvertto") == Gallon) {
    setNumber("COnvertdone", C / 768);
    }
    if (getText("COnvertto") == Cup) {
    setNumber("COnvertdone", C / 48);
    }
    if (getText("COnvertto") == Tablespoon) {
    setNumber("COnvertdone", C / 3);
    }
    if (getText("COnvertto") == Milliliters) {
    setNumber("COnvertdone", C * 4.92892159375);
    }
  }
  //Milliliters
  if (getText("COnvertfrom") == Milliliters) {
    if (getText("COnvertto") == Gallon) {
    setNumber("COnvertdone", C / 3785.411784);
    }
    if (getText("COnvertto") == Cup) {
    setNumber("COnvertdone", C / 236.5882365);
    }
    if (getText("COnvertto") == Tablespoon) {
    setNumber("COnvertdone", C / 14.7867648);
    }
    if (getText("COnvertto") == Teaspoon) {
    setNumber("COnvertdone", C / 4.92892159375);
    }
    if (getText("COnvertto") == Liter) {
    setNumber("COnvertdone", C / 1000);
    }
  }
});
//This is the temp converter
onEvent("tconvert", "click", function() {
  setScreen("screen8");
});
onEvent("PAge1", "click", function() {
  setScreen("screen1");
});
onEvent("F1", "change", function() {
  var F1 = getNumber("F1");
  setText("C1", ((F1 - 32) * 5) / 9);
});
onEvent("C2", "change", function() {
  var C2 = getNumber("C2");
  setNumber("F2", C2 * 1.8 + 32);
});
//Volume
onEvent("Volume", "click", function() {
  setScreen("screen9");
});
onEvent("Page1g", "click", function() {
  setScreen("screen1");
});
onEvent("Volsel", "change", function() {
  if (getText("Volsel") == "Rectangular Prisms") {
    hideElement("Volbase");
    hideElement("zzzzzzzzz");
    showElement("Volwidth");
    showElement("zzzzzzzzzzz");
    showElement("savevolW");
    hideElement("savevolB");
  }
  if (getText("Volsel") == "Triangular Prisms") {
    showElement("Volbase");
    showElement("zzzzzzzzz");
    showElement("savevolB");
    hideElement("Volwidth");
    hideElement("zzzzzzzzzzz");
    hideElement("savevolW");
  }
});
onEvent("Voltimes", "click", function() {
  if (getText("Volsel") == "Rectangular Prisms") {
    setNumber("Volanswer", (getNumber("Vollength") * getNumber("Volwidth")) * getNumber("Volhight"));
  }
  if (getText("Volsel") == "Triangular Prisms") {
    setNumber("Volanswer", ((getNumber("Volbase") * getNumber("Volhight")) / 2) * getNumber("Vollength"));
  }
});
onEvent("Volclear", "click", function() {
  setText("Volwidth", "");
  setText("Vollength", "");
  setText("Volhight", "");
  setText("Volanswer", "");
  setText("Volbase", "");
});
// Numpad
var numpaddigit = 1;
var numpad1 = "0";
var numpad2 = "0";
var numpad3 = "0";
var numpad4 = "0";
var numpad5 = "0";
var numpad6 = "0";
var numpad7 = "0";
var numpad8 = "0";
onEvent("Numpadgoto", "click", function() {
  setScreen("screennumpad");
});
onEvent("page1k", "click", function() {
  setScreen("screen1");
});
onEvent("numpaddrop", "change", function() {
  if (getText("numpaddrop") == "Entry Box 1") {
    setText("numpadbox", "");
    numpaddigit = 1;
    setText("numpadsent", "");
    numpad1 = "0";
    numpad2 = "0";
    numpad3 = "0";
    numpad4 = "0";
    numpad5 = "0";
    numpad6 = "0";
    numpad7 = "0";
    numpad8 = "0";
  }
  if (getText("numpaddrop") == "Entry Box 2") {
    setText("numpadbox", "");
    numpaddigit = 1;
    setText("numpadsent", "");
    numpad1 = "0";
    numpad2 = "0";
    numpad3 = "0";
    numpad4 = "0";
    numpad5 = "0";
    numpad6 = "0";
    numpad7 = "0";
    numpad8 = "0";
  }
});
onEvent("numpadswitch", "click", function() {
  if (getText("numpaddrop") == "Entry Box 1") {
    setText("numpaddrop", "Entry Box 2");
  } else {
    setText("numpaddrop", "Entry Box 1");
  }
  if (getText("numpaddrop") == "Entry Box 1") {
    setText("numpadbox", "");
    numpaddigit = 1;
    setText("numpadsent", "");
    numpad1 = "0";
    numpad2 = "0";
    numpad3 = "0";
    numpad4 = "0";
    numpad5 = "0";
    numpad6 = "0";
    numpad7 = "0";
    numpad8 = "0";
  }
  if (getText("numpaddrop") == "Entry Box 2") {
    setText("numpadbox", "");
    numpaddigit = 1;
    setText("numpadsent", "");
    numpad1 = "0";
    numpad2 = "0";
    numpad3 = "0";
    numpad4 = "0";
    numpad5 = "0";
    numpad6 = "0";
    numpad7 = "0";
    numpad8 = "0";
  }
});
onEvent("numpad0", "click", function() {
  if (numpaddigit == 1) {
    numpad1 = "0";
    setText("numpadbox", numpad1);
  }
  if (numpaddigit == 2) {
    numpad2 = "0";
    setText("numpadbox", numpad1 + numpad2);
  }
  if (numpaddigit == 3) {
    numpad3 = "0";
    setText("numpadbox", numpad1 + numpad2 + numpad3);
  }
  if (numpaddigit == 4) {
    numpad4 = "0";
    setText("numpadbox", numpad1 + numpad2 + numpad3 + numpad4);
  }
  if (numpaddigit == 5) {
    numpad5 = "0";
    setText("numpadbox", numpad1 + numpad2 + numpad3 + numpad4 + numpad5);
  }
  if (numpaddigit == 6) {
    numpad6 = "0";
    setText("numpadbox", numpad1 + numpad2 + numpad3 + numpad4 + numpad5 + numpad6);
  }
  if (numpaddigit == 7) {
    numpad7 = "0";
    setText("numpadbox", numpad1 + numpad2 + numpad3 + numpad4 + numpad5 + numpad6 + numpad7);
  }
  if (numpaddigit == 8) {
    numpad8 = "0";
    setText("numpadbox", numpad1 + numpad2 + numpad3 + numpad4 + numpad5 + numpad6 + numpad7 + numpad8);
  }
  numpaddigit = numpaddigit + 1;
  numsend();
});
onEvent("numpad1", "click", function() {
  if (numpaddigit == 1) {
    numpad1 = "1";
    setText("numpadbox", numpad1);
  }
  if (numpaddigit == 2) {
    numpad2 = "1";
    setText("numpadbox", numpad1 + numpad2);
  }
  if (numpaddigit == 3) {
    numpad3 = "1";
    setText("numpadbox", numpad1 + numpad2 + numpad3);
  }
  if (numpaddigit == 4) {
    numpad4 = "1";
    setText("numpadbox", numpad1 + numpad2 + numpad3 + numpad4);
  }
  if (numpaddigit == 5) {
    numpad5 = "1";
    setText("numpadbox", numpad1 + numpad2 + numpad3 + numpad4 + numpad5);
  }
  if (numpaddigit == 6) {
    numpad6 = "1";
    setText("numpadbox", numpad1 + numpad2 + numpad3 + numpad4 + numpad5 + numpad6);
  }
  if (numpaddigit == 7) {
    numpad7 = "1";
    setText("numpadbox", numpad1 + numpad2 + numpad3 + numpad4 + numpad5 + numpad6 + numpad7);
  }
  if (numpaddigit == 8) {
    numpad8 = "1";
    setText("numpadbox", numpad1 + numpad2 + numpad3 + numpad4 + numpad5 + numpad6 + numpad7 + numpad8);
  }
  numpaddigit = numpaddigit + 1;
  numsend();
});
onEvent("numpad2", "click", function() {
  if (numpaddigit == 1) {
    numpad1 = "2";
    setText("numpadbox", numpad1);
  }
  if (numpaddigit == 2) {
    numpad2 = "2";
    setText("numpadbox", numpad1 + numpad2);
  }
  if (numpaddigit == 3) {
    numpad3 = "2";
    setText("numpadbox", numpad1 + numpad2 + numpad3);
  }
  if (numpaddigit == 4) {
    numpad4 = "2";
    setText("numpadbox", numpad1 + numpad2 + numpad3 + numpad4);
  }
  if (numpaddigit == 5) {
    numpad5 = "2";
    setText("numpadbox", numpad1 + numpad2 + numpad3 + numpad4 + numpad5);
  }
  if (numpaddigit == 6) {
    numpad6 = "2";
    setText("numpadbox", numpad1 + numpad2 + numpad3 + numpad4 + numpad5 + numpad6);
  }
  if (numpaddigit == 7) {
    numpad7 = "2";
    setText("numpadbox", numpad1 + numpad2 + numpad3 + numpad4 + numpad5 + numpad6 + numpad7);
  }
  if (numpaddigit == 8) {
    numpad8 = "2";
    setText("numpadbox", numpad1 + numpad2 + numpad3 + numpad4 + numpad5 + numpad6 + numpad7 + numpad8);
  }
  numpaddigit = numpaddigit + 1;
  numsend();
});
onEvent("numpad3", "click", function() {
  if (numpaddigit == 1) {
    numpad1 = "3";
    setText("numpadbox", numpad1);
  }
  if (numpaddigit == 2) {
    numpad2 = "3";
    setText("numpadbox", numpad1 + numpad2);
  }
  if (numpaddigit == 3) {
    numpad3 = "3";
    setText("numpadbox", numpad1 + numpad2 + numpad3);
  }
  if (numpaddigit == 4) {
    numpad4 = "3";
    setText("numpadbox", numpad1 + numpad2 + numpad3 + numpad4);
  }
  if (numpaddigit == 5) {
    numpad5 = "3";
    setText("numpadbox", numpad1 + numpad2 + numpad3 + numpad4 + numpad5);
  }
  if (numpaddigit == 6) {
    numpad6 = "3";
    setText("numpadbox", numpad1 + numpad2 + numpad3 + numpad4 + numpad5 + numpad6);
  }
  if (numpaddigit == 7) {
    numpad7 = "3";
    setText("numpadbox", numpad1 + numpad2 + numpad3 + numpad4 + numpad5 + numpad6 + numpad7);
  }
  if (numpaddigit == 8) {
    numpad8 = "3";
    setText("numpadbox", numpad1 + numpad2 + numpad3 + numpad4 + numpad5 + numpad6 + numpad7 + numpad8);
  }
  numpaddigit = numpaddigit + 1;
  numsend();
});
onEvent("numpad4", "click", function() {
  if (numpaddigit == 1) {
    numpad1 = "4";
    setText("numpadbox", numpad1);
  }
  if (numpaddigit == 2) {
    numpad2 = "4";
    setText("numpadbox", numpad1 + numpad2);
  }
  if (numpaddigit == 3) {
    numpad3 = "4";
    setText("numpadbox", numpad1 + numpad2 + numpad3);
  }
  if (numpaddigit == 4) {
    numpad4 = "4";
    setText("numpadbox", numpad1 + numpad2 + numpad3 + numpad4);
  }
  if (numpaddigit == 5) {
    numpad5 = "4";
    setText("numpadbox", numpad1 + numpad2 + numpad3 + numpad4 + numpad5);
  }
  if (numpaddigit == 6) {
    numpad6 = "4";
    setText("numpadbox", numpad1 + numpad2 + numpad3 + numpad4 + numpad5 + numpad6);
  }
  if (numpaddigit == 7) {
    numpad7 = "4";
    setText("numpadbox", numpad1 + numpad2 + numpad3 + numpad4 + numpad5 + numpad6 + numpad7);
  }
  if (numpaddigit == 8) {
    numpad8 = "4";
    setText("numpadbox", numpad1 + numpad2 + numpad3 + numpad4 + numpad5 + numpad6 + numpad7 + numpad8);
  }
  numpaddigit = numpaddigit + 1;
  numsend();
});
onEvent("numpad5", "click", function() {
  if (numpaddigit == 1) {
    numpad1 = "5";
    setText("numpadbox", numpad1);
  }
  if (numpaddigit == 2) {
    numpad2 = "5";
    setText("numpadbox", numpad1 + numpad2);
  }
  if (numpaddigit == 3) {
    numpad3 = "5";
    setText("numpadbox", numpad1 + numpad2 + numpad3);
  }
  if (numpaddigit == 4) {
    numpad4 = "5";
    setText("numpadbox", numpad1 + numpad2 + numpad3 + numpad4);
  }
  if (numpaddigit == 5) {
    numpad5 = "5";
    setText("numpadbox", numpad1 + numpad2 + numpad3 + numpad4 + numpad5);
  }
  if (numpaddigit == 6) {
    numpad6 = "5";
    setText("numpadbox", numpad1 + numpad2 + numpad3 + numpad4 + numpad5 + numpad6);
  }
  if (numpaddigit == 7) {
    numpad7 = "5";
    setText("numpadbox", numpad1 + numpad2 + numpad3 + numpad4 + numpad5 + numpad6 + numpad7);
  }
  if (numpaddigit == 8) {
    numpad8 = "5";
    setText("numpadbox", numpad1 + numpad2 + numpad3 + numpad4 + numpad5 + numpad6 + numpad7 + numpad8);
  }
  numpaddigit = numpaddigit + 1;
  numsend();
});
onEvent("numpad6", "click", function() {
  if (numpaddigit == 1) {
    numpad1 = "6";
    setText("numpadbox", numpad1);
  }
  if (numpaddigit == 2) {
    numpad2 = "6";
    setText("numpadbox", numpad1 + numpad2);
  }
  if (numpaddigit == 3) {
    numpad3 = "6";
    setText("numpadbox", numpad1 + numpad2 + numpad3);
  }
  if (numpaddigit == 4) {
    numpad4 = "6";
    setText("numpadbox", numpad1 + numpad2 + numpad3 + numpad4);
  }
  if (numpaddigit == 5) {
    numpad5 = "6";
    setText("numpadbox", numpad1 + numpad2 + numpad3 + numpad4 + numpad5);
  }
  if (numpaddigit == 6) {
    numpad6 = "6";
    setText("numpadbox", numpad1 + numpad2 + numpad3 + numpad4 + numpad5 + numpad6);
  }
  if (numpaddigit == 7) {
    numpad7 = "6";
    setText("numpadbox", numpad1 + numpad2 + numpad3 + numpad4 + numpad5 + numpad6 + numpad7);
  }
  if (numpaddigit == 8) {
    numpad8 = "6";
    setText("numpadbox", numpad1 + numpad2 + numpad3 + numpad4 + numpad5 + numpad6 + numpad7 + numpad8);
  }
  numpaddigit = numpaddigit + 1;
  numsend();
});
onEvent("numpad7", "click", function() {
  if (numpaddigit == 1) {
    numpad1 = "7";
    setText("numpadbox", numpad1);
  }
  if (numpaddigit == 2) {
    numpad2 = "7";
    setText("numpadbox", numpad1 + numpad2);
  }
  if (numpaddigit == 3) {
    numpad3 = "7";
    setText("numpadbox", numpad1 + numpad2 + numpad3);
  }
  if (numpaddigit == 4) {
    numpad4 = "7";
    setText("numpadbox", numpad1 + numpad2 + numpad3 + numpad4);
  }
  if (numpaddigit == 5) {
    numpad5 = "7";
    setText("numpadbox", numpad1 + numpad2 + numpad3 + numpad4 + numpad5);
  }
  if (numpaddigit == 6) {
    numpad6 = "7";
    setText("numpadbox", numpad1 + numpad2 + numpad3 + numpad4 + numpad5 + numpad6);
  }
  if (numpaddigit == 7) {
    numpad7 = "7";
    setText("numpadbox", numpad1 + numpad2 + numpad3 + numpad4 + numpad5 + numpad6 + numpad7);
  }
  if (numpaddigit == 8) {
    numpad8 = "7";
    setText("numpadbox", numpad1 + numpad2 + numpad3 + numpad4 + numpad5 + numpad6 + numpad7 + numpad8);
  }
  numpaddigit = numpaddigit + 1;
  numsend();
});
onEvent("numpad8", "click", function() {
  if (numpaddigit == 1) {
    numpad1 = "8";
    setText("numpadbox", numpad1);
  }
  if (numpaddigit == 2) {
    numpad2 = "8";
    setText("numpadbox", numpad1 + numpad2);
  }
  if (numpaddigit == 3) {
    numpad3 = "8";
    setText("numpadbox", numpad1 + numpad2 + numpad3);
  }
  if (numpaddigit == 4) {
    numpad4 = "8";
    setText("numpadbox", numpad1 + numpad2 + numpad3 + numpad4);
  }
  if (numpaddigit == 5) {
    numpad5 = "8";
    setText("numpadbox", numpad1 + numpad2 + numpad3 + numpad4 + numpad5);
  }
  if (numpaddigit == 6) {
    numpad6 = "8";
    setText("numpadbox", numpad1 + numpad2 + numpad3 + numpad4 + numpad5 + numpad6);
  }
  if (numpaddigit == 7) {
    numpad7 = "8";
    setText("numpadbox", numpad1 + numpad2 + numpad3 + numpad4 + numpad5 + numpad6 + numpad7);
  }
  if (numpaddigit == 8) {
    numpad8 = "8";
    setText("numpadbox", numpad1 + numpad2 + numpad3 + numpad4 + numpad5 + numpad6 + numpad7 + numpad8);
  }
  numpaddigit = numpaddigit + 1;
  numsend();
});
onEvent("numpad9", "click", function() {
  if (numpaddigit == 1) {
    numpad1 = "";
    setText("numpadbox", numpad1);
  }
  if (numpaddigit == 2) {
    numpad2 = "";
    setText("numpadbox", numpad1 + numpad2);
  }
  if (numpaddigit == 3) {
    numpad3 = "";
    setText("numpadbox", numpad1 + numpad2 + numpad3);
  }
  if (numpaddigit == 4) {
    numpad4 = "";
    setText("numpadbox", numpad1 + numpad2 + numpad3 + numpad4);
  }
  if (numpaddigit == 5) {
    numpad5 = "";
    setText("numpadbox", numpad1 + numpad2 + numpad3 + numpad4 + numpad5);
  }
  if (numpaddigit == 6) {
    numpad6 = "";
    setText("numpadbox", numpad1 + numpad2 + numpad3 + numpad4 + numpad5 + numpad6);
  }
  if (numpaddigit == 7) {
    numpad7 = "";
    setText("numpadbox", numpad1 + numpad2 + numpad3 + numpad4 + numpad5 + numpad6 + numpad7);
  }
  if (numpaddigit == 8) {
    numpad8 = "";
    setText("numpadbox", numpad1 + numpad2 + numpad3 + numpad4 + numpad5 + numpad6 + numpad7 + numpad8);
  }
  numpaddigit = numpaddigit + 0;
  numsend();
});
onEvent("numpad.", "click", function() {
  if (numpaddigit == 1) {
    numpad1 = ".";
    setText("numpadbox", numpad1);
  }
  if (numpaddigit == 2) {
    numpad2 = ".";
    setText("numpadbox", numpad1 + numpad2);
  }
  if (numpaddigit == 3) {
    numpad3 = ".";
    setText("numpadbox", numpad1 + numpad2 + numpad3);
  }
  if (numpaddigit == 4) {
    numpad4 = ".";
    setText("numpadbox", numpad1 + numpad2 + numpad3 + numpad4);
  }
  if (numpaddigit == 5) {
    numpad5 = ".";
    setText("numpadbox", numpad1 + numpad2 + numpad3 + numpad4 + numpad5);
  }
  if (numpaddigit == 6) {
    numpad6 = ".";
    setText("numpadbox", numpad1 + numpad2 + numpad3 + numpad4 + numpad5 + numpad6);
  }
  if (numpaddigit == 7) {
    numpad7 = ".";
    setText("numpadbox", numpad1 + numpad2 + numpad3 + numpad4 + numpad5 + numpad6 + numpad7);
  }
  if (numpaddigit == 8) {
    numpad8 = ".";
    setText("numpadbox", numpad1 + numpad2 + numpad3 + numpad4 + numpad5 + numpad6 + numpad7 + numpad8);
  }
  numpaddigit = numpaddigit + 1;
  numsend();
});
onEvent("numpad9", "click", function() {
  if (numpaddigit == 1) {
    numpad1 = "9";
    setText("numpadbox", numpad1);
  }
  if (numpaddigit == 2) {
    numpad2 = "9";
    setText("numpadbox", numpad1 + numpad2);
  }
  if (numpaddigit == 3) {
    numpad3 = "9";
    setText("numpadbox", numpad1 + numpad2 + numpad3);
  }
  if (numpaddigit == 4) {
    numpad4 = "9";
    setText("numpadbox", numpad1 + numpad2 + numpad3 + numpad4);
  }
  if (numpaddigit == 5) {
    numpad5 = "9";
    setText("numpadbox", numpad1 + numpad2 + numpad3 + numpad4 + numpad5);
  }
  if (numpaddigit == 6) {
    numpad6 = "9";
    setText("numpadbox", numpad1 + numpad2 + numpad3 + numpad4 + numpad5 + numpad6);
  }
  if (numpaddigit == 7) {
    numpad7 = "9";
    setText("numpadbox", numpad1 + numpad2 + numpad3 + numpad4 + numpad5 + numpad6 + numpad7);
  }
  if (numpaddigit == 8) {
    numpad8 = "9";
    setText("numpadbox", numpad1 + numpad2 + numpad3 + numpad4 + numpad5 + numpad6 + numpad7 + numpad8);
  }
  numpaddigit = numpaddigit + 1;
  numsend();
});
onEvent("numpad-", "click", function() {
  if (numpaddigit == 1) {
    numpad1 = "-";
    setText("numpadbox", numpad1);
  }
  if (numpaddigit == 2) {
    numpad2 = "-";
    setText("numpadbox", numpad1 + numpad2);
  }
  if (numpaddigit == 3) {
    numpad3 = "-";
    setText("numpadbox", numpad1 + numpad2 + numpad3);
  }
  if (numpaddigit == 4) {
    numpad4 = "-";
    setText("numpadbox", numpad1 + numpad2 + numpad3 + numpad4);
  }
  if (numpaddigit == 5) {
    numpad5 = "-";
    setText("numpadbox", numpad1 + numpad2 + numpad3 + numpad4 + numpad5);
  }
  if (numpaddigit == 6) {
    numpad6 = "-";
    setText("numpadbox", numpad1 + numpad2 + numpad3 + numpad4 + numpad5 + numpad6);
  }
  if (numpaddigit == 7) {
    numpad7 = "-";
    setText("numpadbox", numpad1 + numpad2 + numpad3 + numpad4 + numpad5 + numpad6 + numpad7);
  }
  if (numpaddigit == 8) {
    numpad8 = "-";
    setText("numpadbox", numpad1 + numpad2 + numpad3 + numpad4 + numpad5 + numpad6 + numpad7 + numpad8);
  }
  numpaddigit = numpaddigit + 1;
  numsend();
});
onEvent("numpadclear", "click", function() {
  setText("numpadbox", "");
  setText("numpadsent", "");
  numpaddigit = 1;
  numpad1 = "0";
  numpad2 = "0";
  numpad3 = "0";
  numpad4 = "0";
  numpad5 = "0";
  numpad6 = "0";
  numpad7 = "0";
  numpad8 = "0";
});
onEvent("numpadsend", "click", function() {
  if (getText("numpaddrop") == "Entry Box 1") {
    setText("input1", getText("numpadbox"));
    setText("numpadsent", "Sent");
  }
  if (getText("numpaddrop") == "Entry Box 2") {
    setText("input2", getText("numpadbox"));
    setText("numpadsent", "Sent");
  }
});
function numsend() {
  if (getText("numpaddrop") == "Entry Box 1") {
    setText("input1", getText("numpadbox"));
    setText("numpadsent", "Sent");
  }
  if (getText("numpaddrop") == "Entry Box 2") {
    setText("input2", getText("numpadbox"));
    setText("numpadsent", "Sent");
  }
}
//Square root
onEvent("squareroot", "click", function() {
  setNumber("equals", Math.sqrt(getNumber("input1")));
});
//exponent
onEvent("xtoy", "click", function() {
  setText("equals", Math.pow(getNumber("input1"), getNumber("input2")));
});
// 
hideElement("spin");
console.log("done");
