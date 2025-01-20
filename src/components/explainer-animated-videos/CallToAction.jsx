import CTA from "./CTA";

export const CallToAction = ({
  title = "We’re Continually Racing Against <br> The Clock So That  You Can <br>Stay Ahead Of The Game.  ",
}) => {
  return (
    <section>
      <div className="tw-pt-[50px] xl:tw-pt-[80px] tw-pb-3">
        <div className="tw-container">
          <div className="tw-flex tw-flex-col tw-items-center lg:tw-items-end md:tw-justify-end tw-font-rubik">
            <h2
              className="xl:tw-text-[50px] lg:tw-text-[40px] tw-text-[25px] tw-font-semibold tw-text-center lg:tw-text-right tw-uppercase tw-leading-tight"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <div className="tw-flex md:tw-flex-row tw-flex-col md:tw-items-end md:tw-justify-end tw-items-center tw-justify-center tw-gap-5 tw-mt-5 tw-w-max lg:!tw-ml-auto">
              <CTA icon={true} text="Live Chat" css="tw-bg-gradient-custom" />
              <CTA icon={true} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
