import React from "react";
import { Button } from "./components/buttons/index";

function App() {
  return (
    <div className="App">
      <Button type="btn primary">Primary large</Button>
      <Button type="btn danger btn-lg round">Danger large</Button>
      <Button type="btn warning round">Warning round</Button>
      <Button type="btn success round">Success round</Button>
      <Button type="default btn btn-sm ">Default small</Button>
      <Button type="primary btn btn-sm ">Primary small</Button>
      <Button type="danger btn circular">Danger circular</Button>
      <Button type="btn warning">Warning </Button>
      <Button type="btn success">Success</Button>
      <Button type="btn default">Default</Button>
      <Button type="btn primary block">Primary</Button>
      <Button type="btn warning block">Warning</Button>
      <Button type="btn success block">Success</Button>
      <Button type="btn danger block">Danger</Button>
    </div>
  );
}

export default App;
