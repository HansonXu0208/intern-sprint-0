// test.js - zero-dependency smoke test for CoinGecko BTC price
// Run: node test.js

const assert = require("assert");

const API =
  "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd";

async function fetchJson(url) {
  // Node 18+ has global fetch
  const res = await fetch(url, {
    headers: { accept: "application/json" },
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`HTTP ${res.status} ${res.statusText} - ${text.slice(0, 200)}`);
  }
  return res.json();
}

(async () => {
  try {
    const data = await fetchJson(API);

    // Expected shape: { bitcoin: { usd: <number> } }
    assert.ok(data && data.bitcoin, "Missing 'bitcoin' field in response");
    assert.ok(
      typeof data.bitcoin.usd === "number",
      "Missing or invalid 'bitcoin.usd' number"
    );
    assert.ok(data.bitcoin.usd > 0, "'bitcoin.usd' should be > 0");

    console.log(`PASS: BTC price USD = ${data.bitcoin.usd}`);
    process.exit(0);
  } catch (err) {
    console.error("FAIL:", err && err.message ? err.message : err);
    process.exit(1);
  }
})();
