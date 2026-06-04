// ============================================================
// Router with AWS Architecture Support
// Handles both CloudFront and API Gateway endpoints
// ============================================================

import { AWS_CONFIG, fetchPageContent } from './aws-config.js';

interface PageConfig {
  id: string;
  element: string;
}

const PAGES: PageConfig[] = [
  { id: 'home', element: 'page-home' },
  { id: 'about', element: 'page-about' },
  { id: 'system-design', element: 'page-system-design' },
];

class Router {
  private currentPage: string = 'home';

  /**
   * Initialize router with page fetching
   */
  init(pageLoaders: Record<string, () => void>) {
    window.addEventListener('popstate', () => this.handleRouteChange());
    
    // Add click handlers for navigation
    document.addEventListener('click', (e) => {
      const target = (e.target as Element).closest('[data-route]');
      if (target) {
        e.preventDefault();
        const route = target.getAttribute('data-route');
        if (route) this.navigate(route);
      }
    });
  }

  /**
   * Navigate to a page and fetch content
   */
  async navigate(pageId: string) {
    const page = PAGES.find(p => p.id === pageId);
    if (!page) return;

    this.currentPage = pageId;

    // Hide all pages
    PAGES.forEach(p => {
      const el = document.getElementById(p.element);
      if (el) el.classList.add('hidden');
    });

    // Show loading state
    const element = document.getElementById(page.element);
    if (element) {
      element.innerHTML = '<div class="loading">Loading page...</div>';
      element.classList.remove('hidden');
    }

    try {
      // Fetch page content based on architecture
      let html: string;

      if (pageId === 'home') {
        // Home page is in CloudFront public bucket
        html = await fetchPageContent('HOME');
      } else if (pageId === 'about') {
        // About page is served via API Gateway
        html = await fetchPageContent('ABOUT');
      } else if (pageId === 'system-design') {
        // System design page is served via API Gateway
        html = await fetchPageContent('SYSTEM_DESIGN');
      } else {
        throw new Error(`Unknown page: ${pageId}`);
      }

      // Insert content
      if (element) {
        element.innerHTML = html;
      }

      // Update URL
      window.history.pushState({ page: pageId }, '', `/${pageId === 'home' ? '' : pageId}`);
    } catch (error) {
      console.error(`Failed to load ${pageId}:`, error);
      if (element) {
        element.innerHTML = `<div class="error">Failed to load page. Please try again.</div>`;
      }
    }
  }

  private handleRouteChange() {
    const path = window.location.pathname.slice(1) || 'home';
    this.navigate(path);
  }

  getCurrentPage(): string {
    return this.currentPage;
  }
}

export const router = new Router();
