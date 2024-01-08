const SectionBraker = () => {

  return (
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl lg:max-w-none">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl">Trusted by creators worldwide</h2>
        <p className="text-lg leading-8 ">We can help you grow your audience and your business, no matter the
          size.
        </p>
      </div>
      <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col dark:bg-white/5 bg-black/5 p-8">
          <dt className="text-sm font-semibold leading-6 ">words written in 2023</dt>
          <dd className="order-first text-3xl font-semibold tracking-tight ">12 million</dd>
        </div>
        <div className="flex flex-col dark:bg-white/5 bg-black/5 p-8">
          <dt className="text-sm font-semibold leading-6 ">episodes uploaded</dt>
          <dd className="order-first text-3xl font-semibold tracking-tight ">10k</dd>
        </div>
        <div className="flex flex-col dark:bg-white/5 bg-black/5 p-8">
          <dt className="text-sm font-semibold leading-6 ">hours of media</dt>
          <dd className="order-first text-3xl font-semibold tracking-tight ">6.6k</dd>
        </div>
        <div className="flex flex-col dark:bg-white/5 bg-black/5 p-8">
          <dt className="text-sm font-semibold leading-6 ">answers</dt>
          <dd className="order-first text-3xl font-semibold tracking-tight ">2.1k</dd>
        </div>
      </dl>
    </div>
  </div>
  );
};

export default SectionBraker;
