function ReadMoreSlider() {
  return (
    <div>
      <div
        className="h-[300px] one-time-repeat"
        style={{ background: "url('/hero3.png') center center repeat" }}
      >
        <div className="first-text bg-black filter w-10/12 h-full">
          <h2>Hello</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tempore
            modi soluta? Voluptates, minus reiciendis commodi laboriosam dolores
            obcaecati minima recusandae, aliquam harum sequi qui, ducimus nobis
            quidem quis quisquam.
          </p>
        </div>

        <div className="second-text bg-black filter w-10/12 h-full">
          <h2>Second Text</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tempore
            modi soluta? Voluptates, minus reiciendis commodi laboriosam dolores
            obcaecati minima recusandae, aliquam harum sequi qui, ducimus nobis
            quidem quis quisquam.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ReadMoreSlider;
