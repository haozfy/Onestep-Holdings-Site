// components/Footer.tsx
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white py-10">
      <Container>
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div className="text-sm text-neutral-600">
            © {new Date().getFullYear()} Onestep Holdings Corp. All rights reserved.
          </div>
          <div className="text-sm text-neutral-500">
            Asset portfolio includes chemical, immunoassay, imaging systems and
            software platforms (SmartMSDS, Onestep Alpha).
          </div>
        </div>
      </Container>
    </footer>
  );
}