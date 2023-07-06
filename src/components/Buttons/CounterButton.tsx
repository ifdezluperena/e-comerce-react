import { useState, FC, } from "react";
import { ButtonAction } from "../../types/buttonType";
import { ParentStateProps } from "../../types/product";
import './CounterButton.css'

export const CounterApp: FC<ButtonAction & ParentStateProps> = ({
	id,
	quantity,
	setCounterClicked,
}) => {
	

	const [counter, setCounter] = useState<number>(quantity);

	const increaseValue = (): void => {
		setCounter((prevState: number) => prevState + 1);
		setCounterClicked(true);
		const items = localStorage.getItem("products");
		if (items) {
			const parsedItems = JSON.parse(items);
			const item = parsedItems.find((item: any) => item.id === id);
			if (item) {
				item.quantity = counter + 1;
				localStorage.setItem("products", JSON.stringify(parsedItems));
			}
		}
	};

	const substractValue = (): void => {
		if (counter === 0) return;
		setCounter((prevState: number) => prevState - 1);
		setCounterClicked(true);
		const items = localStorage.getItem("products");
		if (items) {
			const parsedItems = JSON.parse(items);
			const item = parsedItems.find((item: any) => item.id === id);
			if (item) {
				item.quantity = counter - 1;
				localStorage.setItem("products", JSON.stringify(parsedItems));
			}
		}
	};
    const resetValue = (): void => {
		setCounter(0);
		setCounterClicked(true);
		const items = localStorage.getItem("products");
		if (items) {
			const parsedItems = JSON.parse(items);
			const item = parsedItems.find((item: any) => item.id === id);
			if (item) {
				item.quantity = setCounter(0);
				localStorage.setItem("products", JSON.stringify(parsedItems));
			}
		}
	};
    const buttons: ButtonAction[] = [
		{
			label: "Increment",
			id: id,
			action: increaseValue,
			display: "+",
			quantity: counter,
		},
		{
			label: "Decrement",
			id: id,
			action: substractValue,
			display: "-",
			quantity: counter,
		},
		{
			label: "ResetValue",
			id: id,
			action: resetValue,
			display: "C",
			quantity: counter,
		},
	];
    return (
		<>
			<div>{counter}</div>
            <div className="buttons-container">

			{buttons.map((button, id) => (
                <button
                key={id}
                className={`btn-counter btn-counter__${button.label.toLowerCase()}`}
                onClick={button.action}
				>
					{button.display}
				</button>
			))}
            </div>
		</>
	);
}
