import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/toni.JPG"
          alt="An image showing Toni"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I&apos;m Toni</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        React.
      </p>
    </section>
  );
}

export default Hero;
