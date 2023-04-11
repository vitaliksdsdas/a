import Link from "next/link";
import month from "../public/404/month.svg";
import earh from "../public/404/earh.svg";
import Image from "next/image";

const Error = () => {
  return (
    <div  className="animate-pulse flex justify-start h-screen bg-errorPage">
      <div >
        <Image
          className="justify-start flex"
          width={400}
          height={100}
          src={month}
        />
      </div>

      <div className="ml-20 font-concert flex justify-center items-center flex-col ">
        <header>
          <h1 className="text-6xl text-codeError">404</h1>
        </header>
        <main className="mb-32">
          <p className="text-6xl text-textError">Page not found!</p>
        </main>
        <footer>
          <Link className="text-white text-2xl" href="/">
            Go to homepage
          </Link>
        </footer>
      </div>

      <div>
        <Image height={690} src={earh} />
      </div>
    </div>
  );
};

export default Error;
