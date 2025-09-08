export function Loader() {
  return <div className="loader" />;
}
export const GlobalLoader = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Loader />
    </div>
  );
};
