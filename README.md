## 🤔 Apa itu TypeScript.

Adalah bahasa pemrograman yang merupakan superset dari javascript, jadi semua syntax yang ada di javascript bisa digunakan di typescript.

Pada akhirnya typescript juga akan di compile menjadi javascript sebelum dijalankan. kembali lagi karena pada dasarnya typescript adalah javascript dengan fitur yang lebih.

## 💡 Mengapa TypeScript.

TypeScript diciptakan untuk mengatasi kelemahan2 atau kekurangan pada Javascript. diantaranya

- Mengatasi javascript yang terlalu dinamis.

    Contoh pada js `0 == ""` , Aneh dong ketika number dan string adalah sama. nah di typescript bisa mengatasi itu dengan mendeklarasikan tipe data, ada `types` dan `interfaces` yang akan dipelajari di `day 02`

- Membuat code menjadi lebih readable dan mudah dipahami.

    Lebih susah? YA. lebih susah, karena kita harus strict dalam memakai typescript, tapi karena sifatnya yang strict itu, maka code yang dibaca menjadi lebih mudah dipahami, karena jelas, apa yang harus di input dan di keluarkan.

- Mengurangi potensi BUG

    ya karena sifatnya yang strict itu. jadi jelas apa output input nya.

- TypeScript bisa digunakan di FE atau BE, atau manapun itu layaknya javascript

    karna ujung nya typescript di compile ke JS

## 📦 Install

```bash
npm install typescript -g
```

## 🌎 Hello World!
### Compile
```bash
tsc hello-world.ts
```
Akan menghasilkan file javascript
### Jalankan hasil compile
```javascript
node hello-world.js
```