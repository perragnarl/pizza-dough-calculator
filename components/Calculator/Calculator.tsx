"use client";

import { useEffect, useState } from "react";
import Button from "../Button/Button";

const ingredients = {
    flour: 130,
    water: 83.3,
    salt: 3.3,
    yeast: 0.8,
};

type Recipe = {
    flour: number;
    water: number;
    salt: number;
    yeast: number;
};

export default function Calculator() {
    const [amount, setAmount] = useState("");
    const [recipe, setRecipe] = useState({} as Recipe);
    const [displayRecipe, setDisplayRecipe] = useState(false);

    function calculate() {
        let amountInt = parseInt(amount);

        if (isNaN(amountInt)) {
            amountInt = 0;
        }

        setRecipe({
            flour: ingredients.flour * amountInt,
            water: ingredients.water * amountInt,
            salt: ingredients.salt * amountInt,
            yeast: ingredients.yeast * amountInt,
        });
        console.log(recipe);
    }

    useEffect(() => {
        if (recipe && Object.keys(recipe).length !== 0) {
            setDisplayRecipe(true);
        }
    }, [recipe]);

    return (
        <>
            <label>How many pizzas do you want to make?</label>
            <input
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                type="number"
                className="block w-full mt-2 bg-neutral-900 focus-visible:outline-4 focus-visible:outline-dashed focus-visible:outline-amber-400 text-xl rounded-md py-4 px-8"
            />
            <Button onClick={calculate}>Calculate</Button>

            {displayRecipe && (
                <div className="mt-12">
                    <h2 className="text-center text-3xl font-semibold mt-12">Recipe</h2>
                    <dl>
                        <div className="flex gap-x-4">
                            <dt className="text-xl font-semibold min-w-[90px]">Flour</dt>
                            <dd className="text-xl mb-4">{recipe.flour}g</dd>
                        </div>
                        <div className="flex gap-x-4">
                            <dt className="text-xl font-semibold min-w-[90px]">Water</dt>
                            <dd className="text-xl mb-4">{recipe.water}g</dd>
                        </div>
                        <div className="flex gap-x-4">
                            <dt className="text-xl font-semibold min-w-[90px]">Salt</dt>
                            <dd className="text-xl mb-4">{recipe.salt}g</dd>
                        </div>
                        <div className="flex gap-x-4">
                            <dt className="text-xl font-semibold min-w-[90px]">Yeast</dt>
                            <dd className="text-xl mb-4">{recipe.yeast}g</dd>
                        </div>
                    </dl>
                </div>
            )}
        </>
    );
}
