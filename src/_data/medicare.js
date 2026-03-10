// Source: retiree-report-vault/vault-Medicare-Facts-2026.md (CMS handbook, March 2026)
// DO NOT update these figures from the existing HTML pages — the pages contain 2025 data.
// IRMAA surcharge dollar amounts are withheld (flagged as unverified in vault-Decisions-Log.md).
export default {
  // Part B
  partBPremium: "$202.90",
  partBDeductible: "$283",
  // Part A
  partADeductible: "$1,736",
  partACoinsuranceDay61: "$434/day",
  partACoinsuranceReserve: "$868/day",
  partAPremium3039: "$311/month",
  partAPremiumUnder30: "$565/month",
  // Part D
  partDTroop: "$2,100",
  partDBasePremium: "$38.99",
  // IRMAA (threshold only — surcharge dollar amounts withheld until SSA.gov verified)
  irmaaThreshold: "$109,000",
  irmaaThresholdJoint: "$218,000",
  // Other
  colaIncrease: "2.5%",
  // Ticker items array — used on homepage for the scrolling ticker
  tickerItems: [
    "2026 Part B Premium: $202.90/mo",
    "AEP Opens October 15",
    "2026 COLA Increase: 2.5%",
    "Part A Deductible: $1,736",
    "Full Retirement Age: 67",
    "IRMAA Threshold: $109,000 individual",
    "Open Enrollment: Jan 1 – Mar 31"
  ]
};
