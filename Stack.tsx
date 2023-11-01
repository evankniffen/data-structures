import React, { useState } from "react";

function Stack() {
  const [arrayValue, setArrayValue] = useState<string[]>([]);
  const [pushPop, setPushPop] = useState("");

  const onClickPush = () => {
    if (pushPop === "") {
      return;
    }
    setArrayValue([...arrayValue, pushPop]);
    setPushPop("");
  };
  const onClickPop = () => {
    if (arrayValue.length > 0) {
      const adaptStack = [...arrayValue];
      adaptStack.pop();
      setArrayValue(adaptStack);
    }
  };
  return (
    <div>
      <h1>Stack</h1>
      <input
        type="text"
        value={pushPop}
        onChange={(e) => setPushPop(e.target.value)}
      />
      <button onClick={onClickPush}>Push</button>
      <button onClick={onClickPop}>Pop</button>
      <div>
        {arrayValue.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
}

export default Stack;
