import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { VitePWA } from "vite-plugin-pwa"

export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            registerType: 'autoUpdate',
            injectRegister: null,
            includeAssets: ['favicon.ico', 'appicon.png', 'logo.png'],
            manifestFilename: 'manifest.json',
            manifest: {
                name: 'CipherGate',
                short_name: 'CipherGate',
                id: '/',
                start_url: '/',
                display: 'standalone',
                background_color: '#ffffff',
                theme_color: '#0d9488',
                description: 'Professional Workforce Management and Performance Tracking System',
                orientation: 'any',
                scope: '/',
                categories: ['productivity', 'business'],
                icons: [
                    {
                        src: 'appicon.png',
                        sizes: '192x192',
                        type: 'image/png',
                        purpose: 'any'
                    },
                    {
                        src: 'appicon.png',
                        sizes: '192x192',
                        type: 'image/png',
                        purpose: 'maskable'
                    },
                    {
                        src: 'appicon.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'any'
                    },
                    {
                        src: 'appicon.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'maskable'
                    },
                    {
                        src: 'appicon.png',
                        sizes: '144x144',
                        type: 'image/png',
                        purpose: 'any'
                    }
                ],
                shortcuts: [
                    {
                        name: 'Admin Portal',
                        url: '/admin/login',
                        description: 'Access administrative dashboard'
                    },
                    {
                        name: 'Employee Dashboard',
                        url: '/worker/login',
                        description: 'Access your work dashboard'
                    }
                ]
            },
            workbox: {
                maximumFileSizeToCacheInBytes: 25000000, // 25MB for larger models etc.
                cleanupOutdatedCaches: true,
                skipWaiting: true,
                clientsClaim: true,
                navigateFallback: 'index.html',
                globPatterns: [
                    '**/*.{js,css,html,ico,png,svg,json,webmanifest,wav,mp3}',
                    '**/models/**',
                    'manifest.json'
                ],
                globIgnores: ['registerSW.js'],
                runtimeCaching: [
                    {
                        urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
                        handler: 'CacheFirst',
                        options: {
                            cacheName: 'google-fonts-cache',
                            expiration: {
                                maxEntries: 10,
                                maxAgeSeconds: 60 * 60 * 24 * 365
                            },
                            cacheableResponse: {
                                statuses: [0, 200]
                            }
                        }
                    },
                    {
                        urlPattern: /\.(?:png|jpg|jpeg|svg|gif|ico)$/,
                        handler: 'StaleWhileRevalidate',
                        options: {
                            cacheName: 'images-cache',
                            expiration: {
                                maxEntries: 50
                            }
                        }
                    }
                ]
            },
            devOptions: {
                enabled: true
            }
        })
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    server: {
        port: 3000,
        host: true,
        proxy: {
            '/api': {
                target: 'http://localhost:5001',
                changeOrigin: true,
            },
            // Proxy Socket.IO in dev so the same domain-only URL works locally
            '/socket.io': {
                target: 'http://localhost:5001',
                changeOrigin: true,
                ws: true,   // <-- enables WebSocket proxying in Vite
            },
            '/uploads': {
                target: 'http://localhost:5001',
                changeOrigin: true,
            },
        },
    },
})
