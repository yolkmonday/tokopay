[![CodeFactor](https://www.codefactor.io/repository/github/aripadrian/tokopay/badge)](https://www.codefactor.io/repository/github/aripadrian/tokopay)
[![Npm package monthly downloads](https://badgen.net/npm/dm/tokopay)](https://npmjs.ccom/package/tokopay)

# Tokopay Client for Node Js

This library is the abstraction of tokopay API for access from applications written with server-side Javascript.

[![NPM](https://nodei.co/npm/tokopay.png)](https://nodei.co/npm/tokopay/)



## Instalasi

```bash
npm install tokopay
```

atau

```bash
yarn add tokopay
```

## Pemakaian
Dapatkan Merchant ID dan Secret Key Anda di [tokopay Dashboard](https://member.tokopay.id/pengaturan/secret-key).

```js
const tokopay = require('tokopay');
const client = new tokopay("YOUR MERCHANT ID","YOUR SECRET");
```


### Cek Saldo
```js
let saldo = await client.cekSaldo();
```

### Cek Akun Game
```js
let saldo = await client.cekAkunGame(gameCode, userId);
```

> Game yang tersedia : mobilelegend , freefire, higgs

### Cek Status Koneksi
```js
Coming Soon
```

### Transaksi

```js
let transaksi = await client.transaksi(productCode, tujuan, refId);
```

> Note:
> RefID adalah kode transaksi unik kamu yang di generate secara acak

### Cek Status Transaksi
```js
Coming Soon
```

### Radeem Kiosgamer Garena Shell Bulk
```js
Coming Soon
```

### Cek Status Radeem Kiosgamer Garena Shell Bulk
```js
Coming Soon
```

### License

[MIT](https://github.com/aripadrian/tokopay/blob/master/LICENSE)

### Author

[Ari Padrian](mailto:aripadrian@gmail.com)



