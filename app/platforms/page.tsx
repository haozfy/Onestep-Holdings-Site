<section
  id="platforms"
  className="border-t border-neutral-200/70 bg-white py-16 md:py-20"
>
  <Container>
    <div>
      <div className="text-xs tracking-[0.22em] text-neutral-500">
        PLATFORMS
      </div>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
        Software & intelligence layer
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-600">
        Operational software platforms that strengthen our asset portfolio
        through compliance intelligence and quantitative signal validation.
      </p>
    </div>

    <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
      <PlatformCard
        name="SmartMSDS"
        tagline="Compliance intelligence layer for SDS workflows — structured extraction, QA, and generation-ready pipelines."
        points={[
          "Structured parsing and normalization of SDS content",
          "QA workflows designed for regulatory and audit-readiness",
          "Built for integration into enterprise compliance systems",
        ]}
        href="https://smartmsds.com"
        external
      />

      <PlatformCard
        name="Onestep Alpha"
        tagline="Quantitative signal intelligence platform focused on biological, chemical, and regulated-technology equities."
        points={[
          "Institutional-style signal validation and risk filtering",
          "Pattern + scoring engine with reproducible rules",
          "Designed for systematic research and decision support",
        ]}
        href="https://onestepalpha.com"
        external
      />
    </div>
  </Container>
</section>