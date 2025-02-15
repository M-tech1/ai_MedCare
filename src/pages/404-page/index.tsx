import PgNotFound from "../../assets/images/404-error.webp";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <>
      <div className="flex h-screen items-center justify-center bg-gray-100 px-4">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-800">404</h1>
          <p className="mt-4 text-xl text-gray-600">Oops! Page not found.</p>
          <p className="mt-2 text-gray-500">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <img
            src={PgNotFound}
            alt="404 illustration"
            className="mx-auto mt-6 rounded-lg shadow-md sm:w-[20rem]"
          />
          <Link
            to="/"
            className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
          >
            Go Home
          </Link>
        </div>
      </div>
    </>
  );
}
