import Button from "./Button";

function LiveProdcast() {
  return (
    <div className="live-prodcast">
      <div className="h-[500px]">
        <div
          className="h-full"
          style={{
            background: "url('/berlin.png') center center no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
      </div>
    </div>
  );
}

export default LiveProdcast;
