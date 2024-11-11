interface ILoading {
  numberOfLoaders?: number;
  loaderType?: string;
  screenSize?: string;
  height?: number;
  className?: string;
}

export default function Loading(props: ILoading) {
  const { numberOfLoaders = 3, height = 5, className } = props;

  const baseClass = `${className} h-${height} rounded-lg`;

  return (
    <div className="animate-pulse flex space-x-4">
      <div className="flex-1 space-y-8 py-1">
        {[...Array(numberOfLoaders)].map((_, index) => (
          <div key={index} className={baseClass} />
        ))}
      </div>
    </div>
  );
}
