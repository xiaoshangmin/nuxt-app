// 用于管理和同步卡片数据的composable
export const useSharedConfig = () => {
    const defaultUserConfig = {
        content: `这是简单的文字卡片生成工具，帮你发布社交媒体内容更有特色。
        显示的文字都可以修改，点击二维码可以修改内容
        电脑上鼠标拖动左右边框进行缩放
        在电脑上全选文字后支持下面快捷键
        - Ctrl+B 加粗文本
        - Ctrl+I 斜体文本
        - Ctrl+U 下划线文本`,
        title: `创图卡片`,
        author: "创图卡片 2024-07-15 18:20 广东",
        qrCodeTitle: "创图卡片",
        qrCodeDesc: "扫描二维码",
        qrData: "https://labs.wowyou.cc/",
        update:false,
        show: {
            title: true,
            content: true,
            qrcode: true,
            author: true,
            padding: false,
        },
    };

    const userConfig = useState('userConfig', () => {
        if (import.meta.client) {
            const storedData = localStorage.getItem('userConfigStore');
            return storedData ? JSON.parse(storedData) : defaultUserConfig
        }
        return defaultUserConfig;
    });

    const initUserConfig = () => {
        if (typeof window !== 'undefined' && localStorage.getItem('userConfigStore')) {
            userConfig.value = JSON.parse(localStorage.getItem('userConfigStore')); 
        }
    };

    const updateShareUserConfig = (newData) => {
        userConfig.value = { ...userConfig.value, ...newData };
        if (import.meta.client) {  // 确保 localStorage 只在客户端操作
            localStorage.setItem('userConfigStore', JSON.stringify(userConfig.value));
        }
    };

    return { userConfig, initUserConfig, updateShareUserConfig };
};
