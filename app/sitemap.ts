import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://atlanc.co.kr'
  
  // app 디렉토리의 모든 페이지 찾기
  const appDir = path.join(process.cwd(), 'app')
  const routes: string[] = []
  
  function findPages(dir: string, basePath: string = '') {
    const files = fs.readdirSync(dir)
    
    for (const file of files) {
      const filePath = path.join(dir, file)
      const stat = fs.statSync(filePath)
      
      if (stat.isDirectory() && !file.startsWith('_') && file !== 'components') {
        // page.tsx 파일이 있는지 확인
        const pageFile = path.join(filePath, 'page.tsx')
        if (fs.existsSync(pageFile)) {
          const route = basePath ? `/${basePath}/${file}` : `/${file}`
          routes.push(route)
        }
        // 하위 디렉토리도 재귀적으로 탐색
        findPages(filePath, basePath ? `${basePath}/${file}` : file)
      }
    }
  }
  
  // 루트 page.tsx 확인
  if (fs.existsSync(path.join(appDir, 'page.tsx'))) {
    routes.push('/')
  }
  
  // 모든 페이지 찾기
  findPages(appDir)
  
  // 제외할 경로 필터링
  const filteredRoutes = routes.filter((route) => {
    return !route.includes('/test') && !route.includes('/components-showcase')
  })
  
  return filteredRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/' ? 'daily' : 'weekly',
    priority: route === '/' ? 1 : 0.8,
  }))
}