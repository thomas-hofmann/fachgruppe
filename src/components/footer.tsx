const Footer = () => {
    return (
      <footer className="w-full bg-gray-800 text-white border-t border-sky-500/50 mt-4 py-2">
        <p className="text-sm">&copy; {new Date().getFullYear()} Thomas Hofmann. Alle Rechte vorbehalten.</p>
      </footer>
    );
  };
  
  export default Footer;