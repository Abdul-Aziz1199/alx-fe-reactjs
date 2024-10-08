
function UserProfile() {
    return (
      <div className="hover:shadow-xl bg-gray-100 p-4 sm:p-4 md:p-8 max-w-xs sm:max-w-sm md:max-w-sm  md:max-w-md mx-auto my-10 md:my-20 rounded-lg shadow-lg text-center">
        <img src="https://via.placeholder.com/150" alt="User" className=" hover:scale-110 transition-transform duration-300 ease-in-out w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36 rounded-full mx-auto" />
        <h1 className="hover:text-blue-500 text-xl sm:text-lg md:text-xl text-blue-800 mt-4">John Doe</h1>
        <p className="text-gray-600 sm:text-sm  md:text-base-md">Developer at Example Co. Loves to write code and explore new technologies.</p>
      </div>
    );
  }
  
  export default UserProfile;
