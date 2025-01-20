export default function CTA({
  link = "javascript:;",
  css,
  text = "Request A Quote",
  icon = false,
}) {
  return (
    <div className="w-full"
      dangerouslySetInnerHTML={{
        __html: `
      <a
        href="${link}"
        class="tw-relative tw-overflow-hidden tw-flex tw-gap-4 tw-items-center tw-justify-center tw-uppercase xl:tw-py-[18px] md:tw-py-[10px] tw-py-[12px] xl:tw-px-[28px]  md:tw-px-[20px] tw-px-[20px] tw-border-solid tw-border-[2px] tw-border-[#d605a4] before:tw-animate-login_blur tw-rounded-full before:tw-content-[''] before:tw-absolute before:tw-left-[-20px] before:tw-top-0 before:tw-w-[30px] before:tw-h-[100px] before:tw-mt-[-20px] before:tw-bg-white before:tw-opacity-60 before:tw-filter before:tw-blur-[30px] before:tw-transform before:tw-origin-top xl:tw-text-[15px] md:tw-text-[12px] tw-leading-tight tw-font-semibold tw-bg-transparent ${css} md:tw-w-max tw-w-full"
      >
        <span>${text}</span>
        ${
          icon &&
          `<img src="/explainer-animated-videos/right-arrow.svg" alt="icons" width="18" height="15" />`
        }
      </a>`,
      }}
    />
  );
}
