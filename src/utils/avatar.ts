/**
 * 头像URL处理工具函数
 * - 将HTTP URL转换为HTTPS
 * - 提供本地默认头像作为回退
 */

// 默认头像路径
export const DEFAULT_AVATAR = '/images/avatar-default.png'

/**
 * 处理头像URL，确保使用HTTPS
 * @param url 原始头像URL
 * @returns 处理后的HTTPS头像URL，如果为空则返回默认头像
 */
export const processAvatarUrl = (url?: string | null): string => {
  if (!url || url.trim() === '') {
    return DEFAULT_AVATAR
  }

  // 将HTTP转换为HTTPS
  if (url.startsWith('http://')) {
    return url.replace('http://', 'https://')
  }

  return url
}

/**
 * 处理头像加载错误的函数
 * @param event 图片加载错误事件
 */
export const handleAvatarError = (event: Event): void => {
  const target = event.target as HTMLImageElement
  if (target.src !== DEFAULT_AVATAR) {
    target.src = DEFAULT_AVATAR
  }
}