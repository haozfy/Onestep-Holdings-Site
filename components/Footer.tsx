import Container from "./Container";

export default function Footer() {
  return (
    <div className="mt-20 border-t border-neutral-200/60 py-10 text-sm text-neutral-600">
      <Container>
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Onestep Holdings Corp. All rights reserved.</div>
          <div className="text-neutral-500">Asset-driven • Partnership-first</div>
        </div>
      </Container>
    </div>
  );
}