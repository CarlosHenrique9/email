// eslint-disable-next-line react/prop-types
export const Container = ({ children }) => (
  <div
    className="
      bg-zinc-100 dark:bg-zinc-800
      text-zinc-900 dark:text-zinc-50
      px-2 pb-2 xl:px-6 lg:pb-4
      h-[calc(100vh - 4rem)] lg:h-[calc(100vh - 5rem)]"
  >
    {children}
  </div>
);
