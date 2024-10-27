function GradientFilter({ text = "" }) {
  return (
    <div className="linear-grad bg-gradient-filter-img absolute top-0 left-0 right-0 h-full">
      {text}
    </div>
  );
}

export default GradientFilter;
