import Error from "../../components/Error/Error";

function NotFound() {
  return <Error title="404" subtitle="Oups! La page que vous demandez n'existe pas." />;
}

export default NotFound;
