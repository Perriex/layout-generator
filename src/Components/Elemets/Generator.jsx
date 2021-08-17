/** @format */

import { Styles } from "../Styles/StaticStyles";
import { Layouts } from "./Layouts";

const Generator = ({ selected }) => {
  const size = selected.split("/");

  return (
    <div className="Layouts" style={Styles?.container}>
      {size.map((item) => {
        const num = item.match(/\d+/g);
        const name = item.match(/[a-zA-Z]+/g);
        if (num)
          return [...Array(parseInt(num[0]))].map((i) => (
            <div
              style={{
                ...Styles?.layouts,
                ...{
                  height: `${Layouts[name]?.height}`,
                  width: `${Layouts[name]?.width}`,
                  backgroundColor: `${Layouts[name]?.color}`,
                },
              }}
            >
              {name}
            </div>
          ));
        else
          return (
            <div
              style={{
                ...Styles?.layouts,
                ...{
                  height: `${Layouts[name]?.height}`,
                  width: `${Layouts[name]?.width}`,
                  backgroundColor: `${Layouts[name]?.color}`,
                },
              }}
            >
              {name}
            </div>
          );
      })}
    </div>
  );
};

export default Generator;
