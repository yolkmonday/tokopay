const crypto = require("crypto")
const rp = require("request-promise-native");

class Tokopay {
  /**
   * @param {string} merchant - Merchant ID
   * @param {string} secret - Secret Key
   **/
  constructor(merchant, secret) {
    this._merchant = merchant;
    this._secret = secret;
    this._endpoint = "https://api.tokopay.id"
  }
  /**
   * @param {string} nominal - Nominal
   * @param {string} refId - Ref ID Unik Anda
   * @param {string} metode - Kode Metode Pembayaran
   **/
  simpleOrder(refId, metode, nominal) {
    const options = {
      method: 'GET',
      uri: `${this._endpoint}/v1/order?merchant=${this._merchant}&secret=${this._secret}&ref_id=${refId}&nominal=${nominal}&metode${metode}`,
      json: true,
    };

    return rp(options)
      .then(function (resp) {
        if (resp.data) {
          return resp.data;
        }
      })
      .catch(function (err) {
        throw Error(err);
      });
  }
}

module.exports = Tokopay;
