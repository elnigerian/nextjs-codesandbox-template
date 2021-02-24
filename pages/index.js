import Link from "next/link";

export default function IndexPage() {
  return (
    <div>
      Hello World.{" "}
      <Link href="/about">
        <a className="text-blue-500 hover:text-green-500">About</a>
      </Link>
    </div>
  );
}
