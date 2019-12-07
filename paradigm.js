// Abstract
class Perahu {
  constructor(nama, panjang, lebar, kapasitas) {
    this.nama = nama;
    this.panjang = panjang;
    this.lebar = lebar;
    this.kapasitas = kapasitas;
    if (new.target === Perahu) {
      throw new TypeError('Cannot construct Abstract instances directly');
    }
  }

  keterangan = title => {
    const separator = '-'.repeat(title.length);
    console.log(separator);
    console.log(title);
    console.log(separator);
    console.log(`Nama: ${this.nama}`);
    console.log(`Panjang: ${this.panjang}m`);
    console.log(`Lebar: ${this.lebar}m`);
    console.log(`Kapasitas: ${this.kapasitas} orang`);
  };
}

class PerahuMotor extends Perahu {
  constructor(nama, panjang, lebar, kapasitas, mesin) {
    super(nama, panjang, lebar, kapasitas);
    this.mesin = mesin;
  }

  tampilkan = () => {
    this.keterangan('Denah Perahu Motor');
    console.log(`Mesin: ${this.mesin}`);
  };
}

class PerahuLayar extends Perahu {
  constructor(nama, panjang, lebar, kapasitas, lebarLayar, tinggiLayar) {
    super(nama, panjang, lebar, kapasitas);
    this.lebarLayar = lebarLayar;
    this.tinggiLayar = tinggiLayar;
  }

  tampilkan = () => {
    this.keterangan('Denah Perahu Layar');
    console.log(`Lebar Layar: ${this.lebarLayar}m`);
    console.log(`Tinggi Layar: ${this.tinggiLayar}m`);
  };
}

class KapalPesiar extends Perahu {
  constructor(nama, panjang, lebar, kapasitas, lantai) {
    super(nama, panjang, lebar, kapasitas);
    this.lantai = lantai;
  }

  tampilkan = () => {
    this.keterangan('Denah Kapal Pesiar');
    console.log(`Lantai: ${this.lantai} lantai`);
  };
}

const perahuMotor = new PerahuMotor('PM001', 5, 1.5, 5, 'Yamaha Enduro 40k');
const perahuLayar = new PerahuLayar('PL001', 8, 4, 10, 7, 10);
const kapalPesiar = new KapalPesiar('KP001', 362, 50, 6000, 18);
perahuMotor.tampilkan();
perahuLayar.tampilkan();
kapalPesiar.tampilkan();
