function Wrapper({children}) {
  return (
    <div className="bg-white rounded-[20%] border-4 p-5 shadow-xl transition hover:scale-105 hover:z-10 hover:bg-slate-100 duration-200 bg-gradient-to-br from-blue-50 to-red-0">
        {children}
    </div>
  );
}

export default Wrapper;
