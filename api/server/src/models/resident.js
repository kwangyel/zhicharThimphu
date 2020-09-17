'use strict'; module.exports = (sequelize, DataTypes) => {
  const Resident= sequelize.define('Resident', {
      building_id: DataTypes.INTEGER,
      unit_id: DataTypes.INTEGER,
      headHousehold:  DataTypes.STRING,
      contactNumberHead:  DataTypes.STRING,
      bhutaneseNationals:  DataTypes.STRING,
      nonBhutaneseNationals: DataTypes.STRING,
      buddhismMale: DataTypes.STRING,
      buddhismFemale:  DataTypes.STRING,
      hinduismMale:  DataTypes.STRING,
      hinduismFemale:  DataTypes.STRING,
      christianityMale:  DataTypes.STRING,
      christianityFemale:  DataTypes.STRING,
      otherMaleR:  DataTypes.STRING,
      otherFemaleR:  DataTypes.STRING,
      maleBelow6:  DataTypes.STRING,
      femaleBelow6:  DataTypes.STRING,
      male617:  DataTypes.STRING,
      female617:  DataTypes.STRING,
      male1824:  DataTypes.STRING,
      female1824:  DataTypes.STRING,
      male2559:  DataTypes.STRING,
      female2559:  DataTypes.STRING,
      male60:  DataTypes.STRING,
      female60:  DataTypes.STRING,
      armedMale:  DataTypes.STRING,
      armedFemale:  DataTypes.STRING,
      civilMale:  DataTypes.STRING,
      civilFemale:  DataTypes.STRING,
      farmerMale:  DataTypes.STRING,
      farmerFemale:  DataTypes.STRING,
      houseHusband:  DataTypes.STRING,
      houseWife:  DataTypes.STRING,
      jobSeekerMale:  DataTypes.STRING,
      jobSeekerFemale:  DataTypes.STRING,
      monk: DataTypes.STRING,
      nun: DataTypes.STRING,
      privateEmployeeMale:  DataTypes.STRING,
      privateEmployeeFemale:  DataTypes.STRING,
      retireeMale:  DataTypes.STRING,
      retireeFemale:  DataTypes.STRING,
      corporateMale:  DataTypes.STRING,
      corporateFemale:  DataTypes.STRING,
      studentMale:  DataTypes.STRING,
      studentFemale:  DataTypes.STRING,
      othersMale:  DataTypes.STRING,
      othersFemale:  DataTypes.STRING,
      familyIncome:  DataTypes.STRING,
      differentlyAbled:  DataTypes.STRING,
      electricCar:  DataTypes.STRING,
      hybridCar:  DataTypes.STRING,
      taxi:  DataTypes.STRING,
      resParking:  DataTypes.STRING,
      workPlaceSchool:  DataTypes.STRING,
      busTransport:  DataTypes.STRING,
      ownLand:  DataTypes.STRING,
      ownHouse:  DataTypes.STRING,
      residentRemarks:  DataTypes.STRING,
  }, {});
  Resident.associate = function(models) {
    // associations can be defined here
  };
  return Resident;
};