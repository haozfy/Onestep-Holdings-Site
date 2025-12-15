// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white py-10">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-neutral-600">
            © {new Date().getFullYear()} Onestep Holdings Corp. All rights reserved.
          </div>
          <div className="text-sm text-neutral-500">
            Canada-incorporated holding company operating under North American IP
            and regulatory frameworks.
          </div>
        </div>
      </div>
    </footer>
  );
}