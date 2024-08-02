import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PatientForm } from "@/components/form/PatientForm";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen text-white">
      <section className="remove-scrollbar container my-auto mx-20">
          <div className="sub-container max-w-[496px]">
              <Image
              alt="logo"
              src="/assets/icons/logo-full.svg"
              height={200}
              width={200}
              />
          </div>
          <PatientForm/>
          <div className="flex justify-between mt-20">
           @carepulse copyright
           <Link
           href={'/'}
           className="">
            Admin
           </Link>
          </div>
      </section>
      <Image
      alt="homephoto"
      src={'/assets/images/onboarding-img.png'}
      width={700}
      height={100}
      className="hidden xl:block"
      />


    </div>
  );
}
