function ImgFilter({ textComponent }) {
  return (
    <div className="linear-grad bg-gradient-filter-img  absolute top-0 left-0 right-0 h-full">
      {textComponent}
      <div className="absolute bottom-10 right-8 text-xs flex flex-col gap-3">
        <h3>يومان . بقلم مصطفى يسري</h3>
        <p className="text-xl font-normal">
          انطباعنا عن Indiana Jones:
          <br /> مزيج مثالي بين انشارتد و ولفينشتاين!
        </p>
      </div>
    </div>
  );
}

export default ImgFilter;
