 * PIŠKOTŮV PRŮVODCE VAŘENÍM – data receptů
   ------------------------------------------------------------
   Nový recept přidáš zkopírováním jednoho bloku { ... } níže,
   vložením za poslední recept (nezapomeň na čárku) a vyplněním.
 
 
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
