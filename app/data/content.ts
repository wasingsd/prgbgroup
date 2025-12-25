export const siteContent = {
    general: {
        brandName: "PR Global Group",
        description: "เชื่อมต่อโลกธุรกิจและการเดินทางของคุณ",
        copyrightText: "© {year} PR Global Group. All rights reserved.",
        socialLinks: [
            { name: "Facebook", href: "#" },
            { name: "Line", href: "#" },
            { name: "TikTok", href: "https://www.tiktok.com/" }
        ]
    },
    navigation: [
        { name: "หน้าหลัก", href: "/" },
        { name: "PR CARGO", href: "/pr-cargo" },
        { name: "PR TRAVEL", href: "/pr-travel" },
        { name: "ติดต่อ", href: "/contact" },
    ],
    home: {
        hero: {
            title: "PR Global Group",
            description: "กลุ่มบริษัทให้บริการขนส่งนำเข้าสินค้าจีน–ไทย และบริการท่องเที่ยว/ดูงานแบบครบวงจร ดูแลตั้งแต่การวางแผน เอกสาร จนถึงปลายทาง",
            actions: [
                { text: "PR CARGO (ขนส่ง)", href: "/pr-cargo", primary: true },
                { text: "PR TRAVEL (ท่องเที่ยว)", href: "/pr-travel", primary: true }
            ]
        },
        services: {
            title: "บริการของเรา",
            subtitle: "One-stop service ด้านโลจิสติกส์จีน–ไทย และท่องเที่ยว",
            items: [
                {
                    title: "PR CARGO",
                    description: "ผู้เชี่ยวชาญด้านการนำเข้า-ส่งออก จีน–ไทย ที่ครบวงจร ขนส่งทางบก/ทางทะเล/ทางอากาศ บริการแบบ Door-to-Door",
                    icon: "shipping"
                },
                {
                    title: "PR TRAVEL",
                    description: "เพื่อนร่วมทางที่ดีที่สุดสำหรับทุกการเดินทางของคุณ บริการจัดทัวร์ครบวงจร ทัวร์ดูงาน และเส้นทาง Unseen",
                    icon: "tour"
                }
            ]
        }
    },
    cargo: { // formerly shipping
        title: "PR CARGO",
        description: "ผู้เชี่ยวชาญด้านการนำเข้า-ส่งออก จีน–ไทย ที่ครบวงจร บริการขนส่งทางบก ทางทะเล และทางอากาศ",
        features: [
            {
                title: "ขนส่งหลากหลายช่องทาง",
                description: "บริการขนส่งทางบก ทางทะเล และทางอากาศ เลือกได้ตามความเหมาะสมของสินค้าและเวลา"
            },
            {
                title: "Door-to-Door Service",
                description: "บริการรับสินค้าจากหน้าโรงงานจีน ส่งตรงถึงหน้าบ้านคุณในไทย"
            },
            {
                title: "พิธีการศุลกากรครบวงจร",
                description: "ดูแลเรื่องเอกสารนำเข้าและพิธีการศุลกากรให้ถูกต้องและรวดเร็ว"
            },
            {
                title: "Sourcing บริการหาแหล่งสินค้า",
                description: "ช่วยติดต่อประสานงานหาแหล่งผลิตสินค้าคุณภาพจากจีน"
            }
        ]
    },
    travel: { // formerly tours
        title: "PR TRAVEL",
        description: "เพื่อนร่วมทางที่ดีที่สุดสำหรับทุกการเดินทางของคุณ บริการจัดทัวร์และดูงานแบบมืออาชีพ",
        packages: [
            {
                title: 'ทัวร์คุณหมิง-ต้าหลี่-ลี่เจียง',
                duration: '5 วัน 4 คืน',
                image: 'https://images.unsplash.com/photo-1549557088-7e155b93d396?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
                title: 'ทัวร์ฉงชิ่ง-อู่หลง',
                duration: '4 วัน 3 คืน',
                image: 'https://images.unsplash.com/photo-1505991807094-1051513264c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
                title: 'ทัวร์ธุรกิจ (Business Tour)',
                duration: 'ตามความต้องการ',
                image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
                title: 'ทัวร์ Unseen China',
                duration: '6 วัน 5 คืน',
                image: 'https://images.unsplash.com/photo-1550577903-8d626353d9e3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            }
        ]
    },
    contact: {
        title: "ติดต่อสอบถาม",
        description: "เริ่มต้นง่าย มีทีมให้คำปรึกษาฟรี ติดต่อเราได้ทุกช่องทาง",
        form: {
            firstName: "ชื่อ",
            lastName: "นามสกุล",
            company: "บริษัท",
            email: "อีเมล",
            message: "ข้อความ / สิ่งที่ต้องการปรึกษา",
            submit: "ส่งข้อความ"
        }
    }
};
