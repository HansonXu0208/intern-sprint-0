## Problem statement
Provide a simple web page that fetches and displays the current Bitcoin price in USD using a public API.

## Proposed solution
Create a minimal static HTML page that calls the CoinGecko API via fetch and displays the price on user interaction.

## Acceptance criteria
- A button triggers the API request
- A loading message is shown while fetching
- The Bitcoin price (USD) is displayed on success
- A user-friendly error message is shown on failure

## Edge cases / risks
- Network failure or API downtime
- Non-200 HTTP responses

## Implementation plan
1. Create a static HTML file
2. Use fetch to call CoinGecko API
3. Handle loading, success, and error states
4. Manually test in browser
