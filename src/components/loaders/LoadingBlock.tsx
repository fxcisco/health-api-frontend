import React, { ReactNode, HTMLAttributes } from 'react';

interface BlockProps extends HTMLAttributes<HTMLDivElement> {
  loader?: {
    minWidth?: string;
    minHeight?: string;
  };

  isLoading?: boolean;
  children?: ReactNode;
}

export const LoadingBlock = ({
  children,
  loader = {},
  isLoading = false,
  ...rest
}: BlockProps) => {
  const loaderStyle = loader;
  if (isLoading) {
    return <div className="loading-block" style={loaderStyle}></div>;
  }

  return <div {...rest}>{children}</div>;
};

interface Props {
  children?: ReactNode;
  className?: string;
  isLoading?: boolean;
  isDisplayed?: boolean;
}

export const LoadingContent = ({
  children,
  isDisplayed = true,
  isLoading = false,
  className,
}: Props) => {
  let loadingClass = 'loading-content';
  if (isLoading) loadingClass += ' loading';

  return (
    <React.Fragment>
      <div className={`loading-wrapper ${isLoading ? 'loading': ''}`}>
        <div className={`loading-filler `}>
          <h2>Loading...</h2>
        </div>
        <div className={`loading-content`}>
          {children}
        </div>
      </div>
      
    </React.Fragment>
  );
};


/*
const [loading, setLoading] = useState(false);
const [display, setDisplay] = useState(true);

const loadClick = () => setLoading(!loading);
const displayClick = () => setDisplay(!display);

<div className="my-5">
  <h2 onClick={loadClick} className="my-2">
    Loading: {`${loading}`}
  </h2>
  <h2 onClick={displayClick} className="my-2">
    Display: {`${display}`}
  </h2>
</div>

<LoadingContent isDisplayed={display} isLoading={loading}>
  <div className="test-content">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
      cupiditate laudantium cumque illo vel. Officia doloremque commodi
      suscipit. Exercitationem enim quasi, quo soluta veritatis
      accusantium asperiores voluptatem a culpa ipsum?
    </p>
  </div>
</LoadingContent>
*/