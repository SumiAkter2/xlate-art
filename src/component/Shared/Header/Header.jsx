const Header = ({ children }) => {
  return (
    <div>
      <div className="w-full  bg-primary text-secondary h-20  py-4">
        <h1
          className="text-center px-2 mx-2 text-5xl font-bold "
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
