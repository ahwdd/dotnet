function ReadMorePost() {
  return (
    <div className="readmore-post w-full grid grid-cols-12 h-[204px]">
      <div
        style={{
          background: "url('/readmore1.png') center center no-repeat",
          backgroundSize: "cover",
        }}
        className="slider-piece col-span-3  border-solid"
      ></div>

      <div
        style={{
          background: "url('/readmore1.png') center center no-repeat",
          backgroundSize: "cover",
        }}
        className=" slider-piece col-span-9  border relative"
      >
        <div className="first-text absolute h-full top-0 left-0 right-0 backdrop-blur-lg bg-[#3F3F4680]">
          <div className="flex flex-col gap-2 m-3">
            <h2 className="title text-lg">
              انطباعنا عن Indiana Jones: مزيج مثالي بين انشارتد و ولفينشتاين!
            </h2>

            <p className="desc text-sm">فريق Machine Games يُبدع!</p>
            <p className="written-by text-xxs">يومان . بقلم أحمد يسري</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReadMorePost;
