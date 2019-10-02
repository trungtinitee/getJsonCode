////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////=======================CODE BY TRUNG TIN==============================/////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////



function getDataSourcesAndMainProgram() {
  var templateTest = document.getElementById("templateTest");
  var usePatient = document.getElementById("dataAutomationPatient");
  var jsonObjectPatinet;
  var jsonObjectBillings;
  var jsonObjectDoctor;
  var parseEFormTemplateData;
  var jsonObject;
  if (usePatient.checked) {
    jsonObjectPatinet = { "patient": { "id": 43295, "uuid": "38e5af2d-ed10-454f-91dc-308dc3881305", "title": 2, "gender": 2, "raceId": 3, "firstName": "test001", "midName": null, "surname": "MINHNHUTMTP", "fullName": "", "dob": "2019-07-23T00:00:00Z", "avatar": null, "avatarRekognition": null, "occupation": "boss" }, "contact": { "id": 66564, "patientId": 43295, "email": "leminhnhutdhct@gmail.com", "phoneHome": "456", "phoneMobile": "040123", "phoneWork": "123", "address": "Tan Hanh Dai Phuc Cang Long Tra Vinh", "poBoxNo": "PO POX OR", "isSendMail": false, "suburb": "quan Cam", "postcode": "1234", "state": "TORRES STRAIT ISLANDER", "country": "Viet Nam" }, "billing": null, "companies": [{ "patientId": 43295, "companyId": 1013, "companyName": "Citic Pacific Mining", "companySiteId": 1043, "companySiteName": "Sino Iron - INJURY", "currentCompany": true }, { "patientId": 43295, "companyId": 1, "companyName": "REDIMED", "companySiteId": 1, "companySiteName": "REDiMED Belmont", "currentCompany": false }], "hasConsultation": false, "account": { "id": 0, "patientID": 0, "parentID": null, "email": "", "phoneMobile": "" }, "nextOfKin": "PatientPEM AUTOMATION", "isTest": false };
    jsonObjectBillings = { "id": 423, "patientId": 43295, "medicareNumber": "9090", "medicareRefNumber": "1", "medicareExp": "2019-11-28T00:00:00Z", "privateHealthFundId": 1035, "privateHealthFundObject": { "key": 1035, "label": "Automation UPDATED - Private Health Fund" }, "privateHealthFundRefNumber": "101199", "membershipNumber": "ok. i dont know", "dvaNumber": "001113", "dvaDisability": "DVA Disability", "cardColor": 1, "pensionNumber": "0967702162", "pensionExp": "2008-02-28T00:00:00Z", "billingTypeId": 4, "accountHolderTypeId": 3, "accountHolderRefId": 1 };
    jsonObjectDoctor = { "staff": { "id": 730, "uuid": "27013256-8efc-4921-9324-97b36a63b75d", "avatarUrl": "file/staff/avatars/e40bd425-fa98-cd2b-9133-a70a85821cff.jpg", "title": 6, "firstName": "Doctor Test 1", "midName": "", "surname": "NOAH", "mobile": "03349193945", "officeNumber": "", "dob": "1999-07-04T00:00:00Z", "email": "outsource.redimed@infomedtech.com.au", "address": "Address for Doctor account - FDA", "suburb": "SuburbFDA", "postcode": "0407", "state": "South Australia", "country": "Australia", "source": "", "status": false, "account": { "username": "Doctest1", "accountType": 1, "active": true, "createAccount": true, "rolesObject": [{ "key": 342, "label": "Doctor" }, { "key": 343, "label": "All" }] }, "username": "Doctest1", "staffNameObject": { "key": 730, "label": "Doctor Test 1 NOAH" } }, "information": { "id": 40839, "departmentId": 1, "roleType": 1, "registerNumber": "113114115", "signatureUrl": "file/staff/signatures/0148de80-4ff6-acd1-85f7-16e232823b87.png", "stampUrl": "", "HPII": "", "qualification": "12121212", "prescriberNumber": "", "specialtyId": 1, "specialtyName": "Medical Practitioner", "notificationChannels": null, "notificationServices": null, "specialtyObject": { "key": 1, "label": "Medical Practitioner" }, "providerNumbers": [{ "id": 571, "uuid": "dd7822b4-b594-d92b-fe7c-03549823beb1", "companyId": 1004, "companyObject": { "key": 1004, "label": "NOAH" }, "companySiteId": 1004, "companySiteObject": { "key": 1004, "label": "NOAH Site - NOAH" }, "providerNumber": "040404", "specialtyId": 1, "email": "", "companyName": "NOAH", "companySiteName": "NOAH Site", "companySiteAddress": "Add 1", "specialtyName": "Medical Practitioner", "onlineServices": null, "onlineServiceObjects": null }, { "id": 573, "uuid": "9ca8311b-bd38-ac32-e2b7-6b0287f2469e", "companyId": 1004, "companyObject": { "key": 1004, "label": "NOAH" }, "companySiteId": 1005, "companySiteObject": { "key": 1005, "label": "NOAH Site 1 - NOAH" }, "providerNumber": "030303", "specialtyId": 1, "email": "", "companyName": "NOAH", "companySiteName": "NOAH Site 1", "companySiteAddress": "123 Test", "specialtyName": "Medical Practitioner", "onlineServices": null, "onlineServiceObjects": null }, { "id": 613, "uuid": "a9ccc406-02aa-ad06-8529-9451d4a10fbf", "companyId": 4, "companyObject": { "key": 4, "label": "Citic Pacific Mining" }, "companySiteId": 9, "companySiteObject": { "key": 9, "label": "Citic Pacific Mining Site - Citic Pacific Mining" }, "providerNumber": "020202", "specialtyId": 1, "email": "", "companyName": "Citic Pacific Mining", "companySiteName": "Citic Pacific Mining Site", "companySiteAddress": "", "specialtyName": "Medical Practitioner", "onlineServices": null, "onlineServiceObjects": null }, { "id": 616, "uuid": "fb22ce9f-c42d-c30d-97ff-2688a69a1776", "companyId": 1, "companyObject": { "key": 1, "label": "REDIMED" }, "companySiteId": 1, "companySiteObject": { "key": 1, "label": "REDiMED Belmont - REDIMED" }, "providerNumber": "010101", "specialtyId": 1, "email": "", "companyName": "REDIMED", "companySiteName": "REDiMED Belmont", "companySiteAddress": "1 Frederick St", "specialtyName": "Medical Practitioner", "onlineServices": null, "onlineServiceObjects": null }, { "id": 636, "uuid": "d370a647-bf0f-a587-0a0d-7fc5a4f31d9d", "companyId": 1030, "companyObject": { "key": 1030, "label": "AMC360TEST" }, "companySiteId": 1079, "companySiteObject": { "key": 1079, "label": "Armadale Clinic - AMC360TEST" }, "providerNumber": "113114115", "specialtyId": 1, "email": "", "companyName": "AMC360TEST", "companySiteName": "Armadale Clinic", "companySiteAddress": "123 Fake Street", "specialtyName": "Medical Practitioner", "onlineServices": null, "onlineServiceObjects": null }] }, "companies": null };
  }
  else {
    var jsonPatient = document.getElementById("inputDataPatient").value;
    var jsonBillings = document.getElementById("inputDataBilling").value;
    var jsonDoctor = document.getElementById("inputDataDoctor").value;
    jsonObjectPatinet = JSON.parse(jsonPatient);
    jsonObjectBillings = JSON.parse(jsonBillings);
    jsonObjectDoctor = JSON.parse(jsonDoctor);
  }
  if (templateTest.checked) {
    parseEFormTemplateData = {
      "ID": 351,
      "UID": "5cedfdae-cb6d-49fb-b973-4cb27b12e6ab",
      "Name": "Medical Assessment",
      "Description": null,
      "PrintType": "jasper",
      "PrintAPI": "print",
      "PrintSkin": null,
      "ListPrintFile": null,
      "Type": null,
      "Order": 13,
      "EnableSendLink": "N",
      "Version": "1.0",
      "Key": "",
      "Enable": "Y",
      "Active": "Y",
      "OutSource": "N",
      "CreatedDate": "2018-12-31T05:07:35Z",
      "CreatedBy": 6,
      "ModifiedDate": "2018-12-31T05:07:35Z",
      "ModifiedBy": 6,
      "EFormTemplateData": {
        "ID": 351,
        "UID": "e880db0c-e211-4365-97ed-1b71df98637a",
        "EFormTemplateID": 351,
        "TemplateData": "{\"sections\":[{\"name\":\"Medical Assessment\",\"ref\":\"section_0\",\"rows\":[{\"ref\":\"row_0_0\",\"type\":\"row\",\"fields\":[{\"fieldPosition\":{\"sectionID\":0,\"rowID\":0,\"fieldID\":0},\"preCal\":\"\",\"cal\":\"\",\"label\":\"Pre-employment\",\"labelPrefix\":\"\",\"labelSuffix\":\"\",\"name\":\"pem\",\"value\":\"yes\",\"size\":4,\"ref\":\"field_0_0_2\",\"type\":\"eform_input_check_radio\",\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":true,\"isNumber\":false},{\"fieldPosition\":{\"sectionID\":0,\"rowID\":0,\"fieldID\":1},\"preCal\":\"\",\"cal\":\"\",\"label\":\"Periodical\",\"labelPrefix\":\"\",\"labelSuffix\":\"\",\"name\":\"pem\",\"value\":\"no\",\"size\":2,\"ref\":\"field_0_0_3\",\"type\":\"eform_input_check_radio\",\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":true,\"isNumber\":false}],\"size\":12,\"currentFieldIndex\":4}],\"page\":1,\"showOpenCloseSection\":\"YES\",\"defaultOpenCloseSection\":\"YES\",\"isOpen\":true,\"currentRowIndex\":1,\"defaultRequiredSection\":\"YES\"},{\"name\":\"Patient Information\",\"ref\":\"section_11\",\"rows\":[{\"ref\":\"row_11_0\",\"type\":\"row\",\"fields\":[{\"type\":\"eform_input_check_label\",\"size\":2,\"ref\":\"field_11_0_0\",\"preCal\":\"\",\"label\":\"Patient Name\",\"value\":\"\",\"fieldPosition\":{\"sectionID\":1,\"rowID\":0,\"fieldID\":0},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":true,\"isNumber\":false},{\"size\":6,\"labelSuffix\":\"\",\"labelPrefix\":\"\",\"preCal\":\"CONCAT(PatientAppointment.FirstName,PatientAppointment.LastName)\",\"name\":\"p_name\",\"cal\":\"\",\"ref\":\"field_11_0_1\",\"type\":\"eform_input_text\",\"fieldPosition\":{\"sectionID\":1,\"rowID\":0,\"fieldID\":1},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":true,\"isUncheck\":true,\"isNumber\":false},{\"type\":\"eform_input_check_label\",\"size\":1,\"ref\":\"field_11_0_2\",\"preCal\":\"\",\"label\":\"Gender\",\"value\":\"\",\"fieldPosition\":{\"sectionID\":1,\"rowID\":0,\"fieldID\":2},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":true,\"isNumber\":false},{\"size\":1,\"preCal\":\"CONCAT(PatientAppointment.Gender)\",\"name\":\"gender\",\"cal\":\"\",\"value\":\"Male\",\"ref\":\"field_11_0_3\",\"label\":\"Male\",\"type\":\"eform_input_check_radio\",\"fieldPosition\":{\"sectionID\":1,\"rowID\":0,\"fieldID\":3},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":true,\"isUncheck\":true,\"isNumber\":false},{\"size\":2,\"preCal\":\"CONCAT(PatientAppointment.Gender)\",\"name\":\"gender\",\"cal\":\"updatePatientInfo(Patient,Gender)\",\"value\":\"Female\",\"ref\":\"field_11_0_4\",\"label\":\"Female\",\"type\":\"eform_input_check_radio\",\"fieldPosition\":{\"sectionID\":1,\"rowID\":0,\"fieldID\":4},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":true,\"isUncheck\":true,\"isNumber\":false}],\"size\":12,\"currentFieldIndex\":5},{\"ref\":\"row_11_1\",\"type\":\"row\",\"fields\":[{\"type\":\"eform_input_check_label\",\"size\":2,\"ref\":\"field_11_1_0\",\"preCal\":\"\",\"label\":\"DOB\",\"value\":\"\",\"fieldPosition\":{\"sectionID\":1,\"rowID\":1,\"fieldID\":0},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":true,\"isNumber\":false},{\"type\":\"eform_input_date\",\"name\":\"p_dob\",\"size\":2,\"ref\":\"field_11_1_1\",\"preCal\":\"CONCAT(PatientAppointment.DOB)\",\"cal\":\"\",\"fieldPosition\":{\"sectionID\":1,\"rowID\":1,\"fieldID\":1},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":true,\"isUncheck\":true,\"isNumber\":false},{\"type\":\"eform_input_check_label\",\"size\":1,\"ref\":\"field_11_1_2\",\"preCal\":\"\",\"label\":\"Contact No\",\"value\":\"\",\"fieldPosition\":{\"sectionID\":1,\"rowID\":1,\"fieldID\":2},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":true,\"isNumber\":false},{\"size\":3,\"labelSuffix\":\"\",\"labelPrefix\":\"\",\"preCal\":\"CONCAT(PatientAppointment.PhoneNumber)\",\"name\":\"p_phone\",\"cal\":\"\",\"ref\":\"field_11_1_3\",\"type\":\"eform_input_text\",\"fieldPosition\":{\"sectionID\":1,\"rowID\":1,\"fieldID\":3},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":true,\"isUncheck\":true,\"isNumber\":false},{\"type\":\"eform_input_check_label\",\"size\":1,\"ref\":\"field_11_1_4\",\"preCal\":\"\",\"label\":\"Email\",\"value\":\"\",\"fieldPosition\":{\"sectionID\":1,\"rowID\":1,\"fieldID\":4},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":true,\"isNumber\":false},{\"size\":3,\"labelSuffix\":\"\",\"labelPrefix\":\"\",\"preCal\":\"CONCAT(PatientAppointment.Email1)\",\"name\":\"p_email\",\"cal\":\"\",\"ref\":\"field_11_1_5\",\"type\":\"eform_input_text\",\"fieldPosition\":{\"sectionID\":1,\"rowID\":1,\"fieldID\":5},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":true,\"isUncheck\":true,\"isNumber\":false}],\"size\":12,\"currentFieldIndex\":6},{\"ref\":\"row_11_2\",\"type\":\"row\",\"fields\":[{\"type\":\"eform_input_check_label\",\"size\":2,\"ref\":\"field_11_2_0\",\"preCal\":\"\",\"label\":\"Address\",\"value\":\"\",\"fieldPosition\":{\"sectionID\":1,\"rowID\":2,\"fieldID\":0},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":true,\"isNumber\":false},{\"size\":10,\"labelSuffix\":\"\",\"labelPrefix\":\"\",\"preCal\":\"CONCAT(PatientAppointment.Address1,PatientAppointment.Address2)\",\"name\":\"p_address\",\"cal\":\"\",\"ref\":\"field_11_2_1\",\"type\":\"eform_input_text\",\"fieldPosition\":{\"sectionID\":1,\"rowID\":2,\"fieldID\":1},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":true,\"isUncheck\":true,\"isNumber\":false}],\"size\":12,\"currentFieldIndex\":2},{\"ref\":\"row_11_3\",\"type\":\"row\",\"fields\":[{\"type\":\"eform_input_check_label\",\"size\":2,\"ref\":\"\",\"preCal\":\"\",\"label\":\"State\",\"value\":\"\",\"fieldPosition\":{\"sectionID\":1,\"rowID\":3,\"fieldID\":0},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":true,\"isNumber\":false},{\"size\":2,\"labelSuffix\":\"\",\"labelPrefix\":\"\",\"preCal\":\"CONCAT(PatientAppointment.State)\",\"name\":\"p_state\",\"cal\":\"\",\"ref\":\"field_11_3_1\",\"type\":\"eform_input_text\",\"fieldPosition\":{\"sectionID\":1,\"rowID\":3,\"fieldID\":1},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":true,\"isUncheck\":true,\"isNumber\":false},{\"type\":\"eform_input_check_label\",\"size\":1,\"ref\":\"field_11_3_2\",\"preCal\":\"\",\"label\":\"Suburb\",\"value\":\"\",\"fieldPosition\":{\"sectionID\":1,\"rowID\":3,\"fieldID\":2},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":true,\"isNumber\":false},{\"size\":3,\"labelSuffix\":\"\",\"labelPrefix\":\"\",\"preCal\":\"CONCAT(PatientAppointment.Suburb)\",\"name\":\"p_suburb\",\"cal\":\"\",\"ref\":\"field_11_3_3\",\"type\":\"eform_input_text\",\"fieldPosition\":{\"sectionID\":1,\"rowID\":3,\"fieldID\":3},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":true,\"isUncheck\":true,\"isNumber\":false},{\"type\":\"eform_input_check_label\",\"size\":1,\"ref\":\"field_11_3_4\",\"preCal\":\"\",\"label\":\"Postcode\",\"value\":\"\",\"fieldPosition\":{\"sectionID\":1,\"rowID\":3,\"fieldID\":4},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":true,\"isNumber\":false},{\"size\":3,\"labelSuffix\":\"\",\"labelPrefix\":\"\",\"preCal\":\"CONCAT(PatientAppointment.Postcode)\",\"name\":\"p_postcode\",\"cal\":\"\",\"ref\":\"field_11_3_5\",\"type\":\"eform_input_text\",\"fieldPosition\":{\"sectionID\":1,\"rowID\":3,\"fieldID\":5},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":true,\"isUncheck\":true,\"isNumber\":false}],\"size\":12,\"currentFieldIndex\":6},{\"ref\":\"row_11_4\",\"type\":\"row\",\"fields\":[{\"fieldPosition\":{\"sectionID\":1,\"rowID\":4,\"fieldID\":0},\"preCal\":\"\",\"cal\":\"\",\"label\":\"Proposed Occupation\",\"labelPrefix\":\"\",\"labelSuffix\":\"\",\"name\":\"\",\"value\":null,\"size\":2,\"ref\":\"field_11_4_4\",\"type\":\"eform_input_check_label\",\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":true,\"isNumber\":false},{\"fieldPosition\":{\"sectionID\":1,\"rowID\":4,\"fieldID\":1},\"preCal\":\"CONCAT(PatientAppointment.Occupation)\",\"cal\":\"\",\"label\":\"\",\"labelPrefix\":\"\",\"labelSuffix\":\"\",\"name\":\"p_proposed_occupation\",\"value\":null,\"size\":2,\"ref\":\"field_11_6_1\",\"type\":\"eform_input_text\",\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":true,\"isUncheck\":true,\"isNumber\":false},{\"type\":\"eform_input_check_label\",\"size\":1,\"ref\":\"field_11_4_0\",\"preCal\":\"\",\"label\":\"Company Name\",\"value\":\"\",\"fieldPosition\":{\"sectionID\":1,\"rowID\":4,\"fieldID\":2},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":true,\"isNumber\":false},{\"size\":3,\"labelSuffix\":\"\",\"labelPrefix\":\"\",\"preCal\":\"COMBINEFIELDSMARK(Appointment.patientSiteInfo.companySiteName@=)\",\"name\":\"p_company\",\"cal\":\"\",\"ref\":\"field_11_4_1\",\"type\":\"eform_input_text\",\"fieldPosition\":{\"sectionID\":1,\"rowID\":4,\"fieldID\":3},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":true,\"isNumber\":false,\"isReloadDisabled\":false,\"isHidden\":false},{\"fieldPosition\":{\"sectionID\":1,\"rowID\":4,\"fieldID\":4},\"preCal\":\"\",\"cal\":\"\",\"label\":\"Job Location\",\"labelPrefix\":\"\",\"labelSuffix\":\"\",\"name\":\"\",\"value\":null,\"size\":1,\"ref\":\"field_11_4_2\",\"type\":\"eform_input_check_label\",\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":true,\"isNumber\":false},{\"fieldPosition\":{\"sectionID\":1,\"rowID\":4,\"fieldID\":5},\"preCal\":\"EFORMDATA(p_job_location,Medical History,394,0)\",\"cal\":\"\",\"label\":\"\",\"labelPrefix\":\"\",\"labelSuffix\":\"\",\"name\":\"p_job_location\",\"value\":null,\"size\":3,\"ref\":\"field_11_4_3\",\"type\":\"eform_input_text\",\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":true,\"isNumber\":false,\"isReloadDisabled\":false,\"isHidden\":false}],\"size\":12,\"currentFieldIndex\":6},{\"currentFieldIndex\":3,\"ref\":\"row_11_7\",\"size\":12,\"type\":\"row\",\"fields\":[{\"fieldPosition\":{\"sectionID\":1,\"rowID\":5,\"fieldID\":0},\"preCal\":\"\",\"cal\":\"\",\"label\":\"Appointment Date\",\"labelPrefix\":\"\",\"labelSuffix\":\"\",\"name\":\"p_appointment_date\",\"value\":null,\"size\":2,\"ref\":\"field_11_7_0\",\"type\":\"eform_input_check_label\",\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":true,\"isNumber\":false},{\"fieldPosition\":{\"sectionID\":1,\"rowID\":5,\"fieldID\":1},\"preCal\":\"CONCAT(Appointment.FromTime)\",\"cal\":\"\",\"label\":\"\",\"labelPrefix\":\"\",\"labelSuffix\":\"\",\"name\":\"p_appointment_date\",\"value\":null,\"size\":2,\"ref\":\"field_11_7_2\",\"type\":\"eform_input_date\",\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":true,\"isNumber\":false,\"isReloadDisabled\":false}]}],\"page\":1,\"showOpenCloseSection\":\"YES\",\"defaultOpenCloseSection\":\"YES\",\"isOpen\":true,\"currentRowIndex\":8,\"defaultRequiredSection\":\"YES\"},{\"name\":\"SECTION 1: Cardiovascular System\",\"ref\":\"section_1\",\"rows\":[{\"ref\":\"row_1_0\",\"type\":\"row\",\"fields\":[{\"size\":3,\"labelSuffix\":\"cm\",\"labelPrefix\":\"Height:\",\"preCal\":\"\",\"name\":\"height\",\"cal\":\"\",\"ref\":\"field_1_0_1\",\"type\":\"eform_input_text\",\"fieldPosition\":{\"sectionID\":2,\"rowID\":0,\"fieldID\":0},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":true,\"isNumber\":true},{\"size\":3,\"labelSuffix\":\"kgs\",\"labelPrefix\":\"Weight:\",\"preCal\":\"\",\"name\":\"weight\",\"cal\":\"\",\"ref\":\"field_1_0_3\",\"type\":\"eform_input_text\",\"fieldPosition\":{\"sectionID\":2,\"rowID\":0,\"fieldID\":1},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":true,\"isNumber\":true},{\"size\":3,\"labelSuffix\":\"cm\",\"labelPrefix\":\"Waist:\",\"preCal\":\"\",\"name\":\"waist\",\"cal\":\"\",\"ref\":\"field_1_0_5\",\"type\":\"eform_input_text\",\"fieldPosition\":{\"sectionID\":2,\"rowID\":0,\"fieldID\":2},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":true,\"isNumber\":true},{\"size\":3,\"labelSuffix\":\"cm\",\"labelPrefix\":\"Hip:\",\"preCal\":\"\",\"name\":\"hip\",\"cal\":\"\",\"ref\":\"field_1_0_7\",\"type\":\"eform_input_text\",\"fieldPosition\":{\"sectionID\":2,\"rowID\":0,\"fieldID\":3},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":true,\"isNumber\":true}],\"size\":12,\"currentFieldIndex\":4},{\"ref\":\"row_1_1\",\"type\":\"row\",\"fields\":[{\"type\":\"eform_input_check_label\",\"size\":\"4\",\"ref\":\"field_1_1_0\",\"preCal\":\"\",\"label\":\"Blood Pressure Systolic\",\"value\":\"\",\"fieldPosition\":{\"sectionID\":2,\"rowID\":1,\"fieldID\":0},\"isSelect\":true},{\"size\":2,\"labelSuffix\":\"mmHg\",\"labelPrefix\":\"\",\"preCal\":\"BLOODPRESSURE([{\\\"gender\\\": \\\"Male\\\",\\\"from\\\": \\\"120\\\", \\\"to\\\": \\\"139\\\",\\\"value\\\": \\\"normal\\\",\\\"fieldsChanged\\\":\\\"blo_pre_norm_abn\\\",\\\"commentChanged\\\":\\\"ex_comments_car\\\",\\\"noteComment\\\":\\\"\\\"},{\\\"gender\\\":\\\"Male\\\",\\\"from\\\": \\\"140\\\", \\\"to\\\": \\\"159\\\",\\\"value\\\":\\\"abnormal\\\",\\\"fieldsChanged\\\":\\\"blo_pre_norm_abn\\\",\\\"commentChanged\\\":\\\"ex_comments_car\\\",\\\"noteComment\\\":\\\"\\\"}])\",\"name\":\"blo_pres\",\"cal\":\"\",\"ref\":\"field_1_1_1\",\"type\":\"eform_input_text\",\"fieldPosition\":{\"sectionID\":2,\"rowID\":1,\"fieldID\":1},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":true,\"isNumber\":true,\"placeholder\":\"Valid range: 120 - 160+\"},{\"size\":2,\"preCal\":\"\",\"name\":\"blo_pre_norm_abn\",\"cal\":\"\",\"value\":\"normal\",\"ref\":\"field_1_1_3\",\"label\":\"Normal\",\"type\":\"eform_input_check_radio\",\"fieldPosition\":{\"sectionID\":2,\"rowID\":1,\"fieldID\":2},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false},{\"size\":3,\"preCal\":\"\",\"name\":\"blo_pre_norm_abn\",\"cal\":\"\",\"value\":\"abnormal\",\"ref\":\"field_1_1_4\",\"label\":\"Abnormal\",\"type\":\"eform_input_check_radio\",\"fieldPosition\":{\"sectionID\":2,\"rowID\":1,\"fieldID\":3},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false}],\"size\":12,\"currentFieldIndex\":4},{\"ref\":\"row_1_2\",\"type\":\"row\",\"fields\":[{\"type\":\"eform_input_check_label\",\"size\":\"4\",\"ref\":\"field_1_2_0\",\"preCal\":\"\",\"label\":\"Blood Pressure Diastolic\",\"value\":\"\",\"fieldPosition\":{\"sectionID\":2,\"rowID\":2,\"fieldID\":0},\"isSelect\":true},{\"size\":2,\"labelSuffix\":\"mmHg\",\"labelPrefix\":\"\",\"preCal\":\"\",\"name\":\"blo_pres_dia\",\"cal\":\"\",\"ref\":\"field_1_2_1\",\"type\":\"eform_input_text\",\"fieldPosition\":{\"sectionID\":2,\"rowID\":2,\"fieldID\":1},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":true,\"isNumber\":true},{\"size\":2,\"preCal\":\"\",\"name\":\"blo_pre_norm_abn_dia\",\"cal\":\"\",\"value\":\"normal\",\"ref\":\"field_1_2_3\",\"label\":\"Normal\",\"type\":\"eform_input_check_radio\",\"fieldPosition\":{\"sectionID\":2,\"rowID\":2,\"fieldID\":2},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false},{\"size\":3,\"preCal\":\"\",\"name\":\"blo_pre_norm_abn_dia\",\"cal\":\"\",\"value\":\"abnormal\",\"ref\":\"field_1_2_4\",\"label\":\"Abnormal\",\"type\":\"eform_input_check_radio\",\"fieldPosition\":{\"sectionID\":2,\"rowID\":2,\"fieldID\":3},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false}],\"size\":12,\"currentFieldIndex\":4},{\"ref\":\"row_1_3\",\"type\":\"row\",\"fields\":[{\"type\":\"eform_input_check_label\",\"size\":4,\"ref\":\"field_1_3_0\",\"preCal\":\"\",\"label\":\"Resting Heart Rate\",\"value\":\"\",\"fieldPosition\":{\"sectionID\":2,\"rowID\":3,\"fieldID\":0},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":true,\"isNumber\":false},{\"size\":2,\"labelSuffix\":\"bpm\",\"labelPrefix\":\"\",\"preCal\":\"\",\"name\":\"heart_rate\",\"cal\":\"\",\"ref\":\"field_1_3_1\",\"type\":\"eform_input_text\",\"fieldPosition\":{\"sectionID\":2,\"rowID\":3,\"fieldID\":1},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":true,\"isNumber\":true},{\"size\":2,\"preCal\":\"\",\"name\":\"hea_rat_nor_abn\",\"cal\":\"\",\"value\":\"normal\",\"ref\":\"field_1_3_3\",\"label\":\"Normal\",\"type\":\"eform_input_check_radio\",\"fieldPosition\":{\"sectionID\":2,\"rowID\":3,\"fieldID\":2},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false},{\"size\":3,\"preCal\":\"\",\"name\":\"hea_rat_nor_abn\",\"cal\":\"\",\"value\":\"abnormal\",\"ref\":\"field_1_3_4\",\"label\":\"Abnormal\",\"type\":\"eform_input_check_radio\",\"fieldPosition\":{\"sectionID\":2,\"rowID\":3,\"fieldID\":3},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false}],\"size\":12,\"currentFieldIndex\":4},{\"ref\":\"row_1_4\",\"type\":\"row\",\"fields\":[{\"type\":\"eform_input_check_label\",\"size\":\"6\",\"ref\":\"field_1_4_0\",\"preCal\":\"\",\"label\":\"Heart Sounds\",\"value\":\"\",\"fieldPosition\":{\"sectionID\":2,\"rowID\":4,\"fieldID\":0},\"isSelect\":true},{\"type\":\"eform_input_check_radio\",\"name\":\"hear_soun_nor_abn\",\"size\":2,\"ref\":\"field_1_4_1\",\"preCal\":\"\",\"label\":\"Normal\",\"value\":\"normal\",\"fieldPosition\":{\"sectionID\":2,\"rowID\":4,\"fieldID\":1},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false},{\"size\":3,\"preCal\":\"\",\"name\":\"hear_soun_nor_abn\",\"cal\":\"\",\"value\":\"abnormal\",\"ref\":\"field_1_4_2\",\"label\":\"Abnormal\",\"type\":\"eform_input_check_radio\",\"fieldPosition\":{\"sectionID\":2,\"rowID\":4,\"fieldID\":2},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false}],\"size\":12,\"currentFieldIndex\":3},{\"ref\":\"row_1_5\",\"type\":\"row\",\"fields\":[{\"type\":\"eform_input_check_label\",\"size\":\"6\",\"ref\":\"field_1_5_0\",\"preCal\":\"\",\"label\":\"Peripheral Vessels\",\"value\":\"\",\"fieldPosition\":{\"sectionID\":2,\"rowID\":5,\"fieldID\":0},\"isSelect\":true},{\"type\":\"eform_input_check_radio\",\"name\":\"per_vess_nor_abn\",\"size\":2,\"ref\":\"field_1_5_1\",\"preCal\":\"\",\"label\":\"Normal\",\"value\":\"normal\",\"fieldPosition\":{\"sectionID\":2,\"rowID\":5,\"fieldID\":1},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false},{\"size\":3,\"preCal\":\"\",\"name\":\"per_vess_nor_abn\",\"cal\":\"\",\"value\":\"abnormal\",\"ref\":\"field_1_5_2\",\"label\":\"Abnormal\",\"type\":\"eform_input_check_radio\",\"fieldPosition\":{\"sectionID\":2,\"rowID\":5,\"fieldID\":2},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false}],\"size\":12,\"currentFieldIndex\":3},{\"ref\":\"row_1_6\",\"type\":\"row\",\"fields\":[{\"type\":\"eform_input_check_label\",\"size\":\"6\",\"ref\":\"field_1_6_0\",\"preCal\":\"\",\"label\":\"Veins & other Vessels\",\"value\":\"\",\"fieldPosition\":{\"sectionID\":2,\"rowID\":6,\"fieldID\":0},\"isSelect\":true},{\"type\":\"eform_input_check_radio\",\"name\":\"ven_vess_nor_abn\",\"size\":2,\"ref\":\"field_1_6_1\",\"preCal\":\"\",\"label\":\"Normal\",\"value\":\"normal\",\"fieldPosition\":{\"sectionID\":2,\"rowID\":6,\"fieldID\":1},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false},{\"size\":3,\"preCal\":\"\",\"name\":\"ven_vess_nor_abn\",\"cal\":\"\",\"value\":\"abnormal\",\"ref\":\"field_1_6_2\",\"label\":\"Abnormal\",\"type\":\"eform_input_check_radio\",\"fieldPosition\":{\"sectionID\":2,\"rowID\":6,\"fieldID\":2},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false}],\"size\":12,\"currentFieldIndex\":3},{\"ref\":\"row_1_7\",\"type\":\"row\",\"fields\":[{\"size\":\"3\",\"labelSuffix\":\"\",\"labelPrefix\":\"BMI:\",\"preCal\":\"\",\"name\":\"bmi\",\"cal\":\"BMI(field_1_0_3,field_1_0_1)\",\"ref\":\"field_1_7_0\",\"type\":\"eform_input_text\",\"fieldPosition\":{\"sectionID\":2,\"rowID\":7,\"fieldID\":0},\"isSelect\":true}],\"size\":12,\"currentFieldIndex\":1},{\"ref\":\"row_1_8\",\"type\":\"row\",\"fields\":[{\"type\":\"eform_input_check_label\",\"size\":\"4\",\"ref\":\"field_1_8_0\",\"preCal\":\"\",\"label\":\"BMI Classification:\",\"value\":\"\",\"fieldPosition\":{\"sectionID\":2,\"rowID\":8,\"fieldID\":0},\"isSelect\":true}],\"size\":12,\"currentFieldIndex\":1},{\"ref\":\"row_1_9\",\"type\":\"row\",\"fields\":[{\"size\":3,\"preCal\":\"\",\"name\":\"bmi_class\",\"cal\":\"RANGECHECK(bmi,1,18.4,1)\",\"value\":\"0\",\"ref\":\"field_1_9_1\",\"label\":\" Underweight ( <18.5)\",\"type\":\"eform_input_check_radio\",\"fieldPosition\":{\"sectionID\":2,\"rowID\":9,\"fieldID\":0},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":true,\"isUncheck\":true,\"isNumber\":false},{\"size\":3,\"preCal\":\"\",\"name\":\"bmi_class\",\"cal\":\"RANGECHECK(bmi,18.5,24.9,1)\",\"value\":\"18.5\",\"ref\":\"field_1_9_2\",\"label\":\" Normal (18.5-24.9)\",\"type\":\"eform_input_check_radio\",\"fieldPosition\":{\"sectionID\":2,\"rowID\":9,\"fieldID\":1},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":true,\"isUncheck\":true,\"isNumber\":false},{\"size\":3,\"preCal\":\"\",\"name\":\"bmi_class\",\"cal\":\"RANGECHECK(bmi,25,29.9,1)\",\"value\":\"25\",\"ref\":\"field_1_9_3\",\"label\":\" Overweight (25.0-29.9)\",\"type\":\"eform_input_check_radio\",\"fieldPosition\":{\"sectionID\":2,\"rowID\":9,\"fieldID\":2},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":true,\"isUncheck\":true,\"isNumber\":false},{\"size\":3,\"preCal\":\"\",\"name\":\"bmi_class\",\"cal\":\"RANGECHECK(bmi,30,1000,1)\",\"value\":\"30\",\"ref\":\"field_1_9_4\",\"label\":\" Obese (>30)\",\"type\":\"eform_input_check_radio\",\"fieldPosition\":{\"sectionID\":2,\"rowID\":9,\"fieldID\":3},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":true,\"isUncheck\":true,\"isNumber\":false}],\"size\":12,\"currentFieldIndex\":4},{\"ref\":\"row_1_10\",\"type\":\"row\",\"fields\":[{\"size\":\"3\",\"labelSuffix\":\"\",\"labelPrefix\":\"WHR:\",\"preCal\":\"\",\"name\":\"whr\",\"cal\":\"WHR(field_1_0_5,field_1_0_7)\",\"ref\":\"field_1_10_0\",\"type\":\"eform_input_text\",\"fieldPosition\":{\"sectionID\":2,\"rowID\":10,\"fieldID\":0},\"isSelect\":true}],\"size\":12,\"currentFieldIndex\":1},{\"ref\":\"row_1_11\",\"type\":\"row\",\"fields\":[{\"type\":\"eform_input_check_label\",\"size\":\"4\",\"ref\":\"field_1_11_0\",\"preCal\":\"\",\"label\":\"WHR Classification:\",\"value\":\"\",\"fieldPosition\":{\"sectionID\":2,\"rowID\":11,\"fieldID\":0},\"isSelect\":true}],\"size\":12,\"currentFieldIndex\":1},{\"ref\":\"row_1_12\",\"type\":\"row\",\"fields\":[{\"size\":4,\"preCal\":\"\",\"name\":\"whr_class\",\"cal\":\"WHRCHECK(whr,gender)\",\"value\":\"0\",\"ref\":\"field_1_12_0\",\"label\":\"Low Risk  (Male<0.85, Female< 0.75)\",\"type\":\"eform_input_check_radio\",\"fieldPosition\":{\"sectionID\":2,\"rowID\":12,\"fieldID\":0},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":true,\"isUncheck\":true,\"isNumber\":false},{\"size\":4,\"preCal\":\"\",\"name\":\"whr_class\",\"cal\":\"WHRCHECK(whr,gender)\",\"value\":\"0.85\",\"ref\":\"field_1_12_1\",\"label\":\"Medium Risk  (Male 0.85-0.95, Female  0.75-0.85)\",\"type\":\"eform_input_check_radio\",\"fieldPosition\":{\"sectionID\":2,\"rowID\":12,\"fieldID\":1},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":true,\"isUncheck\":true,\"isNumber\":false},{\"size\":4,\"preCal\":\"\",\"name\":\"whr_class\",\"cal\":\"WHRCHECK(whr,gender)\",\"value\":\"0.96\",\"ref\":\"field_1_12_2\",\"label\":\"High Risk  (Male>0.95, Female>0.85)\",\"type\":\"eform_input_check_radio\",\"fieldPosition\":{\"sectionID\":2,\"rowID\":12,\"fieldID\":2},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":true,\"isUncheck\":true,\"isNumber\":false}],\"size\":12,\"currentFieldIndex\":3},{\"ref\":\"row_1_13\",\"type\":\"row\",\"fields\":[{\"type\":\"eform_input_check_label_html\",\"size\":\"12\",\"ref\":\"field_1_13_0\",\"preCal\":\"\",\"label\":\"<span style=\\\"font-weight: bold;\\\">Examiner Comments</span>\",\"value\":\"\",\"fieldPosition\":{\"sectionID\":2,\"rowID\":13,\"fieldID\":0},\"isSelect\":true}],\"size\":12,\"currentFieldIndex\":1},{\"ref\":\"row_1_14\",\"type\":\"row\",\"fields\":[{\"fieldPosition\":{\"sectionID\":2,\"rowID\":14,\"fieldID\":0},\"preCal\":\"\",\"cal\":\"FIELDNEEDBYOTHERFIELDS(field_1_1_4,field_1_2_4,field_1_3_4,field_1_4_2,field_1_5_2,field_1_6_2)\",\"label\":\"\",\"labelPrefix\":\"\",\"labelSuffix\":\"\",\"name\":\"ex_comments_car\",\"value\":null,\"size\":12,\"ref\":\"field_1_14_0\",\"type\":\"eform_input_textarea\",\"isSelect\":true,\"rows\":3,\"maxlength\":1000,\"isDisabled\":false,\"isUncheck\":true,\"isNumber\":false}],\"size\":12,\"currentFieldIndex\":2}],\"page\":1,\"showOpenCloseSection\":\"YES\",\"defaultOpenCloseSection\":\"YES\",\"isOpen\":false,\"currentRowIndex\":15,\"defaultRequiredSection\":\"YES\"},{\"name\":\"SECTION 2: Visual Acuity\",\"ref\":\"section_2\",\"rows\":[{\"ref\":\"row_2_0\",\"type\":\"row\",\"fields\":[{\"type\":\"eform_input_check_label\",\"size\":\"12\",\"ref\":\"field_2_0_0\",\"preCal\":\"\",\"label\":\"Candidate should be tested wearing visual aids if routinely worn\",\"value\":\"\",\"fieldPosition\":{\"sectionID\":3,\"rowID\":0,\"fieldID\":0},\"isSelect\":true}],\"size\":12,\"currentFieldIndex\":1},{\"ref\":\"row_2_1\",\"type\":\"row\",\"fields\":[{\"type\":\"eform_input_check_label\",\"size\":\"2\",\"ref\":\"field_2_1_0\",\"preCal\":\"\",\"label\":\"\",\"value\":\"\",\"fieldPosition\":{\"sectionID\":3,\"rowID\":1,\"fieldID\":0},\"isSelect\":true},{\"type\":\"eform_input_check_label\",\"size\":\"2\",\"ref\":\"field_2_1_1\",\"preCal\":\"\",\"label\":\"Right\",\"value\":\"\",\"fieldPosition\":{\"sectionID\":3,\"rowID\":1,\"fieldID\":1},\"isSelect\":true},{\"type\":\"eform_input_check_label\",\"size\":\"2\",\"ref\":\"field_2_1_2\",\"preCal\":\"\",\"label\":\"Right corrected\",\"value\":\"\",\"fieldPosition\":{\"sectionID\":3,\"rowID\":1,\"fieldID\":2},\"isSelect\":true},{\"type\":\"eform_input_check_label\",\"size\":\"2\",\"ref\":\"field_2_1_3\",\"preCal\":\"\",\"label\":\"Left \",\"value\":\"\",\"fieldPosition\":{\"sectionID\":3,\"rowID\":1,\"fieldID\":3},\"isSelect\":true},{\"type\":\"eform_input_check_label\",\"size\":\"2\",\"ref\":\"field_2_1_4\",\"preCal\":\"\",\"label\":\"Left Corrected\",\"value\":\"\",\"fieldPosition\":{\"sectionID\":3,\"rowID\":1,\"fieldID\":4},\"isSelect\":true}],\"size\":12,\"currentFieldIndex\":5},{\"ref\":\"row_2_2\",\"type\":\"row\",\"fields\":[{\"type\":\"eform_input_check_label\",\"size\":\"2\",\"ref\":\"field_2_2_0\",\"preCal\":\"\",\"label\":\"Distance Vision \",\"value\":\"\",\"fieldPosition\":{\"sectionID\":3,\"rowID\":2,\"fieldID\":0},\"isSelect\":true},{\"size\":2,\"labelSuffix\":\"\",\"labelPrefix\":\"6/\",\"preCal\":\"\",\"name\":\"dis_vis_rig\",\"cal\":\"\",\"ref\":\"field_2_2_1\",\"type\":\"eform_input_text\",\"fieldPosition\":{\"sectionID\":3,\"rowID\":2,\"fieldID\":1},\"isSelect\":true,\"rows\":1,\"maxlength\":\"10\",\"isDisabled\":false,\"isUncheck\":true,\"isNumber\":false},{\"size\":2,\"labelSuffix\":\"\",\"labelPrefix\":\"6/\",\"preCal\":\"\",\"name\":\"dis_vis_rig_cor\",\"cal\":\"\",\"ref\":\"field_2_2_3\",\"type\":\"eform_input_text\",\"fieldPosition\":{\"sectionID\":3,\"rowID\":2,\"fieldID\":2},\"isSelect\":true,\"rows\":1,\"maxlength\":\"10\",\"isDisabled\":false,\"isUncheck\":true,\"isNumber\":false},{\"size\":2,\"labelSuffix\":\"\",\"labelPrefix\":\"6/\",\"preCal\":\"\",\"name\":\"dis_vis_lef\",\"cal\":\"\",\"ref\":\"field_2_2_5\",\"type\":\"eform_input_text\",\"fieldPosition\":{\"sectionID\":3,\"rowID\":2,\"fieldID\":3},\"isSelect\":true,\"rows\":1,\"maxlength\":\"10\",\"isDisabled\":false,\"isUncheck\":true,\"isNumber\":false},{\"size\":2,\"labelSuffix\":\"\",\"labelPrefix\":\"6/\",\"preCal\":\"\",\"name\":\"dis_vis_lef_cor\",\"cal\":\"\",\"ref\":\"field_2_2_7\",\"type\":\"eform_input_text\",\"fieldPosition\":{\"sectionID\":3,\"rowID\":2,\"fieldID\":4},\"isSelect\":true,\"rows\":1,\"maxlength\":\"10\",\"isDisabled\":false,\"isUncheck\":true,\"isNumber\":false}],\"size\":12,\"currentFieldIndex\":5},{\"ref\":\"row_2_3\",\"type\":\"row\",\"fields\":[{\"type\":\"eform_input_check_label\",\"size\":\"2\",\"ref\":\"field_2_3_0\",\"preCal\":\"\",\"label\":\"Near Vision\",\"value\":\"\",\"fieldPosition\":{\"sectionID\":3,\"rowID\":3,\"fieldID\":0},\"isSelect\":true},{\"size\":2,\"labelSuffix\":\"\",\"labelPrefix\":\"N/\",\"preCal\":\"\",\"name\":\"ner_vis_rig\",\"cal\":\"\",\"ref\":\"field_2_3_2\",\"type\":\"eform_input_text\",\"fieldPosition\":{\"sectionID\":3,\"rowID\":3,\"fieldID\":1},\"isSelect\":true,\"rows\":1,\"maxlength\":\"10\",\"isDisabled\":false,\"isUncheck\":true,\"isNumber\":false},{\"size\":2,\"labelSuffix\":\"\",\"labelPrefix\":\"N/\",\"preCal\":\"\",\"name\":\"nea_vis_rig_cor\",\"cal\":\"\",\"ref\":\"field_2_3_4\",\"type\":\"eform_input_text\",\"fieldPosition\":{\"sectionID\":3,\"rowID\":3,\"fieldID\":2},\"isSelect\":true,\"rows\":1,\"maxlength\":10,\"isDisabled\":false,\"isUncheck\":true,\"isNumber\":false},{\"size\":2,\"labelSuffix\":\"\",\"labelPrefix\":\"N/\",\"preCal\":\"\",\"name\":\"nea_vis_lef\",\"cal\":\"\",\"ref\":\"field_2_3_6\",\"type\":\"eform_input_text\",\"fieldPosition\":{\"sectionID\":3,\"rowID\":3,\"fieldID\":3},\"isSelect\":true,\"rows\":1,\"maxlength\":\"10\",\"isDisabled\":false,\"isUncheck\":true,\"isNumber\":false},{\"size\":2,\"labelSuffix\":\"\",\"labelPrefix\":\"N/\",\"preCal\":\"\",\"name\":\"nea_vis_lef_cor\",\"cal\":\"\",\"ref\":\"field_2_3_8\",\"type\":\"eform_input_text\",\"fieldPosition\":{\"sectionID\":3,\"rowID\":3,\"fieldID\":4},\"isSelect\":true,\"rows\":1,\"maxlength\":10,\"isDisabled\":false,\"isUncheck\":true,\"isNumber\":false}],\"size\":12,\"currentFieldIndex\":5},{\"ref\":\"row_2_4\",\"type\":\"row\",\"fields\":[{\"type\":\"eform_input_check_label\",\"size\":\"3\",\"ref\":\"field_2_4_0\",\"preCal\":\"\",\"label\":\"Colour Vision  (Ishihara Test)\",\"value\":\"\",\"fieldPosition\":{\"sectionID\":3,\"rowID\":4,\"fieldID\":0},\"isSelect\":true},{\"type\":\"eform_input_check_radio\",\"name\":\"col_vis\",\"size\":2,\"ref\":\"field_2_4_1\",\"preCal\":\"\",\"label\":\"Normal\",\"value\":\"normal\",\"fieldPosition\":{\"sectionID\":3,\"rowID\":4,\"fieldID\":1},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false},{\"size\":3,\"preCal\":\"\",\"name\":\"col_vis\",\"cal\":\"\",\"value\":\"abnormal\",\"ref\":\"field_2_4_2\",\"label\":\"Abnormal\",\"type\":\"eform_input_check_radio\",\"fieldPosition\":{\"sectionID\":3,\"rowID\":4,\"fieldID\":2},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false},{\"type\":\"eform_input_check_label\",\"size\":\"1\",\"ref\":\"field_2_4_3\",\"preCal\":\"\",\"label\":\"Score:\",\"value\":\"\",\"fieldPosition\":{\"sectionID\":3,\"rowID\":4,\"fieldID\":3},\"isSelect\":true},{\"size\":2,\"labelSuffix\":\"/17\",\"labelPrefix\":\"\",\"preCal\":\"\",\"name\":\"col_vis_sco\",\"cal\":\"\",\"ref\":\"field_2_4_4\",\"type\":\"eform_input_text\",\"fieldPosition\":{\"sectionID\":3,\"rowID\":4,\"fieldID\":4},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":true,\"isNumber\":false}],\"size\":12,\"currentFieldIndex\":5},{\"ref\":\"row_2_5\",\"type\":\"row\",\"fields\":[{\"type\":\"eform_input_check_label\",\"size\":\"3\",\"ref\":\"field_2_5_0\",\"preCal\":\"\",\"label\":\"Peripheral Vision\",\"value\":\"\",\"fieldPosition\":{\"sectionID\":3,\"rowID\":5,\"fieldID\":0},\"isSelect\":true},{\"type\":\"eform_input_check_radio\",\"name\":\"per_vis\",\"size\":2,\"ref\":\"field_2_5_1\",\"preCal\":\"\",\"label\":\"Normal\",\"value\":\"normal\",\"fieldPosition\":{\"sectionID\":3,\"rowID\":5,\"fieldID\":1},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false},{\"size\":3,\"preCal\":\"\",\"name\":\"per_vis\",\"cal\":\"\",\"value\":\"abnormal\",\"ref\":\"field_2_5_2\",\"label\":\"Abnormal\",\"type\":\"eform_input_check_radio\",\"fieldPosition\":{\"sectionID\":3,\"rowID\":5,\"fieldID\":2},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false}],\"size\":12,\"currentFieldIndex\":3},{\"ref\":\"row_2_6\",\"type\":\"row\",\"fields\":[{\"type\":\"eform_input_check_label\",\"size\":\"5\",\"ref\":\"field_2_6_0\",\"preCal\":\"\",\"label\":\"Visual Aids to be worn  at work?\",\"value\":\"\",\"fieldPosition\":{\"sectionID\":3,\"rowID\":6,\"fieldID\":0},\"isSelect\":true},{\"type\":\"eform_input_check_radio\",\"name\":\"vis_aids\",\"size\":\"2\",\"ref\":\"field_2_6_1\",\"preCal\":\"\",\"label\":\"Yes\",\"value\":\"yes\",\"fieldPosition\":{\"sectionID\":3,\"rowID\":6,\"fieldID\":1},\"isSelect\":true},{\"type\":\"eform_input_check_radio\",\"name\":\"vis_aids\",\"size\":\"2\",\"ref\":\"field_2_6_2\",\"preCal\":\"\",\"label\":\"No\",\"value\":\"no\",\"fieldPosition\":{\"sectionID\":3,\"rowID\":6,\"fieldID\":2},\"isSelect\":true}],\"size\":12,\"currentFieldIndex\":3},{\"ref\":\"row_2_7\",\"type\":\"row\",\"fields\":[{\"type\":\"eform_input_check_label_html\",\"size\":\"12\",\"ref\":\"field_2_7_0\",\"preCal\":\"\",\"label\":\"<span style=\\\"font-weight: bold;\\\">Examiner Comments</span>\",\"value\":\"\",\"fieldPosition\":{\"sectionID\":3,\"rowID\":7,\"fieldID\":0},\"isSelect\":true}],\"size\":12,\"currentFieldIndex\":1},{\"ref\":\"row_2_8\",\"type\":\"row\",\"fields\":[{\"fieldPosition\":{\"sectionID\":3,\"rowID\":8,\"fieldID\":0},\"preCal\":\"\",\"cal\":\"\",\"label\":\"\",\"labelPrefix\":\"\",\"labelSuffix\":\"\",\"name\":\"ex_comments_vis\",\"value\":null,\"size\":12,\"ref\":\"field_2_8_0\",\"type\":\"eform_input_textarea\",\"isSelect\":true,\"rows\":\"3\",\"maxlength\":\"1000\",\"isDisabled\":false,\"isUncheck\":true,\"isNumber\":false}],\"size\":12,\"currentFieldIndex\":2}],\"page\":1,\"showOpenCloseSection\":\"YES\",\"defaultOpenCloseSection\":\"YES\",\"isOpen\":false,\"currentRowIndex\":9,\"defaultRequiredSection\":\"YES\"},{\"name\":\"SECTION 3: Urinalysis\",\"ref\":\"section_3\",\"rows\":[{\"ref\":\"row_3_0\",\"type\":\"row\",\"fields\":[{\"type\":\"eform_input_check_label\",\"size\":\"2\",\"ref\":\"field_3_0_0\",\"preCal\":\"\",\"label\":\"Protein\",\"value\":\"\",\"fieldPosition\":{\"sectionID\":4,\"rowID\":0,\"fieldID\":0},\"isSelect\":true},{\"size\":2,\"preCal\":\"\",\"name\":\"uri_pro\",\"cal\":\"\",\"value\":\"nil\",\"ref\":\"field_3_0_1\",\"label\":\"Nil\",\"type\":\"eform_input_check_radio\",\"fieldPosition\":{\"sectionID\":4,\"rowID\":0,\"fieldID\":1},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false},{\"size\":2,\"preCal\":\"\",\"name\":\"uri_pro\",\"cal\":\"\",\"value\":\"trace\",\"ref\":\"field_3_0_2\",\"label\":\"Trace\",\"type\":\"eform_input_check_radio\",\"fieldPosition\":{\"sectionID\":4,\"rowID\":0,\"fieldID\":2},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false},{\"size\":2,\"preCal\":\"\",\"name\":\"uri_pro\",\"cal\":\"\",\"value\":\"+\",\"ref\":\"field_3_0_3\",\"label\":\"+\",\"type\":\"eform_input_check_radio\",\"fieldPosition\":{\"sectionID\":4,\"rowID\":0,\"fieldID\":3},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false},{\"size\":2,\"preCal\":\"\",\"name\":\"uri_pro\",\"cal\":\"\",\"value\":\"++\",\"ref\":\"field_3_0_4\",\"label\":\"++\",\"type\":\"eform_input_check_radio\",\"fieldPosition\":{\"sectionID\":4,\"rowID\":0,\"fieldID\":4},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false},{\"size\":2,\"preCal\":\"\",\"name\":\"uri_pro\",\"cal\":\"\",\"value\":\"+++\",\"ref\":\"field_3_0_5\",\"label\":\"+++\",\"type\":\"eform_input_check_radio\",\"fieldPosition\":{\"sectionID\":4,\"rowID\":0,\"fieldID\":5},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false}],\"size\":12,\"currentFieldIndex\":6},{\"ref\":\"row_3_1\",\"type\":\"row\",\"fields\":[{\"type\":\"eform_input_check_label\",\"size\":\"2\",\"ref\":\"field_3_1_0\",\"preCal\":\"\",\"label\":\"Glucose\",\"value\":\"\",\"fieldPosition\":{\"sectionID\":4,\"rowID\":1,\"fieldID\":0},\"isSelect\":true},{\"size\":2,\"preCal\":\"\",\"name\":\"uri_glu\",\"cal\":\"\",\"value\":\"nil\",\"ref\":\"field_3_1_1\",\"label\":\"Nil\",\"type\":\"eform_input_check_radio\",\"fieldPosition\":{\"sectionID\":4,\"rowID\":1,\"fieldID\":1},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false},{\"size\":2,\"preCal\":\"\",\"name\":\"uri_glu\",\"cal\":\"\",\"value\":\"trace\",\"ref\":\"field_3_1_2\",\"label\":\"Trace\",\"type\":\"eform_input_check_radio\",\"fieldPosition\":{\"sectionID\":4,\"rowID\":1,\"fieldID\":2},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false},{\"size\":2,\"preCal\":\"\",\"name\":\"uri_glu\",\"cal\":\"\",\"value\":\"+\",\"ref\":\"field_3_1_3\",\"label\":\"+\",\"type\":\"eform_input_check_radio\",\"fieldPosition\":{\"sectionID\":4,\"rowID\":1,\"fieldID\":3},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false},{\"size\":2,\"preCal\":\"\",\"name\":\"uri_glu\",\"cal\":\"\",\"value\":\"++\",\"ref\":\"field_3_1_4\",\"label\":\"++\",\"type\":\"eform_input_check_radio\",\"fieldPosition\":{\"sectionID\":4,\"rowID\":1,\"fieldID\":4},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false},{\"size\":2,\"preCal\":\"\",\"name\":\"uri_glu\",\"cal\":\"\",\"value\":\"+++\",\"ref\":\"field_3_1_5\",\"label\":\"+++\",\"type\":\"eform_input_check_radio\",\"fieldPosition\":{\"sectionID\":4,\"rowID\":1,\"fieldID\":5},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false}],\"size\":12,\"currentFieldIndex\":6},{\"ref\":\"row_3_2\",\"type\":\"row\",\"fields\":[{\"type\":\"eform_input_check_label\",\"size\":\"2\",\"ref\":\"field_3_2_0\",\"preCal\":\"\",\"label\":\"Blood\",\"value\":\"\",\"fieldPosition\":{\"sectionID\":4,\"rowID\":2,\"fieldID\":0},\"isSelect\":true},{\"size\":2,\"preCal\":\"\",\"name\":\"uri_blo\",\"cal\":\"\",\"value\":\"nil\",\"ref\":\"field_3_2_1\",\"label\":\"Nil\",\"type\":\"eform_input_check_radio\",\"fieldPosition\":{\"sectionID\":4,\"rowID\":2,\"fieldID\":1},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false},{\"size\":2,\"preCal\":\"\",\"name\":\"uri_blo\",\"cal\":\"\",\"value\":\"trace\",\"ref\":\"field_3_2_2\",\"label\":\"Trace\",\"type\":\"eform_input_check_radio\",\"fieldPosition\":{\"sectionID\":4,\"rowID\":2,\"fieldID\":2},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false},{\"size\":2,\"preCal\":\"\",\"name\":\"uri_blo\",\"cal\":\"\",\"value\":\"+\",\"ref\":\"field_3_2_3\",\"label\":\"+\",\"type\":\"eform_input_check_radio\",\"fieldPosition\":{\"sectionID\":4,\"rowID\":2,\"fieldID\":3},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false},{\"size\":2,\"preCal\":\"\",\"name\":\"uri_blo\",\"cal\":\"\",\"value\":\"++\",\"ref\":\"field_3_2_4\",\"label\":\"++\",\"type\":\"eform_input_check_radio\",\"fieldPosition\":{\"sectionID\":4,\"rowID\":2,\"fieldID\":4},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false},{\"size\":2,\"preCal\":\"\",\"name\":\"uri_blo\",\"cal\":\"\",\"value\":\"+++\",\"ref\":\"field_3_2_5\",\"label\":\"+++\",\"type\":\"eform_input_check_radio\",\"fieldPosition\":{\"sectionID\":4,\"rowID\":2,\"fieldID\":5},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false}],\"size\":12,\"currentFieldIndex\":6},{\"ref\":\"row_3_3\",\"type\":\"row\",\"fields\":[{\"type\":\"eform_input_check_label\",\"size\":\"3\",\"ref\":\"field_3_3_0\",\"preCal\":\"\",\"label\":\"Blood Sugar  Level\",\"value\":\"\",\"fieldPosition\":{\"sectionID\":4,\"rowID\":3,\"fieldID\":0},\"isSelect\":true},{\"size\":3,\"labelSuffix\":\"mmol/L\",\"labelPrefix\":\"\",\"preCal\":\"\",\"name\":\"blo_sug_lev\",\"cal\":\"\",\"ref\":\"field_3_3_1\",\"type\":\"eform_input_text\",\"fieldPosition\":{\"sectionID\":4,\"rowID\":3,\"fieldID\":1},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":true,\"isNumber\":true}],\"size\":12,\"currentFieldIndex\":2},{\"ref\":\"row_3_4\",\"type\":\"row\",\"fields\":[{\"type\":\"eform_input_check_label_html\",\"size\":\"12\",\"ref\":\"field_3_4_0\",\"preCal\":\"\",\"label\":\"<span style=\\\"font-weight: bold;\\\">Examiner Comments</span>\",\"value\":\"\",\"fieldPosition\":{\"sectionID\":4,\"rowID\":4,\"fieldID\":0},\"isSelect\":true}],\"size\":12,\"currentFieldIndex\":1},{\"ref\":\"row_3_5\",\"type\":\"row\",\"fields\":[{\"fieldPosition\":{\"sectionID\":4,\"rowID\":5,\"fieldID\":0},\"preCal\":\"\",\"cal\":\"FIELDNEEDBYOTHERFIELDS(field_3_0_2,field_3_0_3,field_3_0_4,field_3_0_5,field_3_1_2,field_3_1_3,field_3_1_4,field_3_1_5,field_3_2_2,field_3_2_3,field_3_2_4,field_3_2_5)\",\"label\":\"\",\"labelPrefix\":\"\",\"labelSuffix\":\"\",\"name\":\"ex_comments_uri\",\"value\":null,\"size\":12,\"ref\":\"field_3_5_0\",\"type\":\"eform_input_textarea\",\"isSelect\":true,\"rows\":\"3\",\"maxlength\":\"1000\",\"isDisabled\":false,\"isUncheck\":true,\"isNumber\":false}],\"size\":12,\"currentFieldIndex\":2}],\"page\":1,\"showOpenCloseSection\":\"YES\",\"defaultOpenCloseSection\":\"YES\",\"isOpen\":false,\"currentRowIndex\":6,\"defaultRequiredSection\":\"YES\"},{\"name\":\"SECTION 4: Respiratory System\",\"ref\":\"section_4\",\"rows\":[{\"ref\":\"row_4_0\",\"type\":\"row\",\"fields\":[{\"type\":\"eform_input_check_label\",\"size\":2,\"ref\":\"field_4_0_0\",\"preCal\":\"\",\"label\":\"Spirometry (see attached)\",\"value\":\"\",\"fieldPosition\":{\"sectionID\":5,\"rowID\":0,\"fieldID\":0},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":true,\"isNumber\":false},{\"size\":\"1\",\"labelSuffix\":\"\",\"labelPrefix\":\"\",\"preCal\":\"\",\"name\":\"spiro_value\",\"cal\":\"\",\"ref\":\"field_4_0_1\",\"type\":\"eform_input_text\",\"fieldPosition\":{\"sectionID\":5,\"rowID\":0,\"fieldID\":1},\"isSelect\":true},{\"size\":2,\"preCal\":\"\",\"name\":\"res_spi\",\"cal\":\"\",\"value\":\"normal\",\"ref\":\"field_4_0_2\",\"label\":\"Normal\",\"type\":\"eform_input_check_radio\",\"fieldPosition\":{\"sectionID\":5,\"rowID\":0,\"fieldID\":2},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false},{\"size\":2,\"preCal\":\"\",\"name\":\"res_spi\",\"cal\":\"\",\"value\":\"abnormal\",\"ref\":\"field_4_0_3\",\"label\":\"Abnormal\",\"type\":\"eform_input_check_radio\",\"fieldPosition\":{\"sectionID\":5,\"rowID\":0,\"fieldID\":3},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false},{\"size\":2,\"preCal\":\"\",\"name\":\"res_spi\",\"cal\":\"\",\"value\":\"na\",\"ref\":\"field_4_0_4\",\"label\":\"N/A\",\"type\":\"eform_input_check_radio\",\"fieldPosition\":{\"sectionID\":5,\"rowID\":0,\"fieldID\":4},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false},{\"fieldPosition\":{\"sectionID\":5,\"rowID\":0,\"fieldID\":5},\"preCal\":\"\",\"cal\":\"REQUIRED(field_4_0_3)\",\"label\":\"\",\"labelPrefix\":\"\",\"labelSuffix\":\"\",\"name\":\"cmt0\",\"value\":null,\"size\":3,\"ref\":\"field_4_0_5\",\"type\":\"eform_input_text\",\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":true,\"isNumber\":false}],\"size\":12,\"currentFieldIndex\":6},{\"ref\":\"row_4_1\",\"type\":\"row\",\"fields\":[{\"type\":\"eform_input_check_label\",\"size\":\"5\",\"ref\":\"field_4_1_0\",\"preCal\":\"\",\"label\":\"Symmetrical Chest expansion \",\"value\":\"\",\"fieldPosition\":{\"sectionID\":5,\"rowID\":1,\"fieldID\":0},\"isSelect\":true},{\"type\":\"eform_input_check_radio\",\"name\":\"res_chest\",\"size\":2,\"ref\":\"field_4_1_1\",\"preCal\":\"\",\"label\":\"Normal\",\"value\":\"normal\",\"fieldPosition\":{\"sectionID\":5,\"rowID\":1,\"fieldID\":1},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false},{\"size\":2,\"preCal\":\"\",\"name\":\"res_chest\",\"cal\":\"\",\"value\":\"abnormal\",\"ref\":\"field_4_1_2\",\"label\":\" Abnormal\",\"type\":\"eform_input_check_radio\",\"fieldPosition\":{\"sectionID\":5,\"rowID\":1,\"fieldID\":2},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false},{\"fieldPosition\":{\"sectionID\":5,\"rowID\":1,\"fieldID\":3},\"preCal\":\"\",\"cal\":\"REQUIRED(field_4_1_2)\",\"label\":\"\",\"labelPrefix\":\"\",\"labelSuffix\":\"\",\"name\":\"cmt1\",\"value\":null,\"size\":3,\"ref\":\"field_4_1_3\",\"type\":\"eform_input_text\",\"isSelect\":true,\"rows\":2,\"maxlength\":\"255\",\"isDisabled\":false,\"isUncheck\":true,\"isNumber\":false}],\"size\":12,\"currentFieldIndex\":4},{\"ref\":\"row_4_2\",\"type\":\"row\",\"fields\":[{\"type\":\"eform_input_check_label\",\"size\":\"5\",\"ref\":\"field_4_2_0\",\"preCal\":\"\",\"label\":\"Auscultation\",\"value\":\"\",\"fieldPosition\":{\"sectionID\":5,\"rowID\":2,\"fieldID\":0},\"isSelect\":true},{\"type\":\"eform_input_check_radio\",\"name\":\"res_aus\",\"size\":2,\"ref\":\"field_4_2_1\",\"preCal\":\"\",\"label\":\"Normal\",\"value\":\"normal\",\"fieldPosition\":{\"sectionID\":5,\"rowID\":2,\"fieldID\":1},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false},{\"size\":2,\"preCal\":\"\",\"name\":\"res_aus\",\"cal\":\"\",\"value\":\"abnormal\",\"ref\":\"field_4_2_2\",\"label\":\"Abnormal\",\"type\":\"eform_input_check_radio\",\"fieldPosition\":{\"sectionID\":5,\"rowID\":2,\"fieldID\":2},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false},{\"fieldPosition\":{\"sectionID\":5,\"rowID\":2,\"fieldID\":3},\"preCal\":\"\",\"cal\":\"REQUIRED(field_4_2_2)\",\"label\":\"\",\"labelPrefix\":\"\",\"labelSuffix\":\"\",\"name\":\"cmt2\",\"value\":null,\"size\":3,\"ref\":\"field_4_2_3\",\"type\":\"eform_input_text\",\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":true,\"isNumber\":false}],\"size\":12,\"currentFieldIndex\":4},{\"ref\":\"row_4_3\",\"type\":\"row\",\"fields\":[],\"size\":12,\"currentFieldIndex\":2}],\"page\":\"2\",\"showOpenCloseSection\":\"YES\",\"defaultOpenCloseSection\":\"YES\",\"isOpen\":false,\"currentRowIndex\":4,\"defaultRequiredSection\":\"YES\"},{\"name\":\"SECTION 5: Ear, Nose, Throat & Mouth\",\"ref\":\"section_5\",\"rows\":[{\"ref\":\"row_5_0\",\"type\":\"row\",\"fields\":[{\"type\":\"eform_input_check_label\",\"size\":\"5\",\"ref\":\"field_5_0_0\",\"preCal\":\"\",\"label\":\"Ears\",\"value\":\"\",\"fieldPosition\":{\"sectionID\":6,\"rowID\":0,\"fieldID\":0},\"isSelect\":true},{\"type\":\"eform_input_check_radio\",\"name\":\"ears\",\"size\":2,\"ref\":\"field_5_0_1\",\"preCal\":\"\",\"label\":\"Normal\",\"value\":\"normal\",\"fieldPosition\":{\"sectionID\":6,\"rowID\":0,\"fieldID\":1},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false},{\"size\":2,\"preCal\":\"\",\"name\":\"ears\",\"cal\":\"\",\"value\":\"abnormal\",\"ref\":\"field_5_0_2\",\"label\":\"Abnormal\",\"type\":\"eform_input_check_radio\",\"fieldPosition\":{\"sectionID\":6,\"rowID\":0,\"fieldID\":2},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false},{\"fieldPosition\":{\"sectionID\":6,\"rowID\":0,\"fieldID\":3},\"preCal\":\"\",\"cal\":\"REQUIRED(field_5_0_2)\",\"label\":\"\",\"labelPrefix\":\"\",\"labelSuffix\":\"\",\"name\":\"cmt3\",\"value\":null,\"size\":3,\"ref\":\"field_5_0_3\",\"type\":\"eform_input_text\",\"isSelect\":true,\"rows\":2,\"maxlength\":\"255\",\"isDisabled\":false,\"isUncheck\":true,\"isNumber\":false}],\"size\":12,\"currentFieldIndex\":4},{\"ref\":\"row_5_1\",\"type\":\"row\",\"fields\":[{\"type\":\"eform_input_check_label\",\"size\":3,\"ref\":\"field_5_1_0\",\"preCal\":\"\",\"label\":\"Hearing  (Refer to Audiogram)\",\"value\":\"\",\"fieldPosition\":{\"sectionID\":6,\"rowID\":1,\"fieldID\":0},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":true,\"isNumber\":false},{\"type\":\"eform_input_check_radio\",\"name\":\"hearing\",\"size\":2,\"ref\":\"field_5_1_1\",\"preCal\":\"\",\"label\":\"Normal\",\"value\":\"normal\",\"fieldPosition\":{\"sectionID\":6,\"rowID\":1,\"fieldID\":1},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false},{\"size\":2,\"preCal\":\"\",\"name\":\"hearing\",\"cal\":\"\",\"value\":\"abnormal\",\"ref\":\"field_5_1_2\",\"label\":\"Abnormal\",\"type\":\"eform_input_check_radio\",\"fieldPosition\":{\"sectionID\":6,\"rowID\":1,\"fieldID\":2},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false},{\"size\":\"2\",\"preCal\":\"\",\"name\":\"hearing\",\"cal\":\"\",\"value\":\"na\",\"ref\":\"field_5_1_3\",\"label\":\"N/A\",\"type\":\"eform_input_check_radio\",\"fieldPosition\":{\"sectionID\":6,\"rowID\":1,\"fieldID\":3},\"isSelect\":true},{\"fieldPosition\":{\"sectionID\":6,\"rowID\":1,\"fieldID\":4},\"preCal\":\"\",\"cal\":\"REQUIRED(field_5_1_2)\",\"label\":\"\",\"labelPrefix\":\"\",\"labelSuffix\":\"\",\"name\":\"cmt4\",\"value\":null,\"size\":3,\"ref\":\"field_5_1_4\",\"type\":\"eform_input_text\",\"isSelect\":true,\"rows\":2,\"maxlength\":\"255\",\"isDisabled\":false,\"isUncheck\":true,\"isNumber\":false}],\"size\":12,\"currentFieldIndex\":5},{\"ref\":\"row_5_2\",\"type\":\"row\",\"fields\":[{\"type\":\"eform_input_check_label\",\"size\":\"5\",\"ref\":\"field_5_2_0\",\"preCal\":\"\",\"label\":\"Nose\",\"value\":\"\",\"fieldPosition\":{\"sectionID\":6,\"rowID\":2,\"fieldID\":0},\"isSelect\":true},{\"type\":\"eform_input_check_radio\",\"name\":\"nose\",\"size\":2,\"ref\":\"field_5_2_1\",\"preCal\":\"\",\"label\":\"Normal\",\"value\":\"normal\",\"fieldPosition\":{\"sectionID\":6,\"rowID\":2,\"fieldID\":1},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false},{\"size\":2,\"preCal\":\"\",\"name\":\"nose\",\"cal\":\"\",\"value\":\"abnormal\",\"ref\":\"field_5_2_2\",\"label\":\"Abnormal\",\"type\":\"eform_input_check_radio\",\"fieldPosition\":{\"sectionID\":6,\"rowID\":2,\"fieldID\":2},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":true,\"isNumber\":false},{\"fieldPosition\":{\"sectionID\":6,\"rowID\":2,\"fieldID\":3},\"preCal\":\"\",\"cal\":\"REQUIRED(field_5_2_2)\",\"label\":\"\",\"labelPrefix\":\"\",\"labelSuffix\":\"\",\"name\":\"cmt5\",\"value\":null,\"size\":3,\"ref\":\"field_5_2_3\",\"type\":\"eform_input_text\",\"isSelect\":true,\"rows\":2,\"maxlength\":\"255\",\"isDisabled\":false,\"isUncheck\":true,\"isNumber\":false}],\"size\":12,\"currentFieldIndex\":4},{\"ref\":\"row_5_3\",\"type\":\"row\",\"fields\":[{\"type\":\"eform_input_check_label\",\"size\":\"5\",\"ref\":\"field_5_3_0\",\"preCal\":\"\",\"label\":\"Throat\",\"value\":\"\",\"fieldPosition\":{\"sectionID\":6,\"rowID\":3,\"fieldID\":0},\"isSelect\":true},{\"type\":\"eform_input_check_radio\",\"name\":\"throat\",\"size\":2,\"ref\":\"field_5_3_1\",\"preCal\":\"\",\"label\":\"Normal\",\"value\":\"normal\",\"fieldPosition\":{\"sectionID\":6,\"rowID\":3,\"fieldID\":1},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false},{\"size\":2,\"preCal\":\"\",\"name\":\"throat\",\"cal\":\"\",\"value\":\"abnormal\",\"ref\":\"field_5_3_2\",\"label\":\"Abnormal\",\"type\":\"eform_input_check_radio\",\"fieldPosition\":{\"sectionID\":6,\"rowID\":3,\"fieldID\":2},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false},{\"fieldPosition\":{\"sectionID\":6,\"rowID\":3,\"fieldID\":3},\"preCal\":\"\",\"cal\":\"REQUIRED(field_5_3_2)\",\"label\":\"\",\"labelPrefix\":\"\",\"labelSuffix\":\"\",\"name\":\"cmt6\",\"value\":null,\"size\":3,\"ref\":\"field_5_3_3\",\"type\":\"eform_input_text\",\"isSelect\":true,\"rows\":2,\"maxlength\":\"255\",\"isDisabled\":false,\"isUncheck\":true,\"isNumber\":false}],\"size\":12,\"currentFieldIndex\":4},{\"ref\":\"row_5_4\",\"type\":\"row\",\"fields\":[{\"type\":\"eform_input_check_label\",\"size\":\"5\",\"ref\":\"field_5_4_0\",\"preCal\":\"\",\"label\":\"Teeth and gums \",\"value\":\"\",\"fieldPosition\":{\"sectionID\":6,\"rowID\":4,\"fieldID\":0},\"isSelect\":true},{\"type\":\"eform_input_check_radio\",\"name\":\"teeth_gums\",\"size\":2,\"ref\":\"field_5_4_1\",\"preCal\":\"\",\"label\":\"Normal\",\"value\":\"normal\",\"fieldPosition\":{\"sectionID\":6,\"rowID\":4,\"fieldID\":1},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false},{\"size\":2,\"preCal\":\"\",\"name\":\"teeth_gums\",\"cal\":\"\",\"value\":\"abnormal\",\"ref\":\"field_5_4_2\",\"label\":\"Abnormal\",\"type\":\"eform_input_check_radio\",\"fieldPosition\":{\"sectionID\":6,\"rowID\":4,\"fieldID\":2},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false},{\"fieldPosition\":{\"sectionID\":6,\"rowID\":4,\"fieldID\":3},\"preCal\":\"\",\"cal\":\"REQUIRED(field_5_4_2)\",\"label\":\"\",\"labelPrefix\":\"\",\"labelSuffix\":\"\",\"name\":\"cmt7\",\"value\":null,\"size\":3,\"ref\":\"field_5_4_3\",\"type\":\"eform_input_text\",\"isSelect\":true,\"rows\":2,\"maxlength\":\"255\",\"isDisabled\":false,\"isUncheck\":true,\"isNumber\":false}],\"size\":12,\"currentFieldIndex\":4},{\"ref\":\"row_5_5\",\"type\":\"row\",\"fields\":[],\"size\":12,\"currentFieldIndex\":2}],\"page\":\"2\",\"showOpenCloseSection\":\"YES\",\"defaultOpenCloseSection\":\"YES\",\"isOpen\":false,\"currentRowIndex\":6,\"defaultRequiredSection\":\"YES\"},{\"name\":\"SECTION 6: Skin\",\"ref\":\"section_6\",\"rows\":[{\"ref\":\"row_6_0\",\"type\":\"row\",\"fields\":[{\"type\":\"eform_input_check_label\",\"size\":\"5\",\"ref\":\"field_6_0_0\",\"preCal\":\"\",\"label\":\"Evidence of Skin Disorders  (Eczema/dermatitis/ sun damage / other)\",\"value\":\"\",\"fieldPosition\":{\"sectionID\":7,\"rowID\":0,\"fieldID\":0},\"isSelect\":true},{\"type\":\"eform_input_check_radio\",\"name\":\"skin_disorders\",\"size\":2,\"ref\":\"field_6_0_1\",\"preCal\":\"\",\"label\":\"Yes\",\"value\":\"yes\",\"fieldPosition\":{\"sectionID\":7,\"rowID\":0,\"fieldID\":1},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false},{\"type\":\"eform_input_check_radio\",\"name\":\"skin_disorders\",\"size\":2,\"ref\":\"field_6_0_2\",\"preCal\":\"\",\"label\":\"No\",\"value\":\"no\",\"fieldPosition\":{\"sectionID\":7,\"rowID\":0,\"fieldID\":2},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false},{\"fieldPosition\":{\"sectionID\":7,\"rowID\":0,\"fieldID\":3},\"preCal\":\"\",\"cal\":\"REQUIRED(field_6_0_1)\",\"label\":\"\",\"labelPrefix\":\"\",\"labelSuffix\":\"\",\"name\":\"cmt8\",\"value\":null,\"size\":3,\"ref\":\"field_6_0_3\",\"type\":\"eform_input_text\",\"isSelect\":true,\"rows\":2,\"maxlength\":\"255\",\"isDisabled\":false,\"isUncheck\":true,\"isNumber\":false}],\"size\":12,\"currentFieldIndex\":4},{\"ref\":\"row_6_1\",\"type\":\"row\",\"fields\":[{\"type\":\"eform_input_check_label\",\"size\":\"5\",\"ref\":\"field_6_1_0\",\"preCal\":\"\",\"label\":\"Evidence of drug/alcohol abuse \",\"value\":\"\",\"fieldPosition\":{\"sectionID\":7,\"rowID\":1,\"fieldID\":0},\"isSelect\":true},{\"type\":\"eform_input_check_radio\",\"name\":\"skin_drug_alcohol\",\"size\":2,\"ref\":\"field_6_1_1\",\"preCal\":\"\",\"label\":\"Yes\",\"value\":\"yes\",\"fieldPosition\":{\"sectionID\":7,\"rowID\":1,\"fieldID\":1},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false},{\"type\":\"eform_input_check_radio\",\"name\":\"skin_drug_alcohol\",\"size\":2,\"ref\":\"field_6_1_2\",\"preCal\":\"\",\"label\":\"No\",\"value\":\"no\",\"fieldPosition\":{\"sectionID\":7,\"rowID\":1,\"fieldID\":2},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false},{\"fieldPosition\":{\"sectionID\":7,\"rowID\":1,\"fieldID\":3},\"preCal\":\"\",\"cal\":\"REQUIRED(field_6_1_1)\",\"label\":\"\",\"labelPrefix\":\"\",\"labelSuffix\":\"\",\"name\":\"cmt9\",\"value\":null,\"size\":3,\"ref\":\"field_6_1_3\",\"type\":\"eform_input_text\",\"isSelect\":true,\"rows\":2,\"maxlength\":\"255\",\"isDisabled\":false,\"isUncheck\":true,\"isNumber\":false}],\"size\":12,\"currentFieldIndex\":4},{\"ref\":\"row_6_2\",\"type\":\"row\",\"fields\":[{\"type\":\"eform_input_check_label\",\"size\":\"5\",\"ref\":\"field_6_2_0\",\"preCal\":\"\",\"label\":\"Evidence of nail biting \",\"value\":\"\",\"fieldPosition\":{\"sectionID\":7,\"rowID\":2,\"fieldID\":0},\"isSelect\":true},{\"type\":\"eform_input_check_radio\",\"name\":\"skin_nail_biting\",\"size\":2,\"ref\":\"field_6_2_1\",\"preCal\":\"\",\"label\":\"Yes\",\"value\":\"yes\",\"fieldPosition\":{\"sectionID\":7,\"rowID\":2,\"fieldID\":1},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false},{\"type\":\"eform_input_check_radio\",\"name\":\"skin_nail_biting\",\"size\":2,\"ref\":\"field_6_2_2\",\"preCal\":\"\",\"label\":\"No\",\"value\":\"no\",\"fieldPosition\":{\"sectionID\":7,\"rowID\":2,\"fieldID\":2},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false},{\"fieldPosition\":{\"sectionID\":7,\"rowID\":2,\"fieldID\":3},\"preCal\":\"\",\"cal\":\"REQUIRED(field_6_2_1)\",\"label\":\"\",\"labelPrefix\":\"\",\"labelSuffix\":\"\",\"name\":\"cmt10\",\"value\":null,\"size\":3,\"ref\":\"field_6_2_3\",\"type\":\"eform_input_text\",\"isSelect\":true,\"rows\":2,\"maxlength\":\"255\",\"isDisabled\":false,\"isUncheck\":true,\"isNumber\":false}],\"size\":12,\"currentFieldIndex\":4},{\"ref\":\"row_6_3\",\"type\":\"row\",\"fields\":[{\"type\":\"eform_input_check_label\",\"size\":\"5\",\"ref\":\"field_6_3_0\",\"preCal\":\"\",\"label\":\"Evidence of Scars (Surgical or other) \",\"value\":\"\",\"fieldPosition\":{\"sectionID\":7,\"rowID\":3,\"fieldID\":0},\"isSelect\":true},{\"type\":\"eform_input_check_radio\",\"name\":\"skin_scars\",\"size\":2,\"ref\":\"field_6_3_1\",\"preCal\":\"\",\"label\":\"Yes\",\"value\":\"yes\",\"fieldPosition\":{\"sectionID\":7,\"rowID\":3,\"fieldID\":1},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false},{\"type\":\"eform_input_check_radio\",\"name\":\"skin_scars\",\"size\":2,\"ref\":\"field_6_3_2\",\"preCal\":\"\",\"label\":\"No\",\"value\":\"no\",\"fieldPosition\":{\"sectionID\":7,\"rowID\":3,\"fieldID\":2},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false},{\"fieldPosition\":{\"sectionID\":7,\"rowID\":3,\"fieldID\":3},\"preCal\":\"\",\"cal\":\"REQUIRED(field_6_3_1)\",\"label\":\"\",\"labelPrefix\":\"\",\"labelSuffix\":\"\",\"name\":\"cmt11\",\"value\":null,\"size\":3,\"ref\":\"field_6_3_3\",\"type\":\"eform_input_text\",\"isSelect\":true,\"rows\":2,\"maxlength\":\"255\",\"isDisabled\":false,\"isUncheck\":true,\"isNumber\":false}],\"size\":12,\"currentFieldIndex\":4},{\"ref\":\"row_6_4\",\"type\":\"row\",\"fields\":[],\"size\":12,\"currentFieldIndex\":2}],\"page\":\"2\",\"showOpenCloseSection\":\"YES\",\"defaultOpenCloseSection\":\"YES\",\"isOpen\":false,\"currentRowIndex\":5,\"defaultRequiredSection\":\"YES\"},{\"name\":\"SECTION 7: Gastrointestinal & Urinary System\",\"ref\":\"section_7\",\"rows\":[{\"ref\":\"row_7_0\",\"type\":\"row\",\"fields\":[{\"type\":\"eform_input_check_label\",\"size\":\"3\",\"ref\":\"field_7_0_0\",\"preCal\":\"\",\"label\":\"Abdomen\",\"value\":\"\",\"fieldPosition\":{\"sectionID\":8,\"rowID\":0,\"fieldID\":0},\"isSelect\":true},{\"type\":\"eform_input_check_radio\",\"name\":\"gas_abdomen\",\"size\":2,\"ref\":\"field_7_0_1\",\"preCal\":\"\",\"label\":\"Normal\",\"value\":\"normal\",\"fieldPosition\":{\"sectionID\":8,\"rowID\":0,\"fieldID\":1},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false},{\"size\":3,\"preCal\":\"\",\"name\":\"gas_abdomen\",\"cal\":\"\",\"value\":\"abnormal\",\"ref\":\"field_7_0_2\",\"label\":\"Abnormal\",\"type\":\"eform_input_check_radio\",\"fieldPosition\":{\"sectionID\":8,\"rowID\":0,\"fieldID\":2},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false},{\"fieldPosition\":{\"sectionID\":8,\"rowID\":0,\"fieldID\":3},\"preCal\":\"\",\"cal\":\"REQUIRED(field_7_0_2)\",\"label\":\"\",\"labelPrefix\":\"\",\"labelSuffix\":\"\",\"name\":\"cmt12\",\"value\":null,\"size\":4,\"ref\":\"field_7_0_3\",\"type\":\"eform_input_text\",\"isSelect\":true,\"rows\":2,\"maxlength\":\"255\",\"isDisabled\":false,\"isUncheck\":true,\"isNumber\":false}],\"size\":12,\"currentFieldIndex\":4},{\"ref\":\"row_7_1\",\"type\":\"row\",\"fields\":[{\"type\":\"eform_input_check_label\",\"size\":\"3\",\"ref\":\"field_7_1_0\",\"preCal\":\"\",\"label\":\"Hernial Orifices\",\"value\":\"\",\"fieldPosition\":{\"sectionID\":8,\"rowID\":1,\"fieldID\":0},\"isSelect\":true},{\"type\":\"eform_input_check_radio\",\"name\":\"gas_her_ori\",\"size\":2,\"ref\":\"field_7_1_1\",\"preCal\":\"\",\"label\":\"Normal\",\"value\":\"normal\",\"fieldPosition\":{\"sectionID\":8,\"rowID\":1,\"fieldID\":1},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false},{\"size\":3,\"preCal\":\"\",\"name\":\"gas_her_ori\",\"cal\":\"\",\"value\":\"abnormal\",\"ref\":\"field_7_1_2\",\"label\":\"Abnormal\",\"type\":\"eform_input_check_radio\",\"fieldPosition\":{\"sectionID\":8,\"rowID\":1,\"fieldID\":2},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false},{\"fieldPosition\":{\"sectionID\":8,\"rowID\":1,\"fieldID\":3},\"preCal\":\"\",\"cal\":\"REQUIRED(field_7_1_2)\",\"label\":\"\",\"labelPrefix\":\"\",\"labelSuffix\":\"\",\"name\":\"cmt13\",\"value\":null,\"size\":4,\"ref\":\"field_7_1_3\",\"type\":\"eform_input_text\",\"isSelect\":true,\"rows\":2,\"maxlength\":\"255\",\"isDisabled\":false,\"isUncheck\":true,\"isNumber\":false}],\"size\":12,\"currentFieldIndex\":4},{\"ref\":\"row_7_2\",\"type\":\"row\",\"fields\":[{\"type\":\"eform_input_check_label\",\"size\":\"3\",\"ref\":\"field_7_2_0\",\"preCal\":\"\",\"label\":\"Liver\",\"value\":\"\",\"fieldPosition\":{\"sectionID\":8,\"rowID\":2,\"fieldID\":0},\"isSelect\":true},{\"type\":\"eform_input_check_radio\",\"name\":\"gas_liver\",\"size\":2,\"ref\":\"field_7_2_1\",\"preCal\":\"\",\"label\":\"Normal\",\"value\":\"normal\",\"fieldPosition\":{\"sectionID\":8,\"rowID\":2,\"fieldID\":1},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false},{\"size\":3,\"preCal\":\"\",\"name\":\"gas_liver\",\"cal\":\"\",\"value\":\"abnormal\",\"ref\":\"field_7_2_2\",\"label\":\"Abnormal\",\"type\":\"eform_input_check_radio\",\"fieldPosition\":{\"sectionID\":8,\"rowID\":2,\"fieldID\":2},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false},{\"fieldPosition\":{\"sectionID\":8,\"rowID\":2,\"fieldID\":3},\"preCal\":\"\",\"cal\":\"REQUIRED(field_7_2_2)\",\"label\":\"\",\"labelPrefix\":\"\",\"labelSuffix\":\"\",\"name\":\"cmt14\",\"value\":null,\"size\":4,\"ref\":\"field_7_2_3\",\"type\":\"eform_input_text\",\"isSelect\":true,\"rows\":2,\"maxlength\":\"255\",\"isDisabled\":false,\"isUncheck\":true,\"isNumber\":false}],\"size\":12,\"currentFieldIndex\":4},{\"ref\":\"row_7_3\",\"type\":\"row\",\"fields\":[{\"type\":\"eform_input_check_label\",\"size\":\"3\",\"ref\":\"field_7_3_0\",\"preCal\":\"\",\"label\":\"Spleen\",\"value\":\"\",\"fieldPosition\":{\"sectionID\":8,\"rowID\":3,\"fieldID\":0},\"isSelect\":true},{\"type\":\"eform_input_check_radio\",\"name\":\"gas_spleen\",\"size\":2,\"ref\":\"field_7_3_1\",\"preCal\":\"\",\"label\":\"Normal\",\"value\":\"normal\",\"fieldPosition\":{\"sectionID\":8,\"rowID\":3,\"fieldID\":1},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false},{\"size\":3,\"preCal\":\"\",\"name\":\"gas_spleen\",\"cal\":\"\",\"value\":\"abnormal\",\"ref\":\"field_7_3_2\",\"label\":\"Abnormal\",\"type\":\"eform_input_check_radio\",\"fieldPosition\":{\"sectionID\":8,\"rowID\":3,\"fieldID\":2},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false},{\"fieldPosition\":{\"sectionID\":8,\"rowID\":3,\"fieldID\":3},\"preCal\":\"\",\"cal\":\"REQUIRED(field_7_3_2)\",\"label\":\"\",\"labelPrefix\":\"\",\"labelSuffix\":\"\",\"name\":\"cmt15\",\"value\":null,\"size\":4,\"ref\":\"field_7_3_3\",\"type\":\"eform_input_text\",\"isSelect\":true,\"rows\":2,\"maxlength\":\"255\",\"isDisabled\":false,\"isUncheck\":true,\"isNumber\":false}],\"size\":12,\"currentFieldIndex\":4},{\"ref\":\"row_7_4\",\"type\":\"row\",\"fields\":[{\"type\":\"eform_input_check_label\",\"size\":\"3\",\"ref\":\"field_7_4_0\",\"preCal\":\"\",\"label\":\"Kidneys\",\"value\":\"\",\"fieldPosition\":{\"sectionID\":8,\"rowID\":4,\"fieldID\":0},\"isSelect\":true},{\"type\":\"eform_input_check_radio\",\"name\":\"gas_kidneys\",\"size\":2,\"ref\":\"field_7_4_1\",\"preCal\":\"\",\"label\":\"Normal\",\"value\":\"normal\",\"fieldPosition\":{\"sectionID\":8,\"rowID\":4,\"fieldID\":1},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false},{\"size\":3,\"preCal\":\"\",\"name\":\"gas_kidneys\",\"cal\":\"\",\"value\":\"abnormal\",\"ref\":\"field_7_4_2\",\"label\":\"Abnormal\",\"type\":\"eform_input_check_radio\",\"fieldPosition\":{\"sectionID\":8,\"rowID\":4,\"fieldID\":2},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false},{\"fieldPosition\":{\"sectionID\":8,\"rowID\":4,\"fieldID\":3},\"preCal\":\"\",\"cal\":\"REQUIRED(field_7_4_2)\",\"label\":\"\",\"labelPrefix\":\"\",\"labelSuffix\":\"\",\"name\":\"cmt16\",\"value\":null,\"size\":4,\"ref\":\"field_7_4_3\",\"type\":\"eform_input_text\",\"isSelect\":true,\"rows\":2,\"maxlength\":\"255\",\"isDisabled\":false,\"isUncheck\":true,\"isNumber\":false}],\"size\":12,\"currentFieldIndex\":4},{\"ref\":\"row_7_5\",\"type\":\"row\",\"fields\":[],\"size\":12,\"currentFieldIndex\":2}],\"page\":\"2\",\"showOpenCloseSection\":\"YES\",\"defaultOpenCloseSection\":\"YES\",\"isOpen\":false,\"currentRowIndex\":6,\"defaultRequiredSection\":\"YES\"},{\"name\":\"SECTION 8: Nervous System\",\"ref\":\"section_8\",\"rows\":[{\"ref\":\"row_8_0\",\"type\":\"row\",\"fields\":[{\"type\":\"eform_input_check_label\",\"size\":\"3\",\"ref\":\"field_8_0_0\",\"preCal\":\"\",\"label\":\"Balance & reflexes\",\"value\":\"\",\"fieldPosition\":{\"sectionID\":9,\"rowID\":0,\"fieldID\":0},\"isSelect\":true},{\"type\":\"eform_input_check_radio\",\"name\":\"ner_bal_ref\",\"size\":2,\"ref\":\"field_8_0_1\",\"preCal\":\"\",\"label\":\"Normal\",\"value\":\"normal\",\"fieldPosition\":{\"sectionID\":9,\"rowID\":0,\"fieldID\":1},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false},{\"size\":3,\"preCal\":\"\",\"name\":\"ner_bal_ref\",\"cal\":\"\",\"value\":\"abnormal\",\"ref\":\"field_8_0_2\",\"label\":\"Abnormal\",\"type\":\"eform_input_check_radio\",\"fieldPosition\":{\"sectionID\":9,\"rowID\":0,\"fieldID\":2},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false},{\"fieldPosition\":{\"sectionID\":9,\"rowID\":0,\"fieldID\":3},\"preCal\":\"\",\"cal\":\"REQUIRED(field_8_0_2)\",\"label\":\"\",\"labelPrefix\":\"\",\"labelSuffix\":\"\",\"name\":\"cmt17\",\"value\":null,\"size\":4,\"ref\":\"field_8_0_3\",\"type\":\"eform_input_text\",\"isSelect\":true,\"rows\":2,\"maxlength\":\"255\",\"isDisabled\":false,\"isUncheck\":true,\"isNumber\":false}],\"size\":12,\"currentFieldIndex\":4},{\"ref\":\"row_8_1\",\"type\":\"row\",\"fields\":[{\"type\":\"eform_input_check_label\",\"size\":\"3\",\"ref\":\"field_8_1_0\",\"preCal\":\"\",\"label\":\"Coordination\",\"value\":\"\",\"fieldPosition\":{\"sectionID\":9,\"rowID\":1,\"fieldID\":0},\"isSelect\":true},{\"type\":\"eform_input_check_radio\",\"name\":\"ner_coor\",\"size\":2,\"ref\":\"field_8_1_1\",\"preCal\":\"\",\"label\":\"Normal\",\"value\":\"normal\",\"fieldPosition\":{\"sectionID\":9,\"rowID\":1,\"fieldID\":1},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false},{\"size\":3,\"preCal\":\"\",\"name\":\"ner_coor\",\"cal\":\"\",\"value\":\"abnormal\",\"ref\":\"field_8_1_2\",\"label\":\"Abnormal\",\"type\":\"eform_input_check_radio\",\"fieldPosition\":{\"sectionID\":9,\"rowID\":1,\"fieldID\":2},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false},{\"fieldPosition\":{\"sectionID\":9,\"rowID\":1,\"fieldID\":3},\"preCal\":\"\",\"cal\":\"REQUIRED(field_8_1_2)\",\"label\":\"\",\"labelPrefix\":\"\",\"labelSuffix\":\"\",\"name\":\"cmt18\",\"value\":null,\"size\":4,\"ref\":\"field_8_1_3\",\"type\":\"eform_input_text\",\"isSelect\":true,\"rows\":2,\"maxlength\":\"255\",\"isDisabled\":false,\"isUncheck\":true,\"isNumber\":false}],\"size\":12,\"currentFieldIndex\":4},{\"ref\":\"row_8_2\",\"type\":\"row\",\"fields\":[],\"size\":12,\"currentFieldIndex\":2}],\"page\":\"2\",\"showOpenCloseSection\":\"YES\",\"defaultOpenCloseSection\":\"YES\",\"isOpen\":false,\"currentRowIndex\":3,\"defaultRequiredSection\":\"YES\"},{\"name\":\"SECTION 9: Glandular\",\"ref\":\"section_9\",\"rows\":[{\"ref\":\"row_9_0\",\"type\":\"row\",\"fields\":[{\"type\":\"eform_input_check_label\",\"size\":\"3\",\"ref\":\"field_9_0_0\",\"preCal\":\"\",\"label\":\"Lymph glands\",\"value\":\"\",\"fieldPosition\":{\"sectionID\":10,\"rowID\":0,\"fieldID\":0},\"isSelect\":true},{\"type\":\"eform_input_check_radio\",\"name\":\"glan_lym_glands\",\"size\":2,\"ref\":\"field_9_0_1\",\"preCal\":\"\",\"label\":\"Normal\",\"value\":\"normal\",\"fieldPosition\":{\"sectionID\":10,\"rowID\":0,\"fieldID\":1},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false},{\"size\":3,\"preCal\":\"\",\"name\":\"glan_lym_glands\",\"cal\":\"\",\"value\":\"abnormal\",\"ref\":\"field_9_0_2\",\"label\":\"Abnormal\",\"type\":\"eform_input_check_radio\",\"fieldPosition\":{\"sectionID\":10,\"rowID\":0,\"fieldID\":2},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false},{\"fieldPosition\":{\"sectionID\":10,\"rowID\":0,\"fieldID\":3},\"preCal\":\"\",\"cal\":\"REQUIRED(field_9_0_2)\",\"label\":\"\",\"labelPrefix\":\"\",\"labelSuffix\":\"\",\"name\":\"cmt19\",\"value\":null,\"size\":4,\"ref\":\"field_9_0_3\",\"type\":\"eform_input_text\",\"isSelect\":true,\"rows\":2,\"maxlength\":\"255\",\"isDisabled\":false,\"isUncheck\":true,\"isNumber\":false}],\"size\":12,\"currentFieldIndex\":4},{\"ref\":\"row_9_1\",\"type\":\"row\",\"fields\":[{\"type\":\"eform_input_check_label\",\"size\":\"3\",\"ref\":\"field_9_1_0\",\"preCal\":\"\",\"label\":\"Thyroid\",\"value\":\"\",\"fieldPosition\":{\"sectionID\":10,\"rowID\":1,\"fieldID\":0},\"isSelect\":true},{\"type\":\"eform_input_check_radio\",\"name\":\"glan_thyr\",\"size\":2,\"ref\":\"field_9_1_1\",\"preCal\":\"\",\"label\":\"Normal\",\"value\":\"normal\",\"fieldPosition\":{\"sectionID\":10,\"rowID\":1,\"fieldID\":1},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false},{\"size\":3,\"preCal\":\"\",\"name\":\"glan_thyr\",\"cal\":\"\",\"value\":\"abnormal\",\"ref\":\"field_9_1_2\",\"label\":\"Abnormal\",\"type\":\"eform_input_check_radio\",\"fieldPosition\":{\"sectionID\":10,\"rowID\":1,\"fieldID\":2},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false},{\"fieldPosition\":{\"sectionID\":10,\"rowID\":1,\"fieldID\":3},\"preCal\":\"\",\"cal\":\"REQUIRED(field_9_1_2)\",\"label\":\"\",\"labelPrefix\":\"\",\"labelSuffix\":\"\",\"name\":\"cmt20\",\"value\":null,\"size\":4,\"ref\":\"field_9_1_3\",\"type\":\"eform_input_text\",\"isSelect\":true,\"rows\":2,\"maxlength\":\"255\",\"isDisabled\":false,\"isUncheck\":true,\"isNumber\":false}],\"size\":12,\"currentFieldIndex\":4},{\"ref\":\"row_9_2\",\"type\":\"row\",\"fields\":[{\"type\":\"eform_input_check_label_html\",\"size\":\"12\",\"ref\":\"field_9_2_0\",\"preCal\":\"\",\"label\":\"<span style=\\\"font-weight: bold;\\\">Examiner Comments</span>\",\"value\":\"\",\"fieldPosition\":{\"sectionID\":10,\"rowID\":2,\"fieldID\":0},\"isSelect\":true}],\"size\":12,\"currentFieldIndex\":1},{\"ref\":\"row_9_3\",\"type\":\"row\",\"fields\":[{\"fieldPosition\":{\"sectionID\":10,\"rowID\":3,\"fieldID\":0},\"preCal\":\"\",\"cal\":\"\",\"label\":\"\",\"labelPrefix\":\"\",\"labelSuffix\":\"\",\"name\":\"ex_comments_glan\",\"value\":null,\"size\":12,\"ref\":\"field_9_3_0\",\"type\":\"eform_input_textarea\",\"isSelect\":true,\"rows\":\"3\",\"maxlength\":\"1000\",\"isDisabled\":false,\"isUncheck\":true,\"isNumber\":false}],\"size\":12,\"currentFieldIndex\":2}],\"page\":\"2\",\"showOpenCloseSection\":\"YES\",\"defaultOpenCloseSection\":\"YES\",\"isOpen\":false,\"currentRowIndex\":4,\"defaultRequiredSection\":\"YES\"},{\"name\":\"SECTION 10: Cardiovascular Risk Assessment\",\"ref\":\"section_10\",\"rows\":[{\"ref\":\"row_10_0\",\"type\":\"row\",\"fields\":[{\"type\":\"eform_input_check_label\",\"size\":\"1\",\"ref\":\"field_10_0_0\",\"preCal\":\"\",\"label\":\"AGE:\",\"value\":\"\",\"fieldPosition\":{\"sectionID\":11,\"rowID\":0,\"fieldID\":0},\"isSelect\":true},{\"size\":2,\"labelSuffix\":\"\",\"labelPrefix\":\"\",\"preCal\":\"AGE(PatientAppointment.DOB)\",\"name\":\"card_risk_age\",\"cal\":\"\",\"ref\":\"field_10_0_2\",\"type\":\"eform_input_text\",\"fieldPosition\":{\"sectionID\":11,\"rowID\":0,\"fieldID\":1},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":true,\"isUncheck\":false,\"isNumber\":false}],\"size\":12,\"currentFieldIndex\":2},{\"ref\":\"row_10_1\",\"type\":\"row\",\"fields\":[{\"type\":\"eform_input_check_label\",\"size\":\"4\",\"ref\":\"field_10_1_2\",\"preCal\":\"\",\"label\":\"Risk Factor Checklist\",\"value\":\"\",\"fieldPosition\":{\"sectionID\":11,\"rowID\":1,\"fieldID\":0},\"isSelect\":true},{\"type\":\"eform_input_check_label\",\"size\":\"4\",\"ref\":\"field_10_1_3\",\"preCal\":\"\",\"label\":\"Risk Stratification\",\"value\":\"\",\"fieldPosition\":{\"sectionID\":11,\"rowID\":1,\"fieldID\":1},\"isSelect\":true}],\"size\":12,\"currentFieldIndex\":2},{\"ref\":\"row_10_2\",\"type\":\"row\",\"fields\":[{\"size\":\"6\",\"preCal\":\"\",\"name\":\"risk_fac_hype\",\"cal\":\"\",\"value\":\"yes\",\"ref\":\"field_10_2_0\",\"label\":\"Hypertension (>150/95 mmHg)\",\"type\":\"eform_input_check_checkbox\",\"fieldPosition\":{\"sectionID\":11,\"rowID\":2,\"fieldID\":0},\"isSelect\":true}],\"size\":12,\"currentFieldIndex\":1},{\"ref\":\"row_10_3\",\"type\":\"row\",\"fields\":[{\"type\":\"eform_input_check_checkbox\",\"name\":\"risk_fac_curr_smo\",\"size\":\"4\",\"ref\":\"field_10_3_0\",\"preCal\":\"\",\"label\":\"Current Smoker\",\"value\":\"yes\",\"fieldPosition\":{\"sectionID\":11,\"rowID\":3,\"fieldID\":0},\"isSelect\":true},{\"size\":3,\"preCal\":\"\",\"name\":\"risk_stratifi\",\"cal\":\"\",\"value\":\"low\",\"ref\":\"field_10_3_3\",\"label\":\"LOW\",\"type\":\"eform_input_check_radio\",\"fieldPosition\":{\"sectionID\":11,\"rowID\":3,\"fieldID\":1},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false},{\"type\":\"eform_input_check_label\",\"size\":\"3\",\"ref\":\"field_10_3_4\",\"preCal\":\"\",\"label\":\"<= 1 risk factors\",\"value\":\"\",\"fieldPosition\":{\"sectionID\":11,\"rowID\":3,\"fieldID\":2},\"isSelect\":true}],\"size\":12,\"currentFieldIndex\":3},{\"ref\":\"row_10_4\",\"type\":\"row\",\"fields\":[{\"type\":\"eform_input_check_checkbox\",\"name\":\"risk_fac_chol\",\"size\":\"4\",\"ref\":\"field_10_4_0\",\"preCal\":\"\",\"label\":\"Known High Cholesterol\",\"value\":\"yes\",\"fieldPosition\":{\"sectionID\":11,\"rowID\":4,\"fieldID\":0},\"isSelect\":true}],\"size\":12,\"currentFieldIndex\":1},{\"ref\":\"row_10_5\",\"type\":\"row\",\"fields\":[{\"type\":\"eform_input_check_checkbox\",\"name\":\"risk_fac_sed_lif\",\"size\":\"4\",\"ref\":\"field_10_5_0\",\"preCal\":\"\",\"label\":\"Sedentary Lifestyle\",\"value\":\"yes\",\"fieldPosition\":{\"sectionID\":11,\"rowID\":5,\"fieldID\":0},\"isSelect\":true},{\"size\":3,\"preCal\":\"\",\"name\":\"risk_stratifi\",\"cal\":\"\",\"value\":\"medium\",\"ref\":\"field_10_5_3\",\"label\":\" MEDIUM\",\"type\":\"eform_input_check_radio\",\"fieldPosition\":{\"sectionID\":11,\"rowID\":5,\"fieldID\":1},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false},{\"type\":\"eform_input_check_label\",\"size\":5,\"ref\":\"field_10_5_4\",\"preCal\":\"\",\"label\":\">= 2 risk factors\",\"value\":\"\",\"fieldPosition\":{\"sectionID\":11,\"rowID\":5,\"fieldID\":2},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":true,\"isNumber\":false}],\"size\":12,\"currentFieldIndex\":7},{\"ref\":\"row_10_6\",\"type\":\"row\",\"fields\":[{\"size\":\"7\",\"preCal\":\"\",\"name\":\"risk_fac_hea_dise\",\"cal\":\"\",\"value\":\"yes\",\"ref\":\"field_10_6_0\",\"label\":\"Family History of Heart  Disease\",\"type\":\"eform_input_check_checkbox\",\"fieldPosition\":{\"sectionID\":11,\"rowID\":6,\"fieldID\":0},\"isSelect\":true}],\"size\":12,\"currentFieldIndex\":2},{\"ref\":\"row_10_7\",\"type\":\"row\",\"fields\":[{\"type\":\"eform_input_check_checkbox\",\"name\":\"risk_fac_his_hea_dise\",\"size\":\"4\",\"ref\":\"field_10_7_0\",\"preCal\":\"\",\"label\":\"History of Heart Disease\",\"value\":\"yes\",\"fieldPosition\":{\"sectionID\":11,\"rowID\":7,\"fieldID\":0},\"isSelect\":true},{\"size\":3,\"preCal\":\"\",\"name\":\"risk_stratifi\",\"cal\":\"\",\"value\":\"high\",\"ref\":\"field_10_7_3\",\"label\":\"HIGH\",\"type\":\"eform_input_check_radio\",\"fieldPosition\":{\"sectionID\":11,\"rowID\":7,\"fieldID\":1},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false},{\"type\":\"eform_input_check_label\",\"size\":\"5\",\"ref\":\"field_10_7_4\",\"preCal\":\"\",\"label\":\"Diagnosed cardiac, pulmonary or metabolic disease OR >= 1 sign or symptom of Coronary Artery Disease *\",\"value\":\"\",\"fieldPosition\":{\"sectionID\":11,\"rowID\":7,\"fieldID\":2},\"isSelect\":true}],\"size\":12,\"currentFieldIndex\":3},{\"ref\":\"row_10_8\",\"type\":\"row\",\"fields\":[{\"size\":\"12\",\"preCal\":\"\",\"name\":\"risk_fac_whr\",\"cal\":\"\",\"value\":\"yes\",\"ref\":\"field_10_8_0\",\"label\":\"WHR >0.80 (Women)  >0.90 (Men) AND Obesity (BMI > 30)\",\"type\":\"eform_input_check_checkbox\",\"fieldPosition\":{\"sectionID\":11,\"rowID\":8,\"fieldID\":0},\"isSelect\":true}],\"size\":12,\"currentFieldIndex\":1},{\"ref\":\"row_10_9\",\"type\":\"row\",\"fields\":[{\"type\":\"eform_input_check_label\",\"size\":\"7\",\"ref\":\"field_10_9_0\",\"preCal\":\"\",\"label\":\"GP Clearance to complete exercise testing (if required) \",\"value\":\"\",\"fieldPosition\":{\"sectionID\":11,\"rowID\":9,\"fieldID\":0},\"isSelect\":true},{\"type\":\"eform_input_check_radio\",\"name\":\"gp_clea_exe\",\"size\":2,\"ref\":\"field_10_9_1\",\"preCal\":\"\",\"label\":\"Yes\",\"value\":\"yes\",\"fieldPosition\":{\"sectionID\":11,\"rowID\":9,\"fieldID\":1},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false},{\"type\":\"eform_input_check_radio\",\"name\":\"gp_clea_exe\",\"size\":2,\"ref\":\"field_10_9_2\",\"preCal\":\"\",\"label\":\"No\",\"value\":\"no\",\"fieldPosition\":{\"sectionID\":11,\"rowID\":9,\"fieldID\":2},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":false,\"isNumber\":false}],\"size\":12,\"currentFieldIndex\":3},{\"ref\":\"row_10_10\",\"type\":\"row\",\"fields\":[{\"type\":\"eform_input_check_label_html\",\"size\":12,\"ref\":\"field_10_10_0\",\"preCal\":\"\",\"label\":\"<div><span style=\\\"font-style: italic;\\\"><span style=\\\"line-height: 1.4;\\\">*Signs and symptoms include: pain or discomfort (or angina equivalent) in the chest, neck, jaw, arms, or other areas that may result from ischemia; dizziness&nbsp;</span><span style=\\\"line-height: 1.4;\\\">or syncope; shortness of breath at rest or with exertion; ankle edema; palpitations or tachycardia; intermittent claudication; known heart mummer; unusual&nbsp;</span><span style=\\\"line-height: 1.4;\\\">fatigue or shortness of breath with usual activities; orthopnoea or paroxysmal nocturnal dyspnoea.</span></span></div>\",\"value\":\"\",\"fieldPosition\":{\"sectionID\":11,\"rowID\":10,\"fieldID\":0},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":true,\"isNumber\":false}],\"size\":12,\"currentFieldIndex\":1},{\"ref\":\"row_10_11\",\"type\":\"row\",\"fields\":[{\"type\":\"eform_input_textarea\",\"name\":\"signs_symp_include\",\"size\":\"12\",\"ref\":\"field_10_11_0\",\"preCal\":\"\",\"rows\":\"10\",\"cal\":\"\",\"fieldPosition\":{\"sectionID\":11,\"rowID\":11,\"fieldID\":0},\"isSelect\":true}],\"size\":12,\"currentFieldIndex\":1},{\"ref\":\"row_10_12\",\"type\":\"row\",\"fields\":[{\"type\":\"eform_input_check_label\",\"size\":\"3\",\"ref\":\"field_10_12_0\",\"preCal\":\"\",\"label\":\"Doctor’s Name\",\"value\":\"\",\"fieldPosition\":{\"sectionID\":11,\"rowID\":12,\"fieldID\":0},\"isSelect\":true},{\"size\":4,\"labelSuffix\":\"\",\"labelPrefix\":\"\",\"preCal\":\"GETINFOSTAFF(Medical Practitioner,Occupational Physician,Nurse Practitioner,Plastic Surgeon,Orthopaedics Surgeon,Spine Surgeon,Physiotherapist,Occupational Therapist,Exercise Physiologist,Nurse Practitioner,Registered Nurse,FirstName;LastName)\",\"name\":\"doctor_name\",\"cal\":\"RELOAD(Medical Practitioner,Occupational Physician,Nurse Practitioner,Plastic Surgeon,Orthopaedics Surgeon,Spine Surgeon,Physiotherapist,Occupational Therapist,Exercise Physiologist,Nurse Practitioner,Registered Nurse,FirstName;LastName;field_10_14_1)\",\"ref\":\"field_10_12_1\",\"type\":\"eform_input_text\",\"fieldPosition\":{\"sectionID\":11,\"rowID\":12,\"fieldID\":1},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":true,\"isUncheck\":true,\"isNumber\":false,\"isReloadDisabled\":false,\"isHidden\":false},{\"type\":\"eform_input_check_label\",\"size\":\"1\",\"ref\":\"field_10_12_2\",\"preCal\":\"\",\"label\":\"Date\",\"value\":\"\",\"fieldPosition\":{\"sectionID\":11,\"rowID\":12,\"fieldID\":2},\"isSelect\":true},{\"type\":\"eform_input_date\",\"name\":\"date_form\",\"size\":2,\"ref\":\"field_10_12_3\",\"preCal\":\"DEFAULT(TODAYSHORT)\",\"cal\":\"\",\"fieldPosition\":{\"sectionID\":11,\"rowID\":12,\"fieldID\":3},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":true,\"isNumber\":false}],\"size\":12,\"currentFieldIndex\":4},{\"ref\":\"row_10_13\",\"type\":\"row\",\"fields\":[{\"type\":\"eform_input_check_label\",\"size\":\"7\",\"ref\":\"field_10_13_0\",\"preCal\":\"\",\"label\":\"Signature\",\"value\":\"\",\"fieldPosition\":{\"sectionID\":11,\"rowID\":13,\"fieldID\":0},\"isSelect\":true},{\"type\":\"eform_input_check_label\",\"size\":\"1\",\"ref\":\"field_10_13_1\",\"preCal\":\"\",\"label\":\"Location\",\"value\":\"\",\"fieldPosition\":{\"sectionID\":11,\"rowID\":13,\"fieldID\":1},\"isSelect\":true},{\"size\":4,\"labelSuffix\":\"\",\"labelPrefix\":\"\",\"preCal\":\"CONCAT(Appointment.SiteName)\",\"name\":\"loca_doctor\",\"cal\":\"\",\"ref\":\"field_10_13_2\",\"type\":\"eform_input_text\",\"fieldPosition\":{\"sectionID\":11,\"rowID\":13,\"fieldID\":2},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":true,\"isUncheck\":true,\"isNumber\":false}],\"size\":12,\"currentFieldIndex\":3},{\"ref\":\"row_10_14\",\"type\":\"row\",\"fields\":[{\"type\":\"eform_input_check_label\",\"size\":\"3\",\"ref\":\"field_10_14_0\",\"preCal\":\"\",\"label\":\"\",\"value\":\"\",\"fieldPosition\":{\"sectionID\":11,\"rowID\":14,\"fieldID\":0},\"isSelect\":true},{\"type\":\"eform_input_image_doctor\",\"name\":\"i_signature\",\"size\":4,\"ref\":\"field_10_14_1\",\"preCal\":\"SignatureType(Medical Practitioner,Occupational Physician,Nurse Practitioner,Plastic Surgeon,Orthopaedics Surgeon,Spine Surgeon,Physiotherapist,Occupational Therapist,Exercise Physiologist,Nurse Practitioner,Registered Nurse)\",\"cal\":\"RELOAD(Medical Practitioner,Occupational Physician,Nurse Practitioner,Plastic Surgeon,Orthopaedics Surgeon,Spine Surgeon,Physiotherapist,Occupational Therapist,Exercise Physiologist,Nurse Practitioner,Registered Nurse,Signature;field_10_14_1)\",\"fieldPosition\":{\"sectionID\":11,\"rowID\":14,\"fieldID\":1},\"isSelect\":true,\"rows\":2,\"maxlength\":255,\"isDisabled\":false,\"isUncheck\":true,\"isNumber\":false,\"isReloadDisabled\":false},{\"type\":\"eform_input_check_label\",\"size\":\"1\",\"ref\":\"field_10_14_2\",\"preCal\":\"\",\"label\":\"\",\"value\":\"\",\"fieldPosition\":{\"sectionID\":11,\"rowID\":14,\"fieldID\":2},\"isSelect\":true},{\"type\":\"eform_button_reload_doctor\",\"name\":\"\",\"size\":\"1\",\"ref\":\"field_10_14_3\",\"preCal\":\"\",\"cal\":\"\",\"fieldPosition\":{\"sectionID\":11,\"rowID\":14,\"fieldID\":3},\"isSelect\":true}],\"size\":12,\"currentFieldIndex\":4}],\"page\":\"3\",\"showOpenCloseSection\":\"YES\",\"defaultOpenCloseSection\":\"YES\",\"isOpen\":true,\"currentRowIndex\":15,\"defaultRequiredSection\":\"NO\"}],\"objects\":[{\"value\":\"\",\"name\":\"p_name\",\"ref\":\"field_11_0_1\",\"type\":\"eform_input_text\",\"refRow\":\"row_11_0\",\"moduleID\":0},{\"value\":\"Male\",\"name\":\"gender\",\"ref\":\"field_11_0_3\",\"type\":\"eform_input_check_radio\",\"checked\":false,\"refRow\":\"row_11_0\",\"moduleID\":0},{\"value\":\"Female\",\"name\":\"gender\",\"ref\":\"field_11_0_4\",\"type\":\"eform_input_check_radio\",\"checked\":false,\"refRow\":\"row_11_0\",\"moduleID\":0},{\"value\":\"\",\"name\":\"p_dob\",\"ref\":\"field_11_1_1\",\"type\":\"eform_input_date\",\"refRow\":\"row_11_1\",\"moduleID\":0},{\"value\":\"\",\"name\":\"p_phone\",\"ref\":\"field_11_1_3\",\"type\":\"eform_input_text\",\"refRow\":\"row_11_1\",\"moduleID\":0},{\"value\":\"\",\"name\":\"p_email\",\"ref\":\"field_11_1_5\",\"type\":\"eform_input_text\",\"refRow\":\"row_11_1\",\"moduleID\":0},{\"value\":\"\",\"name\":\"p_address\",\"ref\":\"field_11_2_1\",\"type\":\"eform_input_text\",\"refRow\":\"row_11_2\",\"moduleID\":0},{\"value\":\"\",\"name\":\"p_state\",\"ref\":\"field_11_3_1\",\"type\":\"eform_input_text\",\"refRow\":\"row_11_3\",\"moduleID\":0},{\"value\":\"\",\"name\":\"p_suburb\",\"ref\":\"field_11_3_3\",\"type\":\"eform_input_text\",\"refRow\":\"row_11_3\",\"moduleID\":0},{\"value\":\"\",\"name\":\"p_postcode\",\"ref\":\"field_11_3_5\",\"type\":\"eform_input_text\",\"refRow\":\"row_11_3\",\"moduleID\":0},{\"value\":\"\",\"name\":\"p_company\",\"ref\":\"field_11_4_1\",\"type\":\"eform_input_text\",\"refRow\":\"row_11_4\",\"moduleID\":0},{\"value\":\"\",\"name\":\"appointment_code\",\"ref\":\"field_11_5_1\",\"type\":\"eform_input_text\",\"refRow\":\"row_11_5\",\"moduleID\":0},{\"value\":\"\",\"name\":\"appointment_type\",\"ref\":\"field_11_5_3\",\"type\":\"eform_input_text\",\"refRow\":\"row_11_5\",\"moduleID\":0},{\"value\":\"\",\"name\":\"appointment_date\",\"ref\":\"field_11_5_5\",\"type\":\"eform_input_date\",\"refRow\":\"row_11_5\",\"moduleID\":0}],\"currentSectionIndex\":12,\"roles\":{\"view\":{\"option\":\"hide\",\"list\":[{\"id\":1,\"ref\":\"view_ADMIN\",\"value\":\"yes\"},{\"id\":2,\"ref\":\"view_ASSISTANT\",\"value\":\"yes\"},{\"id\":3,\"ref\":\"view_PATIENT\",\"value\":\"yes\"},{\"id\":4,\"ref\":\"view_EXTERTAL_PRACTITIONER\",\"value\":\"yes\"},{\"id\":5,\"ref\":\"view_INTERNAL_PRACTITIONER\",\"value\":\"yes\"},{\"id\":6,\"ref\":\"view_ORGANIZATION\",\"value\":\"yes\"}]},\"edit\":[{\"id\":1,\"ref\":\"edit_ADMIN\",\"value\":\"yes\"},{\"id\":2,\"ref\":\"edit_ASSISTANT\",\"value\":\"yes\"},{\"id\":3,\"ref\":\"edit_PATIENT\",\"value\":\"yes\"},{\"id\":4,\"ref\":\"edit_EXTERTAL_PRACTITIONER\",\"value\":\"yes\"},{\"id\":5,\"ref\":\"edit_INTERNAL_PRACTITIONER\",\"value\":\"yes\"},{\"id\":6,\"ref\":\"edit_ORGANIZATION\",\"value\":\"yes\"}]},\"eformName\":\"Medical Assessment\",\"arrViewRoleCode\":[],\"arrEditRoleCode\":[],\"listTemplate\":[],\"arrSameRef\":[],\"arrSameRefFields\":[],\"isHaveSameRef\":0,\"idForm\":351,\"PrintType\":\"jasper\",\"UID\":\"5cedfdae-cb6d-49fb-b973-4cb27b12e6ab\",\"accessToken\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRDbGFpbSI6bnVsbCwiY2xpZW50SWQiOjEsImVmb3JtQ2xhaW0iOm51bGwsImV4cCI6MTU2Nzc3NzM2NiwiaWQiOjQwODYzLCJwcm9maWxlSWQiOjczMCwidG9rZW5UeXBlIjowLCJ1c2VybmFtZSI6IkRvY3Rlc3QxIn0.BoLwBY1L2MUcmbcJwRy6yIP0cX-9PsDCbe-EhFC7L9c\",\"ListPrintFile\":null}",
        "CreatedDate": "2018-12-31T05:07:35Z",
        "CreatedBy": 6,
        "ModifiedDate": "2018-12-31T05:07:35Z",
        "ModifiedBy": 1
      },
      "JsonName": null,
      "EFormGroups": null,
      "envLinkUID": 351,
      "UUIDNewFileName": ""
    };
  }
  else {
    var jsonSources = document.getElementById("inputData").value;
    parseEFormTemplateData = JSON.parse(jsonSources);
  }
  jsonObject = JSON.parse(parseEFormTemplateData.EFormTemplateData.TemplateData);

  console.log(jsonObjectDoctor);
  console.log(jsonObjectBillings);
  console.log(jsonObjectPatinet);


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

    //SAVE TO .JSON
    function download(filename, text) {
      var element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
      element.setAttribute('download', filename);

      element.style.display = 'none';
      document.body.appendChild(element);

      element.click();

      document.body.removeChild(element);
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
          jsonObjectDoctor.information.providerNumbers[0].companySiteName,
          jsonObjectPatinet.companies[0].companySiteName,
          jsonObjectPatinet.companies[0].companySiteName,

          //Doctor

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
          "CONCAT(PatientAppointment.DVANumber)",
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
          "CONCAT(Appointment.SiteName)",
          "COMBINEFIELDSMARK(Appointment.patientSiteInfo.companySiteName@=)",
          "COMBINEFIELDSMARK(Appointment.patientSiteInfo.companySiteName@ =)",


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
    var stringTextforDownload;

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
                var askCalculation = jsonObject.sections[indexSections].rows[indexRows].fields[indexFields].cal;
                var checkMaxLength = jsonObject.sections[indexSections].rows[indexRows].fields[indexFields].maxlength;
                if (askCalculation === undefined) {
                  askCalculation = ""; //reset all calculation to ""
                }
                //-------------------------------- CHECK UNDEFINED FOR FIELDS NAME---------------------------------------


                //--------------------------------DATA TYPE TEXT BOX---------------------------------------------------------------------------
                if (getTypeField === inputText) {
                  //---------------------------------------------------------------------------------------------------------------------------------------------                           
                  //---------- when it is inputValue-----------------------
                  checkErrorUndefined(indexSections, indexRows, indexFields);
                  if ((askRecal === undefined || askRecal === "") && (askCalculation === "" || askCalculation.substr(0, 8) === "REQUIRED")) {

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
                  //=================== Textbox Calculation=====================================
                  else {
                    if (askCalculation.substr(0, 3) === "BMI" || askCalculation.substr(0, 3) === "WHR" || askCalculation.substr(0, 4) === "SUMP" || askCalculation.substr(0, 5) === "EQUAL") {
                      // create string
                      var fieldName = jsonObject.sections[indexSections].rows[indexRows].fields[indexFields].name;
                      var ID = jsonObject.sections[indexSections].rows[indexRows].fields[indexFields].ref;
                      var expectedValue = askCalculation;

                      //--------------- PRINT DATA INTO HTML ----------------------

                      var createNodeDiv1 = document.createElement("div");
                      var createNodeDiv2 = document.createElement("div");
                      var createNodeDiv4 = document.createElement("div");
                      var createNodeDivOpen = document.createElement("div");
                      var createNodeDivClose = document.createElement("div");

                      createNodeDivOpen.innerHTML = "{";
                      document.getElementById("calculationTextBoxAfterInput").appendChild(createNodeDivOpen);

                      createNodeDiv1.innerHTML = "\"fieldName\": " + "\"" + fieldName + "\",";
                      document.getElementById("calculationTextBoxAfterInput").appendChild(createNodeDiv1);

                      createNodeDiv2.innerHTML = "\"ID\": " + "\"" + ID + "\",";
                      document.getElementById("calculationTextBoxAfterInput").appendChild(createNodeDiv2);

                      createNodeDiv4.innerHTML = "\"expectedValue\": " + "\"" + expectedValue + "\"";
                      document.getElementById("calculationTextBoxAfterInput").appendChild(createNodeDiv4);

                      createNodeDivClose.innerHTML = "},";
                      document.getElementById("calculationTextBoxAfterInput").appendChild(createNodeDivClose);
                      //--------------- PRINT DATA INTO HTML ----------------------    
                    }
                    //-----------when it is a preFillValue ---------------------------------
                    else {

                      // create string
                      var fieldName = jsonObject.sections[indexSections].rows[indexRows].fields[indexFields].name;
                      var ID = jsonObject.sections[indexSections].rows[indexRows].fields[indexFields].ref;
                      var expectedValue = searchPatientProfile(askRecal);
                      console.log(searchPatientProfile(askRecal));
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
                    if (askRecal === "DEFAULT(TODAYSHORT)" || askRecal === "CONCAT(Appointment.FromTime)") {
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
                    var max = 500; /////// change code
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


    //=============================


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
    //==================================== CREATE STRING TEXT FOR DOWNLOAD ACTION======

    function createStringTextAll(groupTextNeedGetText) {
      var group = document.getElementById(groupTextNeedGetText);
      var stringGet = "";
      while (group.hasChildNodes()) {
        stringGet = stringGet + group.firstChild.textContent;
        group.removeChild(group.firstChild);
      }
      if (stringGet === "") {
        return stringGet;
      }
      else { stringGet = stringGet.substr(0, stringGet.length - 1); return stringGet; }

    }


    //=================================== DOWNLOAD ====================================

    document.getElementById("btnDownload").addEventListener("click", function () {
      //get some info from user
      var consultationPatient = prompt("consultationURL:", "https://test.redisys.com.au/consultation/55945/patients/43295/eform?consultationId=54818&appointmentUuid=63df330b-aee2-4796-8cac-0a0cacec09a3");
      var accountName = prompt("accountName:", "Doctest1");
      var password = prompt("password:", "P@ssword123");
      var groupEform = prompt("group", "PEM");
      var nameEform = prompt("name:", "Functional Assessment");


      // Generate download of hello.txt file with some content
      var text = "{\"consultationURL\":\"" + consultationPatient + "\",\"accountName\":\"" + accountName + "\",\"password\":\"" + password + "\",\"group\":\"" + groupEform + "\",\"name\":\"" + nameEform + "\",\"preFilledValue\":[" + createStringTextAll("preFilledValue") + "],\"preFilledChecked\":[" + createStringTextAll("preFilledChecked") + "],\"preFilledNotChecked\":[" + createStringTextAll("preFilledNotChecked") + "],\"inputValue\":[" + createStringTextAll("inputValue") + "],\"selectValue\": [" + createStringTextAll("selectValue") + "],\"calculationTextBoxAfterInput\": [" + createStringTextAll("calculationTextBoxAfterInput") + "],\"currentDate\":[" + createStringTextAll("currentDate") + "],\"candidateSignature\":[" + createStringTextAll("candidateSignature") + "],\"reloadDoctorSignature\":[" + createStringTextAll("reloadDoctorSignature") + "],\"isReloadedDoctorSignature\":[" + createStringTextAll("isReloadedDoctorSignature") + "],\"printEform\":[" + createStringTextAll("printEform") + "]}";
      console.log(text);
      var filename = jsonObject.eformName + ".json";
      download(filename, text);
    }, false);

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
    removeAllChild("calculationTextBoxAfterInput");
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



