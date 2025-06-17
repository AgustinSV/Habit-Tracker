// vite.config.js
import { svelteTesting } from '@testing-library/svelte/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import stylus from 'stylus'; // Import stylus to use its `nodes`

export default defineConfig({
    plugins: [sveltekit()],
    // Add the CSS preprocessor options here
    css: {
        preprocessorOptions: {
            stylus: {
                functions: {
                    rem(val) {
                        const baseFontSize = 16;
                        if (val.nodeName === 'unit') {
                            return new stylus.nodes.Unit(val.val / baseFontSize, 'rem');
                        }
                        return val;
                    }
                }
            }
        }
    },
    test: {
        workspace: [
            {
                // Note: 'extends' from a .ts file to a .js file
                // might have nuances if the .ts file isn't deleted.
                // It's generally best to have only one config file.
                // Assuming you'll delete vite.config.ts after this.
                extends: './vite.config.js',
                plugins: [svelteTesting()],
                test: {
                    name: 'client',
                    environment: 'jsdom',
                    clearMocks: true,
                    include: ['src/**/*.svelte.{test,spec}.{js,ts}'],
                    exclude: ['src/lib/server/**'],
                    setupFiles: ['./vitest-setup-client.ts']
                }
            },
            {
                extends: './vite.config.js',
                test: {
                    name: 'server',
                    environment: 'node',
                    include: ['src/**/*.{test,spec}.{js,ts}'],
                    exclude: ['src/**/*.svelte.{test,spec}.{js,ts}']
                }
            }
        ]
    }
});