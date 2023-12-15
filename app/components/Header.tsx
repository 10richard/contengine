import contengineLogo from "@/public/images/contengine-logo.png";

const Header = () => {
  return (
    <header className="flex items-center justify-center gap-5 min-[770px]:p-5 px-5 py-3 text-center">
      <img
        className="w-[60px] -mt-2 max-[770px]:hidden"
        src={contengineLogo.src}
        alt="Contengine logo"
      />
      <h1 className="font-semibold">
        ATTENTION: FOUNDERS AND CEOS OF E-COMMERCE BUSINESSES
      </h1>
    </header>
  );
};

export default Header;
