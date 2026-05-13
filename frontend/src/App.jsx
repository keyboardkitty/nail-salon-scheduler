import { useState, useEffect } from 'react';

const API = 'http://localhost:8000';

export default function App() {
  const [health, setHealth] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API + '/health')
      .then((r) => r.json())
      .then(setHealth)
      .catch((e) => setError(e.message));
  }, []);

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Nail Salon Scheduler</h1>
        <span style={styles.badge}>Internal</span>
      </header>
      <main style={styles.main}>
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>System Status</h2>
          {error ? (
            <p style={styles.error}>
              Cannot reach backend: {error}
            </p>
          ) : health ? (
            <div style={styles.statusGrid}>
              <StatusRow label="API" value={health.api} />
              <StatusRow label="Database" value={health.db} />
            </div>
          ) : (
            <p style={styles.loading}>Connecting...</p>
          )}
        </div>
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Quick Actions</h2>
          <p style={{ color: '#86868b', fontSize: 14 }}>
            Stage 0 scaffold is live. Buttons activate in later stages.
          </p>
          <div style={styles.actionRow}>
            <button style={styles.btn} disabled>New Appointment</button>
            <button style={styles.btn} disabled>Manage Staff</button>
            <button style={styles.btn} disabled>Services</button>
            <button style={styles.btn} disabled>Day Timeline</button>
          </div>
        </div>
      </main>
      <footer style={styles.footer}>
        Ctrl+N New Appointment | Ctrl+T Timeline | Ctrl+S Staff
      </footer>
    </div>
  );
}

function StatusRow({ label, value }) {
  const ok = value === 'ok';
  return (
    <div style={styles.statusRow}>
      <span>{label}</span>
      <span style={{ color: ok ? '#30d158' : '#ff453a', fontWeight: 600 }}>
        {ok ? 'Connected' : value}
      </span>
    </div>
  );
}

const styles = {
  container: { minHeight: '100vh', display: 'flex', flexDirection: 'column' },
  header: { display: 'flex', alignItems: 'center', gap: 12, padding: '16px 24px', background: '#fff', borderBottom: '1px solid #e5e5e7' },
  title: { fontSize: 20, fontWeight: 700 },
  badge: { fontSize: 11, fontWeight: 600, background: '#f0f0f2', color: '#86868b', padding: '2px 8px', borderRadius: 4, textTransform: 'uppercase', letterSpacing: 0.5 },
  main: { flex: 1, padding: 24, display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 720 },
  card: { background: '#fff', borderRadius: 12, padding: 20, boxShadow: '0 1px 3px rgba(0,0,0,0.06)' },
  cardTitle: { fontSize: 15, fontWeight: 600, marginBottom: 12 },
  statusGrid: { display: 'flex', flexDirection: 'column', gap: 8 },
  statusRow: { display: 'flex', justifyContent: 'space-between', fontSize: 14, padding: '6px 0', borderBottom: '1px solid #f0f0f2' },
  error: { color: '#ff453a', fontSize: 14, lineHeight: 1.5 },
  loading: { color: '#86868b', fontSize: 14 },
  actionRow: { display: 'flex', gap: 8, marginTop: 12, flexWrap: 'wrap' },
  btn: { padding: '8px 16px', fontSize: 13, fontWeight: 500, border: '1px solid #d2d2d7', borderRadius: 8, background: '#fff', color: '#1d1d1f', cursor: 'not-allowed', opacity: 0.5 },
  footer: { padding: '12px 24px', background: '#fff', borderTop: '1px solid #e5e5e7', fontSize: 12, color: '#86868b' },
};
