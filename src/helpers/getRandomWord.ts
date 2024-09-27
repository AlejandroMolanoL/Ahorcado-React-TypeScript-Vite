
let words: string[]=[
    'MANZANA',
    'BANANA',
    'NARANJA',
    'PERA',
    'MANGO',
    'UVA',
    'PIÑA', 
    'SANDIA',
    'MELON',
    'CEREZA',
    'FRESA',
    'FRAMBUESA',
    'ARANDANO', 
    'MORA',
    'KIWI',
    'PAPAYA',
    'MELOCOTON',
    'CIRUELA',
    'COCO',
    'GUAYABA', 
    'CHIRIMOYA',
    'GRANADA',
    'MANDARINA',
    'LIMON',
    'LIMA',
    'POMELO', 
    'HIGO',
    'DATIL',
    'ALBARICOQUE',
    'LICHI',
    'MARACUYA',
    'TAMARINDO', 
];



export function getRandomWord(){
    const randomIndex = Math.floor(Math.random()* words.length);
    return words[randomIndex];
}