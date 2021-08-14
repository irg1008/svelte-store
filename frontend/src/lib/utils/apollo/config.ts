const env = (envName: string) => import.meta.env[envName].toString();

const config = {
	endpoint: env("VITE_GRAPHCMS_CONTENT_ENDPOINT"),
	access_token: env("VITE_GRAPHCMS_ACCESS_TOKEN"),
};

export default config;
