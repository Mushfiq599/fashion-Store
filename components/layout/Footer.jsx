export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #eee",
        marginTop: "80px",
        padding: "40px 20px",
        textAlign: "center",
        color: "#777",
        fontSize: "14px",
      }}
    >
      <p>© {new Date().getFullYear()} Threadhouse. All rights reserved.</p>
    </footer>
  );
}