import Image from "next/image";

export default function Home() {
  return (
    <>
      <div class="header-wrap bg-white">
        <div class="xl:container mx-auto p-2 ">
          <div class="show-case flex justify-between sm:px-5 md:px-10 py-14">
            <div class="left pl-5 sm:pl-12 lg:w-[55%] w-full p-3 bg-[url('/assets/images/background.png')] bg-no-repeat">
              <div class="content p-4 ">
                <p class="text-xl sm:text-2xl md:text-3xl font-[Kalam] font-bold mb-3 text-red-700">Over 10,56,432 Active
                  Ads</p>
                <h1 class="md:text-8xl sm:text-6xl text-5xl font-bold mb-4">Find Anything Around You.</h1>
                <h3 class="text-lg sm:text-xl md:text-2xl font-semibold text-gray-600 mb-3">You Can Buy, Sell
                  Anything You Can Think Of.</h3>
              </div>

              <div class="catagory">
                <div class="links py-3">
                  <span class="text-lg font-semibold mr-3">Popular Search:</span>
                  <a class="text-md font-semibold mr-3 hover:text-red-700" href="#">Real Estate</a>
                  <a class="text-md font-semibold mr-3 hover:text-red-700" href="#">Mobile Phones</a>
                  <a class="text-md font-semibold mr-3 hover:text-red-700" href="#">Electronics</a>
                  <a class="text-md font-semibold mr-3 hover:text-red-700" href="#">Vehicles</a>
                  <a class="text-md font-semibold mr-3 hover:text-red-700" href="#">Pets</a>
                  <a class="text-md font-semibold mr-3 hover:text-red-700" href="#">Animal</a>
                </div>
              </div>
            </div>
            <div className="right">
              <Image src="/images/car.png" width={400} height={400} alt="Picture of the car" />
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
