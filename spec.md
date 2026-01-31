# Spec: Bitcoin Price (USD) — CoinGecko Fetch + Smoke Test

## 1. Problem statement
We need a minimal, dependency-light demo that:
- Displays the current Bitcoin price in USD in a browser
- Provides a simple smoke test to validate the API response shape

This is intended for Intern Sprint 0 / Day 2 and should be runnable without a build system.

## 2. Proposed solution
- Add `index.html` as a static page with:
  - Title: "Bitcoin Price (USD)"
  - A button that triggers a fetch to CoinGecko
  - A text area that displays "Current price: $<value>"
- Add `test.js` as a Node-based smoke test that:
  - Calls the same CoinGecko endpoint
  - Validates the response includes a numeric BTC USD price
  - Prints `PASS: ...` on success, exits non-zero on failure

## 3. Acceptance criteria (checklist)
- [ ] Opening `index.html` in a browser shows a heading and a "Load price" button
- [ ] Clicking "Load price" fetches BTC price and updates the page with a USD value
- [ ] The UI handles fetch errors gracefully (shows an error message instead of crashing)
- [ ] `node test.js` prints a `PASS` line when the API responds correctly
- [ ] `node test.js` exits with non-zero status if the response is missing expected fields or price is not numeric

## 4. Edge cases / risks
- Network issues / corporate proxy / DNS problems
- CoinGecko rate limiting (HTTP 429) or temporary downtime
- API shape changes (fields renamed or nested differently)
- Node runtime differences on Windows (rare async handle warnings)

## 5. Implementation plan (steps)
1. Implement `index.html`:
   - Render title, button, and output area
   - On click: fetch CoinGecko price endpoint and parse JSON
   - Update DOM with formatted USD price
   - Handle errors with a user-friendly message
2. Implement `test.js`:
   - Fetch the same endpoint
   - Validate JSON shape and numeric price
   - Print PASS/FAIL, use exit codes
3. Document in `README.md`:
   - How to run (open HTML)
   - How to run test (node test.js)
   - Explain file layout and expected output
4. Open PR and ensure changes are small and focused