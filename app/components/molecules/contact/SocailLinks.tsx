import { Mail, MessageCircle, Linkedin, Facebook } from "lucide-react";
import { ArrowRightIcon } from "../../atoms/Icon";

const socialLinks = [
  {
    icon: <Mail size={36} />,
    label: "Email",
    value: "sotheamab002@gmail.com",
    href: "mailto:sotheamab002@gmail.com",
  },
  {
    icon: <Linkedin size={36} />,
    label: "Linkedin",
    value: "@easycode",
    href: "https://linkedin.com/in/easycode",
  },
  {
    icon: <MessageCircle size={36} />,
    label: "Telegram",
    value: "@MABSOTHEA",
    href: "https://t.me/MABSOTHEA",
  },
  {
    icon: <Facebook size={36} />,
    label: "Facebook",
    value: "@MABSOTHEA",
    href: "https://www.facebook.com/sm.nu15/",
  },
];

export function SocialLinks() {
  return (
    <div className="space-y-4 justify-center flex flex-col items-center max-w-md mx-auto py-6 w-full">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="block w-80 p-6 bg-white rounded-3xl border-[0.5px] border-gray-900 hover:scale-105 duration-150"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="text-black">{link.icon}</div>
            <h3 className="text-h4 font-ubuntubold">{link.label}</h3>
            <p className="text-h5 font-ubunturegular text-muted-foreground text-[#05C7AE]">
              {link.value}
            </p>
            <div className="flex flex-row justify-center items-center space-x-2 hover:text-primary">
              <p className="hover:underline-offset-4">Write me</p>
              <ArrowRightIcon
                className="hover:text-primary text-green-700"
                width={20}
                height={20}
              />
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
