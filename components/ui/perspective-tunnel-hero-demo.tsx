// Demo for perspective-tunnel-hero.
// NOTE: fixed the import from the provided demo — the default export of
// perspective-tunnel-hero.tsx is PerspectiveTunnelHero (not "CurtainSplitHero",
// a copy-paste leftover from another component in the original snippet).
// The component is a full-viewport hero (w-screen + h-[100svh]), so it is
// rendered directly, without the max-w-3xl wrapper of the original demo.

import PerspectiveTunnelHero from "@/components/ui/perspective-tunnel-hero";

export default function DemoOne() {
    return (
        <main className="min-h-screen w-full bg-neutral-50 dark:bg-neutral-950">
            <PerspectiveTunnelHero />
        </main>
    );
}
