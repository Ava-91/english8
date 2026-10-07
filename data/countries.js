const rawCountries = [
  ["004","Afghanistan","Afghan"],["008","Albania","Albanian"],["012","Algeria","Algerian"],
  ["020","Andorra","Andorran"],["024","Angola","Angolan"],["028","Antigua and Barbuda","Antiguan or Barbudan"],
  ["032","Argentina","Argentine"],["051","Armenia","Armenian"],["036","Australia","Australian"],
  ["040","Austria","Austrian"],["031","Azerbaijan","Azerbaijani"],["044","Bahamas","Bahamian"],
  ["048","Bahrain","Bahraini"],["050","Bangladesh","Bangladeshi"],["052","Barbados","Barbadian"],
  ["056","Belgium","Belgian"],["064","Bhutan","Bhutanese"],["068","Bolivia","Bolivian"],
  ["070","Bosnia and Herzegovina","Bosnian or Herzegovinian"],["072","Botswana","Botswanan"],
  ["076","Brazil","Brazilian"],["096","Brunei","Bruneian"],["100","Bulgaria","Bulgarian"],
  ["116","Cambodia","Cambodian"],["120","Cameroon","Cameroonian"],["124","Canada","Canadian"],
  ["140","Central African Republic","Central African"],["148","Chad","Chadian"],["152","Chile","Chilean"],
  ["156","China","Chinese"],["170","Colombia","Colombian"],["188","Costa Rica","Costa Rican"],
  ["191","Croatia","Croatian"],["192","Cuba","Cuban"],["196","Cyprus","Cypriot"],
  ["203","Czechia","Czech"],["208","Denmark","Danish"],["214","Dominican Republic","Dominican"],
  ["218","Ecuador","Ecuadorian"],["818","Egypt","Egyptian"],["222","El Salvador","Salvadoran"],
  ["231","Ethiopia","Ethiopian"],["242","Fiji","Fijian"],["246","Finland","Finnish"],
  ["250","France","French"],["268","Georgia","Georgian"],["276","Germany","German"],
  ["288","Ghana","Ghanaian"],["300","Greece","Greek"],["320","Guatemala","Guatemalan"],
  ["332","Haiti","Haitian"],["340","Honduras","Honduran"],["348","Hungary","Hungarian"],
  ["352","Iceland","Icelandic"],["356","India","Indian"],["360","Indonesia","Indonesian"],
  ["364","Iran","Iranian"],["368","Iraq","Iraqi"],["372","Ireland","Irish"],
  ["376","Israel","Israeli"],["380","Italy","Italian"],["388","Jamaica","Jamaican"],
  ["392","Japan","Japanese"],["400","Jordan","Jordanian"],["398","Kazakhstan","Kazakhstani"],
  ["404","Kenya","Kenyan"],["408","North Korea","North Korean"],["410","South Korea","South Korean"],
  ["414","Kuwait","Kuwaiti"],["417","Kyrgyzstan","Kyrgyzstani"],["418","Laos","Lao"],
  ["422","Lebanon","Lebanese"],["426","Lesotho","Basotho"],["430","Liberia","Liberian"],
  ["434","Libya","Libyan"],["440","Lithuania","Lithuanian"],["442","Luxembourg","Luxembourgish"],
  ["450","Madagascar","Malagasy"],["454","Malawi","Malawian"],["458","Malaysia","Malaysian"],
  ["462","Maldives","Maldivian"],["466","Mali","Malian"],["470","Malta","Maltese"],
  ["478","Mauritania","Mauritanian"],["480","Mauritius","Mauritian"],["484","Mexico","Mexican"],
  ["504","Morocco","Moroccan"],["508","Mozambique","Mozambican"],["516","Namibia","Namibian"],
  ["524","Nepal","Nepali"],["528","Netherlands","Dutch"],["554","New Zealand","New Zealander"],
  ["558","Nicaragua","Nicaraguan"],["562","Niger","Nigerien"],["566","Nigeria","Nigerian"],
  ["578","Norway","Norwegian"],["512","Oman","Omani"],["586","Pakistan","Pakistani"],
  ["275","Palestine","Palestinian"],["591","Panama","Panamanian"],["598","Papua New Guinea","Papua New Guinean"],
  ["600","Paraguay","Paraguayan"],["604","Peru","Peruvian"],["608","Philippines","Filipino"],
  ["616","Poland","Polish"],["620","Portugal","Portuguese"],["634","Qatar","Qatari"],
  ["642","Romania","Romanian"],["643","Russia","Russian"],["646","Rwanda","Rwandan"],
  ["682","Saudi Arabia","Saudi Arabian"],["686","Senegal","Senegalese"],["688","Serbia","Serbian"],
  ["694","Sierra Leone","Sierra Leonean"],["702","Singapore","Singaporean"],["703","Slovakia","Slovak"],
  ["705","Slovenia","Slovenian"],["706","Somalia","Somali"],["710","South Africa","South African"],
  ["724","Spain","Spanish"],["144","Sri Lanka","Sri Lankan"],["729","Sudan","Sudanese"],
  ["740","Suriname","Surinamese"],["752","Sweden","Swedish"],["756","Switzerland","Swiss"],
  ["760","Syria","Syrian"],["762","Tajikistan","Tajikistani"],["764","Thailand","Thai"],
  ["626","Timor-Leste","Timorese"],["768","Togo","Togolese"],["780","Trinidad and Tobago","Trinidadian or Tobagonian"],
  ["788","Tunisia","Tunisian"],["792","Turkey","Turkish"],["795","Turkmenistan","Turkmen"],
  ["800","Uganda","Ugandan"],["804","Ukraine","Ukrainian"],["784","United Arab Emirates","Emirati"],
  ["826","United Kingdom","British"],["840","United States","American"],["858","Uruguay","Uruguayan"],
  ["860","Uzbekistan","Uzbek"],["548","Vanuatu","Ni-Vanuatu"],["862","Venezuela","Venezuelan"],
  ["704","Vietnam","Vietnamese"],["887","Yemen","Yemeni"],["894","Zambia","Zambian"],
  ["716","Zimbabwe","Zimbabwean"],["554","New Zealand","New Zealander"],["392","Japan","Japanese"]
];

export const countries = Array.from(
  new Map(
    rawCountries.map(([id, name, nationality]) => [
      id,
      {
        id,
        name,
        nationality,
        sentence: `People from ${name} are ${nationality}.`,
      },
    ])
  ).values()
);

export const countryById = Object.fromEntries(
  countries.map((country) => [country.id, country])
);
