import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'courses/edit/:id',
    renderMode: RenderMode.Server,
  },
  {
    path: 'lessons/:courseId/delete/:id',
    renderMode: RenderMode.Server,
  },
  {
    path: 'lessons/:courseId/edit/:id',
    renderMode: RenderMode.Server,
  },
  {
    path: 'courses/delete/:id',
    renderMode: RenderMode.Server,
  },
  {
    path: 'lessons/:courseId/add',
    renderMode: RenderMode.Server,
  },
  {

    path: '**',
    renderMode: RenderMode.Prerender
  }
];
