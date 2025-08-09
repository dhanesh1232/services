// app/[...notFound]/page.js
import { redirect } from "next/navigation";

export default function CatchAll() {
  redirect("/not-found");
}
