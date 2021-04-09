const InnerDefaultValue: Partial<ITcbCmsConfing> = {
  appName: '海南大学信息与通信工程学院',
  cmsTitle: '实验室资源管理系统',
  cmsLogo: './logo.svg',
  cmsDocLink: 'https://www.beibuwan.tech',
  cmsHelpLink: 'https://www.beibuwan.tech',
  officialSiteLink: 'https://www.beibuwan.tech',
}

/**
 * 获取 CMS 配置，适配小程序 OR 腾讯云
 */
export const getCmsConfig = (key: keyof ITcbCmsConfing, defaultValue?: any) => {
  // 获取 CMS 配置
  return window.TcbCmsConfig[key] || defaultValue || InnerDefaultValue[key] || ''
}
