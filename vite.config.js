// vite.config.js
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        sveltekit(),
    ],
    css: { // This is the key part for preprocessor options
        preprocessorOptions: {
            stylus: {
                // You can add global Stylus options here if needed, e.g.,
                // additionalData: `@import "src/styles/variables.styl";`
                // or define functions if you had them, e.g.:
                // functions: {
                //     rem(px) {
                //         return new stylus.nodes.Unit(px.val / 16, 'rem');
                //     }
                // }
            }
        }
    }
});