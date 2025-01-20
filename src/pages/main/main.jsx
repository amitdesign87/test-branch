import React from 'react';

const MainPage = () => {
  return (
    <section className='bg-gray-2 dark:bg-dark py-20 lg:py-[120px]'>
      <div className='mx-auto px-4 lg:container'>
        <div className='mx-auto w-full max-w-[850px] rounded-lg border border-stroke bg-white dark:bg-dark-2 dark:border-dark-3'>
          <div className='max-w-full overflow-x-auto'>
            <table className='w-full table-auto'>
              <TableHead headers={headers} />
              <TableBody data={tableData} />
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainPage;

