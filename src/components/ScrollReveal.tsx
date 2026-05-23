import { useEffect, useRef, ReactNode } from "react";

interface Props {
    children: ReactNode;
    direction?: "up" | "left" | "right" | "scale";
    delay?: number;
    className?: string;
}

const ScrollReveal = ({ children, direction = "up", delay = 0, className = "" }: Props) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => el.classList.add("reveal-done"), delay);
                    obs.unobserve(el);
                }
            },
            { threshold: 0.1 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, [delay]);

    return (
        <div ref={ref} className={`reveal-init reveal-${direction} ${className}`}>
            {children}
        </div>
    );
};

export default ScrollReveal;
