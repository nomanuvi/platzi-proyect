const URL = "https://api.coincap.io/v2";

function getAssets() {
  return fetch(`${URL}/assets?limit=20`)
    .then(res => res.json())
    .then(res => res.data);
}
function getAsset(coin) {
  return fetch(`${URL}/assets/${coin}`)
    .then(res => res.json())
    .then(res => res.data);
}
function getAssetHistory(coin) {
  const now = new Date();
  let end = now.getTime();
  now.setDate(now.getDate() - 1);
  let start = now.getTime();
  return fetch(
    `${URL}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`
  )
    .then(res => res.json())
    .then(res => res.data);
}
function getMarkets(coin) {
  return fetch(`${URL}/assets/${coin}/markets?limit=5`)
    .then(res => res.json())
    .then(res => res.data);
}
function getExchange(coin) {
  return fetch(`${URL}/exchanges/${coin}`)
    .then(res => res.json())
    .then(res => res.data);
}

export default {
  getAssets,
  getAsset,
  getAssetHistory,
  getMarkets,
  getExchange
};
