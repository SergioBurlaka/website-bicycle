import logo from "../../assets/img/logos/logo-1.png";

const Contacts = () => {
  return (
    <div className="py-24 px-4 bg-white flex flex-col justify-center items-center">
      <img className="pb-8" src={logo} alt="" />
      <h2 className="text-[#848789] text-[2em] pb-8 italic">
        Stay on the saddle!
      </h2>
      <form
        action=""
        method="get"
        className="flex justify-center flex-col md:flex-row"
      >
        <input
          className="p-6 text-2xl mb-8 md:mb-0 text-[#848789] min-w-[300] md:min-w-[400px] focus:border-[#d3d7d9] italic border-[#d3d7d9] border-2 border-solid  md:mr-2"
          type="email"
          placeholder="enter your email..."
          name="email"
          id="email"
          required
        />
        <input
          className="px-10 py-4 bg-[#64c29e] text-[32px] text-white"
          type="submit"
          value="GO!"
        />
      </form>
    </div>
  );
};

export default Contacts;
