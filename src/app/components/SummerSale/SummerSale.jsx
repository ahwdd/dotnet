function SummerSale() {
  return (
    <div className="summer-sale mb-10 rounded-md">
      <div
        style={{
          height: "200px",
          width: "100%",
          background: "url('/summer_sale.png') center center no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col gap-3 justify-center px-3 h-full">
          <h2 className="text-5xl font-bold">خصم 30% لكل اللعيبه!</h2>
          <p className="text-2xl">
            عرض للاعبين المحترفين فقط, تسوق الآن إن كنت منهم!
          </p>
        </div>
      </div>
    </div>
  );
}

export default SummerSale;
