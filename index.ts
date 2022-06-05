export class Cart {
  daftarProduk: Array<{kodeProduk: string, kuantitas: number}> = [];

  tambahProduk(kodeProduk: string, kuantitas: number) {
    const index = this.daftarProduk.findIndex(produk => produk.kodeProduk === kodeProduk)   
    if (index < 0) {
      this.daftarProduk.push({ kodeProduk, kuantitas });
    }
    else {
      this.daftarProduk[index].kuantitas += kuantitas
    }
  }
  hapusProduk(kodeProduk: string) {
    const index = this.daftarProduk.findIndex(produk => produk.kodeProduk === kodeProduk)    
    if (index > -1) {
      this.daftarProduk.splice(index, 1)
    }
  }
  tampilkanCart() {
    this.daftarProduk.forEach(produk => {
      console.log(`${produk.kodeProduk} (${produk.kuantitas})`)
    })
  }
}

const keranjang = new Cart();

keranjang.tambahProduk("Pisang Hijau", 2);
keranjang.tambahProduk("Semangka Kuning", 3);
keranjang.tambahProduk("Apel Merah", 1);
keranjang.tambahProduk("Apel Merah", 4);
keranjang.tambahProduk("Apel Merah", 2);
keranjang.hapusProduk("Semangka Kuning");
keranjang.hapusProduk("Semangka Merah");
keranjang.tampilkanCart();