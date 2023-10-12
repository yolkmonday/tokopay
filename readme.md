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
Dapatkan Merchant ID dan Secret Key Anda di [tokopay Dashboard](https://dash.tokopay.id/pengaturan/secret-key).

```js
const tokopay = require('tokopay');
const client = new tokopay("YOUR MERCHANT ID","YOUR SECRET");
```

### Membuat Simple Order

```js
const createOrder = await client.simpleOrder(refId, metode, nominal);
```

> Note:<br/>
> RefID adalah kode transaksi unik kamu yang di generate secara acak<br/>
> Metode adalah Kode dari Metode Pembayaran, Bisa dilihat di  [Docs Tokopay](https://docs.tokopay.id).


[MIT](https://github.com/yolkmonday/tokopay/blob/master/LICENSE)

### Author

[Ari Padrian](mailto:aripadrian@gmail.com)



