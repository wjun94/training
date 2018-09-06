import config from '../../public/config'

const url = config.onlineUrl

const data = [{
    // 节点名
    label: '学习习惯',
    // 唯一标识
    id: 'study',
    // 图标
    icon: url + 'study-habit.png',
    // 二级节点
    children: [],
  },
  {
    label: '生活习惯',
    id: 'life',
    icon: url + 'life-habit.png',
    children: [],
  },
  {
    label: '交友习惯',
    id: 'friends',
    icon: url + 'friends-habit.png',
    children: [],
  },
  {
    label: '健康习惯',
    id: 'health',
    icon: url + 'health-habit.png',
    children: [],
  },
  {
    label: '行为习惯',
    id: 'behavior',
    icon: url + 'behavior-habit.png',
    children: [],
  }
];

const children = [{
  // 节点名
  label: '每天阅读绘本30分钟',
  // 唯一标识
  id: 'behavior',
  // 图标
  icon: url + 'every.png',
  // 判断是否已添加
  hasAdd: false,
}]

export default {
  data,
  children
}
