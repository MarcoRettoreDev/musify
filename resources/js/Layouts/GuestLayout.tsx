export default function Guest(props) {
  const { children } = props;
  return (
    <div
      className={`flex min-app-height  flex-col sm:justify-center items-center `}
    >
      {children}
    </div>
  );
}
