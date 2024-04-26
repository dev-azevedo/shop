import CryptoJS from "crypto-js";

export const encryptItem = (itemToCrypto) => {
  const key = "chave1234567890";

  const itemJsonString = JSON.stringify(itemToCrypto);

  const encrypted = CryptoJS.AES.encrypt(itemJsonString, key).toString();

  return encrypted;
};

export const decryptItem = (cryptoToItem) => {
  const key = "chave1234567890";

  try {
    const bytes = CryptoJS.AES.decrypt(cryptoToItem, key);

    const decryptedText = bytes.toString(CryptoJS.enc.Utf8);

    const decryptedObject = JSON.parse(decryptedText);

    return decryptedObject;
  } catch (error) {
    console.error("Erro ao descriptografar:", error);
    return null;
  }
};
