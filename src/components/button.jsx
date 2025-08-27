import { Link } from "react-router-dom";

export default function ReusableButton({ link, label, icon }) {
  return (
    <Link
      to={link}
      className="flex items-center gap-2 my-3
         bg-blue-600 hover:bg-blue-700
          text-white font-medium shadow-md px-4 py-2 rounded-md transition"
    >
      {label} {icon}
    </Link>
  );
}
