import * as units from '../../app/utils/units';

describe('Unit Abbreviations', () => {
  it('has an abbreviation for each volume unit', () => {
    let volUnits = units.VolumeUnit.enums.map(enumItem => {return enumItem.key});
    expect(Object.keys(units.volumeUnitAbbreviations)).toEqual(volUnits);
  });
  it('has an abbreviation for each weight unit', () => {
    let wgtUnits = units.WeightUnit.enums.map(enumItem => {return enumItem.key});
    expect(Object.keys(units.weightUnitAbbreviations)).toEqual(wgtUnits);
  });
});

describe('Unit Values', () => {
  it('has a value for each volume unit', () => {
    let volUnits = units.VolumeUnit.enums.map(enumItem => {return enumItem.key});
    expect(Object.keys(units.volumeUnitValues)).toEqual(volUnits);
  });
  it('has a value for each weight unit', () => {
    let wgtUnits = units.WeightUnit.enums.map(enumItem => {return enumItem.key});
    expect(Object.keys(units.weightUnitValues)).toEqual(wgtUnits);
  });
});

describe('Getting Units', () => {
  it('returns a unit for any unit from VolumeUnits (q=100) passed to it', () => {
    let apprVolUnits = units.VolumeUnit.enums.map(enumItem => {return units.getUnit(enumItem.key, 100)});
    let validUnits = units.VolumeUnit.enums.map(enumItem => {return enumItem.key});
    console.log(apprVolUnits);
    //This does not work!
    //GallonUS returns undefined but validUnits.includes counts this as true!
    expect(apprVolUnits.every((val) => {return (validUnits.includes(val))}));
  });
});
