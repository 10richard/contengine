interface MainButtonProps {
  bgColor: string;
  textColor?: string;
}

const MainButton = ({ bgColor, textColor }: MainButtonProps) => {
  return (
    <a href="#calendlybooking">
      <button
        className={`${bgColor} ${textColor} text-xl w-full px-10 py-3.5 rounded-full hover:scale-105 duration-300`}
      >
        READY TO SCALE?
      </button>
    </a>
  );
};

export default MainButton;
