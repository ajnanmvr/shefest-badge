let btns = [
  ["Secondary First Year", "1"],
  ["Secondary Second Year", "2"],
  ["Secondary Third Year", "3"],
  ["Secondary Fourth Year", "4"],
  ["Secondary Final Year", "5"],
  ["Senior Secondary First Year", "6"],
  ["Senior Secondary Final Year", "7"],
  ["Degree First Year", "8"],
  ["Degree Second Year", "9"],
  ["Degree Final Year", "10"],
];
const filterButton = () => {
  let container = document.querySelector(".filterButtons");
  for (let i = 0; i < btns.length; i++) {
    container.insertAdjacentHTML(
      "beforeend",
      `<li class="${btns[i][0].replaceAll(" ", "-")}" onclick="filterData('${
        btns[i][0]
      }')">${btns[i][1]}</li>`
    );
  }
};

let studentData = [
  {
    chest: "KDY128",
    name: "MUHAMMED ALI, ARAKKUPARAMBA",
    dars: "BAHJATHUL HUDA DARS, KODANGAD",
    propgrams: [
      {
        code: "JS1",
        name: "ഖിറാഅത്ത്",
        isStage: 1,
        cat: "J",
        publish: 1,
      },
      {
        code: "JO24",
        name: "ഖത്തുന്നസ്ഖ്",
        cat: "J",
      },
    ],
  },
  {
    chest: "KDY269",
    name: "HAFIZ MUHAMMED NIHAL",
    dars: "NAVAVIYYA DARS POOKOTTUCHOLA",
    propgrams: [
      {
        code: "JS1",
        name: "ഖിറാഅത്ത്",
        isStage: 1,
        cat: "J",
        publish: 1,
      },
    ],
  },
  {
    chest: "KDY140",
    name: "MUHAMMED SIDAN, MORAYOOR",
    dars: "BAHJATHUL HUDA DARS, KODANGAD",
    propgrams: [
      {
        code: "JS2",
        name: "ഹിഫ്‌ള്",
        isStage: 1,
        cat: "J",
        publish: 1,
      },
      {
        code: "JS4",
        name: "പ്രസംഗം അറബി",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "KDY283",
    name: "AMEEN ASHRAF N CHAMMANNUR",
    dars: "NOORUL HUDA DARS OMANOOR",
    propgrams: [
      {
        code: "JS2",
        name: "ഹിഫ്‌ള്",
        isStage: 1,
        cat: "J",
        publish: 1,
      },
    ],
  },
  {
    chest: "KDY302",
    name: "MUHAMMED ASHIF .MARATHINKADAVU",
    dars: "SAUTHUSHAREEHA DARS EDAKKARA",
    propgrams: [
      {
        code: "JS3",
        name: "വാങ്ക്",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "KDY292",
    name: "MUHAMMED SINAN AV THAMARASSERY",
    dars: "NOORUL HUDA DARS OMANOOR",
    propgrams: [
      {
        code: "JS3",
        name: "വാങ്ക്",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "KDY301",
    name: "MUHAMMAD SALIM MAMBAD",
    dars: "SAUTHUSHAREEHA DARS EDAKKARA",
    propgrams: [
      {
        code: "JS4",
        name: "പ്രസംഗം അറബി",
        isStage: 1,
        cat: "J",
      },
      {
        code: "JS19",
        name: "അറബി സംഘഗാനം",
        isStage: 1,
        cat: "J",
        isGrp: 1,
      },
    ],
  },
  {
    chest: "KDY220",
    name: "RASHID MANNARKKAD",
    dars: "IRSHADUL MUTHALLIMEEN DARS MELE KIZHISSERI",
    propgrams: [
      {
        code: "JS5",
        name: "പ്രസംഗം മലയാളം",
        isStage: 1,
        cat: "J",
      },
      {
        code: "JS14",
        name: "ഗദ്യവായന മലയാളം",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "KDY126",
    name: "MUHAMMAD ALI, KANAYAM",
    dars: "BAHJATHUL HUDA DARS, KODANGAD",
    propgrams: [
      {
        code: "JS5",
        name: "പ്രസംഗം മലയാളം",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "KDY195",
    name: "MUHAMMED ALTAF",
    dars: "HIMAYATHUL BAYAN DARS KARUVARAKUNDU ANGADI",
    propgrams: [
      {
        code: "JS6",
        name: "പ്രസംഗം ഉറുദു",
        isStage: 1,
        cat: "J",
      },
      {
        code: "JS12",
        name: "ഗാനം ഉറുദു",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "KDY135",
    name: "MUHAMMED NIHAL, POTHUKALLU",
    dars: "BAHJATHUL HUDA DARS, KODANGAD",
    propgrams: [
      {
        code: "JS6",
        name: "പ്രസംഗം ഉറുദു",
        isStage: 1,
        cat: "J",
      },
      {
        code: "JS7",
        name: "പ്രസംഗം ഇംഗ്ലീഷ്",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "KDY295",
    name: "MUHAMMED SINAN KV OTTAPPALAM",
    dars: "NOORUL HUDA DARS OMANOOR",
    propgrams: [
      {
        code: "JS7",
        name: "പ്രസംഗം ഇംഗ്ലീഷ്",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "KDY124",
    name: "HAFZ SHUHAIB, ARAVANKARA",
    dars: "BAHJATHUL HUDA DARS, KODANGAD",
    propgrams: [
      {
        code: "JS8",
        name: "ഗ്രന്ഥവായന",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "KDY163",
    name: "MUHAMMED HADHI KAVANNUR",
    dars: "DARUL HIDAYA DARS VADASSERI",
    propgrams: [
      {
        code: "JS8",
        name: "ഗ്രന്ഥവായന",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "KDY201",
    name: "NISHAD P KARUVARAKUNDU",
    dars: "HIMAYATHUL BAYAN DARS KARUVARAKUNDU ANGADI",
    propgrams: [
      {
        code: "JS9",
        name: "ഗാനം അറബി",
        isStage: 1,
        cat: "J",
      },
      {
        code: "JS10",
        name: "മാപ്പിളപ്പാട്ട്",
        isStage: 1,
        cat: "J",
      },
      {
        code: "JS18",
        name: "മദ്ഹുന്നബി",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "KDY169",
    name: "AFSAL HUSSAIN KA KUNNAMKULAM",
    dars: "DARUL SWALATH DARS, THRIPPANACHI",
    propgrams: [
      {
        code: "JS9",
        name: "ഗാനം അറബി",
        isStage: 1,
        cat: "J",
      },
      {
        code: "JS20",
        name: "മലയാള സമൂഹ ഗാനം",
        isStage: 1,
        cat: "J",
        isGrp: 1,
      },
      {
        code: "JO28",
        name: "തശ്കീല്‍",
        cat: "J",
      },
    ],
  },
  {
    chest: "KDY323",
    name: "MUHAMMED ZIDHAN.C",
    dars: "THARBIYATHUL BAYAN KUTTATHI DARS KARUVARAKUNDU",
    propgrams: [
      {
        code: "JS10",
        name: "മാപ്പിളപ്പാട്ട്",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "KDY227",
    name: "MUHAMMED RINSHAN R S",
    dars: "IRSUL ANBIYA DARS THANNIKKADAVU",
    propgrams: [
      {
        code: "JS11",
        name: "മാലപ്പാട്ട്",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "KDY230",
    name: "ADIL NK KOOTILANGADE",
    dars: "JALALIYYA DARS KAVANOOR THAVARAPARAMBA",
    propgrams: [
      {
        code: "JS11",
        name: "മാലപ്പാട്ട്",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "KDY158",
    name: "AHAMMED SABIT KAVANNUR",
    dars: "DARUL HIDAYA DARS VADASSERI",
    propgrams: [
      {
        code: "JS12",
        name: "ഗാനം ഉറുദു",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "KDY306",
    name: "MUHAMMED YASEEN MAMBAD",
    dars: "SAUTHUSHAREEHA DARS EDAKKARA",
    propgrams: [
      {
        code: "JS13",
        name: "കഥ പറച്ചില്‍",
        isStage: 1,
        cat: "J",
      },
      {
        code: "JO21",
        name: "ചിത്രരചന",
        cat: "J",
      },
    ],
  },
  {
    chest: "KDY399",
    name: "FIMIL SHIBIN",
    dars: "IRSHADUL MUTHALLIMEEN DARS MELE KIZHISSERI",
    propgrams: [
      {
        code: "JS13",
        name: "കഥ പറച്ചില്‍",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "KDY145",
    name: "SAYYID ABDURAHMAN, CHELAKKARA",
    dars: "BAHJATHUL HUDA DARS, KODANGAD",
    propgrams: [
      {
        code: "JS14",
        name: "ഗദ്യവായന മലയാളം",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "KDY129",
    name: "MUHAMMED FAKIH, MELMURI",
    dars: "BAHJATHUL HUDA DARS, KODANGAD",
    propgrams: [
      {
        code: "JS15",
        name: "മുശാഅറ",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "KDY180",
    name: "MUHAMMED SINAN MP EDAPPAL",
    dars: "DARUL SWALATH DARS, THRIPPANACHI",
    propgrams: [
      {
        code: "JS15",
        name: "മുശാഅറ",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "KDY131",
    name: "MUHAMMED FAVAS, ARIMBRA",
    dars: "BAHJATHUL HUDA DARS, KODANGAD",
    propgrams: [
      {
        code: "JS16",
        name: "പദപ്പയറ്റ് അറബി",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "KDY171",
    name: "ANFAH MM VELLARAKKAD",
    dars: "DARUL SWALATH DARS, THRIPPANACHI",
    propgrams: [
      {
        code: "JS16",
        name: "പദപ്പയറ്റ് അറബി",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "KDY142",
    name: "MUHAMMED THAMEEM EDAKKARA",
    dars: "BAHJATHUL HUDA DARS, KODANGAD",
    propgrams: [
      {
        code: "JS17",
        name: "പദപ്പയറ്റ് ഇംഗ്ലീഷ്",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "KDY172",
    name: "ATHAUL BASITH VM KOTHAMANGALAM",
    dars: "DARUL SWALATH DARS, THRIPPANACHI",
    propgrams: [
      {
        code: "JS17",
        name: "പദപ്പയറ്റ് ഇംഗ്ലീഷ്",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "KDY164",
    name: "MUHAMMED HISHAM TANUR",
    dars: "DARUL HIDAYA DARS VADASSERI",
    propgrams: [
      {
        code: "JS18",
        name: "മദ്ഹുന്നബി",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "KDY133",
    name: "MUHAMMED IRFAN KOLAMBALAM",
    dars: "BAHJATHUL HUDA DARS, KODANGAD",
    propgrams: [
      {
        code: "JS19",
        name: "അറബി സംഘഗാനം",
        isStage: 1,
        cat: "J",
        isGrp: 1,
      },
    ],
  },
  {
    chest: "KDY130",
    name: "MUHAMMED FARHAN KOLAMBALAM",
    dars: "BAHJATHUL HUDA DARS, KODANGAD",
    propgrams: [
      {
        code: "JS20",
        name: "മലയാള സമൂഹ ഗാനം",
        isStage: 1,
        cat: "J",
        isGrp: 1,
      },
    ],
  },
  {
    chest: "KDY178",
    name: "MUHAMMAD SHAN KM KUNNAMKULAM",
    dars: "DARUL SWALATH DARS, THRIPPANACHI",
    propgrams: [
      {
        code: "JO21",
        name: "ചിത്രരചന",
        cat: "J",
      },
    ],
  },
  {
    chest: "KDY132",
    name: "MUHAMMED FAYIS, VELLILA",
    dars: "BAHJATHUL HUDA DARS, KODANGAD",
    propgrams: [
      {
        code: "JO22",
        name: "സുഡോക്കു",
        cat: "J",
      },
    ],
  },
  {
    chest: "KDY119",
    name: "MUHAMMED SINAN P PULLUR",
    dars: "AL MASALIH DARS PULLUR",
    propgrams: [
      {
        code: "JO22",
        name: "സുഡോക്കു",
        cat: "J",
      },
    ],
  },
  {
    chest: "KDY198",
    name: "MUHAMMED SHAN K",
    dars: "HIMAYATHUL BAYAN DARS KARUVARAKUNDU ANGADI",
    propgrams: [
      {
        code: "JO23",
        name: "മെമ്മറി ടെസ്റ്റ്",
        cat: "J",
      },
    ],
  },
  {
    chest: "KDY138",
    name: "MUHAMMED SHAMMAS, KODUVALLY",
    dars: "BAHJATHUL HUDA DARS, KODANGAD",
    propgrams: [
      {
        code: "JO23",
        name: "മെമ്മറി ടെസ്റ്റ്",
        cat: "J",
      },
    ],
  },
  {
    chest: "KDY137",
    name: "MUHAMMED SAHAL KUTTIKKATTOOR",
    dars: "BAHJATHUL HUDA DARS, KODANGAD",
    propgrams: [
      {
        code: "JO25",
        name: "കേട്ടെഴുത്ത്",
        cat: "J",
      },
    ],
  },
  {
    chest: "KDY170",
    name: "ALZABITH VALANCHERY",
    dars: "DARUL SWALATH DARS, THRIPPANACHI",
    propgrams: [
      {
        code: "JO25",
        name: "കേട്ടെഴുത്ത്",
        cat: "J",
      },
    ],
  },
  {
    chest: "KDY136",
    name: "MUHAMMED NIYAS, PARAMBIL PEEDIKA",
    dars: "BAHJATHUL HUDA DARS, KODANGAD",
    propgrams: [
      {
        code: "JO26",
        name: "പോസ്റ്റര്‍ ഡിസൈനിംഗ്",
        cat: "J",
      },
    ],
  },
  {
    chest: "KDY143",
    name: "MUHAMMED UVAIS OLAVANNA",
    dars: "BAHJATHUL HUDA DARS, KODANGAD",
    propgrams: [
      {
        code: "JO27",
        name: "നിഘണ്ടു നിര്‍മ്മാണം",
        cat: "J",
      },
    ],
  },
  {
    chest: "KDY118",
    name: "MUHAMMED SHIBILI ARIKKATH (KALAMBADI)",
    dars: "AL MASALIH DARS PULLUR",
    propgrams: [
      {
        code: "JO27",
        name: "നിഘണ്ടു നിര്‍മ്മാണം",
        cat: "J",
      },
    ],
  },
  {
    chest: "KDY123",
    name: "ABDUL RASHEED, POTHANOOR",
    dars: "BAHJATHUL HUDA DARS, KODANGAD",
    propgrams: [
      {
        code: "JO28",
        name: "തശ്കീല്‍",
        cat: "J",
      },
      {
        code: "JO30",
        name: "പ്രശ്‌നോത്തരി",
        cat: "J",
      },
    ],
  },
  {
    chest: "KDY318",
    name: "MUHAMMMED SHAIN",
    dars: "SIRAJUL ULAMA DARS MAMPUZHA",
    propgrams: [
      {
        code: "JO28",
        name: "തശ്കീല്‍",
        cat: "J",
      },
    ],
  },
  {
    chest: "KDY281",
    name: "AHAMMED RINSHAD THAMARASSERY",
    dars: "NOORUL HUDA DARS OMANOOR",
    propgrams: [
      {
        code: "JO29",
        name: "മലയാള പ്രബന്ധം",
        cat: "J",
      },
    ],
  },
  {
    chest: "KDY282",
    name: "ALIMON T MUTHIRIPPARAMBA",
    dars: "NOORUL HUDA DARS OMANOOR",
    propgrams: [
      {
        code: "JO30",
        name: "പ്രശ്‌നോത്തരി",
        cat: "J",
      },
    ],
  },
  {
    chest: "KDY712",
    name: "SWADHAQATHULLA KK KAPPU",
    dars: "NOORUL HUDA DARS OMANOOR",
    propgrams: [
      {
        code: "SS1",
        name: "ഖിറാഅത്ത്",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SS19",
        name: "ഖസ്വീദ പാരായണം",
        isStage: 1,
        cat: "S",
        isGrp: 1,
      },
    ],
  },
  {
    chest: "KDY743",
    name: "MUHAMMED UWAIS.M",
    dars: "THARBIYATHUL MUTHALLIMEEN THARAYITTAL",
    propgrams: [
      {
        code: "SS1",
        name: "ഖിറാഅത്ത്",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "KDY599",
    name: "AFNAN MOHAMMAD K",
    dars: "HIMAYATHUL BAYAN DARS KARUVARAKUNDU ANGADI",
    propgrams: [
      {
        code: "SS2",
        name: "ഹിഫ്‌ള്",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "KDY549",
    name: "MURTHAZA HUMAID ANAKKKARA",
    dars: "BAHJATHUL HUDA DARS, KODANGAD",
    propgrams: [
      {
        code: "SS2",
        name: "ഹിഫ്‌ള്",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SS10",
        name: "ഖുഥ്ബ",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SO28",
        name: "പ്രബന്ധം അറബി",
        cat: "S",
      },
    ],
  },
  {
    chest: "KDY601",
    name: "MUHAMMED AFLAL KARUVARAKUNDU",
    dars: "HIMAYATHUL BAYAN DARS KARUVARAKUNDU ANGADI",
    propgrams: [
      {
        code: "SS3",
        name: "വാങ്ക്",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "KDY552",
    name: "ZIDAN FARIS, THARIKULAM",
    dars: "BAHJATHUL HUDA DARS, KODANGAD",
    propgrams: [
      {
        code: "SS3",
        name: "വാങ്ക്",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SS7",
        name: "പ്രസംഗം അറബി",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "KDY544",
    name: "MUHAMMED SAFVAN ANAKKAYAM",
    dars: "BAHJATHUL HUDA DARS, KODANGAD",
    propgrams: [
      {
        code: "SS4",
        name: "ക്ലാസ് അവതരണം",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SS11",
        name: "ഗ്രന്ഥ വായന",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SO35",
        name: "നിഘണ്ടു നിര്‍മ്മാണം",
        cat: "S",
      },
      {
        code: "SO38",
        name: "തശ്കീല്‍",
        cat: "S",
      },
    ],
  },
  {
    chest: "KDY513",
    name: "MUHAMED ABDUL HASEEB C K KATTILASSERI",
    dars: "AL MASALIH DARS PULLUR",
    propgrams: [
      {
        code: "SS4",
        name: "ക്ലാസ് അവതരണം",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SS7",
        name: "പ്രസംഗം അറബി",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SO34",
        name: "കവിതാ രചന",
        cat: "S",
      },
    ],
  },
  {
    chest: "KDY606",
    name: "MUHAMMED SAHAJAS P KARUVARAKUNDU",
    dars: "HIMAYATHUL BAYAN DARS KARUVARAKUNDU ANGADI",
    propgrams: [
      {
        code: "SS5",
        name: "വഅ്‌ള്",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SS9",
        name: "പ്രസംഗം ഇംഗ്ലീഷ്",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "KDY530",
    name: "HAFIZ JABIR KOTTAKKUNNU",
    dars: "BAHJATHUL HUDA DARS, KODANGAD",
    propgrams: [
      {
        code: "SS5",
        name: "വഅ്‌ള്",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SS17",
        name: "പാടിപ്പറയല്‍",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SS18",
        name: "മാഷപ്പ് മാപ്പിളപ്പാട്ട്",
        isStage: 1,
        cat: "S",
        isGrp: 1,
      },
      {
        code: "SS19",
        name: "ഖസ്വീദ പാരായണം",
        isStage: 1,
        cat: "S",
        isGrp: 1,
      },
    ],
  },
  {
    chest: "KDY716",
    name: "MUHAMMED SHAHID KALIKAVU",
    dars: "SAUTHUSHAREEHA DARS EDAKKARA",
    propgrams: [
      {
        code: "SS6",
        name: "പ്രസംഗം മലയാളം",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "KDY603",
    name: "MUHAMMED ASHIF E",
    dars: "HIMAYATHUL BAYAN DARS KARUVARAKUNDU ANGADI",
    propgrams: [
      {
        code: "SS6",
        name: "പ്രസംഗം മലയാളം",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SS16",
        name: "നിമിഷപ്രസംഗം",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "KDY533",
    name: "MUHAMMAD SHAFEER, PALERY",
    dars: "BAHJATHUL HUDA DARS, KODANGAD",
    propgrams: [
      {
        code: "SS8",
        name: "പ്രസംഗം ഉറുദു",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "KDY701",
    name: "MUHAMMED HIFSU RAHMAN",
    dars: "NOORUL HUDA DARS OMANOOR",
    propgrams: [
      {
        code: "SS8",
        name: "പ്രസംഗം ഉറുദു",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "KDY550",
    name: "NASIH AMEEN, PADIKKAL",
    dars: "BAHJATHUL HUDA DARS, KODANGAD",
    propgrams: [
      {
        code: "SS9",
        name: "പ്രസംഗം ഇംഗ്ലീഷ്",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SO29",
        name: "പ്രബന്ധം ഇംഗ്ലീഷ്",
        cat: "S",
      },
    ],
  },
  {
    chest: "KDY718",
    name: "UMMER FARUK MASINAGUDI",
    dars: "SAUTHUSHAREEHA DARS EDAKKARA",
    propgrams: [
      {
        code: "SS10",
        name: "ഖുഥ്ബ",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "KDY665",
    name: "ANEES MOONNAKKAL",
    dars: "MASLAKUL ANWAR CHEEKODE",
    propgrams: [
      {
        code: "SS11",
        name: "ഗ്രന്ഥ വായന",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "KDY671",
    name: "NISAMUDEEN P.V MANNARKKAD",
    dars: "MASLAKUL ANWAR CHEEKODE",
    propgrams: [
      {
        code: "SS12",
        name: "കവിതാലാപനം മലയാളം",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "KDY518",
    name: "MUHAMMED ISHAQ C H NEERCHAL",
    dars: "AL MASALIH DARS PULLUR",
    propgrams: [
      {
        code: "SS12",
        name: "കവിതാലാപനം മലയാളം",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "KDY540",
    name: "MUHAMMED HILAR, POOVATTUPARAMBA",
    dars: "BAHJATHUL HUDA DARS, KODANGAD",
    propgrams: [
      {
        code: "SS13",
        name: "മുശാഅറ",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SO31",
        name: "റിപ്പോര്‍ട്ടിംഗ്",
        cat: "S",
      },
      {
        code: "SO39",
        name: "പ്രശ്‌നോത്തരി",
        cat: "S",
      },
    ],
  },
  {
    chest: "KDY511",
    name: "HISHAM P (PULLARA)",
    dars: "AL MASALIH DARS PULLUR",
    propgrams: [
      {
        code: "SS13",
        name: "മുശാഅറ",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "KDY535",
    name: "MUHAMMED ADHNAN, AKKARAPPURAM",
    dars: "BAHJATHUL HUDA DARS, KODANGAD",
    propgrams: [
      {
        code: "SS14",
        name: "അനൗണ്‍സ്‌മെന്റ്",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "KDY731",
    name: "MUKHTHAR",
    dars: "SIRAJUL ULAMA DARS MAMPUZHA",
    propgrams: [
      {
        code: "SS14",
        name: "അനൗണ്‍സ്‌മെന്റ്",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "KDY548",
    name: "MUHAMMED YASEEN, PAYYANAD",
    dars: "BAHJATHUL HUDA DARS, KODANGAD",
    propgrams: [
      {
        code: "SS15",
        name: "പ്രബന്ധാവതരണം",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SO33",
        name: "മുദ്രവാക്യ രചന",
        cat: "S",
      },
    ],
  },
  {
    chest: "KDY587",
    name: "RINSHADUL RAHMAN PV PONNANI",
    dars: "DARUL SWALATH DARS, THRIPPANACHI",
    propgrams: [
      {
        code: "SS15",
        name: "പ്രബന്ധാവതരണം",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SO33",
        name: "മുദ്രവാക്യ രചന",
        cat: "S",
      },
    ],
  },
  {
    chest: "KDY674",
    name: "SAHAL PR",
    dars: "MASLAKUL ANWAR CHEEKODE",
    propgrams: [
      {
        code: "SS16",
        name: "നിമിഷപ്രസംഗം",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SO36",
        name: "അടിക്കുറിപ്പ്",
        cat: "S",
      },
    ],
  },
  {
    chest: "KDY585",
    name: "MUHAMMED YASIR KA KALAMASSERY",
    dars: "DARUL SWALATH DARS, THRIPPANACHI",
    propgrams: [
      {
        code: "SS17",
        name: "പാടിപ്പറയല്‍",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SO29",
        name: "പ്രബന്ധം ഇംഗ്ലീഷ്",
        cat: "S",
      },
    ],
  },
  {
    chest: "KDY702",
    name: "MUHAMMED MUSTHAFA TP NEERUTTIKKAL",
    dars: "NOORUL HUDA DARS OMANOOR",
    propgrams: [
      {
        code: "SS18",
        name: "മാഷപ്പ് മാപ്പിളപ്പാട്ട്",
        isStage: 1,
        cat: "S",
        isGrp: 1,
      },
    ],
  },
  {
    chest: "KDY693",
    name: "ARSHID P AKODE",
    dars: "NOORUL HUDA DARS OMANOOR",
    propgrams: [
      {
        code: "SS20",
        name: "പ്രോഗ്രാം സെറ്റിംഗ്",
        isStage: 1,
        cat: "S",
        isGrp: 1,
      },
    ],
  },
  {
    chest: "KDY528",
    name: "ARIFUDHEEN, VALAPURAM",
    dars: "BAHJATHUL HUDA DARS, KODANGAD",
    propgrams: [
      {
        code: "SS20",
        name: "പ്രോഗ്രാം സെറ്റിംഗ്",
        isStage: 1,
        cat: "S",
        isGrp: 1,
      },
      {
        code: "SO40",
        name: "പത്രനിര്‍മാണം",
        cat: "S",
        isGrp: 1,
      },
    ],
  },
  {
    chest: "KDY536",
    name: "MUHAMMED ALI, MANNARKKAD",
    dars: "BAHJATHUL HUDA DARS, KODANGAD",
    propgrams: [
      {
        code: "SO21",
        name: "അറബിക് കാലിഗ്രഫി",
        cat: "S",
      },
    ],
  },
  {
    chest: "KDY519",
    name: "MUHAMMED JASIR M ELAMBRA",
    dars: "AL MASALIH DARS PULLUR",
    propgrams: [
      {
        code: "SO21",
        name: "അറബിക് കാലിഗ്രഫി",
        cat: "S",
      },
    ],
  },
  {
    chest: "KDY542",
    name: "MUHAMMED NASEEF, KUNDUKAD",
    dars: "BAHJATHUL HUDA DARS, KODANGAD",
    propgrams: [
      {
        code: "SO22",
        name: "പോസ്റ്റര്‍ ഡിസൈനിംഗ്",
        cat: "S",
      },
    ],
  },
  {
    chest: "KDY591",
    name: "AHAMMED SHADIN NP KARAKUNNU",
    dars: "HIDAYATHU THWOLABA DARAS THRIKKALANGOD",
    propgrams: [
      {
        code: "SO22",
        name: "പോസ്റ്റര്‍ ഡിസൈനിംഗ്",
        cat: "S",
      },
    ],
  },
  {
    chest: "KDY547",
    name: "MUHAMMED SUFYAN MOLOOR",
    dars: "BAHJATHUL HUDA DARS, KODANGAD",
    propgrams: [
      {
        code: "SO23",
        name: "ഖത്തുന്നസ്ഖ്",
        cat: "S",
      },
      {
        code: "SO24",
        name: "ഖത്തുറുഖഈ",
        cat: "S",
      },
    ],
  },
  {
    chest: "KDY578",
    name: "AHMAD RAZEEN MK VENMENAD",
    dars: "DARUL SWALATH DARS, THRIPPANACHI",
    propgrams: [
      {
        code: "SO24",
        name: "ഖത്തുറുഖഈ",
        cat: "S",
      },
    ],
  },
  {
    chest: "KDY509",
    name: "SIYAZ K MANNARKAD",
    dars: "AL BURHAN CHENGARA",
    propgrams: [
      {
        code: "SO25",
        name: "വിവര്‍ത്തനം",
        cat: "S",
      },
    ],
  },
  {
    chest: "KDY583",
    name: "MUHAMMAD BILAL AK PONJASSERY",
    dars: "DARUL SWALATH DARS, THRIPPANACHI",
    propgrams: [
      {
        code: "SO26",
        name: "വിവര്‍ത്തനം",
        cat: "S",
      },
    ],
  },
  {
    chest: "KDY595",
    name: "MUHAMMED HAKHEEM P KALIKAVU",
    dars: "HIDAYATHU THWOLABA DARAS THRIKKALANGOD",
    propgrams: [
      {
        code: "SO27",
        name: "വിവര്‍ത്തനം",
        cat: "S",
      },
    ],
  },
  {
    chest: "KDY534",
    name: "MUHAMMED ADHIL PANDALLUR",
    dars: "BAHJATHUL HUDA DARS, KODANGAD",
    propgrams: [
      {
        code: "SO27",
        name: "വിവര്‍ത്തനം",
        cat: "S",
      },
      {
        code: "SO37",
        name: "പദ സമ്പാദനം",
        cat: "S",
      },
    ],
  },
  {
    chest: "KDY525",
    name: "MUHAMMED SINAN A VALIYAD",
    dars: "AL MASALIH DARS PULLUR",
    propgrams: [
      {
        code: "SO28",
        name: "പ്രബന്ധം അറബി",
        cat: "S",
      },
    ],
  },
  {
    chest: "KDY632",
    name: "MUHAMMMED IRFAN.K PUTHANAZHI",
    dars: "MAHADANUL HUDHA DARS NENMINI",
    propgrams: [
      {
        code: "SO30",
        name: "പ്രബന്ധം മലയാളം",
        cat: "S",
      },
    ],
  },
  {
    chest: "KDY710",
    name: "MURSHID MON PK KUZHIMANNA",
    dars: "NOORUL HUDA DARS OMANOOR",
    propgrams: [
      {
        code: "SO30",
        name: "പ്രബന്ധം മലയാളം",
        cat: "S",
      },
    ],
  },
  {
    chest: "KDY672",
    name: "SAHAD K K IRIMBILIYAM",
    dars: "MASLAKUL ANWAR CHEEKODE",
    propgrams: [
      {
        code: "SO32",
        name: "തലവാചക നിര്‍മ്മാണം",
        cat: "S",
      },
    ],
  },
  {
    chest: "KDY588",
    name: "SHEHIN KM",
    dars: "DARUL SWALATH DARS, THRIPPANACHI",
    propgrams: [
      {
        code: "SO34",
        name: "കവിതാ രചന",
        cat: "S",
      },
    ],
  },
  {
    chest: "KDY582",
    name: "HASHIM MUHAMMED K.M KALAMASSERY",
    dars: "DARUL SWALATH DARS, THRIPPANACHI",
    propgrams: [
      {
        code: "SO35",
        name: "നിഘണ്ടു നിര്‍മ്മാണം",
        cat: "S",
      },
    ],
  },
  {
    chest: "KDY537",
    name: "MUHAMMED ASLAM KODAKKELLU",
    dars: "BAHJATHUL HUDA DARS, KODANGAD",
    propgrams: [
      {
        code: "SO36",
        name: "അടിക്കുറിപ്പ്",
        cat: "S",
      },
    ],
  },
  {
    chest: "KDY732",
    name: "SAYYID THUFAIL BAHASSAN",
    dars: "SIRAJUL ULAMA DARS MAMPUZHA",
    propgrams: [
      {
        code: "SO37",
        name: "പദ സമ്പാദനം",
        cat: "S",
      },
    ],
  },
  {
    chest: "KDY527",
    name: "MUHAMMED SWALIH V M VILAYUR",
    dars: "AL MASALIH DARS PULLUR",
    propgrams: [
      {
        code: "SO39",
        name: "പ്രശ്‌നോത്തരി",
        cat: "S",
      },
    ],
  },
  {
    chest: "KDY705",
    name: "MUHAMMED SHAFI V MAMPAD",
    dars: "NOORUL HUDA DARS OMANOOR",
    propgrams: [
      {
        code: "SO40",
        name: "പത്രനിര്‍മാണം",
        cat: "S",
        isGrp: 1,
      },
    ],
  },
  {
    chest: "PMNA152",
    name: "MUHAMMED FARHAN P",
    dars: "IYNUL MARIF PONNIAKURUSSI",
    propgrams: [],
  },
  {
    chest: "PMNA238",
    name: "MUHAMMED NIHAL KASARAGOD",
    dars: "MARKAZUL ULAMA DARS VALANCHERY",
    propgrams: [],
  },
  {
    chest: "PMNA226",
    name: "ANZIL ATHAVANAD",
    dars: "MARKAZUL ULAMA DARS VALANCHERY",
    propgrams: [],
  },
  {
    chest: "PMNA198",
    name: "MUHAMMED IRSHAD TANUR",
    dars: "MAJLISUL IRFAN DARS ACHIPRA",
    propgrams: [],
  },
  {
    chest: "PMNA207",
    name: "MUHAMMAD SINAN N",
    dars: "MAMBA'UL HUDA DARS, EARKKARA",
    propgrams: [],
  },
  {
    chest: "PMNA204",
    name: "MUHAMMAD HANAN C, KOTTOPADAM",
    dars: "MAMBA'UL HUDA DARS, EARKKARA",
    propgrams: [],
  },
  {
    chest: "PMNA239",
    name: "MUHAMMED NUAMAN K WAYANAD",
    dars: "MARKAZUL ULAMA DARS VALANCHERY",
    propgrams: [],
  },
  {
    chest: "PMNA225",
    name: "ABDUL HADI PAZHAMALLUR",
    dars: "MARKAZUL ULAMA DARS VALANCHERY",
    propgrams: [],
  },
  {
    chest: "PMNA196",
    name: "MUHAMMED ASHIQUE WAYANAD",
    dars: "MAJLISUL IRFAN DARS ACHIPRA",
    propgrams: [],
  },
  {
    chest: "PMNA237",
    name: "MUHAMMED MISAB MK UNIVERSITY",
    dars: "MARKAZUL ULAMA DARS VALANCHERY",
    propgrams: [],
  },
  {
    chest: "PMNA132",
    name: "MUHAMMED SAJEER K, KOOTTILANGADI",
    dars: "BUSTHANU TWALIBEEN DARS AMMINIKKAD",
    propgrams: [],
  },
  {
    chest: "PMNA121",
    name: "MUHAMMED SINAN THIRUVIZHAMKUNNU",
    dars: "BADRIYYA DARS, KAPPU",
    propgrams: [],
  },
  {
    chest: "PMNA107",
    name: "MUHAMMED BASIM MUTHIRIPARAMBA",
    dars: "ANWARUL HUDA DARS MEENARKUZHI",
    propgrams: [],
  },
  {
    chest: "PMNA153",
    name: "MUHAMMED SHAKIR A",
    dars: "IYNUL MARIF PONNIAKURUSSI",
    propgrams: [],
  },
  {
    chest: "PMNA114",
    name: "MUHAMMED SINAN MUTHIRIPARAMBA",
    dars: "ANWARUL HUDA DARS MEENARKUZHI",
    propgrams: [],
  },
  {
    chest: "PMNA171",
    name: "SALMANUL FAYIS, VATTAPPARAMBU",
    dars: "JAMALIYYA DARS VATTAPPARAMBU, KARINKALLATHANI",
    propgrams: [],
  },
  {
    chest: "PMNA125",
    name: "ABDUL BASITH.PK, MURIYAMKANNI",
    dars: "BUSTHANU TWALIBEEN DARS AMMINIKKAD",
    propgrams: [],
  },
  {
    chest: "PMNA249",
    name: "MUHAMMED SWAHID IRUMBUZHI",
    dars: "MISHKATHUL HUDA DARS EDAYATTUR",
    propgrams: [],
  },
  {
    chest: "PMNA243",
    name: "MUHAMMED DILSHAN IRIMBILIYAM",
    dars: "MISHKATHUL HUDA DARS EDAYATTUR",
    propgrams: [],
  },
  {
    chest: "PMNA241",
    name: "MUHAMMED SAHAD WAYANAD",
    dars: "MARKAZUL ULAMA DARS VALANCHERY",
    propgrams: [],
  },
  {
    chest: "PMNA240",
    name: "MUHAMMED RAMEES WAYANAD",
    dars: "MARKAZUL ULAMA DARS VALANCHERY",
    propgrams: [],
  },
  {
    chest: "PMNA120",
    name: "MUHAMMED SHAJAHAN CHERPULASSERI",
    dars: "BADRIYYA DARS, KAPPU",
    propgrams: [],
  },
  {
    chest: "PMNA133",
    name: "NISAMUDEEN P, PULAMANTHOLE",
    dars: "BUSTHANU TWALIBEEN DARS AMMINIKKAD",
    propgrams: [],
  },
  {
    chest: "PMNA126",
    name: "ARIFUDHEEN AK, AMMINIKKAD",
    dars: "BUSTHANU TWALIBEEN DARS AMMINIKKAD",
    propgrams: [],
  },
  {
    chest: "PMNA159",
    name: "MUHAMMED AMJAD.KT,PODEKKAD",
    dars: "JAMALIYYA DARS VATTAPPARAMBU, KARINKALLATHANI",
    propgrams: [],
  },
  {
    chest: "PMNA232",
    name: "MUHAMMAD SHIYAS KASARAGOD",
    dars: "MARKAZUL ULAMA DARS VALANCHERY",
    propgrams: [],
  },
  {
    chest: "PMNA122",
    name: "MUHAMMED SINAN, KOPPAM",
    dars: "BADRIYYA DARS, KAPPU",
    propgrams: [],
  },
  {
    chest: "PMNA224",
    name: "ABDHURAHMAN PUTHANATHANI",
    dars: "MARKAZUL ULAMA DARS VALANCHERY",
    propgrams: [],
  },
  {
    chest: "PMNA206",
    name: "MUHAMMAD SHADIL P",
    dars: "MAMBA'UL HUDA DARS, EARKKARA",
    propgrams: [],
  },
  {
    chest: "PMNA128",
    name: "MOHAMMED RABEEH.TK ,BIDATHI",
    dars: "BUSTHANU TWALIBEEN DARS AMMINIKKAD",
    propgrams: [],
  },
  {
    chest: "PMNA195",
    name: "MUHAMMAD NIFAD MAYYERICHIRA",
    dars: "MAJLISUL IRFAN DARS ACHIPRA",
    propgrams: [],
  },
  {
    chest: "PMNA109",
    name: "MUHAMMED MIDLAJ VALAMANGALAM",
    dars: "ANWARUL HUDA DARS MEENARKUZHI",
    propgrams: [],
  },
  {
    chest: "PMNA134",
    name: "SHADULI SINAN, AMMINIKKAD",
    dars: "BUSTHANU TWALIBEEN DARS AMMINIKKAD",
    propgrams: [],
  },
  {
    chest: "PMNA291",
    name: "MUHAMMED RABEEH KT VALIYAKUNNU",
    dars: "RABBANIYYA DARS VATTALLUR",
    propgrams: [],
  },
  {
    chest: "PMNA154",
    name: "MUHAMMED SINAN KK",
    dars: "IYNUL MARIF PONNIAKURUSSI",
    propgrams: [],
  },
  {
    chest: "PMNA130",
    name: "MUHAMMED MUHSIN.P ,PULAMANTHOL",
    dars: "BUSTHANU TWALIBEEN DARS AMMINIKKAD",
    propgrams: [],
  },
  {
    chest: "PMNA247",
    name: "MUHAMMED SINAN P PERSHANNOOR",
    dars: "MISHKATHUL HUDA DARS EDAYATTUR",
    propgrams: [],
  },
  {
    chest: "PMNA282",
    name: "MUHAMMED AJSAL ARIPRA",
    dars: "RABBANIYYA DARS VATTALLUR",
    propgrams: [],
  },
  {
    chest: "PMNA197",
    name: "MUHAMMED IHSAN PURAMANNUR",
    dars: "MAJLISUL IRFAN DARS ACHIPRA",
    propgrams: [],
  },
  {
    chest: "PMNA246",
    name: "MUHAMMED SHADIL VP KUTTIPPURAM",
    dars: "MISHKATHUL HUDA DARS EDAYATTUR",
    propgrams: [],
  },
  {
    chest: "PMNA511",
    name: "NASRUDHEEN KANNUR",
    dars: "ANWARUL HUDA DARS MEENARKUZHI",
    propgrams: [],
  },
  {
    chest: "PMNA613",
    name: "SAYYID AHMED JURAIJ BA ALAVI",
    dars: "MARKAZUL ULAMA DARS VALANCHERY",
    propgrams: [],
  },
  {
    chest: "PMNA578",
    name: "JASIM IRSHAD PONNANI",
    dars: "MAJLISUL IRFAN DARS ACHIPRA",
    propgrams: [],
  },
  {
    chest: "PMNA525",
    name: "MOHAMMED SINAN AK, NATTUKAL",
    dars: "BUSTHANU TWALIBEEN DARS AMMINIKKAD",
    propgrams: [],
  },
  {
    chest: "PMNA565",
    name: "MUHAMMED SWADIQ.K, PUNJAKKODE",
    dars: "JAMALIYYA DARS VATTAPPARAMBU, KARINKALLATHANI",
    propgrams: [],
  },
  {
    chest: "PMNA601",
    name: "HAFIZ AJMAL WAYANAD",
    dars: "MARKAZUL ULAMA DARS VALANCHERY",
    propgrams: [],
  },
  {
    chest: "PMNA531",
    name: "SAIFUDHEEN CK, KAREKKAD",
    dars: "BUSTHANU TWALIBEEN DARS AMMINIKKAD",
    propgrams: [],
  },
  {
    chest: "PMNA600",
    name: "FASIL NILIGIRI",
    dars: "MARKAZUL ULAMA DARS VALANCHERY",
    propgrams: [],
  },
  {
    chest: "PMNA654",
    name: "MUHAMMAD ASHRAF.MT PANANGAGARA",
    dars: "RAHMANIYYA JUMUA MASJID ANAMANGAD",
    propgrams: [],
  },
  {
    chest: "PMNA599",
    name: "FAHIS VALLIKUNNU",
    dars: "MARKAZUL ULAMA DARS VALANCHERY",
    propgrams: [],
  },
  {
    chest: "PMNA670",
    name: "SWALIH,THOTTARA",
    dars: "TTS NELLIKKUNNU DARS, NELLIKKUNNU",
    propgrams: [],
  },
  {
    chest: "PMNA562",
    name: "MUHAMMED MUSTHAFA.TK,PARAKKANNI",
    dars: "JAMALIYYA DARS VATTAPPARAMBU, KARINKALLATHANI",
    propgrams: [],
  },
  {
    chest: "PMNA584",
    name: "MUHAMMED ANES KOPPAM",
    dars: "MAJLISUL IRFAN DARS ACHIPRA",
    propgrams: [],
  },
  {
    chest: "PMNA529",
    name: "MUHAMMED MUSTHAFA.CM,TANUR",
    dars: "BUSTHANU TWALIBEEN DARS AMMINIKKAD",
    propgrams: [],
  },
  {
    chest: "PMNA609",
    name: "MUHAMMED SHEFIN THODUPUZHA",
    dars: "MARKAZUL ULAMA DARS VALANCHERY",
    propgrams: [],
  },
  {
    chest: "PMNA606",
    name: "MUHAMMED ABOOBACKER KANNUR",
    dars: "MARKAZUL ULAMA DARS VALANCHERY",
    propgrams: [],
  },
  {
    chest: "PMNA517",
    name: "MUHAMMED SINAN GUDALLUR",
    dars: "BADRIYYA DARS, KAPPU",
    propgrams: [],
  },
  {
    chest: "PMNA604",
    name: "MUBASHIRUDHEEN T EDAPPAL",
    dars: "MARKAZUL ULAMA DARS VALANCHERY",
    propgrams: [],
  },
  {
    chest: "PMNA513",
    name: "ANSHAD AIRANI",
    dars: "BADRIYYA DARS, KAPPU",
    propgrams: [],
  },
  {
    chest: "PMNA608",
    name: "MUHAMMED SHAMVEEL CK VAZHAKKAD",
    dars: "MARKAZUL ULAMA DARS VALANCHERY",
    propgrams: [],
  },
  {
    chest: "PMNA552",
    name: "NASRUDHEEN E",
    dars: "IYNUL MARIF PONNIAKURUSSI",
    propgrams: [],
  },
  {
    chest: "PMNA521",
    name: "SULAIMAN PS KALLADIKKODE",
    dars: "BADRIYYA DARS, KAPPU",
    propgrams: [],
  },
  {
    chest: "PMNA549",
    name: "MUHAMMED IRFAN CK",
    dars: "IYNUL MARIF PONNIAKURUSSI",
    propgrams: [],
  },
  {
    chest: "PMNA603",
    name: "HAFIZ SHAMNAS WAYANAD",
    dars: "MARKAZUL ULAMA DARS VALANCHERY",
    propgrams: [],
  },
  {
    chest: "PMNA662",
    name: "MUHAMMED AMEEN, KARUMALA",
    dars: "TTS NELLIKKUNNU DARS, NELLIKKUNNU",
    propgrams: [],
  },
  {
    chest: "PMNA663",
    name: "MUHAMMED ANSHIF, KALIKAVU",
    dars: "TTS NELLIKKUNNU DARS, NELLIKKUNNU",
    propgrams: [],
  },
  {
    chest: "PMNA564",
    name: "MUHAMMED SALEEM.RA, MANNARKKAD",
    dars: "JAMALIYYA DARS VATTAPPARAMBU, KARINKALLATHANI",
    propgrams: [],
  },
  {
    chest: "PMNA598",
    name: "AMEEN MISHAL KANNUR",
    dars: "MARKAZUL ULAMA DARS VALANCHERY",
    propgrams: [],
  },
  {
    chest: "PMNA527",
    name: "MUHAMMED FAHIM PK, VALANCHERY",
    dars: "BUSTHANU TWALIBEEN DARS AMMINIKKAD",
    propgrams: [],
  },
  {
    chest: "PMNA675",
    name: "ASHIQ RABBANI",
    dars: "RABBANIYYA DARS VATTALLUR",
    propgrams: [],
  },
  {
    chest: "PMNA551",
    name: "MUHAMMED SHIBILI T",
    dars: "IYNUL MARIF PONNIAKURUSSI",
    propgrams: [],
  },
  {
    chest: "PMNA561",
    name: "MUHAMMED FAYIZ.KK",
    dars: "JAMALIYYA DARS VATTAPPARAMBU, KARINKALLATHANI",
    propgrams: [],
  },
  {
    chest: "PMNA532",
    name: "SHAHUL HAMEED C, ATHANIPPADI",
    dars: "BUSTHANU TWALIBEEN DARS AMMINIKKAD",
    propgrams: [],
  },
  {
    chest: "PMNA597",
    name: "ABDUL SALEEM KP",
    dars: "MARKAZUL ULAMA DARS VALANCHERY",
    propgrams: [],
  },
  {
    chest: "PMNA624",
    name: "MUHAMMED SAFUVAN THANGAL KUTTIPPURAM",
    dars: "MISHKATHUL HUDA DARS EDAYATTUR",
    propgrams: [],
  },
  {
    chest: "PMNA505",
    name: "MOHAMMED RASHID KADOOPURAM",
    dars: "ANWARUL HUDA DARS MEENARKUZHI",
    propgrams: [],
  },
  {
    chest: "PMNA530",
    name: "MUHAMMED SINAN.P, PAZHAMALLUR",
    dars: "BUSTHANU TWALIBEEN DARS AMMINIKKAD",
    propgrams: [],
  },
  {
    chest: "PMNA523",
    name: "FATHAHU RAHMAN P, ATHANIPPADI",
    dars: "BUSTHANU TWALIBEEN DARS AMMINIKKAD",
    propgrams: [],
  },
  {
    chest: "PMNA573",
    name: "MUHAMMED MUSTHAFA SHANU PH KUNNAMANGALAM",
    dars: "MA'DINUL ULOOM DARS KIZHAKKUMPADAM",
    propgrams: [],
  },
  {
    chest: "PMNA671",
    name: "SYED MUHAMMED MIDLAJ",
    dars: "TTS NELLIKKUNNU DARS, NELLIKKUNNU",
    propgrams: [],
  },
  {
    chest: "PMNA545",
    name: "MOHAMMED ANEES V",
    dars: "IYNUL MARIF PONNIAKURUSSI",
    propgrams: [],
  },
  {
    chest: "PMNA528",
    name: "MUHAMMED FARHAN PK, PAINKANNUR",
    dars: "BUSTHANU TWALIBEEN DARS AMMINIKKAD",
    propgrams: [],
  },
  {
    chest: "PMNA568",
    name: "UNAIS TH",
    dars: "JAMALIYYA DARS VATTAPPARAMBU, KARINKALLATHANI",
    propgrams: [],
  },
  {
    chest: "PMNA611",
    name: "MUHAMMED SINAN UP WAYANAD",
    dars: "MARKAZUL ULAMA DARS VALANCHERY",
    propgrams: [],
  },
  {
    chest: "PMNA618",
    name: "MUHAMMED FAHIZ",
    dars: "MISHKATHUL HUDA DARS EDAYATTUR",
    propgrams: [],
  },
  {
    chest: "PMNA543",
    name: "ANSHID NM",
    dars: "IYNUL MARIF PONNIAKURUSSI",
    propgrams: [],
  },
  {
    chest: "PMNA524",
    name: "IBRAHIMUL KHALEEL T, CHOLODE",
    dars: "BUSTHANU TWALIBEEN DARS AMMINIKKAD",
    propgrams: [],
  },
  {
    chest: "PMNA644",
    name: "MUHAMMED HASHIM EP",
    dars: "RABBANIYYA DARS VATTALLUR",
    propgrams: [],
  },
  {
    chest: "PMNA575",
    name: "MUHAMMED SWALIH TK ELANKUR",
    dars: "MA'DINUL ULOOM DARS KIZHAKKUMPADAM",
    propgrams: [],
  },
  {
    chest: "PMNA554",
    name: "AHAMMED YASEEN.K, KARINKALLATHANI",
    dars: "JAMALIYYA DARS VATTAPPARAMBU, KARINKALLATHANI",
    propgrams: [],
  },
  {
    chest: "PMNA526",
    name: "MUHAMMAD IRFAN T, KOOTTILANGADI",
    dars: "BUSTHANU TWALIBEEN DARS AMMINIKKAD",
    propgrams: [],
  },
  {
    chest: "TGI341",
    name: "MUHAMMED SAHAL P",
    dars: "MARKAZUL ULAMA DARS PALATHINGAL",
    propgrams: [
      {
        code: "JS1",
        name: "ഖിറാഅത്ത്",
        isStage: 1,
        cat: "J",
        publish: 1,
      },
    ],
  },
  {
    chest: "TGI208",
    name: "MUHAMMED FASEEH",
    dars: "BAYANUL ULOOM DARS MUTTICHIRA",
    propgrams: [
      {
        code: "JS1",
        name: "ഖിറാഅത്ത്",
        isStage: 1,
        cat: "J",
        publish: 1,
      },
      {
        code: "JO27",
        name: "നിഘണ്ടു നിര്‍മ്മാണം",
        cat: "J",
      },
    ],
  },
  {
    chest: "TGI183",
    name: "JAVAD.CK. EDAKKULAM",
    dars: "BAHJATHUL HUDA DARAS EDAKKULAM",
    propgrams: [
      {
        code: "JS2",
        name: "ഹിഫ്‌ള്",
        isStage: 1,
        cat: "J",
        publish: 1,
      },
    ],
  },
  {
    chest: "TGI222",
    name: "UNAIS P",
    dars: "BAYANUL ULOOM DARS MUTTICHIRA",
    propgrams: [
      {
        code: "JS2",
        name: "ഹിഫ്‌ള്",
        isStage: 1,
        cat: "J",
        publish: 1,
      },
    ],
  },
  {
    chest: "TGI399",
    name: "SALMANUL FARIS K",
    dars: "SUBULUSSALAM DARS KOZHIPPURAM",
    propgrams: [
      {
        code: "JS3",
        name: "വാങ്ക്",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "TGI184",
    name: "ASLAM. VADASSERY",
    dars: "BAHJATHUL HUDA DARAS EDAKKULAM",
    propgrams: [
      {
        code: "JS3",
        name: "വാങ്ക്",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "TGI212",
    name: "SINAN KT",
    dars: "BAYANUL ULOOM DARS MUTTICHIRA",
    propgrams: [
      {
        code: "JS4",
        name: "പ്രസംഗം അറബി",
        isStage: 1,
        cat: "J",
      },
      {
        code: "JS10",
        name: "മാപ്പിളപ്പാട്ട്",
        isStage: 1,
        cat: "J",
      },
      {
        code: "JS11",
        name: "മാലപ്പാട്ട്",
        isStage: 1,
        cat: "J",
      },
      {
        code: "JS19",
        name: "അറബി സംഘഗാനം",
        isStage: 1,
        cat: "J",
        isGrp: 1,
      },
    ],
  },
  {
    chest: "TGI110",
    name: "MOHAMMAD AFNAN CHERUMUKKU",
    dars: "AL EAQALU DARS CHEMBRA",
    propgrams: [
      {
        code: "JS4",
        name: "പ്രസംഗം അറബി",
        isStage: 1,
        cat: "J",
      },
      {
        code: "JO26",
        name: "പോസ്റ്റര്‍ ഡിസൈനിംഗ്",
        cat: "J",
      },
    ],
  },
  {
    chest: "TGI116",
    name: "MUHAMMED ASLAM POOKIPARAMBA",
    dars: "AL EAQALU DARS CHEMBRA",
    propgrams: [
      {
        code: "JS5",
        name: "പ്രസംഗം മലയാളം",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "TGI167",
    name: "MUHAMMED AMIL KARATHUR",
    dars: "BAHJATHUL HIKAM DARS KARATHUR",
    propgrams: [
      {
        code: "JS5",
        name: "പ്രസംഗം മലയാളം",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "TGI188",
    name: "MUHAMMAD SINAN. MANGALAPURAM",
    dars: "BAHJATHUL HUDA DARAS EDAKKULAM",
    propgrams: [
      {
        code: "JS6",
        name: "പ്രസംഗം ഉറുദു",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "TGI214",
    name: "MUHAMMED NIHAL C",
    dars: "BAYANUL ULOOM DARS MUTTICHIRA",
    propgrams: [
      {
        code: "JS6",
        name: "പ്രസംഗം ഉറുദു",
        isStage: 1,
        cat: "J",
      },
      {
        code: "JS15",
        name: "മുശാഅറ",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "TGI217",
    name: "JUNAID V",
    dars: "BAYANUL ULOOM DARS MUTTICHIRA",
    propgrams: [
      {
        code: "JS7",
        name: "പ്രസംഗം ഇംഗ്ലീഷ്",
        isStage: 1,
        cat: "J",
      },
      {
        code: "JO26",
        name: "പോസ്റ്റര്‍ ഡിസൈനിംഗ്",
        cat: "J",
      },
    ],
  },
  {
    chest: "TGI186",
    name: "NIZAMUDDIN FAIZAL. KASARGOD",
    dars: "BAHJATHUL HUDA DARAS EDAKKULAM",
    propgrams: [
      {
        code: "JS7",
        name: "പ്രസംഗം ഇംഗ്ലീഷ്",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "TGI206",
    name: "MUHAMMED ADNAN",
    dars: "BAYANUL ULOOM DARS MUTTICHIRA",
    propgrams: [
      {
        code: "JS8",
        name: "ഗ്രന്ഥവായന",
        isStage: 1,
        cat: "J",
      },
      {
        code: "JO23",
        name: "മെമ്മറി ടെസ്റ്റ്",
        cat: "J",
      },
    ],
  },
  {
    chest: "TGI309",
    name: "MOHAMED RASID M KURUMBATHUR",
    dars: "MANSHAUL ULOOM DARS PUTHUPPARAMBA",
    propgrams: [
      {
        code: "JS8",
        name: "ഗ്രന്ഥവായന",
        isStage: 1,
        cat: "J",
      },
      {
        code: "JO24",
        name: "ഖത്തുന്നസ്ഖ്",
        cat: "J",
      },
    ],
  },
  {
    chest: "TGI216",
    name: "NAFIH NK",
    dars: "BAYANUL ULOOM DARS MUTTICHIRA",
    propgrams: [
      {
        code: "JS9",
        name: "ഗാനം അറബി",
        isStage: 1,
        cat: "J",
      },
      {
        code: "JS12",
        name: "ഗാനം ഉറുദു",
        isStage: 1,
        cat: "J",
      },
      {
        code: "JS18",
        name: "മദ്ഹുന്നബി",
        isStage: 1,
        cat: "J",
      },
      {
        code: "JS20",
        name: "മലയാള സമൂഹ ഗാനം",
        isStage: 1,
        cat: "J",
        isGrp: 1,
      },
    ],
  },
  {
    chest: "TGI294",
    name: "MUHAMMAD FAVAS PUKKYOOR",
    dars: "JAMALULLAIL DARS AYYAYA",
    propgrams: [
      {
        code: "JS9",
        name: "ഗാനം അറബി",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "TGI269",
    name: "ABDUL BARI T KARINGAPPARA",
    dars: "DARUL ULOOM DARS KORAD",
    propgrams: [
      {
        code: "JS10",
        name: "മാപ്പിളപ്പാട്ട്",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "TGI179",
    name: "MUZAMMIL K.M MANNARA PARAMPU",
    dars: "BAHJATHUL HUDA DARAS EDAKKULAM",
    propgrams: [
      {
        code: "JS11",
        name: "മാലപ്പാട്ട്",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "TGI325",
    name: "ABDUL BARI PK",
    dars: "MARKAZUL ULAMA DARS APLA",
    propgrams: [
      {
        code: "JS12",
        name: "ഗാനം ഉറുദു",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "TGI342",
    name: "MUHAMMED ZIYAN HARIZ",
    dars: "MARKAZUL ULAMA DARS PALATHINGAL",
    propgrams: [
      {
        code: "JS13",
        name: "കഥ പറച്ചില്‍",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "TGI295",
    name: "MUHAMMAD HISHAM KUNDOOR",
    dars: "JAMALULLAIL DARS AYYAYA",
    propgrams: [
      {
        code: "JS13",
        name: "കഥ പറച്ചില്‍",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "TGI349",
    name: "TWAHA MANSOOR",
    dars: "MARKAZUL ULAMA DARS PALATHINGAL",
    propgrams: [
      {
        code: "JS14",
        name: "ഗദ്യവായന മലയാളം",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "TGI211",
    name: "SAHLAN",
    dars: "BAYANUL ULOOM DARS MUTTICHIRA",
    propgrams: [
      {
        code: "JS14",
        name: "ഗദ്യവായന മലയാളം",
        isStage: 1,
        cat: "J",
      },
      {
        code: "JO24",
        name: "ഖത്തുന്നസ്ഖ്",
        cat: "J",
      },
      {
        code: "JO25",
        name: "കേട്ടെഴുത്ത്",
        cat: "J",
      },
    ],
  },
  {
    chest: "TGI111",
    name: "MUHAMMED UNAIS AK CHEMBRA",
    dars: "AL EAQALU DARS CHEMBRA",
    propgrams: [
      {
        code: "JS15",
        name: "മുശാഅറ",
        isStage: 1,
        cat: "J",
      },
      {
        code: "JO22",
        name: "സുഡോക്കു",
        cat: "J",
      },
    ],
  },
  {
    chest: "TGI219",
    name: "MARVAN PP",
    dars: "BAYANUL ULOOM DARS MUTTICHIRA",
    propgrams: [
      {
        code: "JS16",
        name: "പദപ്പയറ്റ് അറബി",
        isStage: 1,
        cat: "J",
      },
      {
        code: "JO30",
        name: "പ്രശ്‌നോത്തരി",
        cat: "J",
      },
    ],
  },
  {
    chest: "TGI194",
    name: "HABEEBUL RAHMAN VETTATHUR",
    dars: "BAYANUL ULOOM DARS KODINHI",
    propgrams: [
      {
        code: "JS16",
        name: "പദപ്പയറ്റ് അറബി",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "TGI207",
    name: "SINAN VP",
    dars: "BAYANUL ULOOM DARS MUTTICHIRA",
    propgrams: [
      {
        code: "JS17",
        name: "പദപ്പയറ്റ് ഇംഗ്ലീഷ്",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "TGI265",
    name: "MUHAMMED SIDHAN M KALAD",
    dars: "DARUL ULOOM DARS KORAD",
    propgrams: [
      {
        code: "JS17",
        name: "പദപ്പയറ്റ് ഇംഗ്ലീഷ്",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "TGI242",
    name: "MUHAMMED HASEEB V P VANIYANNUR",
    dars: "BAYANUL ULOOM DARS PUTHANTHERU",
    propgrams: [
      {
        code: "JS18",
        name: "മദ്ഹുന്നബി",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "TGI266",
    name: "MUHAMMED NASHID K KALAD",
    dars: "DARUL ULOOM DARS KORAD",
    propgrams: [
      {
        code: "JS19",
        name: "അറബി സംഘഗാനം",
        isStage: 1,
        cat: "J",
        isGrp: 1,
      },
    ],
  },
  {
    chest: "TGI245",
    name: "MOHAMMED RAJIB N PONNANI",
    dars: "BAYANUL ULOOM DARS PUTHANTHERU",
    propgrams: [
      {
        code: "JS20",
        name: "മലയാള സമൂഹ ഗാനം",
        isStage: 1,
        cat: "J",
        isGrp: 1,
      },
    ],
  },
  {
    chest: "TGI220",
    name: "QAMARUSSAMAN",
    dars: "BAYANUL ULOOM DARS MUTTICHIRA",
    propgrams: [
      {
        code: "JO21",
        name: "ചിത്രരചന",
        cat: "J",
      },
    ],
  },
  {
    chest: "TGI230",
    name: "SAINUL ABID T KODAMBUZHA",
    dars: "BAYANUL ULOOM DARS OMACHAPPUZHA",
    propgrams: [
      {
        code: "JO21",
        name: "ചിത്രരചന",
        cat: "J",
      },
    ],
  },
  {
    chest: "TGI218",
    name: "AMJAD",
    dars: "BAYANUL ULOOM DARS MUTTICHIRA",
    propgrams: [
      {
        code: "JO22",
        name: "സുഡോക്കു",
        cat: "J",
      },
    ],
  },
  {
    chest: "TGI291",
    name: "FALLULUL ABID KAKKAD",
    dars: "JAMALULLAIL DARS AYYAYA",
    propgrams: [
      {
        code: "JO23",
        name: "മെമ്മറി ടെസ്റ്റ്",
        cat: "J",
      },
    ],
  },
  {
    chest: "TGI427",
    name: "MUHAMMED THANVEER",
    dars: "TTSS KUNDUKULAM",
    propgrams: [
      {
        code: "JO25",
        name: "കേട്ടെഴുത്ത്",
        cat: "J",
      },
    ],
  },
  {
    chest: "TGI204",
    name: "ABDULLA ANGADIPPURAM",
    dars: "BAYANUL ULOOM DARS KODINHI",
    propgrams: [
      {
        code: "JO27",
        name: "നിഘണ്ടു നിര്‍മ്മാണം",
        cat: "J",
      },
    ],
  },
  {
    chest: "TGI213",
    name: "MUHYIDHEEN KUTTY",
    dars: "BAYANUL ULOOM DARS MUTTICHIRA",
    propgrams: [
      {
        code: "JO28",
        name: "തശ്കീല്‍",
        cat: "J",
      },
    ],
  },
  {
    chest: "TGI401",
    name: "MOHAMMED DHANISH T",
    dars: "SUBULUSSALAM DARS KOZHIPPURAM",
    propgrams: [
      {
        code: "JO29",
        name: "മലയാള പ്രബന്ധം",
        cat: "J",
      },
    ],
  },
  {
    chest: "TGI185",
    name: "MUHAMMAD SHIMLAL.C. KOORIYAD",
    dars: "BAHJATHUL HUDA DARAS EDAKKULAM",
    propgrams: [
      {
        code: "JO29",
        name: "മലയാള പ്രബന്ധം",
        cat: "J",
      },
    ],
  },
  {
    chest: "TGI417",
    name: "MUHAMMAD MUZAMMIL TP PANDIKASHALA",
    dars: "THAMREENU THWALABA ANANTHAVOOR",
    propgrams: [
      {
        code: "JO30",
        name: "പ്രശ്‌നോത്തരി",
        cat: "J",
      },
    ],
  },
  {
    chest: "TGI587",
    name: "MUHAMMED RASHIQ P",
    dars: "BAYANUL ULOOM DARS MUTTICHIRA",
    propgrams: [
      {
        code: "SS1",
        name: "ഖിറാഅത്ത്",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "TGI620",
    name: "MUHAMMED SWALIH V KANJIRAKKOL",
    dars: "DARUL ULOOM DARS KORAD",
    propgrams: [
      {
        code: "SS1",
        name: "ഖിറാഅത്ത്",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "TGI697",
    name: "ABDUL GHANI",
    dars: "MARKAZUL ULAMA DARS PANAMBRA",
    propgrams: [
      {
        code: "SS2",
        name: "ഹിഫ്‌ള്",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "TGI557",
    name: "MUHAMMAD MUZZAMMIL .MANGALAPURAM",
    dars: "BAHJATHUL HUDA DARAS EDAKKULAM",
    propgrams: [
      {
        code: "SS2",
        name: "ഹിഫ്‌ള്",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SS13",
        name: "മുശാഅറ",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "TGI593",
    name: "SAHAL KOLAPPURAM",
    dars: "BAYANUL ULOOM DARS MUTTICHIRA",
    propgrams: [
      {
        code: "SS3",
        name: "വാങ്ക്",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "TGI781",
    name: "MUHAMMED",
    dars: "ATHAVANAD DARS",
    propgrams: [
      {
        code: "SS3",
        name: "വാങ്ക്",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "TGI549",
    name: "AJMAL K.A CHIAMANANGAD",
    dars: "BAHJATHUL HUDA DARAS EDAKKULAM",
    propgrams: [
      {
        code: "SS4",
        name: "ക്ലാസ് അവതരണം",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "TGI588",
    name: "MUHAMMED SHAN N",
    dars: "BAYANUL ULOOM DARS MUTTICHIRA",
    propgrams: [
      {
        code: "SS4",
        name: "ക്ലാസ് അവതരണം",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SS18",
        name: "മാഷപ്പ് മാപ്പിളപ്പാട്ട്",
        isStage: 1,
        cat: "S",
        isGrp: 1,
      },
      {
        code: "SS19",
        name: "ഖസ്വീദ പാരായണം",
        isStage: 1,
        cat: "S",
        isGrp: 1,
      },
      {
        code: "SO29",
        name: "പ്രബന്ധം ഇംഗ്ലീഷ്",
        cat: "S",
      },
      {
        code: "SO39",
        name: "പ്രശ്‌നോത്തരി",
        cat: "S",
      },
    ],
  },
  {
    chest: "TGI581",
    name: "HASHIM SHAN PK",
    dars: "BAYANUL ULOOM DARS MUTTICHIRA",
    propgrams: [
      {
        code: "SS5",
        name: "വഅ്‌ള്",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SS8",
        name: "പ്രസംഗം ഉറുദു",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "TGI553",
    name: "MASHHOOD A PONNANI",
    dars: "BAHJATHUL HUDA DARAS EDAKKULAM",
    propgrams: [
      {
        code: "SS5",
        name: "വഅ്‌ള്",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "TGI583",
    name: "RISWAN YASIL M",
    dars: "BAYANUL ULOOM DARS MUTTICHIRA",
    propgrams: [
      {
        code: "SS6",
        name: "പ്രസംഗം മലയാളം",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SS12",
        name: "കവിതാലാപനം മലയാളം",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "TGI509",
    name: "ALTHAMEESH KOZHICHENA",
    dars: "AL EAQALU DARS CHEMBRA",
    propgrams: [
      {
        code: "SS6",
        name: "പ്രസംഗം മലയാളം",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "TGI579",
    name: "SHAMEEM P",
    dars: "BAYANUL ULOOM DARS MUTTICHIRA",
    propgrams: [
      {
        code: "SS7",
        name: "പ്രസംഗം അറബി",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "TGI554",
    name: "HAFIZ MUHAMMED NABEEH .M PURANG",
    dars: "BAHJATHUL HUDA DARAS EDAKKULAM",
    propgrams: [
      {
        code: "SS7",
        name: "പ്രസംഗം അറബി",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "TGI551",
    name: "MOHAMMED SHAHDHEEN MANGALAPURAM",
    dars: "BAHJATHUL HUDA DARAS EDAKKULAM",
    propgrams: [
      {
        code: "SS8",
        name: "പ്രസംഗം ഉറുദു",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "TGI555",
    name: "MUHAMMED",
    dars: "BAHJATHUL HUDA DARAS EDAKKULAM",
    propgrams: [
      {
        code: "SS9",
        name: "പ്രസംഗം ഇംഗ്ലീഷ്",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "TGI577",
    name: "JABIR V",
    dars: "BAYANUL ULOOM DARS MUTTICHIRA",
    propgrams: [
      {
        code: "SS9",
        name: "പ്രസംഗം ഇംഗ്ലീഷ്",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SO21",
        name: "അറബിക് കാലിഗ്രഫി",
        cat: "S",
      },
      {
        code: "SO24",
        name: "ഖത്തുറുഖഈ",
        cat: "S",
      },
    ],
  },
  {
    chest: "TGI594",
    name: "AJMAL VV POOKKOTTUR",
    dars: "BAYANUL ULOOM DARS OMACHAPPUZHA",
    propgrams: [
      {
        code: "SS10",
        name: "ഖുഥ്ബ",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SO34",
        name: "കവിതാ രചന",
        cat: "S",
      },
    ],
  },
  {
    chest: "TGI547",
    name: "RAHEES PUTHANATHANI",
    dars: "BAHJATHUL HUDA DARAS EDAKKULAM",
    propgrams: [
      {
        code: "SS10",
        name: "ഖുഥ്ബ",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SO37",
        name: "പദ സമ്പാദനം",
        cat: "S",
      },
    ],
  },
  {
    chest: "TGI700",
    name: "RAFI DEVATHIYAL",
    dars: "MARKAZUL ULAMA DARS PANAMBRA",
    propgrams: [
      {
        code: "SS11",
        name: "ഗ്രന്ഥ വായന",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SO39",
        name: "പ്രശ്‌നോത്തരി",
        cat: "S",
      },
    ],
  },
  {
    chest: "TGI671",
    name: "ABDUL BASITH P PALAKKAL",
    dars: "MANSHAUL ULOOM KUNNATHPARAMB",
    propgrams: [
      {
        code: "SS11",
        name: "ഗ്രന്ഥ വായന",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "TGI770",
    name: "MUHAMMED RIYAS,VAILATHOOR",
    dars: "VASILIYAH DARS, KUNDUKULAM",
    propgrams: [
      {
        code: "SS12",
        name: "കവിതാലാപനം മലയാളം",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "TGI586",
    name: "ABDULLA UVAIS P",
    dars: "BAYANUL ULOOM DARS MUTTICHIRA",
    propgrams: [
      {
        code: "SS13",
        name: "മുശാഅറ",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "TGI739",
    name: "MUHAMMED ANEES PK",
    dars: "SUBULUSSALAM DARS KOZHIPPURAM",
    propgrams: [
      {
        code: "SS14",
        name: "അനൗണ്‍സ്‌മെന്റ്",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SS16",
        name: "നിമിഷപ്രസംഗം",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "TGI610",
    name: "MUHAMMED SAFVAN V V PONNANI",
    dars: "BAYANUL ULOOM DARS PUTHANTHERU",
    propgrams: [
      {
        code: "SS14",
        name: "അനൗണ്‍സ്‌മെന്റ്",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SS17",
        name: "പാടിപ്പറയല്‍",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "TGI514",
    name: "MMUHAMMED FADHIL",
    dars: "AL EAQALU DARS CHEMBRA",
    propgrams: [
      {
        code: "SS15",
        name: "പ്രബന്ധാവതരണം",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SO30",
        name: "പ്രബന്ധം മലയാളം",
        cat: "S",
      },
    ],
  },
  {
    chest: "TGI591",
    name: "MUHAMMED RASHID E",
    dars: "BAYANUL ULOOM DARS MUTTICHIRA",
    propgrams: [
      {
        code: "SS15",
        name: "പ്രബന്ധാവതരണം",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SS20",
        name: "പ്രോഗ്രാം സെറ്റിംഗ്",
        isStage: 1,
        cat: "S",
        isGrp: 1,
      },
      {
        code: "SO30",
        name: "പ്രബന്ധം മലയാളം",
        cat: "S",
      },
      {
        code: "SO33",
        name: "മുദ്രവാക്യ രചന",
        cat: "S",
      },
      {
        code: "SO36",
        name: "അടിക്കുറിപ്പ്",
        cat: "S",
      },
      {
        code: "SO40",
        name: "പത്രനിര്‍മാണം",
        cat: "S",
        isGrp: 1,
      },
    ],
  },
  {
    chest: "TGI576",
    name: "AJMAL C",
    dars: "BAYANUL ULOOM DARS MUTTICHIRA",
    propgrams: [
      {
        code: "SS16",
        name: "നിമിഷപ്രസംഗം",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SO26",
        name: "വിവര്‍ത്തനം",
        cat: "S",
      },
      {
        code: "SO35",
        name: "നിഘണ്ടു നിര്‍മ്മാണം",
        cat: "S",
      },
    ],
  },
  {
    chest: "TGI592",
    name: "UVAIS PC",
    dars: "BAYANUL ULOOM DARS MUTTICHIRA",
    propgrams: [
      {
        code: "SS17",
        name: "പാടിപ്പറയല്‍",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "TGI548",
    name: "SHAHID MUNEER.K S CHIRAMENAGAD",
    dars: "BAHJATHUL HUDA DARAS EDAKKULAM",
    propgrams: [
      {
        code: "SS18",
        name: "മാഷപ്പ് മാപ്പിളപ്പാട്ട്",
        isStage: 1,
        cat: "S",
        isGrp: 1,
      },
    ],
  },
  {
    chest: "TGI696",
    name: "MUHSIN KOTTAKKAL",
    dars: "MARKAZUL ULAMA DARS PANAMBRA",
    propgrams: [
      {
        code: "SS19",
        name: "ഖസ്വീദ പാരായണം",
        isStage: 1,
        cat: "S",
        isGrp: 1,
      },
    ],
  },
  {
    chest: "TGI550",
    name: "MURSHID K.M MANNARA PARAMPU",
    dars: "BAHJATHUL HUDA DARAS EDAKKULAM",
    propgrams: [
      {
        code: "SS20",
        name: "പ്രോഗ്രാം സെറ്റിംഗ്",
        isStage: 1,
        cat: "S",
        isGrp: 1,
      },
      {
        code: "SO28",
        name: "പ്രബന്ധം അറബി",
        cat: "S",
      },
    ],
  },
  {
    chest: "TGI552",
    name: "MUHAMMED QASIM M.I KOZHIKKARA",
    dars: "BAHJATHUL HUDA DARAS EDAKKULAM",
    propgrams: [
      {
        code: "SO21",
        name: "അറബിക് കാലിഗ്രഫി",
        cat: "S",
      },
    ],
  },
  {
    chest: "TGI578",
    name: "ABDUL MAJID P",
    dars: "BAYANUL ULOOM DARS MUTTICHIRA",
    propgrams: [
      {
        code: "SO22",
        name: "പോസ്റ്റര്‍ ഡിസൈനിംഗ്",
        cat: "S",
      },
    ],
  },
  {
    chest: "TGI580",
    name: "SHANAVAS",
    dars: "BAYANUL ULOOM DARS MUTTICHIRA",
    propgrams: [
      {
        code: "SO23",
        name: "ഖത്തുന്നസ്ഖ്",
        cat: "S",
      },
    ],
  },
  {
    chest: "TGI775",
    name: "SAYYID AJMAL THANGAL",
    dars: "DARUL HIDAYA DARS ULLANAM",
    propgrams: [
      {
        code: "SO23",
        name: "ഖത്തുന്നസ്ഖ്",
        cat: "S",
      },
    ],
  },
  {
    chest: "TGI567",
    name: "MUHAMMED SHANOOB VETTATHUR",
    dars: "BAYANUL ULOOM DARS KODINHI",
    propgrams: [
      {
        code: "SO25",
        name: "വിവര്‍ത്തനം",
        cat: "S",
      },
      {
        code: "SO33",
        name: "മുദ്രവാക്യ രചന",
        cat: "S",
      },
    ],
  },
  {
    chest: "TGI585",
    name: "ZAINUL ABID",
    dars: "BAYANUL ULOOM DARS MUTTICHIRA",
    propgrams: [
      {
        code: "SO25",
        name: "വിവര്‍ത്തനം",
        cat: "S",
      },
      {
        code: "SO27",
        name: "വിവര്‍ത്തനം",
        cat: "S",
      },
      {
        code: "SO34",
        name: "കവിതാ രചന",
        cat: "S",
      },
    ],
  },
  {
    chest: "TGI570",
    name: "ABOOBAKKER SIDHIQUE BHEEMANADU",
    dars: "BAYANUL ULOOM DARS KODINHI",
    propgrams: [
      {
        code: "SO26",
        name: "വിവര്‍ത്തനം",
        cat: "S",
      },
    ],
  },
  {
    chest: "TGI725",
    name: "MUHAMMED NISHAD.K",
    dars: "MUNAVVIRUL ISLAM DARS CHERUSHOLA",
    propgrams: [
      {
        code: "SO27",
        name: "വിവര്‍ത്തനം",
        cat: "S",
      },
    ],
  },
  {
    chest: "TGI695",
    name: "RINSHAD MANJERI",
    dars: "MARKAZUL ULAMA DARS PANAMBRA",
    propgrams: [
      {
        code: "SO28",
        name: "പ്രബന്ധം അറബി",
        cat: "S",
      },
    ],
  },
  {
    chest: "TGI768",
    name: "SAEED MUHAMMED",
    dars: "VASILIYAH DARS, KUNDUKULAM",
    propgrams: [
      {
        code: "SO29",
        name: "പ്രബന്ധം ഇംഗ്ലീഷ്",
        cat: "S",
      },
    ],
  },
  {
    chest: "TGI556",
    name: "MUHAMMED SAHLU .M.T CHIRAPPALAM",
    dars: "BAHJATHUL HUDA DARAS EDAKKULAM",
    propgrams: [
      {
        code: "SO31",
        name: "റിപ്പോര്‍ട്ടിംഗ്",
        cat: "S",
      },
    ],
  },
  {
    chest: "TGI735",
    name: "MOHAMMED SHAFEEL KK",
    dars: "SUBULUSSALAM DARS KOZHIPPURAM",
    propgrams: [
      {
        code: "SO32",
        name: "തലവാചക നിര്‍മ്മാണം",
        cat: "S",
      },
    ],
  },
  {
    chest: "TGI590",
    name: "NUFAIH C",
    dars: "BAYANUL ULOOM DARS MUTTICHIRA",
    propgrams: [
      {
        code: "SO32",
        name: "തലവാചക നിര്‍മ്മാണം",
        cat: "S",
      },
    ],
  },
  {
    chest: "TGI673",
    name: "FARHAN.T CHELARI",
    dars: "MANSHAUL ULOOM KUNNATHPARAMB",
    propgrams: [
      {
        code: "SO35",
        name: "നിഘണ്ടു നിര്‍മ്മാണം",
        cat: "S",
      },
    ],
  },
  {
    chest: "TGI728",
    name: "MOHAMMED JUNAID MUDIKKODE",
    dars: "NOORU THWALABA DARS EDARIKODE",
    propgrams: [
      {
        code: "SO36",
        name: "അടിക്കുറിപ്പ്",
        cat: "S",
      },
    ],
  },
  {
    chest: "TGI584",
    name: "MAHMOOD P",
    dars: "BAYANUL ULOOM DARS MUTTICHIRA",
    propgrams: [
      {
        code: "SO37",
        name: "പദ സമ്പാദനം",
        cat: "S",
      },
    ],
  },
  {
    chest: "TGI582",
    name: "MUHAMMED NABEEL",
    dars: "BAYANUL ULOOM DARS MUTTICHIRA",
    propgrams: [
      {
        code: "SO38",
        name: "തശ്കീല്‍",
        cat: "S",
      },
    ],
  },
  {
    chest: "VGA153",
    name: "HAFIZ MUHAMMED SABITH MN",
    dars: "MARKAZUL ULAMA DARA KONOMPARA",
    propgrams: [
      {
        code: "JS1",
        name: "ഖിറാഅത്ത്",
        isStage: 1,
        cat: "J",
        publish: 1,
      },
      {
        code: "JS18",
        name: "മദ്ഹുന്നബി",
        isStage: 1,
        cat: "J",
      },
      {
        code: "JS19",
        name: "അറബി സംഘഗാനം",
        isStage: 1,
        cat: "J",
        isGrp: 1,
      },
      {
        code: "JS20",
        name: "മലയാള സമൂഹ ഗാനം",
        isStage: 1,
        cat: "J",
        isGrp: 1,
      },
    ],
  },
  {
    chest: "VGA124",
    name: "MUHAMMED NASEEF N KARUVARAKUNDU",
    dars: "ALATHURPADI DARS",
    propgrams: [
      {
        code: "JS1",
        name: "ഖിറാഅത്ത്",
        isStage: 1,
        cat: "J",
        publish: 1,
      },
      {
        code: "JS3",
        name: "വാങ്ക്",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "VGA108",
    name: "NASEEF KP KUNNAPALLY",
    dars: "ALATHURPADI DARS",
    propgrams: [
      {
        code: "JS2",
        name: "ഹിഫ്‌ള്",
        isStage: 1,
        cat: "J",
        publish: 1,
      },
      {
        code: "JS4",
        name: "പ്രസംഗം അറബി",
        isStage: 1,
        cat: "J",
      },
      {
        code: "JS5",
        name: "പ്രസംഗം മലയാളം",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "VGA135",
    name: "MUHAMMED ASLAM A PANAKKAD",
    dars: "DARAJATHUL ULOOM DARS CHEPPYALAM",
    propgrams: [
      {
        code: "JS2",
        name: "ഹിഫ്‌ള്",
        isStage: 1,
        cat: "J",
        publish: 1,
      },
    ],
  },
  {
    chest: "VGA139",
    name: "HAFIZ ADHIL SHAMEEL VELLILA",
    dars: "FATH'HUNNOR DARS IRUMBUZHI",
    propgrams: [
      {
        code: "JS3",
        name: "വാങ്ക്",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "VGA147",
    name: "HAFIZ MUHAMMED ASLAM PERINTHALMANNA THAZHEKODE",
    dars: "FATH'HUNNOR DARS IRUMBUZHI",
    propgrams: [
      {
        code: "JS4",
        name: "പ്രസംഗം അറബി",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "VGA163",
    name: "MUHAMMED RABEEH T",
    dars: "MARKAZUL ULAMA DARA KONOMPARA",
    propgrams: [
      {
        code: "JS5",
        name: "പ്രസംഗം മലയാളം",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "VGA114",
    name: "MUHAMMED SHAHAD AM CHUNKATHARA",
    dars: "ALATHURPADI DARS",
    propgrams: [
      {
        code: "JS6",
        name: "പ്രസംഗം ഉറുദു",
        isStage: 1,
        cat: "J",
      },
      {
        code: "JS16",
        name: "പദപ്പയറ്റ് അറബി",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "VGA240",
    name: "MUHAMMED AJMAL TP",
    dars: "BAYANUL ULOOM DARS PADAPPARAMB",
    propgrams: [
      {
        code: "JS6",
        name: "പ്രസംഗം ഉറുദു",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "VGA107",
    name: "MUHAMMED SWALIH NENMINI",
    dars: "ALATHURPADI DARS",
    propgrams: [
      {
        code: "JS7",
        name: "പ്രസംഗം ഇംഗ്ലീഷ്",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "VGA141",
    name: "MUHAMMED AJBAR ANGADIPURAM",
    dars: "FATH'HUNNOR DARS IRUMBUZHI",
    propgrams: [
      {
        code: "JS7",
        name: "പ്രസംഗം ഇംഗ്ലീഷ്",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "VGA227",
    name: "AJMAL OZHUKOOR",
    dars: "MARKAZUL ULAMA DARS MUTHIRIPARAMBA",
    propgrams: [
      {
        code: "JS8",
        name: "ഗ്രന്ഥവായന",
        isStage: 1,
        cat: "J",
      },
      {
        code: "JO28",
        name: "തശ്കീല്‍",
        cat: "J",
      },
    ],
  },
  {
    chest: "VGA110",
    name: "MUHAMMED SHANIB M MANNARKAD",
    dars: "ALATHURPADI DARS",
    propgrams: [
      {
        code: "JS8",
        name: "ഗ്രന്ഥവായന",
        isStage: 1,
        cat: "J",
      },
      {
        code: "JO28",
        name: "തശ്കീല്‍",
        cat: "J",
      },
      {
        code: "JO30",
        name: "പ്രശ്‌നോത്തരി",
        cat: "J",
      },
    ],
  },
  {
    chest: "VGA111",
    name: "MUHAMMED HAMDAN P KLARIMOOCHIKKAL",
    dars: "ALATHURPADI DARS",
    propgrams: [
      {
        code: "JS9",
        name: "ഗാനം അറബി",
        isStage: 1,
        cat: "J",
      },
      {
        code: "JS14",
        name: "ഗദ്യവായന മലയാളം",
        isStage: 1,
        cat: "J",
      },
      {
        code: "JS19",
        name: "അറബി സംഘഗാനം",
        isStage: 1,
        cat: "J",
        isGrp: 1,
      },
    ],
  },
  {
    chest: "VGA314",
    name: "HAFIZ MUHAMMED NAZIM TC THALACHERI",
    dars: "ISHAATHUSUNNA DARS PULLARA",
    propgrams: [
      {
        code: "JS9",
        name: "ഗാനം അറബി",
        isStage: 1,
        cat: "J",
      },
      {
        code: "JO23",
        name: "മെമ്മറി ടെസ്റ്റ്",
        cat: "J",
      },
    ],
  },
  {
    chest: "VGA109",
    name: "MINHAJ M THIRUVIZHAMKUNNU",
    dars: "ALATHURPADI DARS",
    propgrams: [
      {
        code: "JS10",
        name: "മാപ്പിളപ്പാട്ട്",
        isStage: 1,
        cat: "J",
      },
      {
        code: "JS12",
        name: "ഗാനം ഉറുദു",
        isStage: 1,
        cat: "J",
      },
      {
        code: "JS20",
        name: "മലയാള സമൂഹ ഗാനം",
        isStage: 1,
        cat: "J",
        isGrp: 1,
      },
    ],
  },
  {
    chest: "VGA287",
    name: "MIDLAL KOYIKODE",
    dars: "SIRAJUL ULAMA POOKALATHOOR",
    propgrams: [
      {
        code: "JS10",
        name: "മാപ്പിളപ്പാട്ട്",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "VGA112",
    name: "SHAMMAS PP THAMARSHERY",
    dars: "ALATHURPADI DARS",
    propgrams: [
      {
        code: "JS11",
        name: "മാലപ്പാട്ട്",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "VGA272",
    name: "ASHIQ RASOOL,KARINKALLATHANI",
    dars: "MANSHAUL ULOOM DARS PATTARKADAVU",
    propgrams: [
      {
        code: "JS11",
        name: "മാലപ്പാട്ട്",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "VGA325",
    name: "MUHAMMAD SHAFI P PAYYANAD",
    dars: "JAWHARATHUL ULOOM VALAMANGALAM",
    propgrams: [
      {
        code: "JS12",
        name: "ഗാനം ഉറുദു",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "VGA113",
    name: "MUHAMMED SHAHID V MANNARKKAD",
    dars: "ALATHURPADI DARS",
    propgrams: [
      {
        code: "JS13",
        name: "കഥ പറച്ചില്‍",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "VGA134",
    name: "ARSHAD AK",
    dars: "DARAJATHUL ULOOM DARS CHEPPYALAM",
    propgrams: [
      {
        code: "JS13",
        name: "കഥ പറച്ചില്‍",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "VGA144",
    name: "HAFIZ MUHAMMED ANSIL KARAKKUNNU",
    dars: "FATH'HUNNOR DARS IRUMBUZHI",
    propgrams: [
      {
        code: "JS14",
        name: "ഗദ്യവായന മലയാളം",
        isStage: 1,
        cat: "J",
      },
      {
        code: "JO30",
        name: "പ്രശ്‌നോത്തരി",
        cat: "J",
      },
    ],
  },
  {
    chest: "VGA118",
    name: "MUHAMMED MIDLAJK KIZHATTUR",
    dars: "ALATHURPADI DARS",
    propgrams: [
      {
        code: "JS15",
        name: "മുശാഅറ",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "VGA140",
    name: "MUHAMMED SWALIH PANAGAGARA",
    dars: "FATH'HUNNOR DARS IRUMBUZHI",
    propgrams: [
      {
        code: "JS15",
        name: "മുശാഅറ",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "VGA151",
    name: "MUHAMMED IHSAN MELATTUR AKKARAPPURAM",
    dars: "FATH'HUNNOR DARS IRUMBUZHI",
    propgrams: [
      {
        code: "JS16",
        name: "പദപ്പയറ്റ് അറബി",
        isStage: 1,
        cat: "J",
      },
      {
        code: "JO27",
        name: "നിഘണ്ടു നിര്‍മ്മാണം",
        cat: "J",
      },
    ],
  },
  {
    chest: "VGA115",
    name: "SAYYID ABDULLAH HASHIM P KUTTIPURAM",
    dars: "ALATHURPADI DARS",
    propgrams: [
      {
        code: "JS17",
        name: "പദപ്പയറ്റ് ഇംഗ്ലീഷ്",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "VGA149",
    name: "MUHAMMED SINANKORAD",
    dars: "FATH'HUNNOR DARS IRUMBUZHI",
    propgrams: [
      {
        code: "JS17",
        name: "പദപ്പയറ്റ് ഇംഗ്ലീഷ്",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "VGA146",
    name: "MUHAMMED FARHAN MALAPPURAM PANG",
    dars: "FATH'HUNNOR DARS IRUMBUZHI",
    propgrams: [
      {
        code: "JS18",
        name: "മദ്ഹുന്നബി",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "VGA152",
    name: "HAFIZ ABDULLAHPANAGAGARA",
    dars: "FATH'HUNNOR DARS IRUMBUZHI",
    propgrams: [
      {
        code: "JO21",
        name: "ചിത്രരചന",
        cat: "J",
      },
    ],
  },
  {
    chest: "VGA117",
    name: "MUHAMMED SHAHID K PONMALA",
    dars: "ALATHURPADI DARS",
    propgrams: [
      {
        code: "JO21",
        name: "ചിത്രരചന",
        cat: "J",
      },
      {
        code: "JO26",
        name: "പോസ്റ്റര്‍ ഡിസൈനിംഗ്",
        cat: "J",
      },
    ],
  },
  {
    chest: "VGA320",
    name: "SAYYED THAHA AQEEL, MOONNAKKAL",
    dars: "THODUKUTHUPARAMB DARS",
    propgrams: [
      {
        code: "JO22",
        name: "സുഡോക്കു",
        cat: "J",
      },
    ],
  },
  {
    chest: "VGA169",
    name: "MUHAMMAD SUFYAN",
    dars: "THAMREENU THWALABA KUZHICHENA",
    propgrams: [
      {
        code: "JO22",
        name: "സുഡോക്കു",
        cat: "J",
      },
    ],
  },
  {
    chest: "VGA184",
    name: "MUHAMMAD NAJAH V",
    dars: "THAMREENU TWALABA MONGAM DARS ASSOCIATION",
    propgrams: [
      {
        code: "JO23",
        name: "മെമ്മറി ടെസ്റ്റ്",
        cat: "J",
      },
      {
        code: "JO25",
        name: "കേട്ടെഴുത്ത്",
        cat: "J",
      },
    ],
  },
  {
    chest: "VGA119",
    name: "MUHAMMED SHAHEER O CHERUKARA",
    dars: "ALATHURPADI DARS",
    propgrams: [
      {
        code: "JO24",
        name: "ഖത്തുന്നസ്ഖ്",
        cat: "J",
      },
    ],
  },
  {
    chest: "VGA120",
    name: "MUHAMMED SIYAD P THAMARASSERY",
    dars: "ALATHURPADI DARS",
    propgrams: [
      {
        code: "JO25",
        name: "കേട്ടെഴുത്ത്",
        cat: "J",
      },
    ],
  },
  {
    chest: "VGA223",
    name: "SHAHUL PANDIKKAD",
    dars: "MARKAZUL ULAMA DARS MUTHIRIPARAMBA",
    propgrams: [
      {
        code: "JO26",
        name: "പോസ്റ്റര്‍ ഡിസൈനിംഗ്",
        cat: "J",
      },
    ],
  },
  {
    chest: "VGA122",
    name: "MUHAMMED SAHAL C KUNNAKKAVU",
    dars: "ALATHURPADI DARS",
    propgrams: [
      {
        code: "JO27",
        name: "നിഘണ്ടു നിര്‍മ്മാണം",
        cat: "J",
      },
    ],
  },
  {
    chest: "VGA123",
    name: "MUHAMMAD HASHIR E MARAYAMANGALAM",
    dars: "ALATHURPADI DARS",
    propgrams: [
      {
        code: "JO29",
        name: "മലയാള പ്രബന്ധം",
        cat: "J",
      },
    ],
  },
  {
    chest: "VGA329",
    name: "MUHAMMAD JAREER A KEEZHATTUR",
    dars: "JAWHARATHUL ULOOM VALAMANGALAM",
    propgrams: [
      {
        code: "JO29",
        name: "മലയാള പ്രബന്ധം",
        cat: "J",
      },
    ],
  },
  {
    chest: "VGA512",
    name: "HAFIZ THAJUDHEEN",
    dars: "ALATHURPADI DARS",
    propgrams: [{}, {}, {}],
  },
  {
    chest: "VGA552",
    name: "ABDURAHEEM KUNNATH VALLUVAMBRAM",
    dars: "FATH'HUNNOR DARS IRUMBUZHI",
    propgrams: [{}],
  },
  {
    chest: "VGA547",
    name: "HAFIZ MUHAMMED RASHIDMELATTUR",
    dars: "FATH'HUNNOR DARS IRUMBUZHI",
    propgrams: [{}],
  },
  {
    chest: "VGA513",
    name: "ABDUL MUQSITH THALASSERY",
    dars: "ALATHURPADI DARS",
    propgrams: [{}],
  },
  {
    chest: "VGA698",
    name: "HAFIZ ABDUL HAFEEZ BALUSHERI",
    dars: "ISHAATHUSUNNA DARS PULLARA",
    propgrams: [{}],
  },
  {
    chest: "VGA514",
    name: "ASHRAF KK MELMURI 27",
    dars: "ALATHURPADI DARS",
    propgrams: [{}],
  },
  {
    chest: "VGA503",
    name: "FAVAS KARUVARAKKUND",
    dars: "IRSHAADU THWALABA DARAS ACHANAMBALAM",
    propgrams: [
      {},
      {
        code: "SO26",
        name: "വിവര്‍ത്തനം",
        cat: "S",
      },
    ],
  },
  {
    chest: "VGA527",
    name: "AHMED SAFWAN CHITHARI",
    dars: "ALATHURPADI DARS",
    propgrams: [{}, {}],
  },
  {
    chest: "VGA620",
    name: "AJMAL MALAPPURAM",
    dars: "MARKAZUL ULAMA DARS MUTHIRIPARAMBA",
    propgrams: [{}],
  },
  {
    chest: "VGA515",
    name: "MUHSIN C NARUKODE",
    dars: "ALATHURPADI DARS",
    propgrams: [
      {},
      {},
      {},
      {
        code: "SO33",
        name: "മുദ്രവാക്യ രചന",
        cat: "S",
      },
    ],
  },
  {
    chest: "VGA502",
    name: "MUHAMMED SWALIH VENGARA",
    dars: "IRSHAADU THWALABA DARAS ACHANAMBALAM",
    propgrams: [{}, {}],
  },
  {
    chest: "VGA516",
    name: "RASHID HUSSAIN KANYAKUMARI",
    dars: "ALATHURPADI DARS",
    propgrams: [
      {},
      {
        code: "SO27",
        name: "വിവര്‍ത്തനം",
        cat: "S",
      },
      {
        code: "SO38",
        name: "തശ്കീല്‍",
        cat: "S",
      },
    ],
  },
  {
    chest: "VGA563",
    name: "HAFIZ THAMEEM ASHRAF",
    dars: "MARKAZUL ULAMA DARA KONOMPARA",
    propgrams: [{}],
  },
  {
    chest: "VGA517",
    name: "MUHAMMED MUSTHAFA CN THIRUVALLUR",
    dars: "ALATHURPADI DARS",
    propgrams: [{}],
  },
  {
    chest: "VGA562",
    name: "AHMED NAJAH",
    dars: "MARKAZUL ULAMA DARA KONOMPARA",
    propgrams: [{}],
  },
  {
    chest: "VGA528",
    name: "IRFAN PP KARIPPAMANNA",
    dars: "ALATHURPADI DARS",
    propgrams: [{}, {}],
  },
  {
    chest: "VGA558",
    name: "HAFIZ MUQTHAR",
    dars: "MARKAZUL ULAMA DARA KONOMPARA",
    propgrams: [{}, {}],
  },
  {
    chest: "VGA518",
    name: "MISBAHUDHEEN P KARAKUNNU",
    dars: "ALATHURPADI DARS",
    propgrams: [
      {},
      {},
      {
        code: "SO25",
        name: "വിവര്‍ത്തനം",
        cat: "S",
      },
      {
        code: "SO28",
        name: "പ്രബന്ധം അറബി",
        cat: "S",
      },
      {
        code: "SO34",
        name: "കവിതാ രചന",
        cat: "S",
      },
      {
        code: "SO40",
        name: "പത്രനിര്‍മാണം",
        cat: "S",
        isGrp: 1,
      },
    ],
  },
  {
    chest: "VGA631",
    name: "SHAHSOOR MUHAMMED CHALIYAM",
    dars: "DARUL HIDAYA DARS OZHUKUR",
    propgrams: [{}],
  },
  {
    chest: "VGA519",
    name: "MUHAMMED BISHR AMBALAKKADAV",
    dars: "ALATHURPADI DARS",
    propgrams: [
      {},
      {
        code: "SO37",
        name: "പദ സമ്പാദനം",
        cat: "S",
      },
    ],
  },
  {
    chest: "VGA525",
    name: "MURSHID HASSAN Z KANYAKUMARI",
    dars: "ALATHURPADI DARS",
    propgrams: [{}],
  },
  {
    chest: "VGA704",
    name: "RAZIL T PUZHAKKATTIRI",
    dars: "ISHAATHUSUNNA DARS PULLARA",
    propgrams: [{}],
  },
  {
    chest: "VGA696",
    name: "SHABEEB RAHMAN AIKARAPPADI",
    dars: "ISHAATHUSUNNA DARS PULLARA",
    propgrams: [{}],
  },
  {
    chest: "VGA611",
    name: "MUHAMMED JASIL PK, OMANOOR",
    dars: "MARKAZUL ULAMA DARS MORAYUR",
    propgrams: [{}],
  },
  {
    chest: "VGA628",
    name: "RASHID KARUVARAKUNDU",
    dars: "MARKAZUL ULAMA DARS MUTHIRIPARAMBA",
    propgrams: [{}],
  },
  {
    chest: "VGA561",
    name: "HAFIZ SWALIH KUNNAMKULAM",
    dars: "MARKAZUL ULAMA DARA KONOMPARA",
    propgrams: [{}, {}],
  },
  {
    chest: "VGA520",
    name: "MUHAMMED FAYIZ TM KALIKAVU",
    dars: "ALATHURPADI DARS",
    propgrams: [{}, {}],
  },
  {
    chest: "VGA557",
    name: "SHAHUL KHAN",
    dars: "MARKAZUL ULAMA DARA KONOMPARA",
    propgrams: [{}],
  },
  {
    chest: "VGA529",
    name: "MUHAMMED SALIH CHOLODE",
    dars: "ALATHURPADI DARS",
    propgrams: [
      {
        code: "SO21",
        name: "അറബിക് കാലിഗ്രഫി",
        cat: "S",
      },
      {
        code: "SO23",
        name: "ഖത്തുന്നസ്ഖ്",
        cat: "S",
      },
      {
        code: "SO24",
        name: "ഖത്തുറുഖഈ",
        cat: "S",
      },
    ],
  },
  {
    chest: "VGA629",
    name: "ALI SALMAN OORAKAM",
    dars: "DARUL HIDAYA DARS OZHUKUR",
    propgrams: [
      {
        code: "SO21",
        name: "അറബിക് കാലിഗ്രഫി",
        cat: "S",
      },
      {
        code: "SO23",
        name: "ഖത്തുന്നസ്ഖ്",
        cat: "S",
      },
      {
        code: "SO24",
        name: "ഖത്തുറുഖഈ",
        cat: "S",
      },
    ],
  },
  {
    chest: "VGA534",
    name: "MUHAMMED RAJI KT KARUVARAKUND",
    dars: "ALATHURPADI DARS",
    propgrams: [
      {
        code: "SO22",
        name: "പോസ്റ്റര്‍ ഡിസൈനിംഗ്",
        cat: "S",
      },
    ],
  },
  {
    chest: "VGA627",
    name: "SHIBILI PANDIKKAD",
    dars: "MARKAZUL ULAMA DARS MUTHIRIPARAMBA",
    propgrams: [
      {
        code: "SO22",
        name: "പോസ്റ്റര്‍ ഡിസൈനിംഗ്",
        cat: "S",
      },
    ],
  },
  {
    chest: "VGA689",
    name: "MUHAMMED NIYAS PK",
    dars: "SHAMSUL HUDA DARS PUKAYOOR",
    propgrams: [
      {
        code: "SO25",
        name: "വിവര്‍ത്തനം",
        cat: "S",
      },
    ],
  },
  {
    chest: "VGA530",
    name: "MUHAMMED C VALAD",
    dars: "ALATHURPADI DARS",
    propgrams: [
      {
        code: "SO26",
        name: "വിവര്‍ത്തനം",
        cat: "S",
      },
      {
        code: "SO35",
        name: "നിഘണ്ടു നിര്‍മ്മാണം",
        cat: "S",
      },
    ],
  },
  {
    chest: "VGA701",
    name: "UBAID MUHAMMED KARNATAKA",
    dars: "ISHAATHUSUNNA DARS PULLARA",
    propgrams: [
      {
        code: "SO27",
        name: "വിവര്‍ത്തനം",
        cat: "S",
      },
      {
        code: "SO37",
        name: "പദ സമ്പാദനം",
        cat: "S",
      },
    ],
  },
  {
    chest: "VGA564",
    name: "MOHAMMED SINAN MP",
    dars: "MARKAZUL ULAMA DARA KONOMPARA",
    propgrams: [
      {
        code: "SO28",
        name: "പ്രബന്ധം അറബി",
        cat: "S",
      },
    ],
  },
  {
    chest: "VGA531",
    name: "NIHAL AHMAD KAMBLAKKAD",
    dars: "ALATHURPADI DARS",
    propgrams: [
      {
        code: "SO29",
        name: "പ്രബന്ധം ഇംഗ്ലീഷ്",
        cat: "S",
      },
    ],
  },
  {
    chest: "VGA658",
    name: "MUHAMMED JAFSALKP PUKAYOOR",
    dars: "MANSHAUL ULOOM DARS PATTARKADAVU",
    propgrams: [
      {
        code: "SO29",
        name: "പ്രബന്ധം ഇംഗ്ലീഷ്",
        cat: "S",
      },
      {
        code: "SO31",
        name: "റിപ്പോര്‍ട്ടിംഗ്",
        cat: "S",
      },
      {
        code: "SO40",
        name: "പത്രനിര്‍മാണം",
        cat: "S",
        isGrp: 1,
      },
    ],
  },
  {
    chest: "VGA535",
    name: "MUHAMMED SUHAIL T CHOLODE",
    dars: "ALATHURPADI DARS",
    propgrams: [
      {
        code: "SO30",
        name: "പ്രബന്ധം മലയാളം",
        cat: "S",
      },
    ],
  },
  {
    chest: "VGA572",
    name: "MUHAMMAD SAFVAN CK PARAL",
    dars: "THAMREENU THWALABA KUZHICHENA",
    propgrams: [
      {
        code: "SO30",
        name: "പ്രബന്ധം മലയാളം",
        cat: "S",
      },
      {
        code: "SO39",
        name: "പ്രശ്‌നോത്തരി",
        cat: "S",
      },
    ],
  },
  {
    chest: "VGA536",
    name: "MUHAMMED MASUOOD AP KUMARAMPUTHUR",
    dars: "ALATHURPADI DARS",
    propgrams: [
      {
        code: "SO31",
        name: "റിപ്പോര്‍ട്ടിംഗ്",
        cat: "S",
      },
    ],
  },
  {
    chest: "VGA532",
    name: "MUHAMMED JUMAIL K PARAKANNI",
    dars: "ALATHURPADI DARS",
    propgrams: [
      {
        code: "SO32",
        name: "തലവാചക നിര്‍മ്മാണം",
        cat: "S",
      },
      {
        code: "SO36",
        name: "അടിക്കുറിപ്പ്",
        cat: "S",
      },
    ],
  },
  {
    chest: "VGA579",
    name: "MUHAMMAD SHIBIL U",
    dars: "THAMREENU TWALABA MONGAM DARS ASSOCIATION",
    propgrams: [
      {
        code: "SO32",
        name: "തലവാചക നിര്‍മ്മാണം",
        cat: "S",
      },
    ],
  },
  {
    chest: "VGA996",
    name: "FAYIZ PELEPPURAM",
    dars: "BAYANUL ULOOM ARIMBRA PAZHANGARATHODI",
    propgrams: [
      {
        code: "SO33",
        name: "മുദ്രവാക്യ രചന",
        cat: "S",
      },
    ],
  },
  {
    chest: "VGA540",
    name: "MUHAMMED FIROS BABU KT KUNNAKKAVU",
    dars: "DARAJATHUL ULOOM DARS CHEPPYALAM",
    propgrams: [
      {
        code: "SO35",
        name: "നിഘണ്ടു നിര്‍മ്മാണം",
        cat: "S",
      },
    ],
  },
  {
    chest: "VGA699",
    name: "MUHAMMED SUHAD K PAZHUR",
    dars: "ISHAATHUSUNNA DARS PULLARA",
    propgrams: [
      {
        code: "SO36",
        name: "അടിക്കുറിപ്പ്",
        cat: "S",
      },
    ],
  },
  {
    chest: "VGA533",
    name: "MUHAMMED SUHAIB CP AMBAYAKODE",
    dars: "ALATHURPADI DARS",
    propgrams: [
      {
        code: "SO39",
        name: "പ്രശ്‌നോത്തരി",
        cat: "S",
      },
    ],
  },
  {
    chest: "KNR143",
    name: "ANAS M",
    dars: "BADRIYYA HIFZUL QUR'AN, MADATHIKOVVAL, NARATAH",
    propgrams: [
      {
        code: "JS1",
        name: "ഖിറാഅത്ത്",
        isStage: 1,
        cat: "J",
        publish: 1,
      },
      {
        code: "JS2",
        name: "ഹിഫ്‌ള്",
        isStage: 1,
        cat: "J",
        publish: 1,
      },
      {
        code: "JS3",
        name: "വാങ്ക്",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "KNR345",
    name: "MUHAMMAD THAHA SALEEM EK(VELIYAMBRA)",
    dars: "MARKAZUL ULAMA DARS VENMANAL",
    propgrams: [
      {
        code: "JS1",
        name: "ഖിറാഅത്ത്",
        isStage: 1,
        cat: "J",
        publish: 1,
      },
    ],
  },
  {
    chest: "KNR132",
    name: "MUHAMMED ZAID CHOLA",
    dars: "SWAFA DARS KUMMAYAKKADAVU",
    propgrams: [
      {
        code: "JS2",
        name: "ഹിഫ്‌ള്",
        isStage: 1,
        cat: "J",
        publish: 1,
      },
      {
        code: "JS3",
        name: "വാങ്ക്",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "KNR126",
    name: "MUHAMMED UMAR ABDULLA KUMMAYAKKADAVU",
    dars: "SWAFA DARS KUMMAYAKKADAVU",
    propgrams: [
      {
        code: "JS4",
        name: "പ്രസംഗം അറബി",
        isStage: 1,
        cat: "J",
      },
      {
        code: "JS8",
        name: "ഗ്രന്ഥവായന",
        isStage: 1,
        cat: "J",
      },
      {
        code: "JO22",
        name: "സുഡോക്കു",
        cat: "J",
      },
      {
        code: "JO29",
        name: "മലയാള പ്രബന്ധം",
        cat: "J",
      },
    ],
  },
  {
    chest: "KNR252",
    name: "NISAMUDHEEN KADACHIRA",
    dars: "MARKAZUL ULAMA DARS POTHUVACHERY",
    propgrams: [
      {
        code: "JS4",
        name: "പ്രസംഗം അറബി",
        isStage: 1,
        cat: "J",
      },
      {
        code: "JS8",
        name: "ഗ്രന്ഥവായന",
        isStage: 1,
        cat: "J",
      },
      {
        code: "JO29",
        name: "മലയാള പ്രബന്ധം",
        cat: "J",
      },
    ],
  },
  {
    chest: "KNR113",
    name: "MUHAMMED MUSTHAFA",
    dars: "DARUL ULOOM AL ASNAVIYYA, CHERUKUNN",
    propgrams: [
      {
        code: "JS5",
        name: "പ്രസംഗം മലയാളം",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "KNR251",
    name: "MUHAMMED RISWAN SK VADAKARA",
    dars: "MARKAZUL ULAMA DARS POTHUVACHERY",
    propgrams: [
      {
        code: "JS5",
        name: "പ്രസംഗം മലയാളം",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "KNR174",
    name: "ZAYAN THALIPARAMB",
    dars: "HIDAYATHU THWALABA DARS NOONHERI",
    propgrams: [
      {
        code: "JS6",
        name: "പ്രസംഗം ഉറുദു",
        isStage: 1,
        cat: "J",
      },
      {
        code: "JS14",
        name: "ഗദ്യവായന മലയാളം",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "KNR248",
    name: "MUHAMMED IYYAS KASARGOD",
    dars: "MARKAZUL ULAMA DARS POTHUVACHERY",
    propgrams: [
      {
        code: "JS6",
        name: "പ്രസംഗം ഉറുദു",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "KNR136",
    name: "MUHAMMED MADATHIKKOVVAL",
    dars: "SWAFA DARS KUMMAYAKKADAVU",
    propgrams: [
      {
        code: "JS7",
        name: "പ്രസംഗം ഇംഗ്ലീഷ്",
        isStage: 1,
        cat: "J",
      },
      {
        code: "JS12",
        name: "ഗാനം ഉറുദു",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "KNR259",
    name: "NIHAL MATTANNUR",
    dars: "MARKAZUL ULAMA DARS POTHUVACHERY",
    propgrams: [
      {
        code: "JS7",
        name: "പ്രസംഗം ഇംഗ്ലീഷ്",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "KNR167",
    name: "FAZLU RAHMAN",
    dars: "HALEEMATHU SA'ADIYYA, MATHAMANGALAM",
    propgrams: [
      {
        code: "JS9",
        name: "ഗാനം അറബി",
        isStage: 1,
        cat: "J",
      },
      {
        code: "JS10",
        name: "മാപ്പിളപ്പാട്ട്",
        isStage: 1,
        cat: "J",
      },
      {
        code: "JS18",
        name: "മദ്ഹുന്നബി",
        isStage: 1,
        cat: "J",
      },
      {
        code: "JS19",
        name: "അറബി സംഘഗാനം",
        isStage: 1,
        cat: "J",
        isGrp: 1,
      },
      {
        code: "JS20",
        name: "മലയാള സമൂഹ ഗാനം",
        isStage: 1,
        cat: "J",
        isGrp: 1,
      },
    ],
  },
  {
    chest: "KNR172",
    name: "THAMEEM MALAPPURAM",
    dars: "HIDAYATHU THWALABA DARS NOONHERI",
    propgrams: [
      {
        code: "JS9",
        name: "ഗാനം അറബി",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "KNR249",
    name: "ANWAR SHA THANNADA",
    dars: "MARKAZUL ULAMA DARS POTHUVACHERY",
    propgrams: [
      {
        code: "JS10",
        name: "മാപ്പിളപ്പാട്ട്",
        isStage: 1,
        cat: "J",
      },
      {
        code: "JS18",
        name: "മദ്ഹുന്നബി",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "KNR195",
    name: "YAHYA PV KOTHERI",
    dars: "DA'WATHUL ISLAM DARS PALOTTUPALLY",
    propgrams: [
      {
        code: "JS11",
        name: "മാലപ്പാട്ട്",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "KNR250",
    name: "SAYYID RAZI SHIHAB EDARIKKODE",
    dars: "MARKAZUL ULAMA DARS POTHUVACHERY",
    propgrams: [
      {
        code: "JS11",
        name: "മാലപ്പാട്ട്",
        isStage: 1,
        cat: "J",
      },
      {
        code: "JS12",
        name: "ഗാനം ഉറുദു",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "KNR135",
    name: "MUHAMMED RAZAL MUNDERI",
    dars: "SWAFA DARS KUMMAYAKKADAVU",
    propgrams: [
      {
        code: "JS13",
        name: "കഥ പറച്ചില്‍",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "KNR256",
    name: "MUHAMMED SAHAL KOTTATHARA",
    dars: "MARKAZUL ULAMA DARS POTHUVACHERY",
    propgrams: [
      {
        code: "JS13",
        name: "കഥ പറച്ചില്‍",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "KNR198",
    name: "MUHAMMED NP MALOOR",
    dars: "DA'WATHUL ISLAM DARS PALOTTUPALLY",
    propgrams: [
      {
        code: "JS14",
        name: "ഗദ്യവായന മലയാളം",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "KNR199",
    name: "MUHAMMED ANSAF K VEMBADI",
    dars: "DA'WATHUL ISLAM DARS PALOTTUPALLY",
    propgrams: [
      {
        code: "JS15",
        name: "മുശാഅറ",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "KNR257",
    name: "ASHIQUE KOTTATHRA",
    dars: "MARKAZUL ULAMA DARS POTHUVACHERY",
    propgrams: [
      {
        code: "JS15",
        name: "മുശാഅറ",
        isStage: 1,
        cat: "J",
      },
      {
        code: "JS16",
        name: "പദപ്പയറ്റ് അറബി",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "KNR129",
    name: "SINAN PALLIYATH",
    dars: "SWAFA DARS KUMMAYAKKADAVU",
    propgrams: [
      {
        code: "JS16",
        name: "പദപ്പയറ്റ് അറബി",
        isStage: 1,
        cat: "J",
      },
      {
        code: "JO27",
        name: "നിഘണ്ടു നിര്‍മ്മാണം",
        cat: "J",
      },
    ],
  },
  {
    chest: "KNR131",
    name: "MUHAMMED FAHEEM KALADI",
    dars: "SWAFA DARS KUMMAYAKKADAVU",
    propgrams: [
      {
        code: "JS17",
        name: "പദപ്പയറ്റ് ഇംഗ്ലീഷ്",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "KNR260",
    name: "MUHAMMED ADNAN MAMBA",
    dars: "MARKAZUL ULAMA DARS POTHUVACHERY",
    propgrams: [
      {
        code: "JS17",
        name: "പദപ്പയറ്റ് ഇംഗ്ലീഷ്",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "KNR253",
    name: "MUHAMMED MISHAL VALLITHODE",
    dars: "MARKAZUL ULAMA DARS POTHUVACHERY",
    propgrams: [
      {
        code: "JS19",
        name: "അറബി സംഘഗാനം",
        isStage: 1,
        cat: "J",
        isGrp: 1,
      },
    ],
  },
  {
    chest: "KNR196",
    name: "MUHAMMED JASEEM VK VALAKKAI",
    dars: "DA'WATHUL ISLAM DARS PALOTTUPALLY",
    propgrams: [
      {
        code: "JS20",
        name: "മലയാള സമൂഹ ഗാനം",
        isStage: 1,
        cat: "J",
        isGrp: 1,
      },
    ],
  },
  {
    chest: "KNR206",
    name: "MUHAMMED SWALIH PC PARAMBAYI",
    dars: "DA'WATHUL ISLAM DARS PALOTTUPALLY",
    propgrams: [
      {
        code: "JO21",
        name: "ചിത്രരചന",
        cat: "J",
      },
    ],
  },
  {
    chest: "KNR106",
    name: "ABDULLA FAJR SWADIQ",
    dars: "DARUL ULOOM AL ASNAVIYYA, CHERUKUNN",
    propgrams: [
      {
        code: "JO22",
        name: "സുഡോക്കു",
        cat: "J",
      },
    ],
  },
  {
    chest: "KNR179",
    name: "SHAHID KP PULLOOPPI",
    dars: "HIDAYATHU THWALABA DARS NOONHERI",
    propgrams: [
      {
        code: "JO23",
        name: "മെമ്മറി ടെസ്റ്റ്",
        cat: "J",
      },
    ],
  },
  {
    chest: "KNR263",
    name: "SHAHID POTHUVACHERY",
    dars: "MARKAZUL ULAMA DARS POTHUVACHERY",
    propgrams: [
      {
        code: "JO23",
        name: "മെമ്മറി ടെസ്റ്റ്",
        cat: "J",
      },
    ],
  },
  {
    chest: "KNR302",
    name: "MUNAVVAR WAYANAD",
    dars: "NIBRASU THWALABA DARS KAVVAYI",
    propgrams: [
      {
        code: "JO24",
        name: "ഖത്തുന്നസ്ഖ്",
        cat: "J",
      },
    ],
  },
  {
    chest: "KNR329",
    name: "SALIH KOLARI",
    dars: "MAMBAUL HIDAYA DARS VELIYAMBRA",
    propgrams: [
      {
        code: "JO24",
        name: "ഖത്തുന്നസ്ഖ്",
        cat: "J",
      },
    ],
  },
  {
    chest: "KNR231",
    name: "MUHAMMED SINAN KOK",
    dars: "IMADUDDEEN DARS PAPPINISSERI WEST",
    propgrams: [
      {
        code: "JO25",
        name: "കേട്ടെഴുത്ത്",
        cat: "J",
      },
    ],
  },
  {
    chest: "KNR255",
    name: "MUHAMMED AFLAH ANJARAKKANDY",
    dars: "MARKAZUL ULAMA DARS POTHUVACHERY",
    propgrams: [
      {
        code: "JO25",
        name: "കേട്ടെഴുത്ത്",
        cat: "J",
      },
    ],
  },
  {
    chest: "KNR264",
    name: "MUHAMME JUBAIR PM THOTTEEKKAL",
    dars: "MARKAZUL ULAMA DARS POTHUVACHERY",
    propgrams: [
      {
        code: "JO26",
        name: "പോസ്റ്റര്‍ ഡിസൈനിംഗ്",
        cat: "J",
      },
    ],
  },
  {
    chest: "KNR324",
    name: "ADHIL VENMANAL",
    dars: "MAMBAUL HIDAYA DARS VELIYAMBRA",
    propgrams: [
      {
        code: "JO27",
        name: "നിഘണ്ടു നിര്‍മ്മാണം",
        cat: "J",
      },
    ],
  },
  {
    chest: "KNR175",
    name: "FARHAN MKP ETTIKULAM",
    dars: "HIDAYATHU THWALABA DARS NOONHERI",
    propgrams: [
      {
        code: "JO28",
        name: "തശ്കീല്‍",
        cat: "J",
      },
      {
        code: "JO30",
        name: "പ്രശ്‌നോത്തരി",
        cat: "J",
      },
    ],
  },
  {
    chest: "KNR319",
    name: "MUHAMMED ARIF U, MALUR",
    dars: "MANARUL HUDA DARS ELAYAVOOR VARAM",
    propgrams: [
      {
        code: "JO28",
        name: "തശ്കീല്‍",
        cat: "J",
      },
    ],
  },
  {
    chest: "KNR265",
    name: "JAVAD IRIKKUR",
    dars: "MARKAZUL ULAMA DARS POTHUVACHERY",
    propgrams: [
      {
        code: "JO30",
        name: "പ്രശ്‌നോത്തരി",
        cat: "J",
      },
    ],
  },
  {
    chest: "KNR603",
    name: "MUHAMMED RIZWI",
    dars: "IMADUDDEEN DARS PAPPINISSERI WEST",
    propgrams: [
      {
        code: "SS1",
        name: "ഖിറാഅത്ത്",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SS2",
        name: "ഹിഫ്‌ള്",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "KNR626",
    name: "MUHAMMED SHAHID OMANOOR",
    dars: "MARKAZUL ULAMA DARS POTHUVACHERY",
    propgrams: [
      {
        code: "SS1",
        name: "ഖിറാഅത്ത്",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SS3",
        name: "വാങ്ക്",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SS17",
        name: "പാടിപ്പറയല്‍",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SS19",
        name: "ഖസ്വീദ പാരായണം",
        isStage: 1,
        cat: "S",
        isGrp: 1,
      },
    ],
  },
  {
    chest: "KNR639",
    name: "ABDULLAH CH",
    dars: "MARKAZUL ULAMA DARS POTHUVACHERY",
    propgrams: [
      {
        code: "SS2",
        name: "ഹിഫ്‌ള്",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SO24",
        name: "ഖത്തുറുഖഈ",
        cat: "S",
      },
    ],
  },
  {
    chest: "KNR657",
    name: "MUHAMMED NAZIL CT",
    dars: "IZZATHUL ISLAM DARS PUTHIYANGADI",
    propgrams: [
      {
        code: "SS3",
        name: "വാങ്ക്",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "KNR571",
    name: "MUNAVVIR M",
    dars: "HIDAYATHU THWALABA DARS NOONHERI",
    propgrams: [
      {
        code: "SS4",
        name: "ക്ലാസ് അവതരണം",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "KNR641",
    name: "HAFIZ JINAN MOOSA",
    dars: "MARKAZUL ULAMA DARS POTHUVACHERY",
    propgrams: [
      {
        code: "SS4",
        name: "ക്ലാസ് അവതരണം",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SS6",
        name: "പ്രസംഗം മലയാളം",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SS20",
        name: "പ്രോഗ്രാം സെറ്റിംഗ്",
        isStage: 1,
        cat: "S",
        isGrp: 1,
      },
      {
        code: "SO33",
        name: "മുദ്രവാക്യ രചന",
        cat: "S",
      },
    ],
  },
  {
    chest: "KNR589",
    name: "MUHAMMED TAHIR CC",
    dars: "DA'WATHUL ISLAM DARS PALOTTUPALLY",
    propgrams: [
      {
        code: "SS5",
        name: "വഅ്‌ള്",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "KNR625",
    name: "MUHAMMED BASIL",
    dars: "MARKAZUL ULAMA DARS POTHUVACHERY",
    propgrams: [
      {
        code: "SS5",
        name: "വഅ്‌ള്",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SS14",
        name: "അനൗണ്‍സ്‌മെന്റ്",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "KNR658",
    name: "ARIF P.V KANNUR",
    dars: "Markazul ulama dars, PUZHAKKARA IRITTY",
    propgrams: [
      {
        code: "SS6",
        name: "പ്രസംഗം മലയാളം",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "KNR595",
    name: "RAMIN KHALID MUNDERI",
    dars: "SHARAFUL ISLAM DA'WA DARS PANNIYANKANDI",
    propgrams: [
      {
        code: "SS7",
        name: "പ്രസംഗം അറബി",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "KNR642",
    name: "MUHAMMED JASEEL V NUCHIYAD",
    dars: "MARKAZUL ULAMA DARS POTHUVACHERY",
    propgrams: [
      {
        code: "SS7",
        name: "പ്രസംഗം അറബി",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SS13",
        name: "മുശാഅറ",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SO26",
        name: "വിവര്‍ത്തനം",
        cat: "S",
      },
      {
        code: "SO27",
        name: "വിവര്‍ത്തനം",
        cat: "S",
      },
    ],
  },
  {
    chest: "KNR514",
    name: "MUHAMMED JASID MUNDERI",
    dars: "SWAFA DARS KUMMAYAKKADAVU",
    propgrams: [
      {
        code: "SS8",
        name: "പ്രസംഗം ഉറുദു",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "KNR631",
    name: "MUHAMMED MUBASHIR GUDALLUR",
    dars: "MARKAZUL ULAMA DARS POTHUVACHERY",
    propgrams: [
      {
        code: "SS8",
        name: "പ്രസംഗം ഉറുദു",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "KNR517",
    name: "MUHAMMED AJMAL PURAVOOR",
    dars: "SWAFA DARS KUMMAYAKKADAVU",
    propgrams: [
      {
        code: "SS9",
        name: "പ്രസംഗം ഇംഗ്ലീഷ്",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "KNR632",
    name: "MUHAMMED ANSAL PALAYI",
    dars: "MARKAZUL ULAMA DARS POTHUVACHERY",
    propgrams: [
      {
        code: "SS9",
        name: "പ്രസംഗം ഇംഗ്ലീഷ്",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SO39",
        name: "പ്രശ്‌നോത്തരി",
        cat: "S",
      },
    ],
  },
  {
    chest: "KNR590",
    name: "MUHAMMAD SWALIH KP",
    dars: "DA'WATHUL ISLAM DARS PALOTTUPALLY",
    propgrams: [
      {
        code: "SS10",
        name: "ഖുഥ്ബ",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "KNR629",
    name: "AL AMEEN",
    dars: "MARKAZUL ULAMA DARS POTHUVACHERY",
    propgrams: [
      {
        code: "SS10",
        name: "ഖുഥ്ബ",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SS12",
        name: "കവിതാലാപനം മലയാളം",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SS18",
        name: "മാഷപ്പ് മാപ്പിളപ്പാട്ട്",
        isStage: 1,
        cat: "S",
        isGrp: 1,
      },
      {
        code: "SO40",
        name: "പത്രനിര്‍മാണം",
        cat: "S",
        isGrp: 1,
      },
    ],
  },
  {
    chest: "KNR547",
    name: "NOUFAL KP KUNNUMKAI",
    dars: "HIDAYATHU THWALABA DARS NOONHERI",
    propgrams: [
      {
        code: "SS11",
        name: "ഗ്രന്ഥ വായന",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "KNR598",
    name: "ALI JOUHAR THIRUVATTOOR",
    dars: "SHARAFUL ISLAM DA'WA DARS PANNIYANKANDI",
    propgrams: [
      {
        code: "SS11",
        name: "ഗ്രന്ഥ വായന",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "KNR548",
    name: "SUFAIL TK MATHODAM",
    dars: "HIDAYATHU THWALABA DARS NOONHERI",
    propgrams: [
      {
        code: "SS12",
        name: "കവിതാലാപനം മലയാളം",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "KNR504",
    name: "MUHAMMED SHIBILI VESHALA",
    dars: "SWAFA DARS KUMMAYAKKADAVU",
    propgrams: [
      {
        code: "SS13",
        name: "മുശാഅറ",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SO39",
        name: "പ്രശ്‌നോത്തരി",
        cat: "S",
      },
    ],
  },
  {
    chest: "KNR618",
    name: "MUHAMMED SHABAB KOK",
    dars: "IMADUDDEEN DARS PAPPINISSERI WEST",
    propgrams: [
      {
        code: "SS14",
        name: "അനൗണ്‍സ്‌മെന്റ്",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SS15",
        name: "പ്രബന്ധാവതരണം",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SO30",
        name: "പ്രബന്ധം മലയാളം",
        cat: "S",
      },
      {
        code: "SO33",
        name: "മുദ്രവാക്യ രചന",
        cat: "S",
      },
    ],
  },
  {
    chest: "KNR587",
    name: "MUSAB VK VALAKKAI",
    dars: "DA'WATHUL ISLAM DARS PALOTTUPALLY",
    propgrams: [
      {
        code: "SS15",
        name: "പ്രബന്ധാവതരണം",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SO31",
        name: "റിപ്പോര്‍ട്ടിംഗ്",
        cat: "S",
      },
    ],
  },
  {
    chest: "KNR541",
    name: "MUHAMMED IRFAN.M",
    dars: "JUMA MASJID DARS MANGADAVU",
    propgrams: [
      {
        code: "SS16",
        name: "നിമിഷപ്രസംഗം",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "KNR607",
    name: "SAYYID ADHIL SULTHAN PAPPINISHERY",
    dars: "IMADUDDEEN DARS PAPPINISSERI WEST",
    propgrams: [
      {
        code: "SS16",
        name: "നിമിഷപ്രസംഗം",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SO27",
        name: "വിവര്‍ത്തനം",
        cat: "S",
      },
    ],
  },
  {
    chest: "KNR712",
    name: "YUSAF PERIYATHIL",
    dars: "MAMBAUL HIDAYA DARS VELIYAMBRA",
    propgrams: [
      {
        code: "SS17",
        name: "പാടിപ്പറയല്‍",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SS18",
        name: "മാഷപ്പ് മാപ്പിളപ്പാട്ട്",
        isStage: 1,
        cat: "S",
        isGrp: 1,
      },
      {
        code: "SS19",
        name: "ഖസ്വീദ പാരായണം",
        isStage: 1,
        cat: "S",
        isGrp: 1,
      },
    ],
  },
  {
    chest: "KNR586",
    name: "MUFEED K IRIKKUR",
    dars: "DA'WATHUL ISLAM DARS PALOTTUPALLY",
    propgrams: [
      {
        code: "SS20",
        name: "പ്രോഗ്രാം സെറ്റിംഗ്",
        isStage: 1,
        cat: "S",
        isGrp: 1,
      },
    ],
  },
  {
    chest: "KNR518",
    name: "MUHAMMED ANAS NIRATHUPALAM",
    dars: "SWAFA DARS KUMMAYAKKADAVU",
    propgrams: [
      {
        code: "SO21",
        name: "അറബിക് കാലിഗ്രഫി",
        cat: "S",
      },
      {
        code: "SO22",
        name: "പോസ്റ്റര്‍ ഡിസൈനിംഗ്",
        cat: "S",
      },
      {
        code: "SO23",
        name: "ഖത്തുന്നസ്ഖ്",
        cat: "S",
      },
    ],
  },
  {
    chest: "KNR709",
    name: "NIYAZ PADANNOD",
    dars: "MAMBAUL HIDAYA DARS VELIYAMBRA",
    propgrams: [
      {
        code: "SO21",
        name: "അറബിക് കാലിഗ്രഫി",
        cat: "S",
      },
    ],
  },
  {
    chest: "KNR662",
    name: "FAYIS R. P IRIKKUUR",
    dars: "Markazul ulama dars, PUZHAKKARA IRITTY",
    propgrams: [
      {
        code: "SO22",
        name: "പോസ്റ്റര്‍ ഡിസൈനിംഗ്",
        cat: "S",
      },
    ],
  },
  {
    chest: "KNR554",
    name: "UMAR MUKTHAR",
    dars: "HIDAYATHU THWALABA DARS NOONHERI",
    propgrams: [
      {
        code: "SO23",
        name: "ഖത്തുന്നസ്ഖ്",
        cat: "S",
      },
      {
        code: "SO30",
        name: "പ്രബന്ധം മലയാളം",
        cat: "S",
      },
      {
        code: "SO36",
        name: "അടിക്കുറിപ്പ്",
        cat: "S",
      },
      {
        code: "SO40",
        name: "പത്രനിര്‍മാണം",
        cat: "S",
        isGrp: 1,
      },
    ],
  },
  {
    chest: "KNR591",
    name: "MUHAMMED SAHAD CP PALOTTUPALLY",
    dars: "DA'WATHUL ISLAM DARS PALOTTUPALLY",
    propgrams: [
      {
        code: "SO25",
        name: "വിവര്‍ത്തനം",
        cat: "S",
      },
      {
        code: "SO26",
        name: "വിവര്‍ത്തനം",
        cat: "S",
      },
      {
        code: "SO28",
        name: "പ്രബന്ധം അറബി",
        cat: "S",
      },
    ],
  },
  {
    chest: "KNR597",
    name: "MUHAMMED SINAN SREEKANDA",
    dars: "SHARAFUL ISLAM DA'WA DARS PANNIYANKANDI",
    propgrams: [
      {
        code: "SO25",
        name: "വിവര്‍ത്തനം",
        cat: "S",
      },
      {
        code: "SO32",
        name: "തലവാചക നിര്‍മ്മാണം",
        cat: "S",
      },
    ],
  },
  {
    chest: "KNR640",
    name: "SAYYID MUHAMMED HASEEF TP (OMASSERY )",
    dars: "MARKAZUL ULAMA DARS POTHUVACHERY",
    propgrams: [
      {
        code: "SO28",
        name: "പ്രബന്ധം അറബി",
        cat: "S",
      },
      {
        code: "SO34",
        name: "കവിതാ രചന",
        cat: "S",
      },
    ],
  },
  {
    chest: "KNR567",
    name: "MOHAMMED ADNAN",
    dars: "HIDAYATHU THWALABA DARS NOONHERI",
    propgrams: [
      {
        code: "SO29",
        name: "പ്രബന്ധം ഇംഗ്ലീഷ്",
        cat: "S",
      },
    ],
  },
  {
    chest: "KNR672",
    name: "SHIBIL RAHMAN,THRIKARIPUR",
    dars: "MAMBAUL HIDAYA DARS PADANNOTT",
    propgrams: [
      {
        code: "SO29",
        name: "പ്രബന്ധം ഇംഗ്ലീഷ്",
        cat: "S",
      },
    ],
  },
  {
    chest: "KNR563",
    name: "MUHSIN S KOLLAM",
    dars: "HIDAYATHU THWALABA DARS NOONHERI",
    propgrams: [
      {
        code: "SO31",
        name: "റിപ്പോര്‍ട്ടിംഗ്",
        cat: "S",
      },
    ],
  },
  {
    chest: "KNR540",
    name: "MUHAMMED SUFYAN.K.P",
    dars: "JUMA MASJID DARS MANGADAVU",
    propgrams: [
      {
        code: "SO32",
        name: "തലവാചക നിര്‍മ്മാണം",
        cat: "S",
      },
    ],
  },
  {
    chest: "KNR562",
    name: "MUHAMMED JAVAD AG THRIKKARIPPUR",
    dars: "HIDAYATHU THWALABA DARS NOONHERI",
    propgrams: [
      {
        code: "SO35",
        name: "നിഘണ്ടു നിര്‍മ്മാണം",
        cat: "S",
      },
      {
        code: "SO37",
        name: "പദ സമ്പാദനം",
        cat: "S",
      },
    ],
  },
  {
    chest: "KNR651",
    name: "MUHAMMED SHANID CHENAYANNUR",
    dars: "IZZATHUL ISLAM DARS PUTHIYANGADI",
    propgrams: [
      {
        code: "SO36",
        name: "അടിക്കുറിപ്പ്",
        cat: "S",
      },
    ],
  },
  {
    chest: "KNR617",
    name: "SAYYID HASIL PAPPINISHERY",
    dars: "IMADUDDEEN DARS PAPPINISSERI WEST",
    propgrams: [
      {
        code: "SO37",
        name: "പദ സമ്പാദനം",
        cat: "S",
      },
    ],
  },
  {
    chest: "KNR579",
    name: "MUHAMMED RAZI CK",
    dars: "MADHEENATHUNNOOR DARS PALLIPOYIL",
    propgrams: [
      {
        code: "SO38",
        name: "തശ്കീല്‍",
        cat: "S",
      },
    ],
  },
  {
    chest: "CLT169",
    name: "MUHAMMED RISHIL VM",
    dars: "IHSAN DARS PERUMUGHAM",
    propgrams: [
      {
        code: "JS1",
        name: "ഖിറാഅത്ത്",
        isStage: 1,
        cat: "J",
        publish: 1,
      },
      {
        code: "JS3",
        name: "വാങ്ക്",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "CLT128",
    name: "HAFIZ MUHAMMED SINAN MEPPAYYUR",
    dars: "AL MAHLARATHUL JALALIYYA DARS VILLIAPPALLI",
    propgrams: [
      {
        code: "JS1",
        name: "ഖിറാഅത്ത്",
        isStage: 1,
        cat: "J",
        publish: 1,
      },
      {
        code: "JS10",
        name: "മാപ്പിളപ്പാട്ട്",
        isStage: 1,
        cat: "J",
      },
      {
        code: "JO26",
        name: "പോസ്റ്റര്‍ ഡിസൈനിംഗ്",
        cat: "J",
      },
    ],
  },
  {
    chest: "CLT150",
    name: "ADIL KADIYANGAD",
    dars: "DARUL HIDAYA DARS ORKKATTERI",
    propgrams: [
      {
        code: "JS2",
        name: "ഹിഫ്‌ള്",
        isStage: 1,
        cat: "J",
        publish: 1,
      },
    ],
  },
  {
    chest: "CLT170",
    name: "MUHAMMDED RABEEH M",
    dars: "IHSAN DARS PERUMUGHAM",
    propgrams: [
      {
        code: "JS2",
        name: "ഹിഫ്‌ള്",
        isStage: 1,
        cat: "J",
        publish: 1,
      },
    ],
  },
  {
    chest: "CLT232",
    name: "MUHAMED ABDUL HAADHI",
    dars: "MAKHDOOMIA MARKAZUL ULAMA DARS KUNHIPALLI",
    propgrams: [
      {
        code: "JS3",
        name: "വാങ്ക്",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "CLT104",
    name: "SHAHABAN PERUMANNA",
    dars: "AL AQSA DARS, CHALIYAM",
    propgrams: [
      {
        code: "JS4",
        name: "പ്രസംഗം അറബി",
        isStage: 1,
        cat: "J",
      },
      {
        code: "JS17",
        name: "പദപ്പയറ്റ് ഇംഗ്ലീഷ്",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "CLT174",
    name: "MUHAMMED HINAN .K",
    dars: "IHSAN DARS PERUMUGHAM",
    propgrams: [
      {
        code: "JS4",
        name: "പ്രസംഗം അറബി",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "CLT177",
    name: "MUHAMMED MUBARAK C P VENGARA",
    dars: "IHSAN DARS PERUMUGHAM",
    propgrams: [
      {
        code: "JS5",
        name: "പ്രസംഗം മലയാളം",
        isStage: 1,
        cat: "J",
      },
      {
        code: "JO27",
        name: "നിഘണ്ടു നിര്‍മ്മാണം",
        cat: "J",
      },
    ],
  },
  {
    chest: "CLT220",
    name: "MUHAMMED SABITH",
    dars: "MANBAU'SSA'ADA DARS MANIYAMBALAM",
    propgrams: [
      {
        code: "JS5",
        name: "പ്രസംഗം മലയാളം",
        isStage: 1,
        cat: "J",
      },
      {
        code: "JS13",
        name: "കഥ പറച്ചില്‍",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "CLT153",
    name: "MUHAMMAD ANFAD PAYYOLI",
    dars: "DARUL HIDAYA DARS ORKKATTERI",
    propgrams: [
      {
        code: "JS6",
        name: "പ്രസംഗം ഉറുദു",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "CLT219",
    name: "MOHAMMED DILSHAN",
    dars: "MANBAU'SSA'ADA DARS MANIYAMBALAM",
    propgrams: [
      {
        code: "JS6",
        name: "പ്രസംഗം ഉറുദു",
        isStage: 1,
        cat: "J",
      },
      {
        code: "JS7",
        name: "പ്രസംഗം ഇംഗ്ലീഷ്",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "CLT182",
    name: "MUHAMMED NIHAL V VELLAMUNDA",
    dars: "IHSAN DARS PERUMUGHAM",
    propgrams: [
      {
        code: "JS7",
        name: "പ്രസംഗം ഇംഗ്ലീഷ്",
        isStage: 1,
        cat: "J",
      },
      {
        code: "JO25",
        name: "കേട്ടെഴുത്ത്",
        cat: "J",
      },
    ],
  },
  {
    chest: "CLT129",
    name: "MUHAMMED AFRAH .AYANCHERI",
    dars: "AL MAHLARATHUL JALALIYYA DARS VILLIAPPALLI",
    propgrams: [
      {
        code: "JS8",
        name: "ഗ്രന്ഥവായന",
        isStage: 1,
        cat: "J",
      },
      {
        code: "JO30",
        name: "പ്രശ്‌നോത്തരി",
        cat: "J",
      },
    ],
  },
  {
    chest: "CLT112",
    name: "RAIHAN UGRAPURAM",
    dars: "AL AQSA DARS, CHALIYAM",
    propgrams: [
      {
        code: "JS8",
        name: "ഗ്രന്ഥവായന",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "CLT101",
    name: "MUHAMMED THANSHEETH KAVANNUR",
    dars: "AL AQSA DARS, CHALIYAM",
    propgrams: [
      {
        code: "JS9",
        name: "ഗാനം അറബി",
        isStage: 1,
        cat: "J",
      },
      {
        code: "JS12",
        name: "ഗാനം ഉറുദു",
        isStage: 1,
        cat: "J",
      },
      {
        code: "JS19",
        name: "അറബി സംഘഗാനം",
        isStage: 1,
        cat: "J",
        isGrp: 1,
      },
    ],
  },
  {
    chest: "CLT217",
    name: "SHAFIN M N",
    dars: "MANBAU'SSA'ADA DARS MANIYAMBALAM",
    propgrams: [
      {
        code: "JS9",
        name: "ഗാനം അറബി",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "CLT141",
    name: "MUHAMMED JUMAN V T PANNIPPARA",
    dars: "DARUL HIDAYA DARS KALARANTHIRI",
    propgrams: [
      {
        code: "JS10",
        name: "മാപ്പിളപ്പാട്ട്",
        isStage: 1,
        cat: "J",
      },
      {
        code: "JS19",
        name: "അറബി സംഘഗാനം",
        isStage: 1,
        cat: "J",
        isGrp: 1,
      },
      {
        code: "JS20",
        name: "മലയാള സമൂഹ ഗാനം",
        isStage: 1,
        cat: "J",
        isGrp: 1,
      },
      {
        code: "JO28",
        name: "തശ്കീല്‍",
        cat: "J",
      },
    ],
  },
  {
    chest: "CLT137",
    name: "MUHAMMAD MUFLIH MANJERI",
    dars: "DARUL HIDAYA DARS KALARANTHIRI",
    propgrams: [
      {
        code: "JS11",
        name: "മാലപ്പാട്ട്",
        isStage: 1,
        cat: "J",
      },
      {
        code: "JS18",
        name: "മദ്ഹുന്നബി",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "CLT122",
    name: "HAFIZ SHAMIL ABDULLA THIRUVALLUR",
    dars: "AL MAHLARATHUL JALALIYYA DARS VILLIAPPALLI",
    propgrams: [
      {
        code: "JS11",
        name: "മാലപ്പാട്ട്",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "CLT156",
    name: "ALTHAF PERAMBRA",
    dars: "DARUL HIDAYA DARS ORKKATTERI",
    propgrams: [
      {
        code: "JS12",
        name: "ഗാനം ഉറുദു",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "CLT127",
    name: "MUHAMMED YASEEN KOLATHUR",
    dars: "AL MAHLARATHUL JALALIYYA DARS VILLIAPPALLI",
    propgrams: [
      {
        code: "JS13",
        name: "കഥ പറച്ചില്‍",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "CLT238",
    name: "MUHAMMED NAJIL",
    dars: "NOORUL HUDA DARS CHERUMOTH",
    propgrams: [
      {
        code: "JS14",
        name: "ഗദ്യവായന മലയാളം",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "CLT136",
    name: "MOHAMMED RABEEH MANJERI",
    dars: "DARUL HIDAYA DARS KALARANTHIRI",
    propgrams: [
      {
        code: "JS14",
        name: "ഗദ്യവായന മലയാളം",
        isStage: 1,
        cat: "J",
      },
      {
        code: "JO24",
        name: "ഖത്തുന്നസ്ഖ്",
        cat: "J",
      },
      {
        code: "JO25",
        name: "കേട്ടെഴുത്ത്",
        cat: "J",
      },
      {
        code: "JO27",
        name: "നിഘണ്ടു നിര്‍മ്മാണം",
        cat: "J",
      },
    ],
  },
  {
    chest: "CLT110",
    name: "AFTHAB PARAPPANAGADI",
    dars: "AL AQSA DARS, CHALIYAM",
    propgrams: [
      {
        code: "JS15",
        name: "മുശാഅറ",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "CLT176",
    name: "AMEEN NISHAD KADUNGALLUR",
    dars: "IHSAN DARS PERUMUGHAM",
    propgrams: [
      {
        code: "JS15",
        name: "മുശാഅറ",
        isStage: 1,
        cat: "J",
      },
      {
        code: "JO22",
        name: "സുഡോക്കു",
        cat: "J",
      },
    ],
  },
  {
    chest: "CLT190",
    name: "IBRAHIM BADUSHA M V PERIGANNUR",
    dars: "MACHAKULAM DARAS PULLALUR",
    propgrams: [
      {
        code: "JS16",
        name: "പദപ്പയറ്റ് അറബി",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "CLT173",
    name: "UBAIDULLAH",
    dars: "IHSAN DARS PERUMUGHAM",
    propgrams: [
      {
        code: "JS16",
        name: "പദപ്പയറ്റ് അറബി",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "CLT168",
    name: "SAYED FADIL MUNAFFER",
    dars: "IHSAN DARS PERUMUGHAM",
    propgrams: [
      {
        code: "JS17",
        name: "പദപ്പയറ്റ് ഇംഗ്ലീഷ്",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "CLT108",
    name: "YASEEN KP FEROK",
    dars: "AL AQSA DARS, CHALIYAM",
    propgrams: [
      {
        code: "JS18",
        name: "മദ്ഹുന്നബി",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "CLT187",
    name: "HAFIZ MUHAMMED ANFAS M VAZHIKKADAVU",
    dars: "IHSAN DARS PERUMUGHAM",
    propgrams: [
      {
        code: "JS20",
        name: "മലയാള സമൂഹ ഗാനം",
        isStage: 1,
        cat: "J",
        isGrp: 1,
      },
    ],
  },
  {
    chest: "CLT179",
    name: "HAFIZ MUFLIH A PULIKKAL",
    dars: "IHSAN DARS PERUMUGHAM",
    propgrams: [
      {
        code: "JO21",
        name: "ചിത്രരചന",
        cat: "J",
      },
    ],
  },
  {
    chest: "CLT120",
    name: "MUHAMMED RASHAD THOTTILPALAM",
    dars: "AL MAHLARATHUL JALALIYYA DARS VILLIAPPALLI",
    propgrams: [
      {
        code: "JO21",
        name: "ചിത്രരചന",
        cat: "J",
      },
    ],
  },
  {
    chest: "CLT126",
    name: "MUHAMMED SHANID KOLATHUR",
    dars: "AL MAHLARATHUL JALALIYYA DARS VILLIAPPALLI",
    propgrams: [
      {
        code: "JO22",
        name: "സുഡോക്കു",
        cat: "J",
      },
    ],
  },
  {
    chest: "CLT124",
    name: "IMADUDHEEN CHEMBOD",
    dars: "AL MAHLARATHUL JALALIYYA DARS VILLIAPPALLI",
    propgrams: [
      {
        code: "JO23",
        name: "മെമ്മറി ടെസ്റ്റ്",
        cat: "J",
      },
    ],
  },
  {
    chest: "CLT244",
    name: "AMIR",
    dars: "DARUL HIDAYA DARS KOODATHAYI",
    propgrams: [
      {
        code: "JO23",
        name: "മെമ്മറി ടെസ്റ്റ്",
        cat: "J",
      },
      {
        code: "JO29",
        name: "മലയാള പ്രബന്ധം",
        cat: "J",
      },
    ],
  },
  {
    chest: "CLT186",
    name: "HAFIZ ABID P ARIMBRA",
    dars: "IHSAN DARS PERUMUGHAM",
    propgrams: [
      {
        code: "JO24",
        name: "ഖത്തുന്നസ്ഖ്",
        cat: "J",
      },
    ],
  },
  {
    chest: "CLT184",
    name: "NASIM AFLAH KT THENNALA",
    dars: "IHSAN DARS PERUMUGHAM",
    propgrams: [
      {
        code: "JO26",
        name: "പോസ്റ്റര്‍ ഡിസൈനിംഗ്",
        cat: "J",
      },
    ],
  },
  {
    chest: "CLT171",
    name: "MUHAMMED SINAN CP",
    dars: "IHSAN DARS PERUMUGHAM",
    propgrams: [
      {
        code: "JO28",
        name: "തശ്കീല്‍",
        cat: "J",
      },
    ],
  },
  {
    chest: "CLT135",
    name: "SAHAD MANJERI",
    dars: "DARUL HIDAYA DARS KALARANTHIRI",
    propgrams: [
      {
        code: "JO29",
        name: "മലയാള പ്രബന്ധം",
        cat: "J",
      },
    ],
  },
  {
    chest: "CLT189",
    name: "MUHAMMED NOUFAL.K.A",
    dars: "MACHAKULAM DARAS PULLALUR",
    propgrams: [{}],
  },
  {
    chest: "CLT593",
    name: "HAFIZ MUHAMMED NAJMAL P ATHANIPPADI",
    dars: "IHSAN DARS PERUMUGHAM",
    propgrams: [
      {
        code: "SS1",
        name: "ഖിറാഅത്ത്",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SS3",
        name: "വാങ്ക്",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "CLT514",
    name: "HAFIZ FASIL MANNARKAD",
    dars: "AL AQSA DARS, CHALIYAM",
    propgrams: [
      {
        code: "SS1",
        name: "ഖിറാഅത്ത്",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SS2",
        name: "ഹിഫ്‌ള്",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "CLT553",
    name: "SINAN PEERAMBRA",
    dars: "DARUL HIDAYA DARS KALARANTHIRI",
    propgrams: [
      {
        code: "SS2",
        name: "ഹിഫ്‌ള്",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "CLT564",
    name: "MAJEED",
    dars: "DARUL HIDAYA DARS KOODATHAYI",
    propgrams: [
      {
        code: "SS3",
        name: "വാങ്ക്",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SO34",
        name: "കവിതാ രചന",
        cat: "S",
      },
    ],
  },
  {
    chest: "CLT513",
    name: "ANOOF TP THRIPANACHY",
    dars: "AL AQSA DARS, CHALIYAM",
    propgrams: [
      {
        code: "SS4",
        name: "ക്ലാസ് അവതരണം",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "CLT523",
    name: "SUHAIL AK . PANAMARAM",
    dars: "AL MAHLARATHUL JALALIYYA DARS VILLIAPPALLI",
    propgrams: [
      {
        code: "SS4",
        name: "ക്ലാസ് അവതരണം",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SS20",
        name: "പ്രോഗ്രാം സെറ്റിംഗ്",
        isStage: 1,
        cat: "S",
        isGrp: 1,
      },
    ],
  },
  {
    chest: "CLT603",
    name: "HAFIZ MUHAMMED MURSHID PV VATTAMKULAM",
    dars: "IHSAN DARS PERUMUGHAM",
    propgrams: [
      {
        code: "SS5",
        name: "വഅ്‌ള്",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "CLT501",
    name: "ABDULLAH NABHAN KADANGOD",
    dars: "AL AQSA DARS, CHALIYAM",
    propgrams: [
      {
        code: "SS5",
        name: "വഅ്‌ള്",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SS6",
        name: "പ്രസംഗം മലയാളം",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SS10",
        name: "ഖുഥ്ബ",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SO31",
        name: "റിപ്പോര്‍ട്ടിംഗ്",
        cat: "S",
      },
      {
        code: "SO33",
        name: "മുദ്രവാക്യ രചന",
        cat: "S",
      },
    ],
  },
  {
    chest: "CLT595",
    name: "HAFIZ MUNAWIR ALI P EDAYATTUR",
    dars: "IHSAN DARS PERUMUGHAM",
    propgrams: [
      {
        code: "SS6",
        name: "പ്രസംഗം മലയാളം",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SO34",
        name: "കവിതാ രചന",
        cat: "S",
      },
      {
        code: "SO35",
        name: "നിഘണ്ടു നിര്‍മ്മാണം",
        cat: "S",
      },
    ],
  },
  {
    chest: "CLT609",
    name: "HAFIZ ABDUL RAOOF MUNDAKKULLAM",
    dars: "IHSAN DARS PERUMUGHAM",
    propgrams: [
      {
        code: "SS7",
        name: "പ്രസംഗം അറബി",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "CLT624",
    name: "IRFAN",
    dars: "MANBAU'SSA'ADA DARS MANIYAMBALAM",
    propgrams: [
      {
        code: "SS7",
        name: "പ്രസംഗം അറബി",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "CLT506",
    name: "NOUSHAD KHAN MAYZOOR",
    dars: "AL AQSA DARS, CHALIYAM",
    propgrams: [
      {
        code: "SS8",
        name: "പ്രസംഗം ഉറുദു",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "CLT607",
    name: "HAFIZ PK MUHAMMED CHERUMOTH",
    dars: "IHSAN DARS PERUMUGHAM",
    propgrams: [
      {
        code: "SS8",
        name: "പ്രസംഗം ഉറുദു",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "CLT600",
    name: "HAFIZ MUHAMMED FARSEEN CP KONOMPARA",
    dars: "IHSAN DARS PERUMUGHAM",
    propgrams: [
      {
        code: "SS9",
        name: "പ്രസംഗം ഇംഗ്ലീഷ്",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "CLT627",
    name: "MOHAMMED FASIL MK",
    dars: "MANBAU'SSA'ADA DARS MANIYAMBALAM",
    propgrams: [
      {
        code: "SS9",
        name: "പ്രസംഗം ഇംഗ്ലീഷ്",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SO29",
        name: "പ്രബന്ധം ഇംഗ്ലീഷ്",
        cat: "S",
      },
    ],
  },
  {
    chest: "CLT604",
    name: "HAFIZ SAYYID SHUHAIB SAQHAF KUTTIYADI",
    dars: "IHSAN DARS PERUMUGHAM",
    propgrams: [
      {
        code: "SS10",
        name: "ഖുഥ്ബ",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SS19",
        name: "ഖസ്വീദ പാരായണം",
        isStage: 1,
        cat: "S",
        isGrp: 1,
      },
    ],
  },
  {
    chest: "CLT507",
    name: "SINAN KC THAIKADAPPURAM",
    dars: "AL AQSA DARS, CHALIYAM",
    propgrams: [
      {
        code: "SS11",
        name: "ഗ്രന്ഥ വായന",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SO27",
        name: "വിവര്‍ത്തനം",
        cat: "S",
      },
    ],
  },
  {
    chest: "CLT578",
    name: "MUHAMMAD RAZI PERAMBRA",
    dars: "DARUL HIDAYA DARS ORKKATTERI",
    propgrams: [
      {
        code: "SS11",
        name: "ഗ്രന്ഥ വായന",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SO26",
        name: "വിവര്‍ത്തനം",
        cat: "S",
      },
      {
        code: "SO30",
        name: "പ്രബന്ധം മലയാളം",
        cat: "S",
      },
      {
        code: "SO33",
        name: "മുദ്രവാക്യ രചന",
        cat: "S",
      },
    ],
  },
  {
    chest: "CLT527",
    name: "MUHAMMED SAHAD VAKKODE",
    dars: "AL MAHLARATHUL JALALIYYA DARS VILLIAPPALLI",
    propgrams: [
      {
        code: "SS12",
        name: "കവിതാലാപനം മലയാളം",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SS17",
        name: "പാടിപ്പറയല്‍",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "CLT515",
    name: "SAYYID AMEEN THANGHAL VT VALANJERI",
    dars: "AL AQSA DARS, CHALIYAM",
    propgrams: [
      {
        code: "SS12",
        name: "കവിതാലാപനം മലയാളം",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "CLT562",
    name: "NOUFAL KALANTHOD",
    dars: "DARUL HIDAYA DARS KALARANTHIRI",
    propgrams: [
      {
        code: "SS13",
        name: "മുശാഅറ",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SS17",
        name: "പാടിപ്പറയല്‍",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SS18",
        name: "മാഷപ്പ് മാപ്പിളപ്പാട്ട്",
        isStage: 1,
        cat: "S",
        isGrp: 1,
      },
    ],
  },
  {
    chest: "CLT577",
    name: "MUHAMMED UNAIS THANIYAMPURAM",
    dars: "DARUL HIDAYA DARS ORKKATTERI",
    propgrams: [
      {
        code: "SS13",
        name: "മുശാഅറ",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "CLT518",
    name: "FAYIZ MAVANDIYOOR",
    dars: "AL AQSA DARS, CHALIYAM",
    propgrams: [
      {
        code: "SS14",
        name: "അനൗണ്‍സ്‌മെന്റ്",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SS20",
        name: "പ്രോഗ്രാം സെറ്റിംഗ്",
        isStage: 1,
        cat: "S",
        isGrp: 1,
      },
    ],
  },
  {
    chest: "CLT594",
    name: "MUHAMMED KAMIL MUBARAK .M PALLIKKAL BAZAR",
    dars: "IHSAN DARS PERUMUGHAM",
    propgrams: [
      {
        code: "SS14",
        name: "അനൗണ്‍സ്‌മെന്റ്",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "CLT509",
    name: "SAMAD FEROK",
    dars: "AL AQSA DARS, CHALIYAM",
    propgrams: [
      {
        code: "SS15",
        name: "പ്രബന്ധാവതരണം",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SS16",
        name: "നിമിഷപ്രസംഗം",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "CLT529",
    name: "MUHAMMED SAHAL TK VADAYAM",
    dars: "AL MAHLARATHUL JALALIYYA DARS VILLIAPPALLI",
    propgrams: [
      {
        code: "SS15",
        name: "പ്രബന്ധാവതരണം",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SO30",
        name: "പ്രബന്ധം മലയാളം",
        cat: "S",
      },
      {
        code: "SO36",
        name: "അടിക്കുറിപ്പ്",
        cat: "S",
      },
    ],
  },
  {
    chest: "CLT528",
    name: "HAFIZ MUHAMMED MIDLAJ",
    dars: "AL MAHLARATHUL JALALIYYA DARS VILLIAPPALLI",
    propgrams: [
      {
        code: "SS16",
        name: "നിമിഷപ്രസംഗം",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SO27",
        name: "വിവര്‍ത്തനം",
        cat: "S",
      },
      {
        code: "SO37",
        name: "പദ സമ്പാദനം",
        cat: "S",
      },
    ],
  },
  {
    chest: "CLT521",
    name: "FATHAH TRISSUR",
    dars: "AL AQSA DARS, CHALIYAM",
    propgrams: [
      {
        code: "SS18",
        name: "മാഷപ്പ് മാപ്പിളപ്പാട്ട്",
        isStage: 1,
        cat: "S",
        isGrp: 1,
      },
      {
        code: "SS19",
        name: "ഖസ്വീദ പാരായണം",
        isStage: 1,
        cat: "S",
        isGrp: 1,
      },
    ],
  },
  {
    chest: "CLT576",
    name: "ANSHITH PERAMBRA",
    dars: "DARUL HIDAYA DARS ORKKATTERI",
    propgrams: [
      {
        code: "SO21",
        name: "അറബിക് കാലിഗ്രഫി",
        cat: "S",
      },
      {
        code: "SO22",
        name: "പോസ്റ്റര്‍ ഡിസൈനിംഗ്",
        cat: "S",
      },
    ],
  },
  {
    chest: "CLT526",
    name: "MUHAMMED SHIBILI. PUTHUPPANAM",
    dars: "AL MAHLARATHUL JALALIYYA DARS VILLIAPPALLI",
    propgrams: [
      {
        code: "SO21",
        name: "അറബിക് കാലിഗ്രഫി",
        cat: "S",
      },
      {
        code: "SO23",
        name: "ഖത്തുന്നസ്ഖ്",
        cat: "S",
      },
    ],
  },
  {
    chest: "CLT596",
    name: "HAFIZ MUHAMMAD MIDLAJ K KAMBURAM",
    dars: "IHSAN DARS PERUMUGHAM",
    propgrams: [
      {
        code: "SO22",
        name: "പോസ്റ്റര്‍ ഡിസൈനിംഗ്",
        cat: "S",
      },
      {
        code: "SO24",
        name: "ഖത്തുറുഖഈ",
        cat: "S",
      },
    ],
  },
  {
    chest: "CLT503",
    name: "ISAQUE.T PUNJAVI ,KANHANGHAD",
    dars: "AL AQSA DARS, CHALIYAM",
    propgrams: [
      {
        code: "SO25",
        name: "വിവര്‍ത്തനം",
        cat: "S",
      },
      {
        code: "SO26",
        name: "വിവര്‍ത്തനം",
        cat: "S",
      },
    ],
  },
  {
    chest: "CLT567",
    name: "NISAMUDHEEN",
    dars: "DARUL HIDAYA DARS ORKKATTERI",
    propgrams: [
      {
        code: "SO25",
        name: "വിവര്‍ത്തനം",
        cat: "S",
      },
    ],
  },
  {
    chest: "CLT524",
    name: "MOHAMMED SHAHIN SULTHAN.MANGALAPURAM",
    dars: "AL MAHLARATHUL JALALIYYA DARS VILLIAPPALLI",
    propgrams: [
      {
        code: "SO28",
        name: "പ്രബന്ധം അറബി",
        cat: "S",
      },
      {
        code: "SO29",
        name: "പ്രബന്ധം ഇംഗ്ലീഷ്",
        cat: "S",
      },
    ],
  },
  {
    chest: "CLT625",
    name: "SAFEER AMEEN",
    dars: "MANBAU'SSA'ADA DARS MANIYAMBALAM",
    propgrams: [
      {
        code: "SO31",
        name: "റിപ്പോര്‍ട്ടിംഗ്",
        cat: "S",
      },
    ],
  },
  {
    chest: "CLT599",
    name: "HAFIZ ABDUL BASITH PULAMANTHOL",
    dars: "IHSAN DARS PERUMUGHAM",
    propgrams: [
      {
        code: "SO32",
        name: "തലവാചക നിര്‍മ്മാണം",
        cat: "S",
      },
    ],
  },
  {
    chest: "CLT650",
    name: "AJSAL",
    dars: "BUSTHANUL HUDABA DARS ODUMBRA",
    propgrams: [
      {
        code: "SO32",
        name: "തലവാചക നിര്‍മ്മാണം",
        cat: "S",
      },
    ],
  },
  {
    chest: "CLT635",
    name: "MUHAMED ASRIJ LATHEEF",
    dars: "MAKHDOOMIA MARKAZUL ULAMA DARS KUNHIPALLI",
    propgrams: [
      {
        code: "SO36",
        name: "അടിക്കുറിപ്പ്",
        cat: "S",
      },
    ],
  },
  {
    chest: "CLT554",
    name: "MUHAMMAD ASLAM PERAMBRA",
    dars: "DARUL HIDAYA DARS KALARANTHIRI",
    propgrams: [
      {
        code: "SO37",
        name: "പദ സമ്പാദനം",
        cat: "S",
      },
    ],
  },
  {
    chest: "CLT551",
    name: "MUHAMMAD SHAMIL PADINJATTUMURI",
    dars: "DARUL HIDAYA DARS KALARANTHIRI",
    propgrams: [
      {
        code: "SO38",
        name: "തശ്കീല്‍",
        cat: "S",
      },
    ],
  },
  {
    chest: "CLT597",
    name: "HAFIZ MAHMOODUL ANSAR CP ALIPPARAMBA",
    dars: "IHSAN DARS PERUMUGHAM",
    propgrams: [
      {
        code: "SO38",
        name: "തശ്കീല്‍",
        cat: "S",
      },
    ],
  },
  {
    chest: "CLT583",
    name: "MUHAMMAD RASAL MUTHUBADATHUR",
    dars: "DARUL HIDAYA DARS ORKKATTERI",
    propgrams: [
      {
        code: "SO39",
        name: "പ്രശ്‌നോത്തരി",
        cat: "S",
      },
    ],
  },
  {
    chest: "CLT535",
    name: "HAFIZ RISAL KANNAMBATHKARA",
    dars: "AL MAHLARATHUL JALALIYYA DARS VILLIAPPALLI",
    propgrams: [
      {
        code: "SO39",
        name: "പ്രശ്‌നോത്തരി",
        cat: "S",
      },
    ],
  },
  {
    chest: "CLT508",
    name: "FASIL AG KUNNUMKAI",
    dars: "AL AQSA DARS, CHALIYAM",
    propgrams: [
      {
        code: "SO40",
        name: "പത്രനിര്‍മാണം",
        cat: "S",
        isGrp: 1,
      },
    ],
  },
  {
    chest: "CLT598",
    name: "HAFIZ MUHAMMED FAVAS TK MANJERI",
    dars: "IHSAN DARS PERUMUGHAM",
    propgrams: [
      {
        code: "SO40",
        name: "പത്രനിര്‍മാണം",
        cat: "S",
        isGrp: 1,
      },
    ],
  },
  {
    chest: "PKD184",
    name: "HAFIZ MUHAMMED SHAMIL P NILAMBUR",
    dars: "MA'DINUL ULOOM DARS",
    propgrams: [
      {
        code: "JS1",
        name: "ഖിറാഅത്ത്",
        isStage: 1,
        cat: "J",
        publish: 1,
      },
      {
        code: "JS2",
        name: "ഹിഫ്‌ള്",
        isStage: 1,
        cat: "J",
        publish: 1,
      },
    ],
  },
  {
    chest: "PKD156",
    name: "MUHAMMED ADHIL RAHMAN CP PALLIKKUNNU",
    dars: "KMIC DARS THEYYOTUCHIRA",
    propgrams: [
      {
        code: "JS1",
        name: "ഖിറാഅത്ത്",
        isStage: 1,
        cat: "J",
        publish: 1,
      },
      {
        code: "JS9",
        name: "ഗാനം അറബി",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "PKD198",
    name: "SALMAN FARIS P PONNANI",
    dars: "MAKHDOOMIYYA DARS VILATHUR",
    propgrams: [
      {
        code: "JS2",
        name: "ഹിഫ്‌ള്",
        isStage: 1,
        cat: "J",
        publish: 1,
      },
    ],
  },
  {
    chest: "PKD176",
    name: "MUHAMMED MURSHID P",
    dars: "KUMARAMPUTHUR DARS PALLIKKUNNU",
    propgrams: [
      {
        code: "JS3",
        name: "വാങ്ക്",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "PKD276",
    name: "MUBASHIR ALI",
    dars: "VANDUMTHARA DARAS",
    propgrams: [
      {
        code: "JS3",
        name: "വാങ്ക്",
        isStage: 1,
        cat: "J",
      },
      {
        code: "JS12",
        name: "ഗാനം ഉറുദു",
        isStage: 1,
        cat: "J",
      },
      {
        code: "JS20",
        name: "മലയാള സമൂഹ ഗാനം",
        isStage: 1,
        cat: "J",
        isGrp: 1,
      },
    ],
  },
  {
    chest: "PKD260",
    name: "MUHAMMED SHAMIL.A",
    dars: "NTSA DARS MUNDATHPALLI",
    propgrams: [
      {
        code: "JS4",
        name: "പ്രസംഗം അറബി",
        isStage: 1,
        cat: "J",
      },
      {
        code: "JO23",
        name: "മെമ്മറി ടെസ്റ്റ്",
        cat: "J",
      },
    ],
  },
  {
    chest: "PKD155",
    name: "MOHAMMED SHABAB K NATTUKAL",
    dars: "KMIC DARS THEYYOTUCHIRA",
    propgrams: [
      {
        code: "JS4",
        name: "പ്രസംഗം അറബി",
        isStage: 1,
        cat: "J",
      },
      {
        code: "JS5",
        name: "പ്രസംഗം മലയാളം",
        isStage: 1,
        cat: "J",
      },
      {
        code: "JO28",
        name: "തശ്കീല്‍",
        cat: "J",
      },
    ],
  },
  {
    chest: "PKD207",
    name: "MUHAMMED SHANIL.P MAVANDIYOOR",
    dars: "MAKHDOOMIYYA DARS VILATHUR",
    propgrams: [
      {
        code: "JS5",
        name: "പ്രസംഗം മലയാളം",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "PKD224",
    name: "MOHAMMED ARAFATH PU",
    dars: "MARKAZUL ULAMA DARS AMAYOOR",
    propgrams: [
      {
        code: "JS6",
        name: "പ്രസംഗം ഉറുദു",
        isStage: 1,
        cat: "J",
      },
      {
        code: "JS17",
        name: "പദപ്പയറ്റ് ഇംഗ്ലീഷ്",
        isStage: 1,
        cat: "J",
      },
      {
        code: "JO30",
        name: "പ്രശ്‌നോത്തരി",
        cat: "J",
      },
    ],
  },
  {
    chest: "PKD149",
    name: "MOHAMMED ZAYAN.P",
    dars: "KMIC DARS THEYYOTUCHIRA",
    propgrams: [
      {
        code: "JS6",
        name: "പ്രസംഗം ഉറുദു",
        isStage: 1,
        cat: "J",
      },
      {
        code: "JS12",
        name: "ഗാനം ഉറുദു",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "PKD193",
    name: "MUHAMMED SWALIH CP CHERIKKAPPADAM",
    dars: "MA'DINUL ULOOM DARS",
    propgrams: [
      {
        code: "JS7",
        name: "പ്രസംഗം ഇംഗ്ലീഷ്",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "PKD208",
    name: "MUHAMMED SINAN VALANCHERY",
    dars: "MAKHDOOMIYYA DARS VILATHUR",
    propgrams: [
      {
        code: "JS7",
        name: "പ്രസംഗം ഇംഗ്ലീഷ്",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "PKD258",
    name: "MUHAMMED SAHAL.ET",
    dars: "NTSA DARS MUNDATHPALLI",
    propgrams: [
      {
        code: "JS8",
        name: "ഗ്രന്ഥവായന",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "PKD283",
    name: "MUHAMMED ALTHAF OTTAPPALAM",
    dars: "VANDUMTHARA DARAS",
    propgrams: [
      {
        code: "JS8",
        name: "ഗ്രന്ഥവായന",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "PKD296",
    name: "MUHAMMED ARSHAD K",
    dars: "KUMARAMPUTHUR DARS PALLIKKUNNU",
    propgrams: [
      {
        code: "JS9",
        name: "ഗാനം അറബി",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "PKD242",
    name: "MUHAMMED SUFIYAN",
    dars: "MISWBAHUL HUDA DARS MOLOOR",
    propgrams: [
      {
        code: "JS10",
        name: "മാപ്പിളപ്പാട്ട്",
        isStage: 1,
        cat: "J",
      },
      {
        code: "JS11",
        name: "മാലപ്പാട്ട്",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "PKD209",
    name: "MUHAMMED YASIR. PP EDAYOOR",
    dars: "MAKHDOOMIYYA DARS VILATHUR",
    propgrams: [
      {
        code: "JS10",
        name: "മാപ്പിളപ്പാട്ട്",
        isStage: 1,
        cat: "J",
      },
      {
        code: "JS11",
        name: "മാലപ്പാട്ട്",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "PKD320",
    name: "SINAN",
    dars: "ANSAR DARS",
    propgrams: [
      {
        code: "JS13",
        name: "കഥ പറച്ചില്‍",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "PKD284",
    name: "MUHAMMED BISHR MANARKKAD",
    dars: "VANDUMTHARA DARAS",
    propgrams: [
      {
        code: "JS13",
        name: "കഥ പറച്ചില്‍",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "PKD118",
    name: "MUHAMMED SHAMSAD.S",
    dars: "AL MARJAN DARS KALLADIKKODE",
    propgrams: [
      {
        code: "JS14",
        name: "ഗദ്യവായന മലയാളം",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "PKD215",
    name: "HUSAIN NAFATHULLAH. TP. EDERAM",
    dars: "MQSA KOTTOPADAM",
    propgrams: [
      {
        code: "JS14",
        name: "ഗദ്യവായന മലയാളം",
        isStage: 1,
        cat: "J",
      },
      {
        code: "JO22",
        name: "സുഡോക്കു",
        cat: "J",
      },
      {
        code: "JO24",
        name: "ഖത്തുന്നസ്ഖ്",
        cat: "J",
      },
    ],
  },
  {
    chest: "PKD161",
    name: "MUHAMMED YAHYA KP ODAMALA",
    dars: "KMIC DARS THEYYOTUCHIRA",
    propgrams: [
      {
        code: "JS15",
        name: "മുശാഅറ",
        isStage: 1,
        cat: "J",
      },
      {
        code: "JO27",
        name: "നിഘണ്ടു നിര്‍മ്മാണം",
        cat: "J",
      },
    ],
  },
  {
    chest: "PKD289",
    name: "MUHAMMED SHAHAL P MELMURI",
    dars: "VANDUMTHARA DARAS",
    propgrams: [
      {
        code: "JS15",
        name: "മുശാഅറ",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "PKD146",
    name: "MUHAMMED YASIR MP PANNIYAMKURISHI",
    dars: "IRSHADU THWALABA DARS CHERPULASSERY",
    propgrams: [
      {
        code: "JS16",
        name: "പദപ്പയറ്റ് അറബി",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "PKD154",
    name: "AFNAN.M VENGOOR",
    dars: "KMIC DARS THEYYOTUCHIRA",
    propgrams: [
      {
        code: "JS16",
        name: "പദപ്പയറ്റ് അറബി",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "PKD152",
    name: "MUHAMMED RABEEH NP",
    dars: "KMIC DARS THEYYOTUCHIRA",
    propgrams: [
      {
        code: "JS17",
        name: "പദപ്പയറ്റ് ഇംഗ്ലീഷ്",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "PKD229",
    name: "MUHAMMED RAMEES PULASSERY",
    dars: "MARKAZUL ULAMA DARS AMAYOOR",
    propgrams: [
      {
        code: "JS18",
        name: "മദ്ഹുന്നബി",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "PKD200",
    name: "MOHAMMED ANSAF. PT THIRUVEGAPURAM",
    dars: "MAKHDOOMIYYA DARS VILATHUR",
    propgrams: [
      {
        code: "JS18",
        name: "മദ്ഹുന്നബി",
        isStage: 1,
        cat: "J",
      },
    ],
  },
  {
    chest: "PKD196",
    name: "ABDULLA RISHAM",
    dars: "MAKHDOOMIYYA DARS VILATHUR",
    propgrams: [
      {
        code: "JS19",
        name: "അറബി സംഘഗാനം",
        isStage: 1,
        cat: "J",
        isGrp: 1,
      },
      {
        code: "JS20",
        name: "മലയാള സമൂഹ ഗാനം",
        isStage: 1,
        cat: "J",
        isGrp: 1,
      },
    ],
  },
  {
    chest: "PKD104",
    name: "KAJA MUEENUDHEEN M KUZHALMANNAM",
    dars: "AL AQSA DARS VELLUVAMBUZHA",
    propgrams: [
      {
        code: "JO21",
        name: "ചിത്രരചന",
        cat: "J",
      },
    ],
  },
  {
    chest: "PKD305",
    name: "MUHAMMED BILAL",
    dars: "MADEENATHUL ILM THEKKUMMALA",
    propgrams: [
      {
        code: "JO21",
        name: "ചിത്രരചന",
        cat: "J",
      },
    ],
  },
  {
    chest: "PKD197",
    name: "MANSOOR P PONNANI",
    dars: "MAKHDOOMIYYA DARS VILATHUR",
    propgrams: [
      {
        code: "JO22",
        name: "സുഡോക്കു",
        cat: "J",
      },
    ],
  },
  {
    chest: "PKD329",
    name: "BIN SAIF",
    dars: "NIBRASUL ULOOM",
    propgrams: [
      {
        code: "JO23",
        name: "മെമ്മറി ടെസ്റ്റ്",
        cat: "J",
      },
    ],
  },
  {
    chest: "PKD202",
    name: "MUHAMMAD SAJAS PERUMBILAV",
    dars: "MAKHDOOMIYYA DARS VILATHUR",
    propgrams: [
      {
        code: "JO26",
        name: "പോസ്റ്റര്‍ ഡിസൈനിംഗ്",
        cat: "J",
      },
    ],
  },
  {
    chest: "PKD219",
    name: "MUHAMMAD DILSHAD. KP. PALLIKKUNNU",
    dars: "MQSA KOTTOPADAM",
    propgrams: [
      {
        code: "JO27",
        name: "നിഘണ്ടു നിര്‍മ്മാണം",
        cat: "J",
      },
      {
        code: "JO29",
        name: "മലയാള പ്രബന്ധം",
        cat: "J",
      },
    ],
  },
  {
    chest: "PKD683",
    name: "MIDLAJ",
    dars: "ANSAR DARS",
    propgrams: [
      {
        code: "SS1",
        name: "ഖിറാഅത്ത്",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "PKD555",
    name: "MUHAMMED SWALIH C",
    dars: "KUMARAMPUTHUR DARS PALLIKKUNNU",
    propgrams: [
      {
        code: "SS1",
        name: "ഖിറാഅത്ത്",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SS3",
        name: "വാങ്ക്",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "PKD667",
    name: "MUHAMMED AMEEN K",
    dars: "MQSA NELLAYA",
    propgrams: [
      {
        code: "SS2",
        name: "ഹിഫ്‌ള്",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "PKD548",
    name: "MUHAMMED JUNAID. MP",
    dars: "KOUKABU THULABA DARS VALLAPUZHA",
    propgrams: [
      {
        code: "SS2",
        name: "ഹിഫ്‌ള്",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SO37",
        name: "പദ സമ്പാദനം",
        cat: "S",
      },
    ],
  },
  {
    chest: "PKD517",
    name: "AFSAL VALLAPUZHA",
    dars: "KUMARAMPUTHUR DARS PALLIKKUNNU",
    propgrams: [
      {
        code: "SS3",
        name: "വാങ്ക്",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "PKD594",
    name: "ABDURAHMAN. AK. CHAVAKKAD",
    dars: "MQSA KOTTOPADAM",
    propgrams: [
      {
        code: "SS4",
        name: "ക്ലാസ് അവതരണം",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SS13",
        name: "മുശാഅറ",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SS18",
        name: "മാഷപ്പ് മാപ്പിളപ്പാട്ട്",
        isStage: 1,
        cat: "S",
        isGrp: 1,
      },
    ],
  },
  {
    chest: "PKD615",
    name: "ABDUL HASEEB P",
    dars: "MISWBAHUL HUDA DARS MOLOOR",
    propgrams: [
      {
        code: "SS4",
        name: "ക്ലാസ് അവതരണം",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SS10",
        name: "ഖുഥ്ബ",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SS15",
        name: "പ്രബന്ധാവതരണം",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SO29",
        name: "പ്രബന്ധം ഇംഗ്ലീഷ്",
        cat: "S",
      },
      {
        code: "SO30",
        name: "പ്രബന്ധം മലയാളം",
        cat: "S",
      },
      {
        code: "SO31",
        name: "റിപ്പോര്‍ട്ടിംഗ്",
        cat: "S",
      },
    ],
  },
  {
    chest: "PKD695",
    name: "SHAFI",
    dars: "NIBRASUL ULOOM",
    propgrams: [
      {
        code: "SS5",
        name: "വഅ്‌ള്",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "PKD634",
    name: "MUHAMMAD FAISAL KURUVATTOOR",
    dars: "SABEELUSSALAM DARS KURUVATTOOR",
    propgrams: [
      {
        code: "SS5",
        name: "വഅ്‌ള്",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SS10",
        name: "ഖുഥ്ബ",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "PKD696",
    name: "AHMED SALEEM",
    dars: "NIBRASUL ULOOM",
    propgrams: [
      {
        code: "SS6",
        name: "പ്രസംഗം മലയാളം",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "PKD588",
    name: "FAYAS MUBASHEER.K MAVANDIYOOR",
    dars: "MAKHDOOMIYYA DARS VILATHUR",
    propgrams: [
      {
        code: "SS6",
        name: "പ്രസംഗം മലയാളം",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SS16",
        name: "നിമിഷപ്രസംഗം",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SO39",
        name: "പ്രശ്‌നോത്തരി",
        cat: "S",
      },
    ],
  },
  {
    chest: "PKD673",
    name: "ABDU RAHEEM K",
    dars: "MQSA NELLAYA",
    propgrams: [
      {
        code: "SS7",
        name: "പ്രസംഗം അറബി",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "PKD581",
    name: "MUHAMMED MUHSIN PC",
    dars: "MAKHDOOMIYYA DARS VILATHUR",
    propgrams: [
      {
        code: "SS7",
        name: "പ്രസംഗം അറബി",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "PKD551",
    name: "ABDHU NASSIR K",
    dars: "KUMARAMPUTHUR DARS PALLIKKUNNU",
    propgrams: [
      {
        code: "SS8",
        name: "പ്രസംഗം ഉറുദു",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "PKD586",
    name: "SAYED MUHAMMED VK",
    dars: "MAKHDOOMIYYA DARS VILATHUR",
    propgrams: [
      {
        code: "SS8",
        name: "പ്രസംഗം ഉറുദു",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "PKD603",
    name: "MOHAMMED SALIH VP KONDOORKARA",
    dars: "MARKAZUL ULAMA DARS AMAYOOR",
    propgrams: [
      {
        code: "SS9",
        name: "പ്രസംഗം ഇംഗ്ലീഷ്",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SO29",
        name: "പ്രബന്ധം ഇംഗ്ലീഷ്",
        cat: "S",
      },
    ],
  },
  {
    chest: "PKD583",
    name: "MUHAMMED SINAN KT VENGAD",
    dars: "MAKHDOOMIYYA DARS VILATHUR",
    propgrams: [
      {
        code: "SS9",
        name: "പ്രസംഗം ഇംഗ്ലീഷ്",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "PKD624",
    name: "ABDUL SALEEM.P",
    dars: "NTSA DARS MUNDATHPALLI",
    propgrams: [
      {
        code: "SS11",
        name: "ഗ്രന്ഥ വായന",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "PKD514",
    name: "MUHAMMED SHAH JOUHAR",
    dars: "AL MARJAN DARS KALLADIKKODE",
    propgrams: [
      {
        code: "SS11",
        name: "ഗ്രന്ഥ വായന",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "PKD542",
    name: "MUHAMMED SWALIH KM OLINKARA",
    dars: "KMIC DARS THEYYOTUCHIRA",
    propgrams: [
      {
        code: "SS12",
        name: "കവിതാലാപനം മലയാളം",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "PKD661",
    name: "SHAKIR ALI",
    dars: "VANDUMTHARA DARAS",
    propgrams: [
      {
        code: "SS12",
        name: "കവിതാലാപനം മലയാളം",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "PKD611",
    name: "SHAKIR VALLAPUZHA",
    dars: "MARKAZUL ULAMA DARS AMAYOOR",
    propgrams: [
      {
        code: "SS13",
        name: "മുശാഅറ",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "PKD597",
    name: "HAHEEB RAHMATHULLAH.TP. EDERAM",
    dars: "MQSA KOTTOPADAM",
    propgrams: [
      {
        code: "SS14",
        name: "അനൗണ്‍സ്‌മെന്റ്",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SO33",
        name: "മുദ്രവാക്യ രചന",
        cat: "S",
      },
    ],
  },
  {
    chest: "PKD656",
    name: "SHIHAD EDAPPALAM",
    dars: "VANDUMTHARA DARAS",
    propgrams: [
      {
        code: "SS14",
        name: "അനൗണ്‍സ്‌മെന്റ്",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "PKD562",
    name: "ABDULLA SABIR KK PUTHOOR",
    dars: "MA'DINUL ULOOM DARS",
    propgrams: [
      {
        code: "SS15",
        name: "പ്രബന്ധാവതരണം",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SO37",
        name: "പദ സമ്പാദനം",
        cat: "S",
      },
    ],
  },
  {
    chest: "PKD541",
    name: "SIMSARUL HAQU AT MANNARMALA",
    dars: "KMIC DARS THEYYOTUCHIRA",
    propgrams: [
      {
        code: "SS16",
        name: "നിമിഷപ്രസംഗം",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "PKD572",
    name: "MUHAMMED SALIH C PERINTHALMANNA",
    dars: "MA'DINUL ULOOM DARS",
    propgrams: [
      {
        code: "SS17",
        name: "പാടിപ്പറയല്‍",
        isStage: 1,
        cat: "S",
      },
    ],
  },
  {
    chest: "PKD591",
    name: "MUHAMMED AFSAL AM (GURUVAAYOOR)",
    dars: "MAKHDOOMIYYA DARS VILATHUR",
    propgrams: [
      {
        code: "SS17",
        name: "പാടിപ്പറയല്‍",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SS20",
        name: "പ്രോഗ്രാം സെറ്റിംഗ്",
        isStage: 1,
        cat: "S",
        isGrp: 1,
      },
    ],
  },
  {
    chest: "PKD575",
    name: "ABDUL RAHMAN VILATHUR",
    dars: "MAKHDOOMIYYA DARS VILATHUR",
    propgrams: [
      {
        code: "SS18",
        name: "മാഷപ്പ് മാപ്പിളപ്പാട്ട്",
        isStage: 1,
        cat: "S",
        isGrp: 1,
      },
      {
        code: "SS19",
        name: "ഖസ്വീദ പാരായണം",
        isStage: 1,
        cat: "S",
        isGrp: 1,
      },
      {
        code: "SO24",
        name: "ഖത്തുറുഖഈ",
        cat: "S",
      },
      {
        code: "SO35",
        name: "നിഘണ്ടു നിര്‍മ്മാണം",
        cat: "S",
      },
    ],
  },
  {
    chest: "PKD649",
    name: "MINHAJ PULAMANTHOLE",
    dars: "VANDUMTHARA DARAS",
    propgrams: [
      {
        code: "SS19",
        name: "ഖസ്വീദ പാരായണം",
        isStage: 1,
        cat: "S",
        isGrp: 1,
      },
    ],
  },
  {
    chest: "PKD561",
    name: "ABDULLA DILSHAD P KUTTIPPARA",
    dars: "MA'DINUL ULOOM DARS",
    propgrams: [
      {
        code: "SS20",
        name: "പ്രോഗ്രാം സെറ്റിംഗ്",
        isStage: 1,
        cat: "S",
        isGrp: 1,
      },
    ],
  },
  {
    chest: "PKD593",
    name: "NASEEB RAHMAN. TIRUR",
    dars: "MQSA KOTTOPADAM",
    propgrams: [
      {
        code: "SO21",
        name: "അറബിക് കാലിഗ്രഫി",
        cat: "S",
      },
    ],
  },
  {
    chest: "PKD589",
    name: "MUHAMMAD MUSTHAFA",
    dars: "MAKHDOOMIYYA DARS VILATHUR",
    propgrams: [
      {
        code: "SO21",
        name: "അറബിക് കാലിഗ്രഫി",
        cat: "S",
      },
      {
        code: "SO22",
        name: "പോസ്റ്റര്‍ ഡിസൈനിംഗ്",
        cat: "S",
      },
    ],
  },
  {
    chest: "PKD616",
    name: "MUHAMMED MUFEED",
    dars: "MISWBAHUL HUDA DARS MOLOOR",
    propgrams: [
      {
        code: "SO23",
        name: "ഖത്തുന്നസ്ഖ്",
        cat: "S",
      },
    ],
  },
  {
    chest: "PKD537",
    name: "MOHAMMED KASIM P NELLIPARAMBU",
    dars: "KMIC DARS THEYYOTUCHIRA",
    propgrams: [
      {
        code: "SO23",
        name: "ഖത്തുന്നസ്ഖ്",
        cat: "S",
      },
      {
        code: "SO38",
        name: "തശ്കീല്‍",
        cat: "S",
      },
    ],
  },
  {
    chest: "PKD627",
    name: "HARIS.K",
    dars: "NTSA DARS MUNDATHPALLI",
    propgrams: [
      {
        code: "SO25",
        name: "വിവര്‍ത്തനം",
        cat: "S",
      },
    ],
  },
  {
    chest: "PKD523",
    name: "MUHAMMED MIDLAJ C MARAYAMANGALAM",
    dars: "BAHJATHUL HIDAYA DARS WEST KODUMUNDA",
    propgrams: [
      {
        code: "SO26",
        name: "വിവര്‍ത്തനം",
        cat: "S",
      },
    ],
  },
  {
    chest: "PKD570",
    name: "MUHAMMED MUBASHIR M MELE ARIYOOR",
    dars: "MA'DINUL ULOOM DARS",
    propgrams: [
      {
        code: "SO28",
        name: "പ്രബന്ധം അറബി",
        cat: "S",
      },
    ],
  },
  {
    chest: "PKD676",
    name: "MUHAMMED ADHIL",
    dars: "MADEENATHUL ILM THEKKUMMALA",
    propgrams: [
      {
        code: "SO30",
        name: "പ്രബന്ധം മലയാളം",
        cat: "S",
      },
    ],
  },
  {
    chest: "PKD601",
    name: "SHABEER ALI. VP. KARAKIRSHI",
    dars: "MQSA KOTTOPADAM",
    propgrams: [
      {
        code: "SO31",
        name: "റിപ്പോര്‍ട്ടിംഗ്",
        cat: "S",
      },
    ],
  },
  {
    chest: "PKD573",
    name: "MUHAMMED SHAFI MK",
    dars: "MA'DINUL ULOOM DARS",
    propgrams: [
      {
        code: "SO32",
        name: "തലവാചക നിര്‍മ്മാണം",
        cat: "S",
      },
    ],
  },
  {
    chest: "PKD530",
    name: "MOHAMMED MURSHID AK. NELLAYA",
    dars: "IRSHADU THWALABA DARS CHERPULASSERY",
    propgrams: [
      {
        code: "SO34",
        name: "കവിതാ രചന",
        cat: "S",
      },
    ],
  },
  {
    chest: "PKD604",
    name: "MUHAMMED JALAL PULASSERY",
    dars: "MARKAZUL ULAMA DARS AMAYOOR",
    propgrams: [
      {
        code: "SO35",
        name: "നിഘണ്ടു നിര്‍മ്മാണം",
        cat: "S",
      },
      {
        code: "SO39",
        name: "പ്രശ്‌നോത്തരി",
        cat: "S",
      },
    ],
  },
  {
    chest: "PKD642",
    name: "MUHAMMED MUZAMMIL MOORKKANAD",
    dars: "SABEELUSSALAM DARS KURUVATTOOR",
    propgrams: [
      {
        code: "SO35",
        name: "നിഘണ്ടു നിര്‍മ്മാണം",
        cat: "S",
      },
    ],
  },
  {
    chest: "PKD628",
    name: "MUHAMMED JASEEL.P",
    dars: "NTSA DARS MUNDATHPALLI",
    propgrams: [
      {
        code: "SO36",
        name: "അടിക്കുറിപ്പ്",
        cat: "S",
      },
    ],
  },
  {
    chest: "PKD598",
    name: "MUHAMMAD AFEEF.PC ARAPPARA",
    dars: "MQSA KOTTOPADAM",
    propgrams: [
      {
        code: "SO36",
        name: "അടിക്കുറിപ്പ്",
        cat: "S",
      },
    ],
  },
  {
    chest: "PKD548",
    name: "MUHAMMED JUNAID. MP NATTYAMANGALAM",
    dars: "KOUKABU THULABA DARS VALLAPUZHA",
    propgrams: [
      {
        code: "SS2",
        name: "ഹിഫ്‌ള്",
        isStage: 1,
        cat: "S",
      },
      {
        code: "SO37",
        name: "പദ സമ്പാദനം",
        cat: "S",
      },
    ],
  },
  {
    chest: "PKD577",
    name: "FAYAS MUBASHEER K",
    dars: "MAKHDOOMIYYA DARS VILATHUR",
    propgrams: [
      {
        code: "SO40",
        name: "പത്രനിര്‍മാണം",
        cat: "S",
        isGrp: 1,
      },
    ],
  },
];

let filterData = (key) => {
  // let dataInfo = document.querySelector(".dataInfo");
  // // Matching Data
  // let finalData = studentData.filter((value) => value.section == key);

  // // returns Complete Database is `$key` Doesn't Exsist
  // if (!key) {
  //   finalData = studentData;
  //   dataInfo.style.opacity = "0";
  // } else {
  //   dataInfo.style.opacity = "1";
  // }
  // // <p class="heading">Member Identity Card</p>
  // //               <p class="isActive">${memType} Member</p>
  // // Creating HTML
  let layout = "";
  // var layout = document.querySelector("main").innerHTML
  function checkIfImageExists(url, callback) {
    const img = new Image();
    img.src = url;

    if (img.complete) {
      callback(true);
    } else {
      img.onload = () => {
        callback(true);
      };

      img.onerror = () => {
        callback(false);
      };
    }
  }

  // USAGE

  var availableImage = "";
  studentData.forEach(({ name, dars, propgrams, chest }) => {
    let image = `./img/${chest}.jpg`
    // let image = `./res/nouserEdited.png`;
    //   fetch(`./data/img/${section + "/" + adNo}.jpg`).then((res)=>{imageAvailable=`./data/img/${section + "/" + adNo}.jpg`
    // console.log(res);}
    //   ).catch(imageAvailable=false)
    //   console.log(imageAvailable);
    // const image=

    checkIfImageExists(image, (exists) => {
      if (exists) {
        // console.log('Image exists. ')
        // availableImage = `'./data/img/${section + "/" + adNo}.jpg'`
      } else {
        // availableImage = "./res/nouserEdited.png"
        // console.error('Image does not exists.')
      }
    });

    // let ImageNotAvailbale = "'./res/nouserEdited.png'"

    const firstClassMemo = `39/as`;
    // const newId = memNo.split("/")[1];

    layout += `<div class="id_front">
  
   
    <div class="hadi_dot"></div>
            <div class="data_header">
                  <div class="demo">
                  </div>
                </div>
            <div class="id_data">
<div class="id_no_image" style="background:url('./res/nouserEdited.png')" >
<div class="id_image" id="image"
style="background:url('${image}')" alt="Student Image">

</div>
</div>
                <div class="name_adNo_container">
                    <span class="name_container"><span class="name">${name}</span> </span>
                    <p class="section_container"> <span class=section></span> </p>
                    <span class="name"><span class="name">${chest}</span> </span>
                    <p class="adNo">${propgrams[0]?.cat == "J" ? "Junior" : "Senior"}</p>
                    <p  class="adNo">${dars}</p>
                    </div>
                    
                <div class="data_footer">

              <div class="programs">
              ${propgrams.map(
                (program) => { console.log(program); return(`<p class="program">${program.name}</p>`)}
              ).join('')}
              </div>
             
                </div>
            </div>
            
            <div class="newQr" id="qr-code${chest}"></div>
            
   
        </div>`;
  });

  function genrerateQrBtn() {
    function generateQrCode(qrContent, chestNo) {
      return new QRCode(chestNo, {
        text: qrContent,
        width: 50,
        height: 50,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H,
      });
    }
    let updated = studentData.length;

    for (let i = 0; i < updated; i++) {
      let housingLink = "jdf.vercel.app";

      let qrLink = `jdf.vercel.app/profile/${studentData[i].chest}`;
      let chestNo = studentData[i].chest;

      //generating qrCode
      let qrContent;
      let qrCode;
      if (chestNo != "#N/A") {
        qrContent = qrLink;
      } else {
        qrContent = housingLink;
      }
      console.log(qrContent);

      if (qrCode == null) {
        // Generate code initially
        qrCode = generateQrCode(qrContent, `qr-code${studentData[i].chest}`);
      } else {
        // If code already generated then make
        // again using same object
        qrCode.makeCode(qrContent);
      }
      if (studentData.length === 50) {
        updated = 1;
      }
    }
  }

  var but = document.getElementById("generateQrCode");
  but.addEventListener("click", genrerateQrBtn);
  // Printing HTML
  document.querySelector("main").innerHTML = layout;

  // Printing Info
  let myInfo = document.querySelector(".info");
  let newInfo = `
  <table>
    <tr class="filteredData">
    <th>Filtered Data:</th>
    <td>${studentData.length}</td>
    </tr>
    <tr>
    <th>Filtering By:</th>
    <td>${key}</td>
    </tr>
    <tr class="totalData">
      <th>Total Data:</th>
      <td>${studentData.length}</td>
    </tr>
  </table>`;

  myInfo.innerHTML = newInfo;
};

filterData();

filterButton();
