"""
init_db.py - Initialize the SQLite database.
Stage 0: creates DB file and a health-check table.
Full schema added in Stage 1.
"""
from database import get_connection


def init():
    conn = get_connection()
    cur = conn.cursor()
    cur.execute(
        "CREATE TABLE IF NOT EXISTS _health ("
        "id INTEGER PRIMARY KEY, "
        "status TEXT NOT NULL DEFAULT 'ok', "
        "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)"
    )
    cur.execute(
        "INSERT OR IGNORE INTO _health (id, status) VALUES (1, 'ok')"
    )
    conn.commit()
    conn.close()
    print("Database initialized.")


if __name__ == "__main__":
    init()
