import Input from "./Input.tsx";
import TipShare from "./TipShare.tsx";

export default function BillSection() {
  return (
    <section className="w-full flex flex-col max-md:gap-8 md:gap-6 lg:gap-10 max-md:px-2">
      <Input label="Bill" />
      <TipShare />
      <Input label="Number of People" />
    </section>
  );
}
