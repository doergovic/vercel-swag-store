type BannerProps = {
  message: string;
  code?: string;
};

export default function Banner({ message, code }: BannerProps) {
  return (
    <aside
      aria-label="Store promotion"
      className="bg-foreground text-background"
    >
      <p className="mx-auto max-w-7xl px-5 py-3 text-center text-xs leading-5 sm:px-8 sm:text-sm">
        {message}

        {code && (
          <>
            {" "}
            <span className="inline-block whitespace-nowrap">
              Code: <span className="font-mono font-semibold">{code}</span>
            </span>
          </>
        )}
      </p>
    </aside>
  );
}
