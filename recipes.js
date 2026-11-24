/*
 * PIŠKOTŮV PRŮVODCE VAŘENÍM – data receptů
 * ------------------------------------------------------------
 * Nový recept přidáš zkopírováním jednoho bloku { ... } níže,
 * vložením za poslední recept (nezapomeň na čárku) a vyplněním.
 *
 * ŠABLONA:
 * {
 *   id: "005",                      // unikátní, použije se v URL (#/recept/005)
 *   title: "Název receptu",
 *   category: "HLAVNÍ JÍDLO · BOWL",// malý popisek nad názvem
 *   facts: [                        // řádky vlevo: [popisek, hodnota]
 *     ["Příprava", "20 min"],
 *     ["Porce", "2"]
 *   ],
 *   ingredients: [                  // skupiny surovin (group může být "")
 *     { group: "Těsto", items: ["225 g mouky", "1 vejce"] }
 *   ],
 *   steps: ["První krok.", "Druhý krok."],
 *   tip: "Tip & variace (nepovinné, může být prázdný řetězec).",
 *   nutrition: "Výživové hodnoty (nepovinné).",
 *   image: ""                       // nepovinné; prázdné = fotka se hledá sama v img/<id>.jpg
 *                                   // (i .jpeg, .png, .webp), např. img/005.jpg
 * }
 */
