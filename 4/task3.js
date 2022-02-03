let roadMines = [true, false, false, false, false, false, false, false, false, true];
let countOfdamage = 0;

for (let i = 0; i < roadMines.length; ++i) {
  console.log(`Танк переместился на позицию ${i + 1}`);
  if (roadMines[i]) {
    ++countOfdamage;
    if (countOfdamage == 2) {
      console.log(`Танк уничтожен на позиции ${i + 1}`);
      break;
    } else {
      console.log(`Танк поврежден на позиции ${i + 1}`);
    }
  }
}
