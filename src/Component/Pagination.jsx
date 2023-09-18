import gitsUsers from "../Data/Data";
import person from "../assets/person.jpeg";
function Pagination() {
  return (
    <section className="container mx-auto px-5">
      <div className="flex flex-col items-center justify-center py-14">
        <div className="flex flex-col items-center gap-3 py-10">
          <h1 className="text-4xl font-bold">Pagination</h1>
          <div className="bg-blue-400 w-32 h-1"></div>
        </div>
        <div className="grid grid-cols-4 gap-5">
          {gitsUsers.map((element, index) => {
            return (
              <div className="bg-white rounded-xl w-60 h-52 shadow-xl flex flex-col items-center justify-center py-2 px-4 gap-5">
                <img
                  className="rounded-full w-[70px]"
                  src={element.avatar_url}
                  alt=""
                />
                <p className="tracking-widest font-bold capitalize">
                  {element.login}
                </p>
                <button className=" bg-blue-400 px-3 rounded-full text-white uppercase tracking-widest">
                  View Profile
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default Pagination;
