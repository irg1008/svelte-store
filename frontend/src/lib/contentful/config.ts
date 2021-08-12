const env = (envName: string) => import.meta.env[envName].toString();

const usePreview = env("VITE_CONTENTFUL_USE_PREVIEW");

const config = {
	space: env("VITE_CONTENTFUL_SPACE"),
	access_token: usePreview
		? env("VITE_CONTENTFUL_PREVIEW_ACCESS_TOKEN")
		: env("VITE_CONTENTFUL_ACCESS_TOKEN"),
	host: usePreview ? "preview.contentful.com" : null,
};

export default config;
