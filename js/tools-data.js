// tools-data.js - داده‌های تمام ابزارها
const toolsData = [
    {
        id: 1,
        name: "AnyDesk",
        category: "remote",
        description: "نرم‌افزار کنترل از راه دور کامپیوتر با سرعت و امنیت بالا",
        icon: "🖥️",
        version: "v9.6.2",
        size: "7.9 MB",
        system: "Windows 7+",
        rating: 4.8,
        downloadUrl: "downloads/anydesk.exe",
        officialUrl: "https://anydesk.com/en/downloads/windows",
        badge: "پرفروش"
    },
    {
        id: 2,
        name: "TeamViewer",
        category: "remote",
        description: "دستیاری از راه دور، اشتراک‌گذاری دسکتاپ و مدیریت سیستم",
        icon: "👨‍💻",
        version: "15.40.1",
        size: "24.5 MB",
        system: "Windows, Mac, Linux",
        rating: 4.6,
        downloadUrl: "downloads/teamviewer.exe",
        officialUrl: "https://www.teamviewer.com/download",
        badge: "محبوب"
    },
    {
        id: 3,
        name: "CCleaner",
        category: "system",
        description: "پاک‌سازی، بهینه‌سازی و افزایش سرعت سیستم",
        icon: "🧹",
        version: "6.12.10656",
        size: "21.8 MB",
        system: "Windows 10+",
        rating: 4.7,
        downloadUrl: "downloads/ccleaner.exe",
        officialUrl: "https://www.ccleaner.com/download",
        badge: "ضروری"
    },
    {
        id: 4,
        name: "HWMonitor",
        category: "hardware",
        description: "مانیتورینگ دمای CPU، GPU و قطعات سخت‌افزاری",
        icon: "📊",
        version: "1.50",
        size: "1.2 MB",
        system: "Windows 7+",
        rating: 4.4,
        downloadUrl: "downloads/hwmonitor.zip"
    },
    {
        id: 5,
        name: "CrystalDiskInfo",
        category: "hardware",
        description: "بررسی سلامت هارد دیسک و SSD",
        icon: "💾",
        version: "9.1.1",
        size: "4.3 MB",
        system: "Windows XP+",
        rating: 4.5,
        downloadUrl: "downloads/crystaldiskinfo.zip"
    },
    {
        id: 6,
        name: "Wireshark",
        category: "network",
        description: "آنالیزور شبکه و تحلیل ترافیک",
        icon: "🌐",
        version: "4.0.8",
        size: "85.2 MB",
        system: "Windows 8+",
        rating: 4.3,
        downloadUrl: "downloads/wireshark.exe",
        officialUrl: "https://www.wireshark.org/download.html"
    },
    {
        id: 7,
        name: "7-Zip",
        category: "system",
        description: "نرم‌افزار فشرده‌سازی فایل با پشتیبانی از فرمت‌های مختلف",
        icon: "📦",
        version: "23.01",
        size: "1.5 MB",
        system: "Windows 7+",
        rating: 4.8,
        downloadUrl: "downloads/7zip.exe",
        officialUrl: "https://www.7-zip.org/download.html"
    },
    {
        id: 8,
        name: "VLC Media Player",
        category: "multimedia",
        description: "پخش کننده رسانه‌ای با پشتیبانی از تمام فرمت‌ها",
        icon: "🎬",
        version: "3.0.18",
        size: "42.5 MB",
        system: "Windows 10+",
        rating: 4.7,
        downloadUrl: "downloads/vlc.exe",
        officialUrl: "https://www.videolan.org/vlc/"
    },
    {
        id: 9,
        name: "Notepad++",
        category: "development",
        description: "ویرایشگر متن پیشرفته برای برنامه‌نویسان",
        icon: "📝",
        version: "8.5.7",
        size: "4.1 MB",
        system: "Windows 7+",
        rating: 4.6,
        downloadUrl: "downloads/notepad++.exe",
        officialUrl: "https://notepad-plus-plus.org/downloads/"
    },
    {
        id: 10,
        name: "Malwarebytes",
        category: "security",
        description: "آنتی‌ویروس تخصصی برای حذف بدافزارها",
        icon: "🛡️",
        version: "4.6.1",
        size: "65.3 MB",
        system: "Windows 10+",
        rating: 4.5,
        downloadUrl: "downloads/malwarebytes.exe",
        officialUrl: "https://www.malwarebytes.com/"
    },
	{
        id: 11,
        name: "Malwarebytes",
        category: "development",
        description: ".....آنتی‌ویروس تخصصی برای حذف بدافزارها",
        icon: "🛡️",
        version: "4.6.1",
        size: "65.3 MB",
        system: "Windows 10+",
        rating: 4.5,
        downloadUrl: "downloads/malwarebytes.exe",
        officialUrl: "https://www.malwarebytes.com/"
    }
	
	
	
	
];

// دسته‌بندی‌های موجود
const categories = [
    { id: 'all', name: '🛡همه ابزا00رها' },
    { id: 'remote', name: '..کنترل از راه دور' },
    { id: 'system', name: 'بهینه‌سازی سیستم' },
    { id: 'hardware', name: 'سخت‌افزار' },
    { id: 'network', name: 'شبکه و اینترنت' },
    { id: 'security', name: '🛡امنیت' },
    { id: 'multimedia', name: 'مالتی‌مدیا' },
    { id: 'development', name: 'توسعه و برنامه‌نویسی' }
];