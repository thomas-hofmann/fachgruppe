import Link from "next/link";

export default function Navigation() {
  return (
      <nav>
        <ul className="flex space-x-6 border-t border-b border-sky-500/50 my-2 py-2">
          <li>
            <Link href="/" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/members" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
              Mitglieder
            </Link>
          </li>
          <li>
            <Link href="/labs" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
              Labore
            </Link>
          </li>
        </ul>
    </nav>
  );
}