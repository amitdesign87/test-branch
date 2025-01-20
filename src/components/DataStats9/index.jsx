import React from "react";

const DataStats9 = () => {
  return (
    <section className="bg-gray-2 py-20 dark:bg-dark lg:py-[120px]">
      <div className="mx-auto px-4 md:container">
        <div className="flex flex-wrap justify-center gap-4">
          <DataStatsCard
            color="#9694FF"
            name="Profile View"
            number="1,129"
            icon={
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 18.1156C4.19376 18.1156 0.825012 11.6187 0.687512 11.3437C0.584387 11.1375 0.584387 10.8625 0.687512 10.6562C0.825012 10.3812 4.19376 3.9187 11 3.9187C17.8063 3.9187 21.175 10.3812 21.3125 10.6562C21.4156 10.8625 21.4156 11.1375 21.3125 11.3437C21.175 11.6187 17.8063 18.1156 11 18.1156ZM2.26876 11C3.02501 12.2718 5.98126 16.5687 11 16.5687C16.0188 16.5687 18.975 12.2718 19.7313 11C18.975 9.72808 16.0188 5.4312 11 5.4312C5.98126 5.4312 3.02501 9.72808 2.26876 11Z"
                  fill="white"
                />
                <path
                  d="M11 13.9219C9.38438 13.9219 8.07812 12.6156 8.07812 11C8.07812 9.38438 9.38438 8.07812 11 8.07812C12.6156 8.07812 13.9219 9.38438 13.9219 11C13.9219 12.6156 12.6156 13.9219 11 13.9219ZM11 9.625C10.2438 9.625 9.625 10.2438 9.625 11C9.625 11.7562 10.2438 12.375 11 12.375C11.7562 12.375 12.375 11.7562 12.375 11C12.375 10.2438 11.7562 9.625 11 9.625Z"
                  fill="white"
                />
              </svg>
            }
          />
          <DataStatsCard
            color="#57CAEB"
            name="Followers"
            number="159k"
            icon={
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.18436 10.0375C9.31561 10.0375 11.0687 8.3531 11.0687 6.25623C11.0687 4.15935 9.31561 2.47498 7.18436 2.47498C5.05311 2.47498 3.29999 4.15935 3.29999 6.25623C3.29999 8.3531 5.05311 10.0375 7.18436 10.0375ZM7.18436 4.05623C8.45624 4.05623 9.52186 5.0531 9.52186 6.2906C9.52186 7.5281 8.49061 8.52498 7.18436 8.52498C5.87811 8.52498 4.84686 7.5281 4.84686 6.2906C4.84686 5.0531 5.91249 4.05623 7.18436 4.05623Z"
                  fill="white"
                />
                <path
                  d="M15.8125 11.6875C17.6687 11.6875 19.1469 10.2438 19.1469 8.42188C19.1469 6.6 17.6344 5.15625 15.8125 5.15625C13.9906 5.15625 12.4781 6.6 12.4781 8.42188C12.4781 10.2438 13.9906 11.6875 15.8125 11.6875ZM15.8125 6.7375C16.8094 6.7375 17.6 7.49375 17.6 8.45625C17.6 9.41875 16.8094 10.175 15.8125 10.175C14.8156 10.175 14.025 9.41875 14.025 8.45625C14.025 7.49375 14.8156 6.7375 15.8125 6.7375Z"
                  fill="white"
                />
                <path
                  d="M15.9844 12.0312H15.675C14.6437 12.0312 13.6469 12.3406 12.7875 12.8562C11.8594 11.6187 10.3812 10.7937 8.73124 10.7937H5.67187C2.85312 10.8281 0.618744 13.0625 0.618744 15.8468V18.3218C0.618744 18.975 1.13437 19.4906 1.78749 19.4906H20.2469C20.9 19.4906 21.45 18.9406 21.45 18.2875V17.4625C21.4156 14.4718 18.975 12.0312 15.9844 12.0312ZM2.16562 17.9437V15.8468C2.16562 13.9218 3.74687 12.3406 5.67187 12.3406H8.73124C10.6562 12.3406 12.2375 13.9218 12.2375 15.8468V17.9437H2.16562V17.9437ZM19.8687 17.9437H13.75V15.8468C13.75 15.2968 13.6469 14.7468 13.475 14.2312C14.0937 13.7843 14.85 13.5781 15.6406 13.5781H15.95C18.0812 13.5781 19.8344 15.3312 19.8344 17.4625V17.9437H19.8687Z"
                  fill="white"
                />
              </svg>
            }
          />
          <DataStatsCard
            color="#5DDAB4"
            name="Following"
            number="459"
            icon={
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.5375 11.2063C15.3656 11.2063 15.1937 11.2063 15.0562 11.2406C14.0594 10.1063 12.8562 9.28127 11.5156 8.86877C12.8562 8.11252 13.7844 6.66877 13.7844 5.01877C13.7844 2.57815 11.7906 0.618774 9.38437 0.618774C6.94375 0.618774 4.98437 2.61252 4.98437 5.01877C4.98437 6.66877 5.9125 8.11252 7.25312 8.86877C5.9125 9.28127 4.675 10.1063 3.67812 11.275C2.23437 12.9938 1.40937 15.4 1.34062 18.0125C1.34062 18.3219 1.5125 18.5969 1.75312 18.7344C2.68125 19.1813 5.9125 20.6594 9.38437 20.6594C10.3812 20.6594 11.4125 20.5563 12.4437 20.35C13.3031 21.0031 14.3687 21.4156 15.5375 21.4156C18.3562 21.4156 20.625 19.1125 20.625 16.3281C20.625 13.5438 18.3562 11.2063 15.5375 11.2063ZM9.38437 2.16565C10.9656 2.16565 12.2375 3.43752 12.2375 5.01877C12.2375 6.60002 10.9656 7.8719 9.38437 7.8719C7.80312 7.8719 6.53125 6.60002 6.53125 5.01877C6.53125 3.43752 7.80312 2.16565 9.38437 2.16565ZM2.92187 17.5656C3.05937 15.5031 3.74687 13.6469 4.88125 12.2719C6.08437 10.8625 7.7 10.0719 9.41875 10.0719C10.8969 10.0719 12.2719 10.6563 13.4062 11.6875C11.6875 12.5125 10.4844 14.2657 10.4844 16.2938C10.4844 17.2907 10.7594 18.1844 11.275 18.975C10.6562 19.0438 10.0375 19.1125 9.45312 19.1125C6.70312 19.1125 4.09062 18.1156 2.92187 17.5656ZM15.5375 19.8688C13.5781 19.8688 11.9969 18.2875 11.9969 16.3281C11.9969 14.3688 13.5781 12.7875 15.5375 12.7875C17.4969 12.7875 19.0781 14.3688 19.0781 16.3281C19.0781 18.2875 17.4969 19.8688 15.5375 19.8688Z"
                  fill="white"
                />
                <path
                  d="M16.7062 15.3312H16.3281V14.9531C16.3281 14.5406 15.9844 14.1625 15.5375 14.1625C15.0906 14.1625 14.7469 14.5062 14.7469 14.9531V15.3312H14.3687C13.9562 15.3312 13.5781 15.675 13.5781 16.1219C13.5781 16.5687 13.9219 16.9125 14.3687 16.9125H14.7812V17.2906C14.7812 17.7031 15.125 18.0812 15.5719 18.0812C16.0187 18.0812 16.3625 17.7375 16.3625 17.2906V16.9125H16.7406C17.1531 16.9125 17.5312 16.5687 17.5312 16.1219C17.5312 15.675 17.1531 15.3312 16.7062 15.3312Z"
                  fill="white"
                />
              </svg>
            }
          />
          <DataStatsCard
            color="#FF7976"
            name="Saved Posts"
            number="268"
            icon={
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.9875 21.4156C3.85 21.4156 3.7125 21.3812 3.60938 21.3125C3.36875 21.175 3.23125 20.9343 3.23125 20.625V2.74998C3.23125 1.58123 4.19375 0.584351 5.39688 0.584351H16.7063C17.875 0.584351 18.8719 1.54685 18.8719 2.74998V20.5906C18.8719 20.8656 18.7344 21.1062 18.4938 21.2437C18.2531 21.3812 17.9438 21.3812 17.7375 21.2437L11 17.4281L4.36563 21.2781C4.22813 21.3468 4.09063 21.4156 3.9875 21.4156ZM5.3625 2.1656C5.01875 2.1656 4.74375 2.4406 4.74375 2.78435V19.3187L10.6219 15.9156C10.8625 15.7781 11.1719 15.7781 11.4125 15.9156L17.2563 19.25V2.74998C17.2563 2.40623 16.9813 2.13123 16.6375 2.13123H5.3625V2.1656Z"
                  fill="white"
                />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default DataStats9;

const DataStatsCard = ({ icon, color, name, number }) => {
  return (
    <div className="flex min-w-[180px] items-center rounded-lg bg-white p-[22px] shadow-1 dark:bg-dark-2 dark:shadow-box-dark">
      <div
        className="mr-4 flex h-11 w-full max-w-[44px] items-center justify-center rounded-[10px] text-white"
        style={{ backgroundColor: color }}
      >
        {icon}
      </div>
      <div>
        <p className="text-xs text-body-color dark:text-dark-6">{name}</p>
        <p className="text-base font-semibold text-dark dark:text-white">
          {number}
        </p>
      </div>
    </div>
  );
};
