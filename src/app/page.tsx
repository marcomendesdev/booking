import Image from "next/image";
import heroImage from "@/assets/images/luxury-waiter-coming-gesture.png"

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col sm:flex-row w-3/4 mx-auto">
      <h1 className="text-4xl font-black">
        Book an amazing table at the best restaurant in town!
      </h1>
      <Image
        src={heroImage}
        alt="Picture of the author"
        width={400}
      />
    </div>
  );
}
