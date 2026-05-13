"""
main.py - FastAPI application entry point.
Stage 0: health-check endpoint only.
"""
from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from database import get_db

app = FastAPI(title="Nail Salon Scheduler", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {"status": "ok", "message": "Nail Salon Scheduler API"}


@app.get("/health")
def health(db=Depends(get_db)):
    row = db.execute("SELECT status FROM _health WHERE id=1").fetchone()
    return {
        "api": "ok",
        "db": row["status"] if row else "missing",
    }
