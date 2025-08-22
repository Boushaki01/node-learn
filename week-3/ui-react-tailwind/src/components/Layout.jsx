function Layout({ children }) {
  return (
    <div className="min-h-screen w-full">
      <main className="flex-1 p-6 w-full">{children}</main>
    </div>
  );
}

export default Layout;
