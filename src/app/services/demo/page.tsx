"use client";
import Link from "next/link";

export default function DemoPage() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <h1>Demo Page</h1>
      <div className="w-full h-1/2 flex items-center justify-center">
        <div className="">
          <Link href="/services/demo/car-rental" className="text-blue-500 underline">
            Car Rental Demo
          </Link>
        </div>
      </div>
    </div>
  );
}
