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

  tampilkan() {
    return {
      name: this.nama,
      panjang: this.panjang,
      lebar: this.lebar,
      kapasitas: this.kapasitas,
    };
  }
}

class PerahuMotor extends Perahu {
  constructor(nama, panjang, lebar, kapasitas, mesin) {
    super(nama, panjang, lebar, kapasitas);
    this.mesin = mesin;
  }

  tampilkan() {
    let data = super.tampilkan();
    data = {
      ...data,
      title: 'Denah Perahu Motor',
      mesin: this.mesin,
    };
    console.log(data);
  }
}

class PerahuLayar extends Perahu {
  constructor(nama, panjang, lebar, kapasitas, lebarLayar, tinggiLayar) {
    super(nama, panjang, lebar, kapasitas);
    this.lebarLayar = lebarLayar;
    this.tinggiLayar = tinggiLayar;
  }

  tampilkan() {
    let data = super.tampilkan();
    data = {
      ...data,
      title: 'Denah Perahu Layar',
      lebarLayar: this.lebarLayar,
      tinggiLayar: this.tinggiLayar,
    };
    console.log(data);
  }
}

class KapalPesiar extends Perahu {
  constructor(nama, panjang, lebar, kapasitas, lantai) {
    super(nama, panjang, lebar, kapasitas);
    this.lantai = lantai;
  }

  tampilkan() {
    let data = super.tampilkan();
    data = {
      ...data,
      title: 'Denah Kapal Pesiar',
      lantai: this.lantai,
    };
    console.log(data);
  }
}

const perahuMotor = new PerahuMotor('PM001', 5, 1.5, 5, 'Yamaha Enduro 40k');
const perahuLayar = new PerahuLayar('PL001', 8, 4, 10, 7, 10);
const kapalPesiar = new KapalPesiar('KP001', 362, 50, 6000, 18);
perahuMotor.tampilkan();
perahuLayar.tampilkan();
kapalPesiar.tampilkan();
