type SubMenu = {
    id: string;
    title: string;
    link: string;
    card?: object;
};

type Menu = {
    id: string;
    title: string;
    link: string;
    subMenu: SubMenu[];
};

type NavbarMenu = {
    id: string;
    title: string;
    link: string;
    menu?: Menu[];
};

export const navbarMenu: NavbarMenu[] = [
    {
        id: "super_menu_1",
        title: "eLearningCourse",
        link: "/",
        menu: [
            {
                id: "menu_1_1",
                title: "contentMarketing",
                link: "",
                subMenu: [
                    {
                        id: "sub_menu_1_1",
                        title: "masterclassInMetaAdvertising",
                        link: "",
                        card: {},
                    },
                    {
                        id: "sub_menu_1_2",
                        title: "masterclassInContentMarketingStrategy",
                        link: "",
                        card: {},
                    },
                    {
                        id: "sub_menu_1_3",
                        title: "socialEngineOptimization",
                        link: "",
                        card: {},
                    },
                    {
                        id: "sub_menu_1_4",
                        title: "influencerMarketing",
                        link: "",
                        card: {},
                    },
                    {
                        id: "sub_menu_1_5",
                        title: "performanceMarketing",
                        link: "",
                        card: {},
                    },
                    {
                        id: "sub_menu_1_6",
                        title: "email&MobileMarketing",
                        link: "",
                        card: {},
                    },
                ],
            },
            {
                id: "menu_1_2",
                title: "socialMediaMarketing",
                link: "",
                subMenu: [
                    {
                        id: "sub_menu_2_1",
                        title: "masterclassInMetaAdvertising",
                        link: "",
                        card: {},
                    },
                    {
                        id: "sub_menu_2_2",
                        title: "masterclassInContentMarketingStrategy",
                        link: "",
                        card: {},
                    },
                    {
                        id: "sub_menu_2_3",
                        title: "socialEngineOptimization",
                        link: "",
                        card: {},
                    },
                    {
                        id: "sub_menu_2_4",
                        title: "influencerMarketing",
                        link: "",
                        card: {},
                    },
                    {
                        id: "sub_menu_2_5",
                        title: "performanceMarketing",
                        link: "",
                        card: {},
                    },
                    {
                        id: "sub_menu_2_6",
                        title: "email&MobileMarketing",
                        link: "",
                        card: {},
                    },
                ],
            },
            {
                id: "menu_1_3",
                title: "socialEngineOptimization",
                link: "",
                subMenu: [
                    {
                        id: "sub_menu_3_1",
                        title: "masterclassInMetaAdvertising",
                        link: "",
                        card: {},
                    },
                    {
                        id: "sub_menu_3_2",
                        title: "masterclassInContentMarketingStrategy",
                        link: "",
                        card: {},
                    },
                    {
                        id: "sub_menu_3_3",
                        title: "socialEngineOptimization",
                        link: "",
                        card: {},
                    },
                    {
                        id: "sub_menu_3_4",
                        title: "influencerMarketing",
                        link: "",
                        card: {},
                    },
                    {
                        id: "sub_menu_3_5",
                        title: "performanceMarketing",
                        link: "",
                        card: {},
                    },
                    {
                        id: "sub_menu_3_6",
                        title: "email&MobileMarketing",
                        link: "",
                        card: {},
                    },
                ],
            },
            {
                id: "menu_1_4",
                title: "influencerMarketing",
                link: "",
                subMenu: [
                    {
                        id: "sub_menu_4_1",
                        title: "masterclassInMetaAdvertising",
                        link: "",
                        card: {},
                    },
                    {
                        id: "sub_menu_4_2",
                        title: "masterclassInContentMarketingStrategy",
                        link: "",
                        card: {},
                    },
                    {
                        id: "sub_menu_4_3",
                        title: "socialEngineOptimization",
                        link: "",
                        card: {},
                    },
                    {
                        id: "sub_menu_4_4",
                        title: "influencerMarketing",
                        link: "",
                        card: {},
                    },
                    {
                        id: "sub_menu_4_5",
                        title: "performanceMarketing",
                        link: "",
                        card: {},
                    },
                    {
                        id: "sub_menu_4_6",
                        title: "email&MobileMarketing",
                        link: "",
                        card: {},
                    },
                ],
            },
            {
                id: "menu_1_5",
                title: "performanceMarketing",
                link: "",
                subMenu: [
                    {
                        id: "sub_menu_5_1",
                        title: "masterclassInMetaAdvertising",
                        link: "",
                        card: {},
                    },
                    {
                        id: "sub_menu_5_2",
                        title: "masterclassInContentMarketingStrategy",
                        link: "",
                        card: {},
                    },
                    {
                        id: "sub_menu_5_3",
                        title: "socialEngineOptimization",
                        link: "",
                        card: {},
                    },
                    {
                        id: "sub_menu_5_4",
                        title: "influencerMarketing",
                        link: "",
                        card: {},
                    },
                    {
                        id: "sub_menu_5_5",
                        title: "performanceMarketing",
                        link: "",
                        card: {},
                    },
                    {
                        id: "sub_menu_5_6",
                        title: "email&MobileMarketing",
                        link: "",
                        card: {},
                    },
                ],
            },
            {
                id: "menu_1_6",
                title: "email&MobileMarketing",
                link: "",
                subMenu: [
                    {
                        id: "sub_menu_6_1",
                        title: "masterclassInMetaAdvertising",
                        link: "",
                        card: {},
                    },
                    {
                        id: "sub_menu_6_2",
                        title: "masterclassInContentMarketingStrategy",
                        link: "",
                        card: {},
                    },
                    {
                        id: "sub_menu_6_3",
                        title: "socialEngineOptimization",
                        link: "",
                        card: {},
                    },
                    {
                        id: "sub_menu_6_4",
                        title: "influencerMarketing",
                        link: "",
                        card: {},
                    },
                    {
                        id: "sub_menu_6_5",
                        title: "performanceMarketing",
                        link: "",
                        card: {},
                    },
                    {
                        id: "sub_menu_6_6",
                        title: "email&MobileMarketing",
                        link: "",
                        card: {},
                    },
                ],
            },
        ],
    },
    {
        id: "super_menu_2",
        title: "classroomCourses",
        link: "/",
        menu: [
            {
                id: "menu_2_1",
                title: "contentMarketing",
                link: "",
                subMenu: [
                    {
                        id: "sub_menu_1_1",
                        title: "masterclassInMetaAdvertising",
                        link: "",
                        card: {},
                    },
                    {
                        id: "sub_menu_1_2",
                        title: "masterclassInContentMarketingStrategy",
                        link: "",
                        card: {},
                    },
                    {
                        id: "sub_menu_1_3",
                        title: "socialEngineOptimization",
                        link: "",
                        card: {},
                    },
                    {
                        id: "sub_menu_1_4",
                        title: "influencerMarketing",
                        link: "",
                        card: {},
                    },
                    {
                        id: "sub_menu_1_5",
                        title: "performanceMarketing",
                        link: "",
                        card: {},
                    },
                    {
                        id: "sub_menu_1_6",
                        title: "email&MobileMarketing",
                        link: "",
                        card: {},
                    },
                ],
            },
            {
                id: "menu_2_2",
                title: "socialMediaMarketing",
                link: "",
                subMenu: [
                    {
                        id: "sub_menu_2_1",
                        title: "masterclassInMetaAdvertising",
                        link: "",
                        card: {},
                    },
                    {
                        id: "sub_menu_2_2",
                        title: "masterclassInContentMarketingStrategy",
                        link: "",
                        card: {},
                    },
                    {
                        id: "sub_menu_2_3",
                        title: "socialEngineOptimization",
                        link: "",
                        card: {},
                    },
                    {
                        id: "sub_menu_2_4",
                        title: "influencerMarketing",
                        link: "",
                        card: {},
                    },
                    {
                        id: "sub_menu_2_5",
                        title: "performanceMarketing",
                        link: "",
                        card: {},
                    },
                    {
                        id: "sub_menu_2_6",
                        title: "email&MobileMarketing",
                        link: "",
                        card: {},
                    },
                ],
            },
            {
                id: "menu_2_3",
                title: "socialEngineOptimization",
                link: "",
                subMenu: [
                    {
                        id: "sub_menu_3_1",
                        title: "masterclassInMetaAdvertising",
                        link: "",
                        card: {},
                    },
                    {
                        id: "sub_menu_3_2",
                        title: "masterclassInContentMarketingStrategy",
                        link: "",
                        card: {},
                    },
                    {
                        id: "sub_menu_3_3",
                        title: "socialEngineOptimization",
                        link: "",
                        card: {},
                    },
                    {
                        id: "sub_menu_3_4",
                        title: "influencerMarketing",
                        link: "",
                        card: {},
                    },
                    {
                        id: "sub_menu_3_5",
                        title: "performanceMarketing",
                        link: "",
                        card: {},
                    },
                    {
                        id: "sub_menu_3_6",
                        title: "email&MobileMarketing",
                        link: "",
                        card: {},
                    },
                ],
            },
            {
                id: "menu_2_4",
                title: "influencerMarketing",
                link: "",
                subMenu: [
                    {
                        id: "sub_menu_4_1",
                        title: "masterclassInMetaAdvertising",
                        link: "",
                        card: {},
                    },
                    {
                        id: "sub_menu_4_2",
                        title: "masterclassInContentMarketingStrategy",
                        link: "",
                        card: {},
                    },
                    {
                        id: "sub_menu_4_3",
                        title: "socialEngineOptimization",
                        link: "",
                        card: {},
                    },
                    {
                        id: "sub_menu_4_4",
                        title: "influencerMarketing",
                        link: "",
                        card: {},
                    },
                    {
                        id: "sub_menu_4_5",
                        title: "performanceMarketing",
                        link: "",
                        card: {},
                    },
                    {
                        id: "sub_menu_4_6",
                        title: "email&MobileMarketing",
                        link: "",
                        card: {},
                    },
                ],
            },
            {
                id: "menu_2_5",
                title: "performanceMarketing",
                link: "",
                subMenu: [
                    {
                        id: "sub_menu_5_1",
                        title: "masterclassInMetaAdvertising",
                        link: "",
                        card: {},
                    },
                    {
                        id: "sub_menu_5_2",
                        title: "masterclassInContentMarketingStrategy",
                        link: "",
                        card: {},
                    },
                    {
                        id: "sub_menu_5_3",
                        title: "socialEngineOptimization",
                        link: "",
                        card: {},
                    },
                    {
                        id: "sub_menu_5_4",
                        title: "influencerMarketing",
                        link: "",
                        card: {},
                    },
                    {
                        id: "sub_menu_5_5",
                        title: "performanceMarketing",
                        link: "",
                        card: {},
                    },
                    {
                        id: "sub_menu_5_6",
                        title: "email&MobileMarketing",
                        link: "",
                        card: {},
                    },
                ],
            },
            {
                id: "menu_2_6",
                title: "email&MobileMarketing",
                link: "",
                subMenu: [
                    {
                        id: "sub_menu_6_1",
                        title: "masterclassInMetaAdvertising",
                        link: "",
                        card: {},
                    },
                    {
                        id: "sub_menu_6_2",
                        title: "masterclassInContentMarketingStrategy",
                        link: "",
                        card: {},
                    },
                    {
                        id: "sub_menu_6_3",
                        title: "socialEngineOptimization",
                        link: "",
                        card: {},
                    },
                    {
                        id: "sub_menu_6_4",
                        title: "influencerMarketing",
                        link: "",
                        card: {},
                    },
                    {
                        id: "sub_menu_6_5",
                        title: "performanceMarketing",
                        link: "",
                        card: {},
                    },
                    {
                        id: "sub_menu_6_6",
                        title: "email&MobileMarketing",
                        link: "",
                        card: {},
                    },
                ],
            },
        ],
    },
    {
        id: "super_menu_3",
        title: "blog",
        link: "",
    },
];
