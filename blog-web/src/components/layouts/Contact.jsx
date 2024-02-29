export const Contact = () => {
  return (
    <div className="max-w-screen-md m-auto pb-[50px]">
      <div>
        <h1 className="font-bold pb-6 text-black text-[36px]">Contact Us</h1>
        <p className="pb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do eiusmod
          tempor incididunt ut labore et dolore magna ariqua. Ut enim minim
          veniam at
        </p>
        <div className="flex gap-[40px] justify-between pb-[20px]">
          <div className="border w-[50%] rounded-xl p-[10px]">
            <div className=" font-bold pb-[10px] text-[24px]">Address</div>
            <p>
              1323 Oak Ridge Drive, Saint <br /> Lousi Missouri
            </p>
          </div>
          <div className="border w-[50%] rounded-xl p-[10px]">
            <div className=" font-bold pb-[10px] text-[24px]">Contact</div>
            <p>312 234 5674</p>
            <p>info@email.com</p>
          </div>
        </div>
        <div className=" bg-slate-50 rounded-xl p-[30px]">
          <h2 className="font-bold pb-[20px]">Leave a Message</h2>
          <div className="flex flex-col gap-[20px] pb-[20px]">
            <div className="flex justify-between">
              <input
                placeholder="Your Name"
                className="border rounded-md w-[48%] shadow-sm p-[5px] pl-[5px]"
                type="text"
              />
              <input
                placeholder="Your Email"
                className="border rounded-md w-[48%] shadow-sm p-[5px] pl-[5px]"
                type="text"
              />
            </div>
            <input
              placeholder="Subject"
              className="border rounded-md shadow-sm p-[5px] pl-[5px]"
              type="text"
            />
            <input
              placeholder="Write a message"
              className="border rounded-md h-[150px] shadow-sm p-[5px] pl-[5px]"
              type="text"
            />
          </div>
          <button className="text-white bg-blue-400 w-fit p-[10px] rounded-md">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};
