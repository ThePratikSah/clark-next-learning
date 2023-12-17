import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href={"/"} className="w-36 text-xl">
          <span className="text-slate-600">hyre</span>.
          <span className="text-slate-900">one</span>
        </Link>

        <p>© 2023 hyre.one</p>
      </div>
    </footer>
  );
}
