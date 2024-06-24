export default function SuperviseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      &copy; NextJS is awesome !!
    </div>
  );
}
