import { h, Component } from 'vue'
import { NIcon } from 'naive-ui'
import {
  BookOutline as BookIcon,
  PersonOutline as PersonIcon,
  WineOutline as WineIcon,
  HomeOutline as HomeIcon,
  CalendarNumberOutline,
  LogoChrome,
  AlarmOutline
} from '@vicons/ionicons5'
import { createRouter, createWebHistory, RouterLink } from 'vue-router'

export function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

// menu

export const menus = [
  {
    label: '首页',
    key: 'home',
    icon: renderIcon(HomeIcon)
  },
  {
    label: () => h(
      RouterLink,
      {
        to: {
          name: 'changeColor',
        }
      },
      { default: () => '改背景色' }
    ),
    key: '123',
    icon: renderIcon(LogoChrome)
  },
  {
    label: () => h(
      RouterLink,
      {
        to: {
          name: 'calendar',
        }
      },
      { default: () => '日历' }
    ),
    key: 'calendar',
    icon: renderIcon(CalendarNumberOutline),
  },
  {
    label: 'alarm',
    key: 'a-wild-sheep-chase',
    disabled: true,
    icon: renderIcon(AlarmOutline)
  },
  {
    label: '舞，舞，舞',
    key: 'dance-dance-dance',
    icon: renderIcon(BookIcon),
    children: [
      {
        type: 'group',
        label: '人物',
        key: 'people',
        children: [
          {
            label: '叙事者',
            key: 'narrator',
            icon: renderIcon(PersonIcon)
          },
          {
            label: '羊男',
            key: 'sheep-man',
            icon: renderIcon(PersonIcon)
          }
        ]
      },
      {
        label: '饮品',
        key: 'beverage',
        icon: renderIcon(WineIcon),
        children: [
          {
            label: '威士忌',
            key: 'whisky'
          }
        ]
      },
      {
        label: '食物',
        key: 'food',
        children: [
          {
            label: '三明治',
            key: 'sandwich'
          }
        ]
      },
      {
        label: '过去增多，未来减少',
        key: 'the-past-increases-the-future-recedes'
      }]
  }
]

// vue-router

export const router = createRouter({
  routes: [
    {
      path: '/changeColor',
      name: 'changeColor',
      alias: ['/chrome/popup/index.html'],
      component: () => import('./component/ChangeColor.vue')
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: () => import('./component/Calendar.vue')
    }
  ],
  history: createWebHistory()
})