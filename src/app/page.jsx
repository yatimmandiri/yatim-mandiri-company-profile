import BannerComponent from "@/components/sections/BannerComponent";
import BeritaComponent from "@/components/sections/BeritaComponent";
import CategoriesComponent from "@/components/sections/CategoriesComponent";
import DonaturComponent from "@/components/sections/DonaturComponent";
import ImageComponent from "@/components/sections/ImageComponent";
import InspirasiComponent from "@/components/sections/InspirasiComponent";
import LaporanComponent from "@/components/sections/LaporanComponent";
import NavbarComponent from "@/components/sections/NavbarComponent";
import PartnerComponent from "@/components/sections/PartnerComponent";
import QRCodeComponent from "@/components/sections/QRCodeComponent";
import TVComponent from "@/components/sections/TVComponent";
import TestimonialComponent from "@/components/sections/TestimonialComponent";
import VideoComponent from "@/components/sections/VideoComponent";

export default function Home() {
  return (
    <>
      <NavbarComponent />
      <BannerComponent />
      <CategoriesComponent />
      <section className="relative">
        <LaporanComponent />
        <ImageComponent />
      </section>
      <TestimonialComponent />
      <VideoComponent />
      <BeritaComponent />
      <InspirasiComponent />
      <TVComponent />
      <QRCodeComponent />
      <DonaturComponent />
      <PartnerComponent />
    </>
  );
}
