import { Link, useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div id="error-page" className=" text-center">
      <Link to="/" className=" text-4xl">
        Home
      </Link>
      <img
        className="mx-auto"
        src="https://blog.fluidui.com/assets/images/posts/imageedit_1_9273372713.png"
        alt=""
      />
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
