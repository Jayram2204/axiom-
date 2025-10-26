 The Core Problem: The "Black Box"
All current financial platforms—from TradingView to Sensibull—operate on a "black box" model. Their trade alerts, performance statistics, and historical backtests are all stored on private, company-controlled databases.
There is no way for a user to know if this data is legitimate. A company can easily fake its track record, delete bad alerts, or manipulate its performance metrics. This is the "Trust Us" problem.
 The Axiom Solution: "Verify, Don't Trust"
Axiom is built on a fundamentally different model: **Verifiable Trust**.
We use a public blockchain (Stellar) as an immutable, public notary. When our system generates a key data point, like a "Whale Alert," it is instantly published as a transaction on the Stellar public ledger.
This creates a permanent, unchangeable, and globally-timestamped record that anyone can audit.
Our "Verify" button isn't for show. It makes a live API call to the Stellar network (via the Horizon API) to fetch the actual cryptographic proof of that alert. A user doesn't have to trust us; they can see the proof on the public ledger for themselves.
**We are not just selling data; we are selling verifiable trust.**

<img width="1024" height="1024" alt="Gemini_Generated_Image_au0ok0au0ok0au0o" src="https://github.com/user-attachments/assets/51956098-f10a-447a-83a8-a7bea10a8bf7" />


## Key Features

  * **Verifiable On-Chain Alerts**: The first-ever feed of market alerts (whale movements, options flow) that are cryptographically provable on a public blockchain.
  * **AI Co-pilot**: An integrated AI assistant (powered by the Gemini API) that sits *on top* of our trusted data layer, providing actionable strategies and analysis.
  * **Integrated Trading Panel**: Move directly from verifiable insight to action. The trading panel (with Dhan integration) allows for seamless order execution.
  * **Advanced Analytics Suite**: A comprehensive dashboard including market sentiment gauges, options flow divergence charts, and a full-featured TradingView chart.


<<img width="1024" height="1024" alt="Gemini_Generated_Image_38j1k638j1k638j1" src="https://github.com/user-attachments/assets/c19ac979-ac4a-4cce-ac8e-03e296fb4fa2" />

How the "Verify" Flow Works

1.  **Generate**: Axiom's backend systems detect a significant "Whale Alert."
2.  **Notarize**: The system instantly publishes a transaction containing the alert's metadata to the Stellar public ledger.
3.  **Verify**: A user on the Axiom terminal sees the alert and clicks "Verify."
4.  **Prove**: The app makes a live API call to the Stellar Horizon API, fetching the immutable on-chain record. The user sees the proof, confirming the alert is real and its timestamp is accurate.

## Tech Stack

Frontend**: React (Vite), Tailwind CSS
  Charting**: Recharts, TradingView Lightweight Charts
  Blockchain (Verify)**: Stellar Horizon API
  AI (Insight)**: Google Gemini API
Trading (Execute)**: Dhan API

<img width="1024" height="1024" alt="Gemini_Generated_Image_wfkviewfkviewfkv" src="https://github.com/user-attachments/assets/83c528ab-d8fd-4485-a005-2b33abff0eb0" />


  Mock Login
 On the login screen, use the mock token specified:
 The Long-Term Vision (Roadmap)
Axiom is designed to be the complete "intent layer" for traders, moving them from insight to action in a trustless way.
Phase 1: Verifiable Data (Current)**
Provide provably real market insights (alerts, divergences, sentiment) that no other platform can.
Phase 2: AI Insight Layer**
Integrate AI (Gemini) on top of this trusted data to act as an "AI Co-pilot," translating raw data into actionable strategies.
Phase 3: Trustless Trading**
Add a "Trade" button. Initially, this will integrate with existing exchanges (TradFi & DeFi) to pre-fill order tickets. The ultimate vision is a fully decentralized exchange where users trade complex assets directly from self-custody wallets, eliminating all counterparty risk.

This project is licensed under the MIT License. See the [LICENSE](https://www.google.com/search?q=LICENSE) file for details.
