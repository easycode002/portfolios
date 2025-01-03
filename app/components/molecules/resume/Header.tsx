export function Header() {
  return (
    <header className="flex flex-col text-center space-y-3">
      <h2 className="text-center mb-3 text-2xl md:text-3xl lg:text-4xl font-ubuntubold uppercase underline underline-offset-4">
        RESUME
      </h2>
      <div className="">
        <p className="text-base sm:text-lg text-muted-foreground">
          Passionate software developer with experience in web development and
          teaching
        </p>
      </div>
    </header>
  );
}
