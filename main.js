////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////=======================CODE BY TRUNG TIN==============================/////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////



function getDataSourcesAndMainProgram() {
  var jsonSources = document.getElementById("inputData").value;
  var jsonPatient = document.getElementById("inputDataPatient").value;
  var jsonObjectBillings = document.getElementById("inputDataBilling").value;

  var parseEFormTemplateData = JSON.parse(jsonSources);
  var jsonObject = JSON.parse(parseEFormTemplateData.EFormTemplateData.TemplateData);
  var jsonObjectPatinet = JSON.parse(jsonPatient);
  var jsonObjectBillings = JSON.parse(jsonObjectBillings);


  {
    //  FUNCTION COPY ON INTERNET
    //=========================================================================================================
    function makeid(length) {
      var result = '';
      var characters = ' ABCDEFGHIJKLM NOPQRSTUVWXYZabcdefgh ijklmnopqrstuv wxyz0123456789 ';
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    }

    function makeidonlyno(length) {
      var result = '';
      var characters = '0123456789';
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    }

    //------------ RANDOM DATE----------------------------
    function randomDate(start, end) {
      var d = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;
      return [day, month, year].join('/');
    }
    //--------------------------------------------------------------------------------------------------------------------------
    //MY FUNCTION
    //=========================================================================================================

    //-------------------------------- CHECK ERROR FIELD NAME------------------------------------------------

    function checkErrorUndefined(indexSections, indexRows, indexFields) {
      var checkFieldNameUndefined = jsonObject.sections[indexSections].rows[indexRows].fields[indexFields].name;
      {

        if (checkFieldNameUndefined === undefined || checkFieldNameUndefined === "") {
          var errorFieldName = document.createElement("p");
          errorFieldName.innerHTML = jsonObject.sections[indexSections].rows[indexRows].fields[indexFields].ref;
          document.getElementById("undefined_field_name").appendChild(errorFieldName);

        }
      }
    }


    //================================ GET AND REIVICE PATIENT PROFILE =====================================
    function searchPatientProfile(func) {

      var dataFunction = {
        "dir": [
          jsonObjectPatinet.patient.surname,
          jsonObjectPatinet.patient.firstName,
          jsonObjectPatinet.patient.firstName + " " + jsonObjectPatinet.patient.surname,
          jsonObjectPatinet.contact.address,
          jsonObjectPatinet.contact.suburb,
          jsonObjectPatinet.contact.state,
          jsonObjectPatinet.contact.postcode,
          jsonObjectPatinet.contact.phoneHome,
          jsonObjectPatinet.contact.phoneMobile,
          jsonObjectPatinet.contact.phoneWork,
          jsonObjectPatinet.patient.dob,
          jsonObjectPatinet.patient.gender, // number 1 or 2
          jsonObjectPatinet.patient.title, // return 1,2,3,4,5,6
          "",
          jsonObjectPatinet.companies[0].companyName,//newest to fill??????
          jsonObjectPatinet.patient.occupation,
          jsonObjectBillings.medicareNumber,
          jsonObjectPatinet.contact.email,
          jsonObjectBillings.medicareExp,
          jsonObjectBillings.medicareRefNumber,
          jsonObjectBillings.dvaNumber,
          jsonObjectBillings.billingTypeId,
          jsonObjectBillings.dvaDisability,
          jsonObjectBillings.medicareRefNumber,
          jsonObjectBillings.privateHealthFundRefNumber,
          jsonObjectBillings.pensionNumber,
          jsonObjectBillings.pensionExp,
          jsonObjectPatinet.companies.companySiteName,
          jsonObjectPatinet.patient.raceId,
          

        ],
        "name": [
          //Appointment
          "CONCAT(PatientAppointment.LastName)",
          "CONCAT(PatientAppointment.FirstName)",
          "CONCAT(PatientAppointment.FirstName,PatientAppointment.LastName)",
          "CONCAT(PatientAppointment.Address1,PatientAppointment.Address2)",
          "CONCAT(PatientAppointment.Suburb)",
          "CONCAT(PatientAppointment.State)",
          "CONCAT(PatientAppointment.Postcode)",
          "CONCAT(PatientAppointment.HomePhoneNumber)",
          "CONCAT(PatientAppointment.PhoneNumber)",
          "CONCAT(PatientAppointment.WorkPhoneNumber)",
          "CONCAT(PatientAppointment.DOB)",
          "CONCAT(PatientAppointment.Gender)",
          "CONCAT(PatientAppointment.Title)",
          "AGE(PatientAppointment.DOB)",
          "CONCAT(Company.CompanyName)",
          "CONCAT(PatientAppointment.Occupation)",
          "CONCAT(PatientAppointment.MedicareNumber)",
          "CONCAT(PatientAppointment.Email1)",
          "CONCAT(PatientAppointment.MedicareExpiryDate)",
          "CONCAT(PatientAppointment.MedicareReferenceNumber)",
          //"CONCAT(PatientAppointment.ReferringDoctor)",
          //"CONCAT(PatientAppointment.PrivateHealth)",
          //"CONCAT(PatientAppointment.PensionDetail)",
          "CONCAT(PatientAppointment.DVANumber",
          //"PatientAppointment.DVACardColour)", prefillRadio
          "CONCAT(PatientAppointment.AccountType)",
          "CONCAT(PatientAppointment.DVADisability)",
          "CONCAT(PatientAppointment.MembershipNumber)",
          "CONCAT(PatientAppointment.PHFRefNo)",
          "CONCAT(PatientAppointment.PensionNumber)",
          "CONCAT(PatientAppointment.PensionExpiryDate)",
          //"CONCAT(PatientAppointment.MemberNo)",
          //"CONCAT(PatientAppointment.HCCPensionNumber)",
          "CONCAT(CompanySite.ContactName)",
          "CONCAT(PatientAppointment.RaceEthnicityId)",
          
          
          
          
          //Doctor
          "CONCAT(Doctor.Doctor.FirstName",
          "Doctor.Doctor.LastName)",
          "CONCAT(Doctor.Doctor.Address1)",
          "CONCAT(Doctor.Doctor.Email)",
          "CONCAT(Doctor.Doctor.WorkPhoneNumber)",
          "CONCAT(Doctor.Doctor.FaxNumber)",
          "CONCAT(Doctor.ProviderNumber)",

        ]
      }
      var seen = false;
      for (var i = 0; i < dataFunction.dir.length; i++) {
        if (dataFunction.name[i] === func) {
          var haveCase = false;
          seen = true;
          // case gender function
          if (dataFunction.name[i] === "CONCAT(PatientAppointment.Gender)") {
            haveCase = true;
            if (dataFunction.dir[i] === 1) {
              return "Male";
            }
            else return "Female";
          }
          // case date format
          if (dataFunction.name[i] === "CONCAT(PatientAppointment.DOB)" || dataFunction.name[i] === "CONCAT(PatientAppointment.PensionExpiryDate)") {
            var year = dataFunction.dir[i].substr(0, 4);
            var month = dataFunction.dir[i].substr(5, 2);
            var day = dataFunction.dir[i].substr(8, 2);
            haveCase = true;
            return day + "/" + month + "/" + year;
          }
          //case mm/yyyy format
          if (dataFunction.name[i] === "CONCAT(PatientAppointment.MedicareExpiryDate)") {
            var year = dataFunction.dir[i].substr(0, 4);
            var month = dataFunction.dir[i].substr(5, 2);
            //var day = dataFunction.dir[i].substr(8, 2);

            haveCase = true;
            return month + "/" + year;
          }
          //case Age patient
          if (dataFunction.name[i] === "AGE(PatientAppointment.DOB)") {
            haveCase = true;
            var year = new Date();
            var age = year.getFullYear() - Number(dataFunction.dir[10].substr(0, 4));
            return age;
          }
          //case title
          if (dataFunction.name[i] === "CONCAT(PatientAppointment.Title)") {
            haveCase = true;
            switch (dataFunction.dir[i]) {
              case 1:
                return "Mr";
              case 2:
                return "Mrs";
              case 3:
                return "Ms";
              case 4:
                return "Miss";
              case 5:
                return "Master";
              case 6:
                return "Dr";
              default: return undefined;
            }
          }
          //case account type
          if (dataFunction.name[i] === "CONCAT(PatientAppointment.AccountType)") {
            haveCase = true;
            switch (dataFunction.dir[i]) {
              case 1:
                return "WorkCover";
              case 2:
                return "PEM";
              case 3:
                return "Private";
              case 4:
                return "Public";
              case 5:
                return "Public Pensioner";
              case 6:
                return "DVA - White";
              case 7:
                return "DVA - Gold";
              case 8:
                return "Overseas";
              case 9:
                return "Bulk Bill";
              default: return undefined;
            }
          }
          //case raceID
          if (dataFunction.name[i] === "CONCAT(PatientAppointment.RaceEthnicityId)") {
            haveCase = true;            
            switch (dataFunction.dir[i]) {
              case 1:
                return "Non-Aboriginal";
              case 2:
                return "Aboriginal";
              case 3:
                return "Torres Strait Islander";
              case 4:
                return "Aboriginal and Torres Strait Islander";              
              default: return undefined;
            }
          }
          // default
          if (haveCase === false) {

            return dataFunction.dir[i];
          }
        }
      }
      if (seen === false) {
        return func;
      }

    }
   










    //----------------------------------------------------------------------------------------------------------------------------
    //var get from Json Object
    var sectionsNumber = jsonObject.sections.length - 1;

    //var begin
    var checkSections = true;
    var checkRows = true;
    var checkFields = true;

    var grownLoopRadioCheck = 0;
    var grownLoopRadioCheckedorNot = 0;

    var checkHaveToast = false;
    var idPrintForm = parseEFormTemplateData.UID;

    // array
    var groupRadioCheck = [];
    var groupRadioCheckedorNot = [];
    var groupTextboxHaveFunction = [];


    var indexSections = 0;
    var indexRows = 0;
    var indexFields = 0;

    // count sections, rows, fields
    var countSections = 0;
    var countRows = 0;
    var countFields = 0;

    //default var
    var lable = "eform_input_check_label"; //ignore
    var inputText = "eform_input_text";
    var inputDatetime = "eform_input_date";
    var inputArea = "eform_input_textarea";
    var inputCheckRadio = "eform_input_check_radio";
    var inputCheckBox = "eform_input_check_checkbox";
    var candidateSignature = "eform_input_signature";
    var doctorImageSignature = "eform_input_image_doctor";

    // -----------loop for section ---------------------------------------------------------------------------------
    if (sectionsNumber != -1) {

      while (checkSections) {

        // get rows number from json data
        var rowsNumber = jsonObject.sections[indexSections].rows.length - 1;
        checkRows = true;
        indexRows = 0;
        countSections += 1;

        // ------------- loop for rows -------------------------------------------------------------------------       
        if (rowsNumber != -1) {

          while (checkRows) {

            //get fields number from json data
            var fieldsNumber = jsonObject.sections[indexSections].rows[indexRows].fields.length - 1;
            checkFields = true;
            indexFields = 0;
            countRows += 1;

            // ----------------------------loop for fields ---------------------------------------------------
            if (fieldsNumber != -1) {

              while (checkFields) {

                //---------- main code bellow-----------
                countFields += 1;
                var getTypeField = jsonObject.sections[indexSections].rows[indexRows].fields[indexFields].type;
                var askRecal = jsonObject.sections[indexSections].rows[indexRows].fields[indexFields].preCal;
                var checkMaxLength = jsonObject.sections[indexSections].rows[indexRows].fields[indexFields].maxlength;

                //-------------------------------- CHECK UNDEFINED FOR FIELDS NAME---------------------------------------


                //--------------------------------DATA TYPE TEXT BOX---------------------------------------------------------------------------
                if (getTypeField === inputText) {
                  //---------------------------------------------------------------------------------------------------------------------------------------------                           
                  //---------- when it is inputValue-----------------------
                  checkErrorUndefined(indexSections, indexRows, indexFields);
                  if (askRecal === undefined || askRecal === "") {

                    // create string
                    var fieldName = jsonObject.sections[indexSections].rows[indexRows].fields[indexFields].name;
                    var ID = jsonObject.sections[indexSections].rows[indexRows].fields[indexFields].ref;
                    var inputValue;
                    //check is number???
                    if (jsonObject.sections[indexSections].rows[indexRows].fields[indexFields].isNumber === true) {
                      inputValue = makeidonlyno(13);
                    }
                    else {
                      inputValue = makeid(15);
                    }
                    var expectedValue = inputValue;

                    //--------------- PRINT DATA INTO HTML ----------------------

                    var createNodeDiv1 = document.createElement("div");
                    var createNodeDiv2 = document.createElement("div");
                    var createNodeDiv3 = document.createElement("div");
                    var createNodeDiv4 = document.createElement("div");
                    var createNodeDivOpen = document.createElement("div");
                    var createNodeDivClose = document.createElement("div");

                    createNodeDivOpen.innerHTML = "{";
                    document.getElementById("inputValue").appendChild(createNodeDivOpen);

                    createNodeDiv1.innerHTML = "\"fieldName\": " + "\"" + fieldName + "\",";
                    document.getElementById("inputValue").appendChild(createNodeDiv1);

                    createNodeDiv2.innerHTML = "\"ID\": " + "\"" + ID + "\",";
                    document.getElementById("inputValue").appendChild(createNodeDiv2);

                    createNodeDiv3.innerHTML = "\"inputValue\": " + "\"" + inputValue + "\",";
                    document.getElementById("inputValue").appendChild(createNodeDiv3);

                    createNodeDiv4.innerHTML = "\"expectedValue\": " + "\"" + expectedValue + "\"";
                    document.getElementById("inputValue").appendChild(createNodeDiv4);

                    createNodeDivClose.innerHTML = "},";
                    document.getElementById("inputValue").appendChild(createNodeDivClose);
                    //--------------- PRINT DATA INTO HTML ----------------------
                  }

                  //-----------when it is a preFillValue ---------------------------------
                  else {

                    // create string
                    var fieldName = jsonObject.sections[indexSections].rows[indexRows].fields[indexFields].name;
                    var ID = jsonObject.sections[indexSections].rows[indexRows].fields[indexFields].ref;
                    var expectedValue = searchPatientProfile(askRecal);
                    //--------------- PRINT DATA INTO HTML ----------------------

                    var createNodeDiv1 = document.createElement("div");
                    var createNodeDiv2 = document.createElement("div");
                    var createNodeDiv4 = document.createElement("div");
                    var createNodeDivOpen = document.createElement("div");
                    var createNodeDivClose = document.createElement("div");

                    createNodeDivOpen.innerHTML = "{";
                    document.getElementById("preFilledValue").appendChild(createNodeDivOpen);

                    createNodeDiv1.innerHTML = "\"fieldName\": " + "\"" + fieldName + "\",";
                    document.getElementById("preFilledValue").appendChild(createNodeDiv1);

                    createNodeDiv2.innerHTML = "\"ID\": " + "\"" + ID + "\",";
                    document.getElementById("preFilledValue").appendChild(createNodeDiv2);

                    createNodeDiv4.innerHTML = "\"expectedValue\": " + "\"" + expectedValue + "\"";
                    document.getElementById("preFilledValue").appendChild(createNodeDiv4);

                    createNodeDivClose.innerHTML = "},";
                    document.getElementById("preFilledValue").appendChild(createNodeDivClose);
                    //--------------- PRINT DATA INTO HTML ----------------------    
                  }

                }


                //-------------------------------------DATA TYPE DATE TIME --------------------------------------------------
                if (getTypeField === inputDatetime) {

                  checkErrorUndefined(indexSections, indexRows, indexFields);
                  //---------- when it is inputValue--------------------- ------------------
                  if (askRecal === undefined || askRecal === "") {
                    // create string
                    var fieldName = jsonObject.sections[indexSections].rows[indexRows].fields[indexFields].name;
                    var ID = jsonObject.sections[indexSections].rows[indexRows].fields[indexFields].ref;
                    var inputValue = randomDate(new Date(2012, 0, 1), new Date());
                    var expectedValue = inputValue;

                    //--------------- PRINT DATA INTO HTML ----------------------

                    var createNodeDiv1 = document.createElement("div");
                    var createNodeDiv2 = document.createElement("div");
                    var createNodeDiv3 = document.createElement("div");
                    var createNodeDiv4 = document.createElement("div");
                    var createNodeDivOpen = document.createElement("div");
                    var createNodeDivClose = document.createElement("div");

                    createNodeDivOpen.innerHTML = "{";
                    document.getElementById("inputValue").appendChild(createNodeDivOpen);

                    createNodeDiv1.innerHTML = "\"fieldName\": " + "\"" + fieldName + "\",";
                    document.getElementById("inputValue").appendChild(createNodeDiv1);

                    createNodeDiv2.innerHTML = "\"ID\": " + "\"" + ID + "\",";
                    document.getElementById("inputValue").appendChild(createNodeDiv2);

                    createNodeDiv3.innerHTML = "\"inputValue\": " + "\"" + inputValue + "\",";
                    document.getElementById("inputValue").appendChild(createNodeDiv3);

                    createNodeDiv4.innerHTML = "\"expectedValue\": " + "\"" + expectedValue + "\"";
                    document.getElementById("inputValue").appendChild(createNodeDiv4);

                    createNodeDivClose.innerHTML = "},";
                    document.getElementById("inputValue").appendChild(createNodeDivClose);
                    //--------------- PRINT DATA INTO HTML ----------------------
                  }

                  //---------------------------- preFillValue--------------------
                  else {

                    // create string
                    var fieldName = jsonObject.sections[indexSections].rows[indexRows].fields[indexFields].name;
                    var ID = jsonObject.sections[indexSections].rows[indexRows].fields[indexFields].ref;
                    var expectedValue = searchPatientProfile(askRecal);

                    //========== check askPrecall is Todayshort??================
                    if (askRecal === "DEFAULT(TODAYSHORT)") {
                      //--------------- PRINT DATA INTO HTML ----------------------

                      var createNodeDiv1 = document.createElement("div");
                      var createNodeDiv2 = document.createElement("div");
                      var createNodeDivOpen = document.createElement("div");
                      var createNodeDivClose = document.createElement("div");

                      createNodeDivOpen.innerHTML = "{";
                      document.getElementById("currentDate").appendChild(createNodeDivOpen);

                      createNodeDiv1.innerHTML = "\"fieldName\": " + "\"" + fieldName + "\",";
                      document.getElementById("currentDate").appendChild(createNodeDiv1);

                      createNodeDiv2.innerHTML = "\"ID\": " + "\"" + ID + "\"";
                      document.getElementById("currentDate").appendChild(createNodeDiv2);

                      createNodeDivClose.innerHTML = "},";
                      document.getElementById("currentDate").appendChild(createNodeDivClose);
                      //--------------- PRINT DATA INTO HTML ----------------------  
                    }
                    else {
                      //--------------- PRINT DATA INTO HTML ----------------------

                      var createNodeDiv1 = document.createElement("div");
                      var createNodeDiv2 = document.createElement("div");
                      var createNodeDiv4 = document.createElement("div");
                      var createNodeDivOpen = document.createElement("div");
                      var createNodeDivClose = document.createElement("div");

                      createNodeDivOpen.innerHTML = "{";
                      document.getElementById("preFilledValue").appendChild(createNodeDivOpen);

                      createNodeDiv1.innerHTML = "\"fieldName\": " + "\"" + fieldName + "\",";
                      document.getElementById("preFilledValue").appendChild(createNodeDiv1);

                      createNodeDiv2.innerHTML = "\"ID\": " + "\"" + ID + "\",";
                      document.getElementById("preFilledValue").appendChild(createNodeDiv2);

                      createNodeDiv4.innerHTML = "\"expectedValue\": " + "\"" + expectedValue + "\"";
                      document.getElementById("preFilledValue").appendChild(createNodeDiv4);

                      createNodeDivClose.innerHTML = "},";
                      document.getElementById("preFilledValue").appendChild(createNodeDivClose);
                      //--------------- PRINT DATA INTO HTML ----------------------   
                    }
                  }
                }

                //------------------------------------DATA TYPE TEXTAREA---------------------------------------------------

                if (getTypeField === inputArea) {

                  checkErrorUndefined(indexSections, indexRows, indexFields);
                  //--------------------------------------------------------------------------------------------------------------------------------------------                           
                  //---------- when it is inputValue----------------------------- ------------------

                  if (askRecal === undefined || askRecal === "") {

                    // create string
                    var fieldName = jsonObject.sections[indexSections].rows[indexRows].fields[indexFields].name;
                    var ID = jsonObject.sections[indexSections].rows[indexRows].fields[indexFields].ref;
                    var inputValue;
                    var min = 255;
                    var max = 800; /////// change code
                    var random = Math.floor(Math.random() * (max - min + 1)) + min;

                    if (checkMaxLength === undefined) {
                      checkMaxLength = -1;
                    }
                    checkMaxLength = Number(checkMaxLength);

                    //check max lenght
                    if (checkMaxLength === 0) {
                      inputValue = makeid(random);
                    }
                    if (checkMaxLength > 0) {
                      inputValue = makeid(checkMaxLength);
                    }
                    if (checkMaxLength === -1) {
                      inputValue = makeid(random);
                    }

                    var expectedValue = inputValue;

                    //--------------- PRINT DATA INTO HTML ----------------------

                    var createNodeDiv1 = document.createElement("div");
                    var createNodeDiv2 = document.createElement("div");
                    var createNodeDiv3 = document.createElement("div");
                    var createNodeDiv4 = document.createElement("div");
                    var createNodeDivOpen = document.createElement("div");
                    var createNodeDivClose = document.createElement("div");

                    createNodeDivOpen.innerHTML = "{";
                    document.getElementById("inputValue").appendChild(createNodeDivOpen);

                    createNodeDiv1.innerHTML = "\"fieldName\": " + "\"" + fieldName + "\",";
                    document.getElementById("inputValue").appendChild(createNodeDiv1);

                    createNodeDiv2.innerHTML = "\"ID\": " + "\"" + ID + "\",";
                    document.getElementById("inputValue").appendChild(createNodeDiv2);

                    createNodeDiv3.innerHTML = "\"inputValue\": " + "\"" + inputValue + "\",";
                    document.getElementById("inputValue").appendChild(createNodeDiv3);

                    createNodeDiv4.innerHTML = "\"expectedValue\": " + "\"" + expectedValue + "\"";
                    document.getElementById("inputValue").appendChild(createNodeDiv4);

                    createNodeDivClose.innerHTML = "},";
                    document.getElementById("inputValue").appendChild(createNodeDivClose);
                    //--------------- PRINT DATA INTO HTML ---------------------- 

                  }


                  // -------------- when it is a reFillVallue------------------------------
                  else {
                    // create string
                    var fieldName = jsonObject.sections[indexSections].rows[indexRows].fields[indexFields].name;
                    var ID = jsonObject.sections[indexSections].rows[indexRows].fields[indexFields].ref;
                    var expectedValue = askRecal;

                    //--------------- PRINT DATA INTO HTML ----------------------

                    var createNodeDiv1 = document.createElement("div");
                    var createNodeDiv2 = document.createElement("div");
                    var createNodeDiv4 = document.createElement("div");
                    var createNodeDivOpen = document.createElement("div");
                    var createNodeDivClose = document.createElement("div");

                    createNodeDivOpen.innerHTML = "{";
                    document.getElementById("preFilledValue").appendChild(createNodeDivOpen);

                    createNodeDiv1.innerHTML = "\"fieldName\": " + "\"" + fieldName + "\",";
                    document.getElementById("preFilledValue").appendChild(createNodeDiv1);

                    createNodeDiv2.innerHTML = "\"ID\": " + "\"" + ID + "\",";
                    document.getElementById("preFilledValue").appendChild(createNodeDiv2);

                    createNodeDiv4.innerHTML = "\"expectedValue\": " + "\"" + expectedValue + "\"";
                    document.getElementById("preFilledValue").appendChild(createNodeDiv4);

                    createNodeDivClose.innerHTML = "},";
                    document.getElementById("preFilledValue").appendChild(createNodeDivClose);
                    //--------------- PRINT DATA INTO HTML ---------------------- 

                  }
                }

                //----------------------------------- DATA TYPE RADIO AND CHECK BOX----------------------------------------

                if (getTypeField === inputCheckRadio || getTypeField === inputCheckBox) {

                  checkErrorUndefined(indexSections, indexRows, indexFields);

                  if (askRecal === undefined || askRecal === "") {

                    var fieldName = jsonObject.sections[indexSections].rows[indexRows].fields[indexFields].name;
                    var ID = jsonObject.sections[indexSections].rows[indexRows].fields[indexFields].ref;
                    var saveRadioCheckBoxGroup = {
                      nameGroup: "",
                      idField: [],
                    };

                    if (grownLoopRadioCheck === 0) {
                      groupRadioCheck[grownLoopRadioCheck] = saveRadioCheckBoxGroup;
                      groupRadioCheck[grownLoopRadioCheck].nameGroup = fieldName;
                      groupRadioCheck[grownLoopRadioCheck].idField.push(ID);
                      grownLoopRadioCheck += 1;
                    }

                    else {
                      var checkHaveSameName = true;
                      for (var i = 0; i < grownLoopRadioCheck; i++) {

                        if (groupRadioCheck[i].nameGroup === fieldName) {
                          groupRadioCheck[i].idField.push(ID);
                          checkHaveSameName = false;
                        }
                      }
                      if (checkHaveSameName) {
                        groupRadioCheck[grownLoopRadioCheck] = saveRadioCheckBoxGroup;
                        groupRadioCheck[grownLoopRadioCheck].nameGroup = fieldName;
                        groupRadioCheck[grownLoopRadioCheck].idField.push(ID);
                        grownLoopRadioCheck += 1;
                      }

                    }
                  }

                  //-------------- when it is a preFilledChecked---------------------------
                  else {
                    // create string
                    checkHaveToast = true;
                    var fieldName = jsonObject.sections[indexSections].rows[indexRows].fields[indexFields].name;
                    var ID = jsonObject.sections[indexSections].rows[indexRows].fields[indexFields].ref;
                    var valueField = jsonObject.sections[indexSections].rows[indexRows].fields[indexFields].value;
                    var saveRadioCheckBoxGroup = {
                      nameGroup: "",
                      idField: [],
                      valueField: []
                    };

                    if (grownLoopRadioCheckedorNot === 0) {
                      groupRadioCheckedorNot[grownLoopRadioCheckedorNot] = saveRadioCheckBoxGroup;
                      groupRadioCheckedorNot[grownLoopRadioCheckedorNot].nameGroup = fieldName;
                      groupRadioCheckedorNot[grownLoopRadioCheckedorNot].idField.push(ID);
                      groupRadioCheckedorNot[grownLoopRadioCheckedorNot].valueField.push(valueField);
                      grownLoopRadioCheckedorNot += 1;
                    }

                    else {
                      var checkHaveSameName = true;
                      for (var i = 0; i < grownLoopRadioCheckedorNot; i++) {

                        if (groupRadioCheckedorNot[i].nameGroup === fieldName) {
                          groupRadioCheckedorNot[i].idField.push(ID);
                          groupRadioCheckedorNot[i].valueField.push(valueField);
                          checkHaveSameName = false;
                        }
                      }
                      if (checkHaveSameName) {
                        groupRadioCheckedorNot[grownLoopRadioCheckedorNot] = saveRadioCheckBoxGroup;
                        groupRadioCheckedorNot[grownLoopRadioCheckedorNot].nameGroup = fieldName;
                        groupRadioCheckedorNot[grownLoopRadioCheckedorNot].idField.push(ID);
                        groupRadioCheckedorNot[grownLoopRadioCheckedorNot].valueField.push(valueField);
                        grownLoopRadioCheckedorNot += 1;
                      }
                    }
                  }
                }

                //------------------------------------ DATA TYPE SIGNATURE -----------------------------------------------------------------
                {
                  //-----------------------------------candidateSignature-----------------------------------------------

                  if (getTypeField === candidateSignature) {
                    // create string
                    var fieldName = jsonObject.sections[indexSections].rows[indexRows].fields[indexFields].name;
                    var ID = jsonObject.sections[indexSections].rows[indexRows].fields[indexFields].ref;
                    //--------------- PRINT DATA INTO HTML ----------------------

                    var createNodeDiv1 = document.createElement("div");
                    var createNodeDiv2 = document.createElement("div");
                    var createNodeDivOpen = document.createElement("div");
                    var createNodeDivClose = document.createElement("div");

                    createNodeDivOpen.innerHTML = "{";
                    document.getElementById("candidateSignature").appendChild(createNodeDivOpen);

                    createNodeDiv1.innerHTML = "\"fieldName\": " + "\"" + fieldName + "\",";
                    document.getElementById("candidateSignature").appendChild(createNodeDiv1);

                    createNodeDiv2.innerHTML = "\"ID\": " + "\"" + ID + "\"";
                    document.getElementById("candidateSignature").appendChild(createNodeDiv2);

                    createNodeDivClose.innerHTML = "},";
                    document.getElementById("candidateSignature").appendChild(createNodeDivClose);
                    //--------------- PRINT DATA INTO HTML ----------------------
                  }
                  //--------------------------------- doctor Image Signature----------------------------------
                  if (getTypeField === doctorImageSignature) {

                    var fieldName = jsonObject.sections[indexSections].rows[indexRows].fields[indexFields].name;
                    var ID = jsonObject.sections[indexSections].rows[indexRows].fields[indexFields].ref;

                    //============================reloadDoctorSignature================================
                    var createNodeDiv1 = document.createElement("div");
                    var createNodeDiv2 = document.createElement("div");
                    var createNodeDivOpen = document.createElement("div");
                    var createNodeDivClose = document.createElement("div");

                    createNodeDivOpen.innerHTML = "{";
                    document.getElementById("reloadDoctorSignature").appendChild(createNodeDivOpen);

                    createNodeDiv1.innerHTML = "\"fieldName\": " + "\"" + fieldName + "\",";
                    document.getElementById("reloadDoctorSignature").appendChild(createNodeDiv1);

                    createNodeDiv2.innerHTML = "\"ID\": " + "\"" + ID + "_button_reload" + "\"";
                    document.getElementById("reloadDoctorSignature").appendChild(createNodeDiv2);

                    createNodeDivClose.innerHTML = "},";
                    document.getElementById("reloadDoctorSignature").appendChild(createNodeDivClose);

                    //=============================== isReloadedDoctorSignature==============================
                    var createNodeDiv1 = document.createElement("div");
                    var createNodeDiv2 = document.createElement("div");
                    var createNodeDivOpen = document.createElement("div");
                    var createNodeDivClose = document.createElement("div");

                    createNodeDivOpen.innerHTML = "{";
                    document.getElementById("isReloadedDoctorSignature").appendChild(createNodeDivOpen);

                    createNodeDiv1.innerHTML = "\"fieldName\": " + "\"" + fieldName + "\",";
                    document.getElementById("isReloadedDoctorSignature").appendChild(createNodeDiv1);

                    createNodeDiv2.innerHTML = "\"ID\": " + "\"" + ID + "\"";
                    document.getElementById("isReloadedDoctorSignature").appendChild(createNodeDiv2);

                    createNodeDivClose.innerHTML = "},";
                    document.getElementById("isReloadedDoctorSignature").appendChild(createNodeDivClose);
                  }
                }
                //--------------------------------------------------------------------------------------------------------------------
                indexFields += 1;
                if (indexFields > fieldsNumber) {
                  checkFields = false;
                }
              }
            }

            indexRows += 1;
            if (indexRows > rowsNumber) {
              checkRows = false;
            }
          }
        }

        indexSections += 1;
        if (indexSections > sectionsNumber) {
          checkSections = false;
        }
      }
    }

    //===============================================================================================================





    //--------------------------------- RANDOM SELECT VALUE --------------------------------


    for (var i = 0; i < groupRadioCheck.length; i++) {
      var totalFieldsCheckRadio = groupRadioCheck[i].idField.length;
      var randomFieldCheckRadio;
      if (totalFieldsCheckRadio === 1) {

        var createNodeDiv1 = document.createElement("div");
        var createNodeDiv2 = document.createElement("div");
        var createNodeDivOpen = document.createElement("div");
        var createNodeDivClose = document.createElement("div");

        createNodeDivOpen.innerHTML = "{";
        document.getElementById("selectValue").appendChild(createNodeDivOpen);

        createNodeDiv1.innerHTML = "\"fieldName\": " + "\"" + groupRadioCheck[i].nameGroup + "\",";
        document.getElementById("selectValue").appendChild(createNodeDiv1);

        createNodeDiv2.innerHTML = "\"ID\": " + "\"" + groupRadioCheck[i].idField[0] + "\"";
        document.getElementById("selectValue").appendChild(createNodeDiv2);

        createNodeDivClose.innerHTML = "},";
        document.getElementById("selectValue").appendChild(createNodeDivClose);
      }
      else {
        //-------------- random number between max min -------------------------------------
        var min = 1;
        var max = totalFieldsCheckRadio;
        var random = Math.floor(Math.random() * (max - min + 1)) + min;

        var createNodeDiv1 = document.createElement("div");
        var createNodeDiv2 = document.createElement("div");
        var createNodeDivOpen = document.createElement("div");
        var createNodeDivClose = document.createElement("div");

        createNodeDivOpen.innerHTML = "{";
        document.getElementById("selectValue").appendChild(createNodeDivOpen);

        createNodeDiv1.innerHTML = "\"fieldName\": " + "\"" + groupRadioCheck[i].nameGroup + "\",";
        document.getElementById("selectValue").appendChild(createNodeDiv1);

        createNodeDiv2.innerHTML = "\"ID\": " + "\"" + groupRadioCheck[i].idField[random - 1] + "\"";
        document.getElementById("selectValue").appendChild(createNodeDiv2);

        createNodeDivClose.innerHTML = "},";
        document.getElementById("selectValue").appendChild(createNodeDivClose);

      }

    }

    //====================== GET RADIO OR CHECK IS CHECKED OR NOT===============================



    for (var i = 0; i < groupRadioCheckedorNot.length; i++) {
      var createName = document.createElement("p");
      createName.innerHTML = groupRadioCheckedorNot[i].nameGroup;
      document.getElementById("formToast").appendChild(createName);

      for (var j = 0; j < groupRadioCheckedorNot[i].idField.length; j++) {
        var addPrefillCheckorUnCheck = document.createElement("input");
        if (groupRadioCheckedorNot[i].idField.length === 1) {
          addPrefillCheckorUnCheck.setAttribute("type", "checkbox");
        }
        else {
          addPrefillCheckorUnCheck.setAttribute("type", "radio");
        }
        addPrefillCheckorUnCheck.style.marginLeft = "25px";
        addPrefillCheckorUnCheck.setAttribute("name", groupRadioCheckedorNot[i].nameGroup);
        addPrefillCheckorUnCheck.setAttribute("value", groupRadioCheckedorNot[i].idField[j]);

        var createValue = document.createElement("p");
        createValue.style.display = "inline";
        createValue.innerHTML = groupRadioCheckedorNot[i].valueField[j];

        document.getElementById("formToast").appendChild(addPrefillCheckorUnCheck);
        document.getElementById("formToast").appendChild(createValue);

      }
    }
    if (checkHaveToast) {
      document.getElementById("formToast").style.display = "block";
    }
    else {
      document.getElementById("showFinal").style.display = "block";
    }


    function closeFormToast() {

      for (var i = 0; i < groupRadioCheckedorNot.length; i++) {
        var arrayRadioChecked = document.getElementsByName(groupRadioCheckedorNot[i].nameGroup);

        var j = groupRadioCheckedorNot[i].valueField.length;
        var step = 0;
        while (step < j) {
          if (arrayRadioChecked[step].checked === true) {
            //--------------- PRINT DATA INTO HTML ----------------------

            var createNodeDiv1 = document.createElement("div");
            var createNodeDiv2 = document.createElement("div");
            var createNodeDivOpen = document.createElement("div");
            var createNodeDivClose = document.createElement("div");

            createNodeDivOpen.innerHTML = "{";
            document.getElementById("preFilledChecked").appendChild(createNodeDivOpen);

            createNodeDiv1.innerHTML = "\"fieldName\": " + "\"" + groupRadioCheckedorNot[i].nameGroup + "\",";
            document.getElementById("preFilledChecked").appendChild(createNodeDiv1);

            createNodeDiv2.innerHTML = "\"ID\": " + "\"" + arrayRadioChecked[step].value + "\"";
            document.getElementById("preFilledChecked").appendChild(createNodeDiv2);

            createNodeDivClose.innerHTML = "},";
            document.getElementById("preFilledChecked").appendChild(createNodeDivClose);
            //--------------- PRINT DATA INTO HTML ---------------------- 

          }
          else {
            //--------------- PRINT DATA INTO HTML ----------------------

            var createNodeDiv1 = document.createElement("div");
            var createNodeDiv2 = document.createElement("div");
            var createNodeDivOpen = document.createElement("div");
            var createNodeDivClose = document.createElement("div");

            createNodeDivOpen.innerHTML = "{";
            document.getElementById("preFilledNotChecked").appendChild(createNodeDivOpen);

            createNodeDiv1.innerHTML = "\"fieldName\": " + "\"" + groupRadioCheckedorNot[i].nameGroup + "\",";
            document.getElementById("preFilledNotChecked").appendChild(createNodeDiv1);

            createNodeDiv2.innerHTML = "\"ID\": " + "\"" + arrayRadioChecked[step].value + "\"";
            document.getElementById("preFilledNotChecked").appendChild(createNodeDiv2);

            createNodeDivClose.innerHTML = "},";
            document.getElementById("preFilledNotChecked").appendChild(createNodeDivClose);
            //--------------- PRINT DATA INTO HTML ---------------------- 

          }
          step += 1;
        }
      }
      document.getElementById("formToast").style.display = "none";
      document.getElementById("showFinal").style.display = "block";
    }
    document.getElementById("btnSubmitToast").addEventListener("click", closeFormToast);
    //------------------------------------------------------------------------------------

    //======================== GET ID FOR PRINT BUTTOM=============================
    {
      var fieldName = "PrintEform"
      var ID = "printButton_" + idPrintForm + "_bottom";

      //============================Print eform================================
      var createNodeDiv1 = document.createElement("div");
      var createNodeDiv2 = document.createElement("div");
      var createNodeDivOpen = document.createElement("div");
      var createNodeDivClose = document.createElement("div");

      createNodeDivOpen.innerHTML = "{";
      document.getElementById("printEform").appendChild(createNodeDivOpen);

      createNodeDiv1.innerHTML = "\"fieldName\": " + "\"" + fieldName + "\",";
      document.getElementById("printEform").appendChild(createNodeDiv1);

      createNodeDiv2.innerHTML = "\"ID\": " + "\"" + ID + "\"";
      document.getElementById("printEform").appendChild(createNodeDiv2);

      createNodeDivClose.innerHTML = "},";
      document.getElementById("printEform").appendChild(createNodeDivClose);
    }

    // EXTEND CODE PRINT INTO HTML------------------------------------------
    document.getElementById("sections").innerHTML = "=> " + countSections + "<br>";
    document.getElementById("rows").innerHTML = "=> " + countRows + "<br>";
    document.getElementById("fields").innerHTML = "=> " + countFields + "<br>";
    document.getElementById("nameEformChecked").innerHTML = "=> " + jsonObject.eformName + "<br>";
    document.getElementById("idEformChecked").innerHTML = "=> " + jsonObject.idForm + "<br>";
    document.getElementById("typeEformChecked").innerHTML = "=> " + jsonObject.PrintType + "<br>";

    //check final no field name?-----------------------------------------------------
    if (document.getElementById("undefined_field_name").innerText === "") {
      document.getElementById("undefined_field_name").innerHTML = "=> " + "not found" + "<br>";
    }

    console.log("DATA SOURCES", jsonObject);

    //console.log("GROUP RADIO", groupRadioCheck);
    //console.log("GROUP RADIO check or not", groupRadioCheckedorNot);
  }
}

