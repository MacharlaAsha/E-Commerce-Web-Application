const Footer = () => {
  return (
    <footer
      style={{
        background: "#222",
        color: "#fff",
        textAlign: "center",
        padding: "15px",
        marginTop: "30px",
      }}
    >
      <p>&copy; {new Date().getFullYear()} E-Shop. All Rights Reserved.</p>
      <p>Developed with ❤️ using React & Node.js</p>
    </footer>
  );
};

export default Footer;
