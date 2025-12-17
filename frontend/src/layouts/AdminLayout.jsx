export default function AdminLayout({ children }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <aside style={{
        width: "220px",
        background: "#0f172a",
        color: "white",
        padding: "20px"
      }}>
        <h2>Edu Center</h2>
        <nav>
          <p>Dashboard</p>
          <p>O‘quvchilar</p>
          <p>O‘qituvchilar</p>
          <p>Guruhlar</p>
        </nav>
      </aside>

      {/* Main content */}
      <main style={{ flex: 1, padding: "20px" }}>
        {children}
      </main>
    </div>
  );
}
