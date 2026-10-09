import { motion, useReducedMotion } from"framer-motion";
import type { ReactNode } from"react";

export function Reveal({
  children,
  delay = 0,
  className ="",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin:"-60px" }}
      transition={{ duration: 0.5, delay, ease: [0.2, 0.65, 0.3, 0.9] }}
    >
      {children}
    </motion.div>
  );
}

export const hideOnError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  e.currentTarget.style.display ="none";
};

/** Ruled section header: mono kicker, display H2, optional lead paragraph. */
export function SectionHead({
  kicker,
  title,
  body,
  dark = false,
  as: Tag ="h2",
}: {
  kicker: string;
  title: string;
  body?: string;
  dark?: boolean;
  as?:"h1" |"h2";
}) {
  return (
    <div className={`border-t pt-4 ${dark ?"border-paper/45" :"border-ink"}`}>
      <div className="flex items-center gap-3">
        <span className="h-2 w-2 bg-signal" />
        <span className={`label ${dark ?"text-paper/75" :"text-stone"}`}>
          {kicker}
        </span>
      </div>
      <div className="mt-5 grid gap-6 lg:grid-cols-12 lg:gap-10">
        <Tag
          className={`display text-[clamp(1.9rem,4.2vw,3.4rem)] ${
            dark ?"text-paper" :"text-ink"
          } ${body ?"lg:col-span-7" :"lg:col-span-10"}`}
        >
          {title}
        </Tag>
        {body && (
          <p
            className={`leading-[1.65] lg:col-span-5 lg:pt-2 ${
              dark ?"text-paper/75" :"text-inksoft"
            }`}
          >
            {body}
          </p>
        )}
      </div>
    </div>
  );
}

export function Perf({ className ="" }: { className?: string }) {
  return (
    <div className={`relative w-full ${className}`} aria-hidden="true">
      <div className="perf" />
      <span className="absolute -top-[7px] left-6 h-3.5 w-3.5 rounded-full border border-ink/35 bg-paper" />
      <span className="absolute -top-[7px] right-6 h-3.5 w-3.5 rounded-full border border-ink/35 bg-paper" />
    </div>
  );
}

export function Wrap({
  children,
  className ="",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={className}>
      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        {children}
      </div>
    </section>
  );
}

export function Btn({
  children,
  onClick,
  href,
  variant ="ink",
  className ="",
  type ="button",
}: {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?:"ink" |"signal" |"ghost" |"paper";
  className?: string;
  type?:"button" |"submit";
}) {
  const v = {
    ink:"bg-ink text-paper hover:bg-signal",
    signal:"bg-signal text-paper hover:bg-ink",
    ghost:"border border-ink text-ink hover:bg-ink hover:text-paper",
    paper:"bg-paper text-ink hover:bg-signal hover:text-paper",
  }[variant];
  const cls = `label inline-flex items-center justify-center gap-2 px-6 py-4 text-center transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:shadow-md ${v} ${className}`;
  if (href)
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
