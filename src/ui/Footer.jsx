const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="mt-4 text-center text-xs text-stone-400">
      Copyright &#169; {currentYear} YAL Frontend Development Studio.
      <a className="block" href="www.priessnitzstudio.cz">
        Photo by Victoria Priessnitz
      </a>
    </footer>
  );
}

export default Footer;
