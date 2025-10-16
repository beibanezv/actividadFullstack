import Header from './Header';

export default function Layout({ children, side }) {
  return (
    <div className="app-layout">
      <Header />
      <div className="app-layout__content">
        <main className="app-main">{children}</main>
        <aside className="app-side">{side}</aside>
      </div>
    </div>
  );
}
