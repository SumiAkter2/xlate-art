const Header = ({ children }) => {
  return (
    <div>
      <div className="w-full  bg-primary text-secondary h-20  p-6">
        <h1
          className="text-center px-2 mx-2 text-3xl font-bold "
          style={{ fontFamily: '"Cardo", serif' }}
        >
          Exhibit!
        </h1>
      </div>

      {children}
    </div>
  );
};

export default Header;
