function TopTrending() {
  return (
    <div className="top-trending">
      <div className="top-trending-wrapper w-full bg-red-500 h-[100px] flex justify-center ">
        <div className="top-trending-container bg-green-500 overflow-hidden w-1/2">
          <div className="top-trending-slider w-[800px]  bg-blue-500 [&>p]:h-10 flex gap-5 items-center justify-center">
            <p>مستجدات الحرب علي غزة</p>
            <p>مستجدات الحرب علي غزة</p>
            <p>مستجدات الحرب علي غزة</p>
            <p>مستجدات الحرب علي غزة</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopTrending;
