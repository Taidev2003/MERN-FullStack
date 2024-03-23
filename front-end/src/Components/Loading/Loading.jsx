const Loading = ({ children, isLoading, delay = 500 }) => {
  return isLoading ? (
    <div className="loading loading-spinner loading-md" delay={delay}>
      {children}
    </div>
  ) : (
    <>{children}</>
  );
};

export default Loading;
