class Cart {
  constructor() {
    this.keranjang = new Object();
  }

  tambahProduk = (barang, jumlah) => {
    this.keranjang = {
      ...this.keranjang,
      [barang]: this.keranjang[barang]
        ? this.keranjang[barang] + jumlah
        : jumlah,
    };
  };

  hapusProduk = barang => {
    delete this.keranjang[barang];
  };

  tampilkanCart = () => {
    for (const key in this.keranjang) {
      console.log(`${key} (${this.keranjang[key]})`);
    }
  };
}

const keranjang = new Cart();
keranjang.tambahProduk('Pisang Hijau', 2);
keranjang.tambahProduk('Semangka Kuning', 3);
keranjang.tambahProduk('Apel Merah', 1);
keranjang.tambahProduk('Apel Merah', 4);
keranjang.tambahProduk('Apel Merah', 2);
keranjang.hapusProduk('Semangka Kuning');
keranjang.hapusProduk('Semangka Merah');
keranjang.tampilkanCart();
