"""
database.py — SQLite connection helper.
Stage 0: placeholder. Full schema created in Stage 1.
"""
import sqlite3
import os

DB_PATH = os.path.join(os.path.dirname(__file__), "salon.db")


def get_connection() -> sqlite3.Connection:
    """Return a new SQLite connection with row_factory set."""
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA journal_mode=WAL")
    conn.execute("PRAGMA foreign_keys=ON")
    return conn


def get_db():
    """FastAPI dependency — yields a connection, closes on teardown."""
    conn = get_connection()
    try:
        yield conn
    finally:
        conn.close()
