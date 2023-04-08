import "./Footer.css";

function Footer() {
  const handleClick = (url) => {
    window.open(url, "_blank");
  };
  return (
    <footer>
      <div className="footer-container">
        <p className="footer-content">
          Hecho con{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="auto"
            height="auto"
            fill="currentColor"
            class="bi bi-heart-fill"
            viewBox="0 0 16 16"
            className="heart-icon"
          >
            <path
              fill-rule="evenodd"
              d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
            />
          </svg>{" "}
          por{" "}
          <span
            className="footer-link"
            onClick={() =>
              handleClick("https://www.linkedin.com/in/diegopartidaromero/")
            }
          >
            Diego Partida
          </span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
