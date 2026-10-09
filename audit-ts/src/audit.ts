function formatHarga(harga: number | string): string {
  const angka: number = typeof harga === "string" ? Number(harga) : harga;
  if (Number.isNaN(angka)) {
    throw new Error("harga harus angka, dapat: " + harga);
  }
  return "Rp" + angka.toFixed(2);
}

console.log(formatHarga(10000));
console.log(formatHarga("15000"));
// console.log(formatHarga(null)); // ERROR tsc: null ditolak
// console.log(formatHarga("sepuluh ribu")); // throw Error jelas, bukan crash aneh
