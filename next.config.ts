import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    experimental: {
        reactCompiler: true
    },
    webpack: (config, { webpack }) => {
        return {
            ...config,
            resolve: {
                ...config?.resolve,
                aliasFields: [...config?.resolve?.aliasFields ?? [], "browser"],
                alias: {
                    ...config?.resolve?.alias,
                    "./lib/conn-pool.js": false,
                    "./lib/utp.cjs": false,
                    "@silentbot1/nat-api": false,
                    "bittorrent-dht": false,
                    "crypto": false,
                    "fs": false,
                    "fs-chunk-store": "fsa-chunk-store",
                    "http": false,
                    "load-ip-set": false,
                    "net": false,
                    "os": false,
                    "ut_pex": false,
                    path: "path-esm"
                }
            },
            plugins: [
                ...config?.plugins ?? [],
                new webpack.DefinePlugin({
                    global: "globalThis"
                })
            ]
        };
    }
};

export default nextConfig;
