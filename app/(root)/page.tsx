import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-20 text-center lg:pt-32">
        <h1 className="mx-auto max-w-4xl font-display text-8xl font-extrabold tracking-tight text-slate-700 sm:text-7xl">
          Sharing{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
            resume
          </span>{" "}
          made simple.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
          Turn your resume into a standout, sharable link. <br /> Upload &
          Share.
        </p>
        <div className="mt-24 lg:mt-24">
          <p className="font-display text-base text-slate-900">
            Some of our users work here
          </p>
          <ul
            role="list"
            className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
          >
            <li>
              <ul
                role="list"
                className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
              >
                <li className="flex">
                  <Image
                    alt="Transistor"
                    loading="lazy"
                    width="158"
                    height="48"
                    decoding="async"
                    data-nimg="1"
                    src="https://salient.tailwindui.com/_next/static/media/transistor.7274e6c3.svg"
                    style={{ color: "transparent" }}
                  />
                </li>
                <li className="flex">
                  <Image
                    alt="Tuple"
                    loading="lazy"
                    width="105"
                    height="48"
                    decoding="async"
                    data-nimg="1"
                    src="https://salient.tailwindui.com/_next/static/media/tuple.74eb0ae0.svg"
                    style={{ color: "transparent" }}
                  />
                </li>
                <li className="flex">
                  <Image
                    alt="StaticKit"
                    loading="lazy"
                    width="127"
                    height="48"
                    decoding="async"
                    data-nimg="1"
                    src="https://salient.tailwindui.com/_next/static/media/statickit.d7937794.svg"
                    style={{ color: "transparent" }}
                  />
                </li>
              </ul>
            </li>
            <li>
              <ul
                role="list"
                className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
              >
                <li className="flex">
                  <Image
                    alt="Mirage"
                    loading="lazy"
                    width="138"
                    height="48"
                    decoding="async"
                    data-nimg="1"
                    src="https://salient.tailwindui.com/_next/static/media/mirage.18d2ec4e.svg"
                    style={{ color: "transparent" }}
                  />
                </li>
                <li className="flex">
                  <Image
                    alt="Laravel"
                    loading="lazy"
                    width="136"
                    height="48"
                    decoding="async"
                    data-nimg="1"
                    src="https://salient.tailwindui.com/_next/static/media/laravel.7deed17e.svg"
                    style={{ color: "transparent" }}
                  />
                </li>
                <li className="flex">
                  <Image
                    alt="Statamic"
                    loading="lazy"
                    width="147"
                    height="48"
                    decoding="async"
                    data-nimg="1"
                    src="https://salient.tailwindui.com/_next/static/media/statamic.6da5ebfb.svg"
                    style={{ color: "transparent" }}
                  />
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
