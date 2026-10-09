import { useState } from"react";
import { LOGIN } from"../data/content";
import { useNav } from"../nav";

export function Login() {
  const { lookup } = useNav();
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [tried, setTried] = useState(false);

  return (
    <section className="relative">
      <div className="mx-auto grid max-w-[1400px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setTried(true);
          }}
          noValidate
          className="mx-auto w-full max-w-[520px] border border-ink bg-stock/60 p-7 shadow-[10px_10px_0_rgba(23,20,15,0.14)] sm:p-10"
        >
          <span className="block h-2 w-14 bg-signal" />
          <h1 className="display mt-6 text-[clamp(1.9rem,4vw,2.8rem)] text-ink">
            {LOGIN.title}
          </h1>
          <p className="mt-4 leading-[1.55] text-inksoft">{LOGIN.body}</p>

          <div className="mt-9 space-y-7">
            <div>
              <label htmlFor="l-email" className="label text-stone">
                {LOGIN.email.label}
              </label>
              <input
                id="l-email"
                type="email"
                className="field"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={LOGIN.email.placeholder}
                aria-invalid={tried && !email}
                autoComplete="email"
              />
            </div>
            <div>
              <label htmlFor="l-pw" className="label text-stone">
                {LOGIN.password.label}
              </label>
              <input
                id="l-pw"
                type="password"
                className="field"
                value={pw}
                onChange={(e) => setPw(e.target.value)}
                placeholder={LOGIN.password.placeholder}
                aria-invalid={tried && !pw}
                autoComplete="current-password"
              />
            </div>
          </div>

          <button
            type="submit"
            className="label group mt-9 flex w-full items-center justify-between gap-4 bg-ink px-6 py-5 text-paper transition-colors duration-200 hover:bg-signal"
          >
            {LOGIN.submit}
            <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </button>
          <button
            type="button"
            onClick={lookup}
            className="label mt-3 flex w-full items-center justify-between gap-4 border border-ink px-6 py-5 text-ink transition-colors duration-200 hover:bg-ink hover:text-paper"
          >
            {LOGIN.alt}
            <span aria-hidden="true">→</span>
          </button>
        </form>
      </div>
    </section>
  );
}
