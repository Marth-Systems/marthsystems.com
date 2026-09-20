import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'
import { validateContactPayload } from './server/contact-handler.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

function devContactApiPlugin() {
    return {
        name: 'dev-contact-api',
        configureServer(server) {
            server.middlewares.use('/api/contact', async (req, res) => {
                if (req.method !== 'POST') {
                    res.statusCode = 405;
                    res.setHeader('Content-Type', 'application/json');
                    return res.end(JSON.stringify({ error: 'Method Not Allowed' }));
                }
                let body = '';
                req.on('data', chunk => { body += chunk; });
                req.on('end', () => {
                    try {
                        const parsed = JSON.parse(body || '{}');
                        const result = validateContactPayload(parsed);
                        if (!result.valid) {
                            res.statusCode = 400;
                            res.setHeader('Content-Type', 'application/json');
                            return res.end(JSON.stringify({ error: result.errors[0] || 'Validation failed' }));
                        }
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'application/json');
                        return res.end(JSON.stringify({ success: true, devRoutedTo: result.sanitized.recipient }));
                    } catch {
                        res.statusCode = 400;
                        res.setHeader('Content-Type', 'application/json');
                        return res.end(JSON.stringify({ error: 'Invalid JSON' }));
                    }
                });
            });
        },
    };
}

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), devContactApiPlugin()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
})

