# Unity Small Finance Bank — Customer 360° Portal

**Live Deployment URL:** [https://unity-small-finance-bank-customer-3.vercel.app/](https://unity-small-finance-bank-customer-3.vercel.app/)

A premium, light-themed Customer 360° relationship workbench and underwriting platform designed for Relationship Managers (RMs) and credit risk officers at **Unity Small Finance Bank**. 

This system aggregates customer demographics, active product stacks, engagement trends, and risk matrices into a single interface to streamline decision-making and cross-selling.

---

## 🛠️ Technology Stack
* **Frontend**: React + TypeScript
* **Styling**: Tailwind CSS v4 (Light theme with Unity Bank's brand-specific slate and golden-yellow color scheme)
* **Routing**: React Router
* **Visualizations**: Recharts (Custom themed charts with tooltips and Indian numbering formatting)
* **Icons**: Lucide Icons
* **Build Tool**: Vite
* **Deployment**: Pre-configured for Vercel SPA redirects (`vercel.json`)

---

## 🌟 Key Features

### 1. Unified Customer 360° Profile Tab
* **Customer Profile Header**: Visualizes customer tier, segments, CLTV score, digital index, and credit scores.
* **Indian Lakhs Formatting (`L`)**: All numeric values (Monthly Income, Credit Outstanding, Chart Ticks, and tooltips) are formatted in Indian Lakhs for native business readability.
* **Product Stack Summary**: Quick overview of active business products (Current Business Account, High-Yield Fixed Deposits, and active Business Overdraft limits).
* **Credit Portfolio**: Details active loan products (MSME loans, EMIs, and repayment statuses).

### 2. Analytics & Expenditure Insights
* **Business Outflow Distribution**: A donut chart breaking down operational cash outflows (Inventory & Raw Materials, Rent & Utilities, Logistics, and Payroll).
* **Customer Balance & Inflow History**: A dual-area chart showing average account reserves (**Avg Balance**) vs. sales deposition velocity (**Monthly Inflows**) to monitor liquidity trends.
* **Layout Alignment**: Nested grid structures ensure all card outlines match up perfectly across different screen sizes.

### 3. Unity AI Assistant & Underwriting Console
* **Interactive AI Console**: Rebranded conversational **Unity Assistant** designed to guide RMs through pre-approved credit limit enhancements.
* **Processing Workbench**: Simulated real-time loan console displaying underwriting bureau checks, loan configurations, days past due (DPD), and automated risk scoring.

---

## 🚀 Running the Project Locally

Follow these steps to run the Vite dev server locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ASTHA22/Unity-Small-Finance-Bank-Customer-360.git
   cd Unity-Small-Finance-Bank-Customer-360
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local server**:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📦 Production Build & Vercel Configuration
To bundle the production build locally:
```bash
npm run build
```
The build assets will compile to the `dist/` directory. The project includes a `vercel.json` file to route all SPA requests back to `index.html` to prevent 404 errors on refreshes.
