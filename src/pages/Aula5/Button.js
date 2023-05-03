function Button({ onClick, children }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {children}
    </button>
  );
}

function ToolBar({ onPlayMovie, onUploadImage }) {
  return (
    <div
      className="toolBar"
      onClick={() => {
        alert("You clicked on toolbar!");
      }}
    >
      <Button onClick={onPlayMovie}>Play Movie</Button>
      <Button onClick={onUploadImage}>Upload Image</Button>
    </div>
  );
}

function SignUp() {
  return (
    <form onSubmit={(e) => {
        e.preventDefault()
        alert("Submitting...")
    }}>
      <input />
      <button>Send</button>
    </form>
  );
}

export default function ToolBarAula5() {
  return (
    <div>
      <ToolBar
        onPlayMovie={() => alert("Playing...")}
        onUploadImage={() => alert("Uploading...")}
      />
      <SignUp />
    </div>
  );
}
