import { useEffect } from "react";

const LOGO = "https://marthsystems.com/og-image.png";

function setMeta(name, content, attr = "name") {
    if (!content) return;
    let el = document.head.querySelector(`meta[${attr}="${name}"]`);
    if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
    }
    el.setAttribute("content", content);
}

function setLink(rel, href) {
    if (!href) return;
    let el = document.head.querySelector(`link[rel="${rel}"]`);
    if (!el) {
        el = document.createElement("link");
        el.setAttribute(rel, rel);
        document.head.appendChild(el);
    }
    el.setAttribute("href", href);
}

export default function BlogSEO({
    title,
    description,
    path = "/blog",
    image = LOGO,
    type = "website",
    publishedDate,
    author = "Marth Systems Editorial Team",
    articleSchema = null,
    noindex = false,
}) {
    useEffect(() => {
        const fullTitle = title.includes("Marth Systems") ? title : `${title} | Marth Systems`;
        document.title = fullTitle;
        const url = `https://marthsystems.com${path}`;

        setMeta("description", description);
        if (noindex) {
            setMeta("robots", "noindex, nofollow");
        } else {
            setMeta("robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
        }
        setLink("canonical", url);

        // Open Graph
        setMeta("og:title", fullTitle, "property");
        setMeta("og:description", description, "property");
        setMeta("og:url", url, "property");
        setMeta("og:image", image, "property");
        setMeta("og:type", type, "property");
        setMeta("og:site_name", "Marth Systems", "property");

        if (type === "article" && publishedDate) {
            setMeta("article:published_time", publishedDate, "property");
            setMeta("article:author", author, "property");
            setMeta("article:publisher", "https://marthsystems.com", "property");
        }

        // Twitter
        setMeta("twitter:card", "summary_large_image");
        setMeta("twitter:title", fullTitle);
        setMeta("twitter:description", description);
        setMeta("twitter:image", image);

        // Structured Data (JSON-LD)
        const scriptId = "blog-json-ld";
        let script = document.getElementById(scriptId);

        if (noindex) {
            if (script) {
                script.remove();
            }
            return () => {};
        }

        if (!script) {
            script = document.createElement("script");
            script.id = scriptId;
            script.type = "application/ld+json";
            document.head.appendChild(script);
        }

        let schemaData;
        if (articleSchema) {
            schemaData = {
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                headline: articleSchema.title,
                description: articleSchema.description,
                image: image,
                datePublished: articleSchema.datePublished,
                dateModified: articleSchema.dateModified || articleSchema.datePublished,
                mainEntityOfPage: {
                    "@type": "WebPage",
                    "@id": url,
                },
                author: {
                    "@type": "Organization",
                    name: author,
                    url: "https://marthsystems.com",
                },
                publisher: {
                    "@type": "Organization",
                    name: "Marth Systems",
                    url: "https://marthsystems.com",
                    logo: {
                        "@type": "ImageObject",
                        url: "https://marthsystems.com/logo-mark.svg",
                    },
                },
            };
        } else {
            schemaData = {
                "@context": "https://schema.org",
                "@type": "CollectionPage",
                name: fullTitle,
                description: description,
                url: url,
                publisher: {
                    "@type": "Organization",
                    name: "Marth Systems",
                    url: "https://marthsystems.com",
                },
            };
        }

        script.textContent = JSON.stringify(schemaData);

        return () => {
            const existingScript = document.getElementById(scriptId);
            if (existingScript) {
                existingScript.remove();
            }
        };
    }, [title, description, path, image, type, publishedDate, author, articleSchema, noindex]);

    return null;
}
