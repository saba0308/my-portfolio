import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function SocialIcons() {
  return (
    <div className="flex items-center gap-5 mt-6">

      <Link
        href="https://github.com/saba0308"
        target="_blank"
        className="text-3xl hover:text-blue-600 transition"
      >
        <FaGithub />
      </Link>

      <Link
        href="https://www.linkedin.com/in/sabapathi-p-3b998b201/"
        target="_blank"
        className="text-3xl hover:text-blue-600 transition"
      >
        <FaLinkedin />
      </Link>

      <Link
        href="mailto:sabapathi030820@gmail.com"
        className="text-3xl hover:text-blue-600 transition"
      >
        <FaEnvelope />
      </Link>

    </div>
  );
}