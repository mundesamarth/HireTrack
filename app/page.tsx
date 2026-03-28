import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-40 ">
      <Button className="p-10 bg-red-500 text-amber-100 text-2xl">
        <Link href="api/auth/signin"> Google Sign In</Link>
      </Button>
          <Button className="p-10 bg-red-500 text-amber-100 text-2xl">
        <Link href="/api/google"> Check Gmail</Link>
      </Button>
    </div>
  );
}
