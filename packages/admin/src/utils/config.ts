const InnerDefaultValue: Partial<ITcbCmsConfing> = {
  appName: '海南大学信息与通信学院',
  cmsTitle: '综合科技服务管理后台',
  cmsLogo: './logo.svg',
  cmsDocLink: 'https://docs.cloudbase.net/cms/intro.html',
  cmsHelpLink: 'https://support.qq.com/products/148793',
  officialSiteLink: 'https://cloudbase.net',
}

/**
 * 获取 CMS 配置，适配小程序 OR 腾讯云
 */
export const getCmsConfig = (key: keyof ITcbCmsConfing, defaultValue?: any) => {
  // 获取 CMS 配置
  return window.TcbCmsConfig[key] || defaultValue || InnerDefaultValue[key] || ''
}
