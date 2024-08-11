export default {
    async fetch(request, env, ctx) {
      // 解析请求 URL
      const url = new URL(request.url);
      const urlParam = url.searchParams.get('url');
  
      // 检查 URL 参数是否存在
      if (!urlParam) {
        return new Response(JSON.stringify({ error: 'Missing URL parameter' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }
  
      // 构建目标 URL
      const targetUrl = `https://metafy.vercel.app/api?url=${encodeURIComponent(urlParam)}`;
  
      try {
        // 发送 GET 请求到目标 URL
        const response = await fetch(targetUrl, {
          cf: {
            // 可选：设置 Cloudflare 特定的请求属性
            cacheTtl: 300,
            cacheEverything: true,
          }
        });
  
        // 检查响应是否成功
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
  
        // 获取 JSON 响应
        const data = await response.json();
  
        // 返回 JSON 响应
        return new Response(JSON.stringify(data), {
          headers: { 
            'Content-Type': 'application/json',
            'Cache-Control': 'max-age=300'
          }
        });
      } catch (error) {
        // 处理错误
        return new Response(JSON.stringify({ error: error.message }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    }
  };