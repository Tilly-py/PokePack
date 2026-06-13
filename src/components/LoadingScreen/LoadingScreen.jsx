const LoadingScreen = () => {
  return (
    <div className="mt-8 flex flex-col items-center gap-4 rounded-3xl border border-zinc-800 bg-zinc-900/80 px-10 py-8 shadow-2xl">
      <div
        className="
            relative flex h-[100px] w-[100px] items-center justify-center overflow-hidden rounded-full
          bg-[linear-gradient(90deg,#facc15,#f97316,#ffffff,#f97316,#facc15)]
          bg-[length:600%_600%]
          [animation:pokeLoading_10s_linear_infinite]"
      >
        <div className="absolute h-[105px] w-[20px] rounded-md bg-white [animation:pokeShadow_4s_linear_infinite]" />
        <div className="relative z-10 h-[80px] w-[80px] rounded-full bg-zinc-900" />
      </div>
      <div className="text-center">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-400">Loading</p>
        <p className="mt-2 text-sm text-zinc-400">Fetching Cards...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
