export function getVisitorId() {
  let visitorId = localStorage.getItem("ecodrix-services-blog-visitorId");
  if (!visitorId) {
    visitorId = crypto.randomUUID();
    localStorage.setItem("ecodrix-services-blog-visitorId", visitorId);
  }
  return visitorId;
}
