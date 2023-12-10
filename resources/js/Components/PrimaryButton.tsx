export default function PrimaryButton({
  type = 'submit',
  className = '',
  children,
  processing,
  onClick,
  styleProp,
}) {
  return (
    <button
      disabled={processing}
      type={type}
      onClick={onClick}
      className={
        ` text-center px-4 py-2 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gradientButton hover:text-blackSecondary hover:font-bold transition ease-out duration-50 ` +
        className
      }
      style={styleProp}
    >
      {children}
    </button>
  );
}
