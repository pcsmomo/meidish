import "./index.scss";
import React, { useState, useEffect } from "react";
import M from "materialize-css";

// utils
import { roundFloat } from "../../utilities/numberUtils";

const RatioCalculator = () => {
  const [recipeInputs, setRecipeInputs] = useState(new Array<number>(10));
  const [mainInput, setMainInput] = useState(0);

  useEffect(() => {
    // fix label overlap
    M.updateTextFields();
  }, []);

  const handleRecipeInputChange = (index: number, value: number) => {
    const updatedInputs = [...recipeInputs];
    updatedInputs[index] = value;
    setRecipeInputs(updatedInputs);
  };

  const calcRatio = (baseNum: number, targetNum: number): number => {
    const result = baseNum / targetNum;
    return isNaN(result) ? 1 : result;
  };

  const calcRecipe = (value: number, ratio: number): number => {
    const result = value * ratio;
    return isNaN(result) ? value : result;
  };

  const ratio = calcRatio(mainInput, recipeInputs[0]);

  return (
    <div className="row" style={{ marginTop: 24 }}>
      <div className="col s12">
        {/* header */}
        <div className="row">
          <h5 className="title">Ratio Calculator</h5>
          <p>Ratio: {ratio}</p>
        </div>

        {/* table header */}
        <div className="row">
          <div className="col s6">Original recipe</div>
          <div className="col s6">Calculated recipe</div>
        </div>

        {/* input row */}
        <div className="row mb-0">
          <div className="input-field col s6 mb-0 mt-0">
            <input
              type="number"
              onChange={(e) =>
                handleRecipeInputChange(0, parseFloat(e.target.value))
              }
            />
          </div>
          <div className="input-field col s6 mb-0 mt-0">
            <input
              name="target-amount"
              type="number"
              value={mainInput}
              onChange={(e) => setMainInput(parseFloat(e.target.value))}
            />
            <label htmlFor="target-amount">Target amount</label>
          </div>
        </div>

        {/* render list */}
        {recipeInputs.map((input, index) => {
          if (index === 0) return null;

          const valueToDisplay = roundFloat(calcRecipe(input, ratio), 3);

          return (
            <div className="row mb-0" key={`recipe-input_${index}`}>
              <div className="input-field col s6 mb-0 mt-0">
                <input
                  value={input}
                  type="number"
                  onChange={(e) =>
                    handleRecipeInputChange(index, parseFloat(e.target.value))
                  }
                />
              </div>
              <div className="calculated col s6 mb-0 mt-0">
                {isNaN(valueToDisplay) ? "" : valueToDisplay}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RatioCalculator;