function cleanTextHtml() {
  var comfirmClean = confirm("Are you sure?");
  if (comfirmClean) {
    function removeAllChild(namePatient) {
      var listPatient = document.getElementById(namePatient);
      while (listPatient.hasChildNodes()) {
        listPatient.removeChild(listPatient.firstChild);
      }
    }


    removeAllChild("preFilledValue");
    removeAllChild("preFilledChecked");
    removeAllChild("preFilledNotChecked");
    removeAllChild("inputValue");
    removeAllChild("selectValue");
    removeAllChild("currentDate");
    removeAllChild("formToast");
    removeAllChild("candidateSignature");
    removeAllChild("reloadDoctorSignature");
    removeAllChild("isReloadedDoctorSignature");
    removeAllChild("printEform");



    document.getElementById("sections").innerHTML = "";
    document.getElementById("rows").innerHTML = "";
    document.getElementById("fields").innerHTML = "";
    document.getElementById("nameEformChecked").innerHTML = "";
    document.getElementById("idEformChecked").innerHTML = "";
    document.getElementById("typeEformChecked").innerHTML = "";
    document.getElementById("undefined_field_name").innerHTML = "";
    document.getElementById("inputData").value = "";
    document.getElementById("formToast").innerHTML = "<p style=\"text-align: center; color: red; font-size: 25\"><u>MORE INFOMATION FOR CODE</u></p>";
    var btnAplly = document.createElement("div");
    btnAplly.innerHTML = "<button type=\"submit\" id=\"btnSubmitToast\">APLLY DATA INFO</button>";
    document.getElementById("formToast").appendChild(btnAplly);
    document.getElementById("showFinal").style.display = "none";
  }
}


document.getElementById("btnSubmit").addEventListener("click", getDataSourcesAndMainProgram);
document.getElementById("btnRemoveCode").addEventListener("click", cleanTextHtml);



