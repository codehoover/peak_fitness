"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AccordionDemo() {
  const router = useRouter();
  return (
    <Accordion type="single" collapsible className="flex flex-col w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>What is Peak?</AccordionTrigger>
        <AccordionContent>
          Peak is a free fitness tracking app that helps users monitor their
          workouts, set fitness goals, and connect with trainers. It offers
          features such as customizable workout plans and real-time progress
          tracking without any paywalls.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          How can I support the app if it's free?
        </AccordionTrigger>
        <AccordionContent>
          Peak operates on a donation-based model. If you find value in the app
          and want to support its development, you can choose to donate any
          amount. All donations help maintain and improve the app, but they are
          entirely optional.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          Is Peak available on both iOS and Android?
        </AccordionTrigger>
        <AccordionContent>
          Yes, Peak is available for both iOS and Android devices. You can
          download it from the Apple App Store and Google Play Store.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>How do I create an account on Peak?</AccordionTrigger>
        <AccordionContent>
          You can create an account through the browser platform&nbsp;
          <Link
            href={"/register"}
            onClick={() => router.push("/register")}
            className="text-orange-400 hover:underline"
          >
            here
          </Link>
          &nbsp;or alternatively you can register through the mobile app.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>
          Can trainers and coaches use Peak to manage their clients?
        </AccordionTrigger>
        <AccordionContent>
          Yes, Peak includes a communication hub that allows trainers and
          coaches to interact with their clients, manage workout plans, and
          track progress—all in one platform. For more information about our
          pricing model please contact us through the form above!
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
