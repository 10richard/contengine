import contengineLogo from "@/public/images/contengine-logo.png";

const Header = () => {
  return (
    <header className="flex items-center justify-center gap-5 min-[770px]:p-5 max-[500px]:px-3 py-3 text-center">
      <img
        className="w-[60px] -mt-2 max-[770px]:hidden"
        src={contengineLogo.src}
        alt="Contengine logo"
      />
      <h2 className="font-semibold max-[500px]:text-sm">
        ATTENTION: CONTENT CREATORS & EDUCATORS
      </h2>
    </header>
  );
};

export default Header;