window.RECIPES = [
  {
    id: "001",
    title: "Čokoládový tart s malinami",
    category: "DEZERT · NEPEČENÝ",
    facts: [
      ["Příprava", "25 min"],
      ["Tuhnutí", "cca 2 h"],
      ["Forma", "23 cm"]
    ],
    ingredients: [
      {
        group: "Korpus",
        items: [
          "220 g čokoládových sušenek Oreo (včetně náplně)",
          "55 g rozpuštěného másla"
        ]
      },
      {
        group: "Náplň",
        items: [
          "400 g tvarohu",
          "400 g Philadelphia / cream cheese",
          "340 g hořké čokolády (55–65 % kakaa)",
          "50 g krystalového cukru",
          "1–2 g soli"
        ]
      },
      {
        group: "Ozdobení",
        items: ["250–300 g čerstvých malin"]
      }
    ],
    steps: [
      "Sušenky rozmixuj najemno a smíchej s rozpuštěným máslem.",
      "Směs natlač na dno a okraje formy (23 cm). Korpus dej do mrazáku.",
      "Tvaroh a Philadelphii rozmíchej dohladka.",
      "Čokoládu rozpusť ve vodní lázni a nech krátce zchladnout.",
      "Čokoládu vmíchej do tvarohové směsi. Přidej cukr a sůl.",
      "Náplň nalij do korpusu, ozdob malinami a nech v lednici tuhnout cca 2 hodiny."
    ],
    tip: "Vyzkoušená úprava: kokosové mléko nahrazeno 400 g tvarohu + 400 g Philadelphie. Cukr snížen na polovinu.",
    nutrition: "Výživové hodnoty zatím nejsou dopočítány; závisí na značce surovin.",
    image: ""
  },
  {
    id: "002",
    title: "Extra vláčný banánový chléb",
    category: "SLADKÉ PEČENÍ",
    facts: [
      ["Příprava", "20 min"],
      ["Pečení", "cca 50 min"],
      ["Forma", "23 × 13 cm"]
    ],
    ingredients: [
      {
        group: "Těsto",
        items: [
          "225 g hladké mouky",
          "5 ml prášku do pečiva",
          "5 ml jedlé sody",
          "310 ml rozmačkaných zralých banánů",
          "65 ml mléka",
          "65 ml bílého jogurtu",
          "115 g změklého nesoleného másla",
          "105 g cukru krystal",
          "1 vejce"
        ]
      }
    ],
    steps: [
      "Troubu předehřej na 180 °C. Formu vymaž a vylož pečicím papírem.",
      "Smíchej mouku, prášek do pečiva a jedlou sodu.",
      "V jiné míse smíchej banány, mléko a jogurt.",
      "Máslo vyšlehej s cukrem, přidej vejce.",
      "Střídavě zapracuj suchou a banánovou směs.",
      "Těsto přendej do formy a peč cca 50 minut. Špejle má vyjít bez syrového těsta.",
      "Nech vychladnout na mřížce, vyklop a nakrájej."
    ],
    tip: "Úpravy: cukr na polovinu; 125 ml kokosového mléka nahrazeno 65 ml mléka + 65 ml jogurtu. Vanilkový extrakt a limetková šťáva vynechány.",
    nutrition: "Orientačně na 1 porci (z 9): 275 kcal · B 4,2 g · T 11,7 g · S 39,4 g.",
    image: ""
  },
  {
    id: "003",
    title: "Harvest Bowl",
    category: "HLAVNÍ JÍDLO · BOWL",
    facts: [
      ["Porce", "2"],
      ["Varianta", "klasická rýže nebo sticky rice"]
    ],
    ingredients: [
      {
        group: "Základ",
        items: [
          "250 g kuřecích prsou",
          "250 g batátů",
          "80 g rýže (suchá)",
          "1 menší jablko (cca 100 g)",
          "100 g kozího sýra",
          "20 g mandlí",
          "½ avokáda (cca 75 g)",
          "50 g salátu nebo rukoly"
        ]
      },
      {
        group: "Zálivky",
        items: [
          "Olivový olej a balsamikový ocet – dle chuti",
          "Wasabi mayo nebo sriracha mayo – dle chuti"
        ]
      }
    ],
    steps: [
      "Rýži uvař podle návodu.",
      "Batáty nakrájej, okořeň a upeč při 200 °C cca 25–30 minut.",
      "Kuřecí maso okořeň, opeč nebo upeč; nech odpočinout a nakrájej.",
      "Mandle nasucho opraž. Jablko nakrájej, avokádo nakrájej na plátky.",
      "Do misek rozděl salát, rýži, kuře a batáty. Přidej jablko, avokádo, kozí sýr a mandle.",
      "Zakápni balsamikovou zálivkou. Podávej s wasabi nebo sriracha majonézou."
    ],
    tip: "Olej, balsamiko i extra majonézu přidej dle chuti. Zvol wasabi nebo sriracha variantu.",
    nutrition: "Orientačně na 1 porci, bez extra majonézy: 775 kcal · B 45 g · T 32 g · S 71 g.",
    image: ""
  },
  {
    id: "004",
    title: "Tortilla s avokádem, vejcem a sýrem",
    category: "RYCHLÉ JÍDLO",
    facts: [
      ["Porce", "2 (2 velké wrapy)"]
    ],
    ingredients: [
      {
        group: "Náplň",
        items: [
          "2 velké pšeničné tortilly",
          "1½–2 zralá avokáda",
          "3 vejce",
          "100 g strouhaného sýra (např. cheddar)",
          "1 malá mrkev",
          "Citronová šťáva, sůl a pepř – dle chuti"
        ]
      },
      {
        group: "Dip",
        items: ["Jogurtovo-majonézový dip se srirachou, případně jiný dle chuti"]
      }
    ],
    steps: [
      "Vejce uvař natvrdo, oloupej a nahrubo nasekej.",
      "Vejce smíchej se sýrem a najemno nastrouhanou mrkví. Přidej dip, osol a opepři.",
      "Avokádo rozmačkej s citronovou šťávou, solí a pepřem.",
      "Tortilly potři avokádovou směsí a navrch rozděl vaječno-sýrovou směs.",
      "Pevně zaroluj, případně překroj. Podávej ihned nebo krátce opeč nasucho."
    ],
    tip: "Vylepšení: přidej cibulové chutney a/nebo houby opečené dozlatova na pánvi.",
    nutrition: "Orientačně na 1 wrap: 750 kcal · B 27 g · T 48 g · S 43 g. Záleží na množství avokáda a dipu.",
    image: ""
  }
  {
    id: "005",
    title: "Tvarohový trhanec s lesním ovocem",
    category: "SLADKÉ JÍDLO · NA PÁNVI",
    facts: [
      ["Porce", "3"]
    ],
    ingredients: [
      {
        group: "",
        items: [
          "8 vajec",
          "125 g bílého jogurtu",
          "500 g tvarohu",
          "Rum – dle chuti",
          "1 balíček vanilkového cukru",
          "180 g hladké mouky",
          "200 g lesního ovoce",
          "1–2 lžíce másla",
          "3 lžíce moučkového cukru"
        ]
      }
    ],
    steps: [
      "Odděl žloutky od bílků. Žloutky promíchej s jogurtem, tvarohem, rumem a vanilkovým cukrem.",
      "Vmíchej mouku. Z bílků vyšlehej pevný sníh a opatrně ho zapracuj do tvarohového těsta.",
      "Na pánvi vhodné do trouby rozpusť máslo, vlij těsto a krátce opeč zespodu. Přidej lesní ovoce.",
      "Dopeč v troubě při 180 °C, dokud těsto neztuhne. Roztrhej na větší kusy, případně krátce opeč a podávej posypané moučkovým cukrem."
    ],
    tip: "Úpravy: zakysaná smetana nahrazena 125 g bílého jogurtu; citronová kůra vynechána.",
    nutrition: "Orientačně na 1 porci: 740 kcal · B 46 g · T 28 g · S 77 g.",
    image: ""
  },
  {
    id: "006",
    title: "Proteinové langoše z cottage sýra",
    category: "PROTEINOVÉ JÍDLO",
    facts: [
      ["Porce", "2 langoše"],
      ["Pečení", "20–25 min"]
    ],
    ingredients: [
      {
        group: "Těsto",
        items: [
          "225 g cottage sýra",
          "2 vejce",
          "60 g hladké mouky"
        ]
      },
      {
        group: "Na dokončení",
        items: [
          "Bílý jogurt",
          "Česnek",
          "Trocha oleje",
          "Strouhaný sýr",
          "Kečup – dle chuti"
        ]
      },
      {
        group: "Volitelné varianty",
        items: ["Česnekový olej nebo cheddar"]
      }
    ],
    steps: [
      "Cottage sýr, vejce a mouku rozmixuj nebo důkladně promíchej do hladšího těsta.",
      "Těsto rozděl na dvě části a rozetři na plech s pečicím papírem do tvaru langošů.",
      "Peč při 180 °C přibližně 20–25 minut, až povrch zpevní a lehce zezlátne.",
      "Hotové langoše potři jogurtem smíchaným s česnekem a trochou oleje. Posyp sýrem a přidej kečup. Běžná obloha se už nezapéká.",
      "Varianta: před koncem pečení potři česnekovým olejem a dopékej asi 5 minut. S cheddarem vrať do trouby ještě na cca 5 minut."
    ],
    tip: "",
    nutrition: "Orientačně na 1 langoš, bez oblohy: 293 kcal · B 22 g · T 10 g · S 27,5 g. Závisí na tučnosti cottage sýra.",
    image: ""
  },
  {
    id: "007",
    title: "Indické Butter Chicken",
    category: "HLAVNÍ JÍDLO · Z TROUBY",
    facts: [
      ["Porce", "cca 4"],
      ["Pečení", "cca 1 h"],
      ["Podávání", "s rýží"]
    ],
    ingredients: [
      {
        group: "",
        items: [
          "600 g kuřecích prsou",
          "400 ml kokosového mléka nebo 400 g jogurtu",
          "100 g rajčatového protlaku",
          "100 g rajčatové passaty",
          "20 g zázvoru",
          "5 stroužků česneku",
          "1 velká cibule",
          "3 lžíce garam masala",
          "1 lžička kurkumy, kari a mletého kmínu",
          "1 lžička sladké papriky",
          "¼ lžičky skořice",
          "½ lžičky mletého pepře",
          "1 lžička soli",
          "2 lžíce ghí nebo másla"
        ]
      }
    ],
    steps: [
      "Troubu předehřej na 200 °C. Kuřecí prsa ponech ve větších kusech, aby zůstala šťavnatá.",
      "Všechny ingredience dej do mísy. Česnek prolisuj, zázvor nastrouhej a vše důkladně promíchej.",
      "Směs přesuň do zapékací nádoby a peč přibližně 1 hodinu při 200 °C.",
      "Po upečení kuřecí maso roztrhej dvěma vidličkami a promíchej s omáčkou. Podávej s rýží."
    ],
    tip: "",
    nutrition: "Orientačně na 1 porci, bez rýže: s kokosovým mlékem cca 490 kcal, s jogurtem cca 405 kcal. Bílkoviny 43 g / 46 g, tuky 29 g / 20 g, sacharidy 15 g / 17 g (kokosové mléko / jogurt). Počítáno pro 4 porce.",
    image: ""
  },
  {
    id: "008",
    title: "Salát s rýžovými nudlemi a arašídovou omáčkou",
    category: "SALÁT · BOWL",
    facts: [
      ["Porce", "2"]
    ],
    ingredients: [
      {
        group: "Salát",
        items: [
          "120 g rýžových nudlí (suchých)",
          "300 g kuřecích prsou",
          "150 g zelí",
          "100 g mrkve",
          "100 g avokáda",
          "150 g okurky",
          "100 g edamame",
          "20 g arašídů"
        ]
      },
      {
        group: "Arašídová omáčka",
        items: [
          "32 g arašídového másla (cca 2 lžíce)",
          "1 lžíce sójové omáčky",
          "½ lžičky medu",
          "½ lžičky citronové šťávy",
          "Chilli nebo wasabi – dle chuti"
        ]
      }
    ],
    steps: [
      "Rýžové nudle připrav podle návodu na obalu. Edamame uvař nebo rozmraz podle návodu.",
      "Kuřecí prsa opeč na pánvi nebo upeč a nakrájej na proužky. Zelí, mrkev a okurku nakrájej najemno, avokádo na plátky.",
      "Arašídové máslo rozmíchej se sójovou omáčkou, medem a citronovou šťávou. Podle chuti přidej chilli nebo wasabi.",
      "Nudle, zeleninu, edamame a kuře rozděl do misek. Přelij omáčkou a posyp arašídy."
    ],
    tip: "Jarní cibulka a sezam jsou volitelné.",
    nutrition: "Orientačně na 1 porci: 750 kcal · B 53,5 g · T 27,4 g · S 75,3 g. Výpočet pro kuřecí variantu, bez přidaného oleje; jarní cibulka a sezam nejsou započítány.",
    image: ""
  }
];
