import React from "react";
import { cleanup, render } from "@testing-library/react";
import { Checkbox } from ".";

afterEach(cleanup);

it("should be checked after clicking the label", () => {
    const { getByText, getByTestId } = render(
        <Checkbox value="iamgroot" name="iamgroot">
            I am groot!
        </Checkbox>,
    );

    const label = getByText("I am groot!");
    const input = getByTestId("jkl-checkbox-input");

    expect(input).toHaveProperty("checked", false);

    label.click();

    expect(input).toHaveProperty("checked", true);
});

it("should be checked after clicking the input ", function() {
    const { getByTestId } = render(
        <Checkbox value="iamgroot" name="iamgroot">
            I am groot!
        </Checkbox>,
    );

    const input = getByTestId("jkl-checkbox-input");

    expect(input).toHaveProperty("checked", false);

    input.click();

    expect(input).toHaveProperty("checked", true);
});

it("should be checked if checked is true", function() {
    const { getByTestId } = render(
        <Checkbox value="iamgroot" name="iamgroot" checked={true} onChange={() => {}}>
            I am groot!
        </Checkbox>,
    );

    const input = getByTestId("jkl-checkbox-input");

    expect(input).toHaveProperty("checked", true);
});

it("should be unchecked if checked is true and input is clicked", function() {
    const TestCheckbox = () => {
        const [checked, toggle] = React.useState(true);
        return (
            <Checkbox value="iamgroot" name="iamgroot" checked={checked} onChange={() => toggle(!checked)}>
                I am groot!
            </Checkbox>
        );
    };

    const { getByTestId } = render(<TestCheckbox />);

    const input = getByTestId("jkl-checkbox-input");

    expect(input).toHaveProperty("checked", true);

    input.click();

    expect(input).toHaveProperty("checked", false);
});

it("should call the passed onChange method when clicked", () => {
    const onChange = jest.fn();
    const { getByLabelText } = render(
        <Checkbox value="switchme" name="switchme" onChange={onChange}>
            Switch me!
        </Checkbox>,
    );

    const input = getByLabelText("Switch me!");
    input.click();

    expect(onChange).toHaveBeenCalled();
});
