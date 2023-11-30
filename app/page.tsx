import Calculator from "@/components/Calculator/Calculator";

export default function Home() {
    return (
        <main className="max-w-2xl mx-auto mt-24 bg-stone-950 p-16 rounded-3xl shadow-2xl">
            <h1 className="text-center text-5xl font-semibold">Pizza dough calculator</h1>
            <p className="text-center text-xl mt-8 mb-16">
                Calculate the ingredients for the ultimate pizza dough.
            </p>
            <Calculator />
        </main>
    );
}
