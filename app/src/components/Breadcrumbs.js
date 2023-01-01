import { useNavigate } from "react-router-dom";

const Breadcrumbs = ({ breadcrumbs }) => {
  const navigate = useNavigate();

  const isLast = (i) => {
    return i === breadcrumbs.length - 1;
  };

  return (
    <div className="flex items-center px-4 py-8 space-x-4">
      {breadcrumbs.map((crumb, i) => {
        return (
          <div key={crumb.name}>
            <button
              onClick={() => navigate(crumb.path)}
              className={
                isLast(i)
                  ? "text-white disabled cusor-default"
                  : "text-blue-400"
              }
            >
              {!isLast(i) ? (
                <>
                  {crumb.name}
                  <span className="ml-3 bold text-xl text-white"> &gt; </span>
                </>
              ) : (
                <>{crumb.name}</>
              )}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
