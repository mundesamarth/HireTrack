📥 HireTrack (AI-Powered)
An automated pipeline that transforms a messy Gmail inbox into a structured Job Application dashboard using LLMs.

🚀 What it does (The Pipeline)

The Pump (Sync): Securely connects to the Gmail API to fetch the latest job-related correspondence.

The Refinery (AI Extraction): Uses Gemini 1.5 Flash to parse unstructured email snippets into strict JSON data (Company, Role, Status, and Interview dates).

The Warehouse (Database): Stores refined data in SQLite via Prisma ORM, mapping emails to specific user accounts.

The Tap (API): Serves structured job application data through a Next.js backend for frontend consumption.

🛠️ Tech Stack

Framework: Next.js 15 (App Router)

Language: TypeScript

Auth: Auth.js (NextAuth) with Google OAuth 2.0

Database: SQLite + Prisma ORM

AI/LLM: Google Generative AI (@google/genai)

API: Gmail API (Google APIs Node.js Client)

📈 Future Roadmap

[ ] Automated Refresh Token Rotation: Keep the pipeline running without manual re-authentication.

[ ] Dashboard UI: A clean React interface to visualize application status and upcoming interviews.

[ ] Email Filtering: Advanced "q" parameter logic to ignore non-career-related noise.