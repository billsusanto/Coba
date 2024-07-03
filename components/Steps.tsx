import Link from 'next/link';
import Image from 'next/image';

const Steps = () => {
  return (
    <div className="py-20 relative">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-20">
          <div className="w-2/5">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-b from-customBlue-default to-customBlue-dark text-white text-2xl font-semibold rounded-full w-14 h-14 flex items-center justify-center mr-4">
                1
              </div>
              <h2 className="text-5xl font-semibold">Find Projects</h2>
            </div>
            <div className='pl-20'>
                <p className="mb-4 text-2xl">
                Find fellow students, and collaborate on projects to broaden your knowledge and experience.
                </p>
                <Link href="/collaborate" className="inline-block bg-transparent text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600 border-2 border-blue-500 rounded-md px-6 py-3 text-xl mt-8">
                    Collaborate now
                </Link>
            </div>
          </div>
          <div className="w-2/5 pl-13 pr-5">
            <div className="group h-80 bg-gray-200 rounded-lg">
              <Image
                src=""
                alt="Placeholder"
                className="w-full h-full object-cover rounded-lg group-hover:shadow-blueShadow shadow-2xl transition-shadow duration-500"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-20">
          <div className="w-2/5 order-2">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-b from-customBlue-default to-customBlue-dark text-white text-2xl font-semibold rounded-full w-14 h-14 flex items-center justify-center mr-4">
                2
              </div>
              <h2 className="text-5xl font-semibold">Join Teams</h2>
            </div>
            <div className='pl-20'>
                <p className="mb-4 text-2xl">
                Find fellow students, and collaborate on projects to broaden your knowledge and experience.
                </p>
                <Link href="/share" className="inline-block bg-transparent text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600 border-2 border-blue-500 rounded-md px-6 py-3 text-xl mt-8">
                    Share your Idea
                </Link>
            </div>
          </div>
          <div className="w-2/5 pl-10 pr-8 order-1">
            <div className="group h-80 bg-gray-200 rounded-lg">
              <Image
                src=""
                alt="Placeholder"
                className="w-full h-full object-cover rounded-lg group-hover:shadow-blueShadow shadow-2xl transition-shadow duration-500"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="w-2/5">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-b from-customBlue-default to-customBlue-dark text-white text-2xl font-semibold rounded-full w-14 h-14 flex items-center justify-center mr-4">
                3
              </div>
              <h2 className="text-5xl font-semibold">Collaborate</h2>
            </div>
            <div className='pl-20'>
                <p className="mb-4 text-2xl">
                Find fellow students, and collaborate on projects to broaden your knowledge and experience.
                </p>
                <Link href="/collaborate" className="inline-block bg-transparent text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600 border-2 border-blue-500 rounded-md px-6 py-3 text-xl mt-8">
                    Collaborate now
                </Link>
            </div>
          </div>
          <div className="w-2/5 pl-13 pr-5">
            <div className="group h-80 bg-gray-200 rounded-lg">
              <Image
                src=""
                alt="Placeholder"
                className="w-full h-full object-cover rounded-lg group-hover:shadow-blueShadow shadow-2xl transition-shadow duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
