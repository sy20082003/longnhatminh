type Step = {
  number: string;
  title: string;
  desc: string;
};

type ServiceProcessProps = {
  eyebrow: string;
  title: string;
  steps: Step[];
};

export default function ServiceProcess({ eyebrow, title, steps }: ServiceProcessProps) {
  return (
    <section className="section-py bg-soft-gradient">
      <div className="container-px mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="section-title">{title}</h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, idx) => (
            <div key={s.title} className="relative rounded-2xl border border-navy-100 bg-white p-7 shadow-sm">
              <span className="text-4xl font-extrabold text-navy-200">{s.number}</span>
              <h3 className="mt-3 text-lg font-bold text-navy-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-500">{s.desc}</p>
              {idx < steps.length - 1 && (
                <span className="absolute -right-3 top-1/2 hidden h-px w-6 bg-navy-200 lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
