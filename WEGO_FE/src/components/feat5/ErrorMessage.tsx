type ErrorMessageProps = {
  error: Error;
};

const ErrorMessage = ({ error }: ErrorMessageProps) => {
  return <div>{error.message}</div>;
};

export default ErrorMessage;
