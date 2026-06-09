function PageHeader({ title, subtitle, children }) {
  return (
    <header className="page-header">
      <h1>{title}</h1>
      {subtitle && <p className="page-header__subtitle">{subtitle}</p>}
      {children}
    </header>
  );
}

export default PageHeader;
