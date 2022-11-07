export default function Picture({ src, alt }: any) {
  return <img src={src} alt={alt || "image"} />;
}
