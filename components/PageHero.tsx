import Image from "next/image";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  desc?: string;
  image?: string;
};

export default function PageHero({ eyebrow, title, desc, image }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[380px] items-center overflow-hidden bg-hero-gradient py-20 sm:min-h-[460px] sm:py-24 lg:min-h-[560px]">
      {image && (
        <>
          <Image
            src={image}
            alt={title}
            fill
            priority
            sizes="100vw"
            className="object-cover blur-sm scale-105"
          />
          <div className="absolute inset-0 bg-navy-900/75" />
        </>
      )}

      <div className="pointer-events-none absolute -right-10 -top-10 h-72 w-72 rounded-full bg-gold-400/15 blur-3xl" />
      <div className="container-px relative mx-auto w-full max-w-7xl text-center">
        <span
          className="eyebrow animate-fade-up bg-gold-400/15 text-gold-300 [animation-delay:0ms] [animation-fill-mode:backwards]"
        >
          {eyebrow}
        </span>
        <h1
          className="mt-5 animate-fade-up text-3xl font-extrabold tracking-tight text-white [animation-delay:120ms] [animation-fill-mode:backwards] sm:text-5xl"
        >
          {title}
        </h1>
        {desc && (
          <p
            className="mx-auto mt-4 max-w-2xl animate-fade-up text-navy-100 [animation-delay:240ms] [animation-fill-mode:backwards]"
          >
            {desc}
          </p>
        )}
      </div>
      <div className="absolute -bottom-1 h-10 w-full bg-soft-gradient [clip-path:ellipse(70%_100%_at_50%_100%)]" />
    </section>
  );
}
