import React from "react";

const Pagination5 = () => {
  return (
    <section className="py-20 dark:bg-dark">
      <div className="text-center">
        <div className="mb-12 inline-flex rounded-full bg-white px-3 py-2 shadow-[0px_1px_3px_0px_rgba(0,0,0,0.13)] dark:bg-dark-2">
          <ul className="-mx-[6px] flex items-center">
            <li className="px-[6px]">
              <a
                href="/#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-stroke text-base text-dark hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-white"
              >
                <span>
                  <svg
                    width="16"
                    height="7"
                    viewBox="0 0 16 7"
                    className="fill-current"
                  >
                    <path d="M0.32819 4.51723L2.12148 6.83231C2.27742 7.02994 2.56331 7.05817 2.77122 6.88877C2.95315 6.71938 2.97914 6.40882 2.8232 6.18296L1.13387 4.00904L15.5322 4.00904C15.7921 4.00904 16 3.78318 16 3.50085C16 3.21852 15.7921 2.99266 15.5322 2.99266L1.13387 2.99266L2.8232 0.818749C2.97914 0.62112 2.95315 0.310561 2.77122 0.112932C2.69326 0.0282342 2.5893 6.95564e-07 2.48534 7.04652e-07C2.35539 7.16013e-07 2.22544 0.0564659 2.14747 0.169397L0.354179 2.48448C-0.113636 3.10559 -0.113636 3.95258 0.32819 4.51723Z"></path>
                  </svg>
                </span>
              </a>
            </li>

            <PageLink
              hoverBG="primary"
              hoverText="white"
              hoverBorder="primary"
              count="1"
              pageSrc="/#"
            />
            <PageLink
              hoverBG="primary"
              hoverText="white"
              hoverBorder="primary"
              count="2"
              pageSrc="/#"
            />
            <PageLink
              hoverBG="primary"
              hoverText="white"
              hoverBorder="primary"
              count="3"
              pageSrc="/#"
            />
            <PageLink
              hoverBG="primary"
              hoverText="white"
              hoverBorder="primary"
              count="4"
              pageSrc="/#"
            />

            <li>
              <a
                href="/#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-stroke text-base text-dark hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-white"
              >
                <span>
                  <svg
                    width="16"
                    height="7"
                    viewBox="0 0 16 7"
                    className="fill-current"
                  >
                    <path d="M15.6718 2.48277L13.8785 0.167694C13.7226 -0.0299349 13.4367 -0.0581673 13.2288 0.111229C13.0468 0.280625 13.0209 0.591184 13.1768 0.817045L14.8661 2.99096H0.467815C0.207918 2.99096 0 3.21682 0 3.49915C0 3.78148 0.207918 4.00734 0.467815 4.00734H14.8661L13.1768 6.18125C13.0209 6.37888 13.0468 6.68944 13.2288 6.88707C13.3067 6.97177 13.4107 7 13.5147 7C13.6446 7 13.7746 6.94354 13.8525 6.8306L15.6458 4.51553C16.1136 3.89441 16.1136 3.04743 15.6718 2.48277Z"></path>
                  </svg>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Pagination5;

const PageLink = ({ pageSrc, count }) => {
  return (
    <li className="px-[6px]">
      <a
        href={pageSrc}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-stroke text-base text-body-color hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3"
      >
        {count}
      </a>
    </li>
  );
};
