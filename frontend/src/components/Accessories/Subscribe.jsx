export const Subscribe = () => {
  return (
    <>
      <section className="bg-blend-soft-light bg-gray-400 py-24">
        <div className="mx-auto max-w-xl space-y-6 px-6 text-center">
          <h2 className="font-serif text-white text-4xl">The Sunday Letter</h2>
          <p className="text-ink/60">
            Weekly reflections on literature, new arrivals, and the art of
            reading slow.
          </p>
          <form className="flex gap-2">
            <input
              id="sub"
              type="email"
              required=""
              placeholder="Your email address"
              className="flex-1 border px-4 py-3 text-sm outline-none focus:border-gray-300"
            />
            <button className="px-6 py-3 text-sm font-medium bg-black text-white hover:bg-red-500 cursor-pointer transition-all duration-200">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
