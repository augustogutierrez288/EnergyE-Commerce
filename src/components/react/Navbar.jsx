import { useRef, useEffect, useState } from 'react';

function Navbar() {
  const buttonRef = useRef(null);
  const articleRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const button = buttonRef.current;
    const article = articleRef.current;

    const handleClick = () => {
      setIsActive(!isActive);
    };

    if (button) {
      button.addEventListener("click", handleClick);
    }

    return () => {
      if (button) {
        button.removeEventListener("click", handleClick);
      }
    };
  }, [isActive]);

  return (
    <nav className="burger">
      <section className="burger-section">
        <a className="burger-logo" href="/">
          Energy
        </a>
        <article className={`burger-article article-desktop`} ref={articleRef}>
          <ul className="burger--ul">
            <li className="burger--li">
              <a className="burger--link" href="/">
                Inicio
              </a>
            </li>
            <li className="burger--li">
              <a className="burger--link" href="#product">
                Productos
              </a>
            </li>
            <li className="burger--li">
              <a className="burger--link" href="about">
                Sobre Nosotros
              </a>
            </li>
            <li className="burger--li">
              <a className="burger--link" href="contact">
                Contactos
              </a>
            </li>
          </ul>
            </article> 
        {
            isActive ? 
            <article className={`burger-article animate__animated ${isActive ? 'animate__fadeIn' : 'animate__fadeOut'}`} ref={articleRef}>
          <ul className="burger--ul">
            <li className="burger--li">
              <a className="burger--link" href="/">
                Inicio
              </a>
            </li>
            <li className="burger--li">
              <a className="burger--link" href="#product">
                Productos
              </a>
            </li>
            <li className="burger--li">
              <a className="burger--link" href="about">
                Sobre Nosotros
              </a>
            </li>
            <li className="burger--li">
              <a className="burger--link" href="contact">
                Contactos
              </a>
            </li>
          </ul>
            </article> 
        :
        null
        }
        

        <button
          className={`hamburger hamburger--spring ${isActive ? 'is-active' : ''}`}
          type="button"
          ref={buttonRef}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </section>
    </nav>
  );
}

export default Navbar;
