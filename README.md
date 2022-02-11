## React Angle Picker Usage
```js
import React, { useState } from 'react';
import AnglePicker from '@/components/AnglePicker';
const App = () => {
    const [angle, setAngle] = useState(25);
    return (
        <AnglePicker angle={angle} setAngle={setAngle}/>
    );
};
```

| Name | Type | Default Value | Required? | Description
|-|-|-|-|-
| `angle` | `Number` | `undefined` | Yes | The controlled angle.
| `setAngle` | `Function` | `undefined` | Yes | The set angle method to be trigger after an angle was changes.
| `size` | `Number` | `48` | No | Determines the size of the angle picker
| `snap` | `Number` | `5` | No | Determines the angle change snapping, Can be removed with setting as 0
