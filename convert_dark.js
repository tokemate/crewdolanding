const fs = require('fs');
const filepath = 'crewdo-landing-v3.html';
let html = fs.readFileSync(filepath, 'utf8');

// Global CSS updates
html = html.replace(/\.bento-card\s*\{[^}]+\}/, `.bento-card {
            background: rgba(24, 24, 27, 0.4) !important;
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.05) !important;
            border-radius: 2.5rem;
            box-shadow: inset 0 1px 0 rgba(255,255,255,0.05), 0 20px 40px -15px rgba(0,0,0,0.5) !important;
            padding: 2.5rem;
            transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease, border-color 0.4s ease;
            color: #ffffff;
        }`);

html = html.replace(/\.bento-card:hover\s*\{[^}]+\}/, `.bento-card:hover {
            transform: translateY(-4px);
            border-color: rgba(255,255,255,0.15) !important;
            box-shadow: inset 0 1px 0 rgba(255,255,255,0.1), 0 30px 60px -15px rgba(0,0,0,0.8) !important;
        }
        /* Dark Theme Global Text Overrides */
        .text-zinc-900 { color: #ffffff !important; }
        .text-zinc-600 { color: #a1a1aa !important; }
        .text-zinc-700 { color: #d4d4d8 !important; }`);

// Section replacements to Transparent with dark overlay
const bgReplacements = [
    [/bg-zinc-50 border-b border-zinc-200/g, 'bg-transparent border-b border-white/5'],
    [/bg-white" id="fajdalompontok"/g, 'bg-transparent relative z-10" id="fajdalompontok">\n        <div class="absolute inset-0 bg-zinc-950/40 pointer-events-none -z-10"></div>'],
    [/bg-zinc-50 border-t border-zinc-200\/50"/g, 'bg-transparent border-t border-white/5 relative z-10">\n        <div class="absolute inset-0 bg-zinc-950/40 pointer-events-none -z-10"></div>'],
    [/bg-white relative/g, 'bg-transparent relative z-10'],
    [/bg-zinc-50" id="eredmenyek"/g, 'bg-transparent relative z-10" id="eredmenyek">\n        <div class="absolute inset-0 bg-zinc-950/40 pointer-events-none -z-10"></div>'],
    [/bg-white" id="ar"/g, 'bg-transparent relative z-10" id="ar">\n        <div class="absolute inset-0 bg-zinc-950/40 pointer-events-none -z-10"></div>'],
    [/bg-zinc-50" id="kulonbsegek"/g, 'bg-transparent relative z-10" id="kulonbsegek">\n        <div class="absolute inset-0 bg-zinc-950/40 pointer-events-none -z-10"></div>'],
    [/bg-white border-b border-zinc-100/g, 'bg-transparent border-b border-white/5 relative z-10'],
    [/bg-white border-y border-zinc-100/g, 'bg-transparent border-y border-white/5 relative z-10'],
    [/bg-zinc-50" id="faq"/g, 'bg-transparent relative z-10" id="faq">\n        <div class="absolute inset-0 bg-zinc-950/40 pointer-events-none -z-10"></div>']
];

for (let r of bgReplacements) {
    html = html.replace(r[0], r[1]);
}

// Convert other light boxes to dark glass
html = html.replace(/bg-white p-8 lg:p-12 rounded-\[2\.5rem\] shadow-diffusion border border-zinc-200\/50/g, 'bg-zinc-900/50 backdrop-blur-xl p-8 lg:p-12 rounded-[2.5rem] shadow-2xl border border-white/5');
html = html.replace(/bg-zinc-50 rounded-2xl border border-zinc-100/g, 'bg-zinc-800/50 rounded-2xl border border-white/5');

// Eredmenyek white cards -> dark glass
html = html.replace(/bg-white rounded-3xl p-8/g, 'bg-zinc-900/40 backdrop-blur-xl rounded-3xl p-8');
html = html.replace(/border-zinc-200\/50/g, 'border-white/5');

// Differencial table
html = html.replace(/bg-white rounded-3xl overflow-hidden border border-zinc-200\/50/g, 'bg-zinc-900/40 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/5');
html = html.replace(/bg-zinc-100 text-zinc-500/g, 'bg-zinc-800/80 text-zinc-300');
html = html.replace(/border-zinc-200/g, 'border-white/5');
html = html.replace(/border-zinc-100/g, 'border-white/5');
html = html.replace(/hover:bg-zinc-50/g, 'hover:bg-zinc-800/50');
html = html.replace(/text-zinc-800/g, 'text-zinc-200');

// Kinek valo boxes
html = html.replace(/bg-teal-50\/50/g, 'bg-teal-950/30 backdrop-blur-md');
html = html.replace(/border-teal-100\/50/g, 'border-teal-500/20');
html = html.replace(/text-teal-900\/80/g, 'text-teal-200/80');

html = html.replace(/bg-red-50\/50/g, 'bg-red-950/30 backdrop-blur-md');
html = html.replace(/border-red-100\/50/g, 'border-red-500/20');
html = html.replace(/text-red-900\/80/g, 'text-red-200/80');

// FAQ boxes
html = html.replace(/bg-white shadow-sm/g, 'bg-zinc-900/40 backdrop-blur-xl shadow-md');

// Icon boxes inside painful sections
html = html.replace(/bg-red-50 text-mymins-red/g, 'bg-red-500/10 text-red-400');
html = html.replace(/bg-rose-50 text-yours-rose/g, 'bg-rose-500/10 text-rose-400');
html = html.replace(/bg-zinc-100 text-zinc-600/g, 'bg-zinc-800 text-zinc-400');
html = html.replace(/bg-zinc-100 text-zinc-500/g, 'bg-zinc-800 text-zinc-400');
html = html.replace(/bg-teal-50 text-mymins-teal/g, 'bg-teal-500/10 text-teal-400');
html = html.replace(/bg-teal-50/g, 'bg-teal-500/10');
html = html.replace(/bg-zinc-100/g, 'bg-zinc-800/50'); // Other zinc-100 to dark
html = html.replace(/bg-zinc-50/g, 'bg-zinc-800/30');

// Small badges in Result cards
html = html.replace(/text-teal-700/g, 'text-teal-400');
html = html.replace(/bg-indigo-50 text-indigo-700/g, 'bg-indigo-500/10 text-indigo-400');
html = html.replace(/bg-blue-50 text-blue-700/g, 'bg-blue-500/10 text-blue-400');
html = html.replace(/bg-red-50 text-red-700/g, 'bg-red-500/10 text-red-400');
html = html.replace(/bg-rose-50/g, 'bg-rose-500/10'); // Fix any missed
html = html.replace(/text-rose-700/g, 'text-rose-400');

fs.writeFileSync(filepath, html);
console.log('Successfully completed dark mode conversion.');
