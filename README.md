# Nail Salon Scheduling System

Local-first internal appointment + staff scheduling system for a single nail salon.
Used by front desk only — NOT a public booking site.

## Folder Structure

```
nail-salon/
├── README.md
├── backend/
│   ├── requirements.txt
│   ├── main.py              # FastAPI app entry point
│   ├── database.py           # SQLite setup + session
│   ├── init_db.py            # DB initialization placeholder
│   └── routers/              # (future CRUD routers)
├── frontend/
│   ├── package.json
│   ├── vite.config.js
│   ├── index.html
│   └── src/
│       ├── main.jsx
│       └── App.jsx
```

## Quick Start

### Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate
pip install -r requirements.txt
python init_db.py               # Initialize SQLite database
uvicorn main:app --reload --port 8000
```

Backend runs at **http://localhost:8000**
API docs at **http://localhost:8000/docs**

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at **http://localhost:5173**

## Tech Stack

- **Backend:** Python 3.11+, FastAPI, SQLite (via sqlite3), Uvicorn
- **Frontend:** React 18, Vite, vanilla CSS (fast & minimal)
- **Database:** SQLite (single file `salon.db` in backend/)
# nail-salon-scheduler
