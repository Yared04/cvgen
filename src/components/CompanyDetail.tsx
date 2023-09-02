
export const CompanyDetails = ({ }) => {
    return (
        <div className="text-text-secondary p-6 w-full">
    <h1 className="my-auto text-black  text-xl">Company Details <span className="my-auto text-[#ff0000] text-xl">*</span></h1>
    
  
  

  <form action="">
    <div className="mt-4">
      
      <input
        className="border-2 rounded-md p-2 w-full h-10 m-2 text-text-secondary focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        id="company"
        name="company"
        type="text"
        placeholder="Comapany Name"
        required
      />
    </div>
    <div className="mt-4">
      
      <input
        className="border-2 rounded-md p-2 w-full h-10 m-2 text-text-secondary focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        id="position"
        name="position"
        type="text"
        placeholder="Job Position"
        required
      />
    </div>
    <div className="mt-4">

      <textarea
        className="border-2 rounded-md p-2 w-full h-32 m-2 text-text-secondary focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        id="jobDescription"
        name="jobDescription"
        placeholder="Job Description"
        required
      ></textarea>
    </div>
    <div className="flex justify-center mt-4">
      
      <button className="bg-primary w-[60%] hover:shadow-xl text-white font-bold py-2 px-4 m-2 rounded ">
        Generate
      </button>
    </div>
  </form>
</div>
    );
};


