import { SitePage } from "@/layout";

const CustomError = ({ statusCode }) => {
  return (
    <SitePage title='Error'>
      <div className="container full-screen flex">
        <h1>{statusCode}</h1>
      </div>
    </SitePage>
  );
}

function getInitialProps({ res, err }) {
  let statusCode: number | null;
  // If the res variable is defined it means nextjs
  // is in server side
  if (res) {
    statusCode = res.statusCode;
  } else if (err) {
    // if there is any error in the app it should
    // return the status code from here
    statusCode = err.statusCode;
  } else {
    statusCode = null;
  }
  return { statusCode };
}

CustomError.getInitialProps = getInitialProps;

export default CustomError;