import SocialList from "../SocialList/SocialList";

const Footer = ({}) => {
  return (
    <footer className="flex flex-col justify-center items-center gap-4 mt-64 border-t-2 border-custom-color-border p-6">
      <SocialList />
      <p className="text-xs opacity-60 ">
        Ⓒ 2022 Dust City. All right reserved
      </p>
    </footer>
  );
};

export default Footer;
