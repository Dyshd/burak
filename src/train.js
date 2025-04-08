
function unliHarfSoni(matn) {
    let harflar = "aeiou"; 
    return harflar
      .split("")
      .filter((harf) => matn.toLowerCase().includes(harf)).length;
  }
  
  
  console.log(unliHarfSoni("Jonpulat"));