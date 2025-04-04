export type SortFilter = {
  id: string;
  label: string;
  value: string;
};

export type DrawerFilter = {
  id: string;
  title: string;
  value: string;
  filters: {
    id: string;
    title: string;
    value: string;
    selected: boolean;
  }[];
};

export const courseSortFilters: SortFilter[] = [
  {
    id: 'course_sort_popularity',
    label: 'popularity',
    value: 'popularity'
  },
  {
    id: 'course_sort_rating',
    label: 'raging',
    value: 'rating'
  },
  {
    id: 'course_sort_newestOldest',
    label: 'newestOldest',
    value: 'newestOldest'
  },
  {
    id: 'course_sort_oldestNewest',
    label: 'oldestNewest',
    value: 'oldestNewest'
  }
];

export const courseFilters: DrawerFilter[] = [
  {
    id: 'course_filter_career_path',
    title: 'Career Paths',
    value: 'careerPaths',
    filters: [
      {
        id: 'course_filter_career_path_sub1',
        title: 'Analytics',
        value: 'analytics',
        selected: false
      },
      {
        id: 'course_filter_career_path_sub2',
        title: 'Content Marketing',
        value: 'contentMarketing',
        selected: false
      },
      {
        id: 'course_filter_career_path_sub3',
        title: 'Email & Mobile Marketing',
        value: 'emailMobileMarketing',
        selected: false
      },
      {
        id: 'course_filter_career_path_sub4',
        title: 'Digital Marketing Strategy',
        value: 'digitalMarketingStrategy',
        selected: false
      },
      {
        id: 'course_filter_career_path_sub5',
        title: 'Growth Marketing Strategy',
        value: 'growthMarketingStrategy',
        selected: false
      },
      {
        id: 'course_filter_career_path_sub6',
        title: 'Influencer Marketing',
        value: 'influencerMarketing',
        selected: false
      },
      {
        id: 'course_filter_career_path_sub7',
        title: 'Performance Marketing',
        value: 'performanceMarketing',
        selected: false
      }
    ]
  },
  {
    id: 'course_filter_price',
    title: 'Price',
    value: 'price',
    filters: [
      {
        id: 'course_filter_price_sub1',
        title: 'Paid',
        value: 'paid',
        selected: false
      },
      {
        id: 'course_filter_price_sub2',
        title: 'Free',
        value: 'free',
        selected: false
      }
    ]
  },
  {
    id: 'course_filter_duration',
    title: 'Duration',
    value: 'duration',
    filters: [
      {
        id: 'course_filter_duration_sub1',
        title: '< 10h',
        value: 'lessThan10h',
        selected: false
      },
      {
        id: 'course_filter_duration_sub2',
        title: '10h - 30h',
        value: '10hTo30h',
        selected: false
      },
      {
        id: 'course_filter_duration_sub3',
        title: '30h +',
        value: 'moreThan30h',
        selected: false
      }
    ]
  },
  {
    id: 'course_filter_languages',
    title: 'Languages',
    value: 'languages',
    filters: [
      {
        id: 'course_filter_languages_sub1',
        title: 'English',
        value: 'english',
        selected: false
      },
      {
        id: 'course_filter_languages_sub2',
        title: 'Greek',
        value: 'greek',
        selected: false
      }
    ]
  },
  {
    id: 'course_filter_payment_installments',
    title: 'Payment installments',
    value: 'paymentInstallments',
    filters: [
      {
        id: 'course_filter_payment_installments_sub1',
        title: 'Yes',
        value: 'yes',
        selected: false
      }
    ]
  }
];
