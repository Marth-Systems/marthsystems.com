import { useEffect } from "react";

const LOGO = "https://media.base44.com/images/public/6aae5b0689ccceec893c96a4/377fe2f6a_generated_image.png";

function setMeta(name, content, attr = "name") {
    let el = document.head.querySelector(`meta[${attr}="${name}"]`);
    if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
    }
    el.setAttribute("content", content);
}

function setLink(rel, href) {
    let el = document.head.querySelector(`link[rel="${rel}"]`);
    if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
    }
    el.setAttribute("href", href);
}

export default function SEO({ title, description, path, image, noindex = false }) {
    useEffect(() => {
        const fullTitle = title.includes("Marth Systems") ? title : `${title} | Marth Systems`;
        document.title = fullTitle;
        const url = `https://marthsystems.com${path || "/"}`;
        setMeta("description", description);
        setMeta(
            "robots",
            noindex
                ? "noindex, follow"
                : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        );
        setLink("canonical", url);
        setMeta("og:title", fullTitle, "property");
        setMeta("og:description", description, "property");
        setMeta("og:url", url, "property");
        setMeta("og:image", image || LOGO, "property");
        setMeta("twitter:title", fullTitle);
        setMeta("twitter:description", description);
        setMeta("twitter:image", image || LOGO);
    }, [title, description, path, image, noindex]);

    return null;
}