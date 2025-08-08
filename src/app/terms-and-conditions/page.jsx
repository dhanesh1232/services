import TermsAndConditions from "@/components/pages/terms-and-conditions";
import { metadataForPath } from "@/lib/client/seo";

export async function metadata() {
  return metadataForPath("/terms-and-conditions", {
    title: "Terms and Conditions",
  });
}

export default function TermsPage() {
  return <TermsAndConditions />;
}
