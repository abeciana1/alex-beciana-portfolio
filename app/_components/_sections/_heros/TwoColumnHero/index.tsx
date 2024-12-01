import { TwoColumnHeroI } from '@/app/_definitions/interfaces/_sections';
import cx from 'classnames';
import { Heading1 } from '@/app/_components/_styled/_headings';
import { ColorE } from '@/app/_definitions/enums/_general';
import Image from 'next/image';

const TwoColumnHero = ({
  headingLevel = 1,
  headingText,
  subheadingText,
  bodyText,
  gradientBlur = false,
  image,
  reverseOrder = false,
  children,
}: TwoColumnHeroI) => {
  const { src, alt, className, width, height } = image;
  return (
    <>
      {gradientBlur && (
        <section className="flex justify-center">
          <div className="hidden: lg:block z-0 absolute object-cover lg:top-20 text-center blur-3xl opacity-30 h-5/6 max-h-screen w-screen max-w-5xl rounded-3xl bg-gradient-to-r from-blue-300 via-yellow-200 to-orange-400" />
        </section>
      )}
      <section
        className={cx(
          'z-50 relative items-center flex mx-auto gap-5 lg:gap-20',
          {
            ['flex-col tab:flex-row-reverse']: reverseOrder,
            ['flex-col-reverse tab:flex-row']: !reverseOrder,
          }
        )}
      >
        <div className="space-y-3 tab:w-3/5">
          {headingLevel === 1 && (
            <Heading1 text={headingText} color={ColorE.FORE} />
          )}
          {subheadingText && (
            <div
              className={cx({
                ['text-3xl']: headingLevel === 1,
                ['text-2xl']: headingLevel === 2,
              })}
            >
              {subheadingText}
            </div>
          )}
          <div className="text-lg leading-9 font-medium">{bodyText}</div>
          {children}
        </div>
        <div>
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={className}
          />
        </div>
      </section>
    </>
  );
};

export default TwoColumnHero;
