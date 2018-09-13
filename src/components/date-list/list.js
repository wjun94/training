const dataList = [
  ['', '', '', '', '', '', '', ''],
  // ["8月", "周一13日", "周二14日", "周三15日", "周三15日", "周三15日", "周三15日", "周三15日"],
  ['上午', '', '', '', '', '', '', ''],
  ['下午', '', '', '', '', '', '', ''],
  ['晚上', '', '', '', '', '', '', '']
]

/* const apiData = [{
  "lessons": [{
    "merchant": {
      "service": "特色主题活动 零基础教学 咖啡甜点休闲 私人订制曲目 交通便利快捷 学习氛围轻松",
      "lola": "121.46697024649929,31.2094706851405",
      "has_hybrid_property": true,
      "addr": "肇嘉浜路288号鼎新大楼1001(9、12号线嘉善路地铁站5号口马路对面)",
      "certificate": 1,
      "phone": "4001764607",
      "delete_by_id": null,
      "teach_quality": "9.1",
      "the_effect": "9.1",
      "longitude": 121.46697024649929,
      "environment": "9.1",
      "detail_img": "/2018/08/31/22912047/1535686785142517.jpg$/2018/08/31/22912047/1535686785416867.jpg$/2018/08/31/22912047/1535686785573664.jpg$/2018/08/31/22912047/1535686785767358.jpg$/2018/08/31/22912047/1535686785899421.jpg$/2018/08/31/22912047/1535686786022503.jpg$/2018/08/31/22912047/1535686786152535.jpg$/2018/08/31/22912047/1535686786421384.jpg$/2018/08/31/22912047/1535686786664428.jpg",
      "create_time": "2018-08-31 11:39:46",
      "query_in": null,
      "latitude": 31.2094706851405,
      "update_time": "2018-08-31 11:39:46",
      "id": 1,
      "detail_img_more": ["http://img.weyoo-inc.com/2018/08/31/22912047/1535686785142517.jpg", "http://img.weyoo-inc.com/2018/08/31/22912047/1535686785416867.jpg", "http://img.weyoo-inc.com/2018/08/31/22912047/1535686785573664.jpg", "http://img.weyoo-inc.com/2018/08/31/22912047/1535686785767358.jpg", "http://img.weyoo-inc.com/2018/08/31/22912047/1535686785899421.jpg", "http://img.weyoo-inc.com/2018/08/31/22912047/1535686786022503.jpg", "http://img.weyoo-inc.com/2018/08/31/22912047/1535686786152535.jpg", "http://img.weyoo-inc.com/2018/08/31/22912047/1535686786421384.jpg", "http://img.weyoo-inc.com/2018/08/31/22912047/1535686786664428.jpg"],
      "dp_code": 22912047
    },
    "trainee_id": 2,
    "habit": null,
    "start_hour": "12:00",
    "end_hour": "13:00",
    "course": {
      "has_hybrid_property": true,
      "learning_objective": "可以视谱弹唱任意歌曲",
      "course_id": 153568678915897,
      "create_time": "2018-08-31 11:39:49",
      "id": 153568678928221,
      "refund_explain": "一个月内扣除课时费退还余下费用，一个月后不予以退费",
      "suit_crowds": "青少年、成人",
      "min_current_price": "3880.00",
      "class_change_explain": "自由与老师沟通",
      "soldout_total": "1",
      "head_pic": "/2018/08/31/22912047/1535686789316817.jpg",
      "class_catergory_name": "钢琴",
      "head_pic_more": "http://img.weyoo-inc.com/2018/08/31/22912047/1535686789316817.jpg",
      "product_name": "钢琴弹唱初级课程",
      "update_time": "2018-08-31 11:39:49",
      "suit_base": "零基础、初级",
      "other_info": "null",
      "class_num": "1对1",
      "max_current_price": "3880.00",
      "class_high_lights": "[上课时间自由, 短时间 高效率]",
      "delete_by_id": null,
      "booking_info": "需提前1天预约",
      "suit_targets": "[喜爱唱歌、钢琴的人, 想要驻唱、表演的人, 自娱自乐]",
      "period_of_validity": "2017.01.10至2018.11.26",
      "origin_price": "5180.00",
      "query_in": null
    },
    "schedule_id": 1,
    "week_day": 1,
    "lesson": {
      "update_time": "2018-08-31 11:39:49",
      "class_total_hours": "半年",
      "item_name": "钢琴弹唱初级课",
      "price": "3880.00",
      "class_content": "钢琴弹唱初级课$5000$6个月&咖啡$180$5杯",
      "course_details_id": "153568678928221",
      "class_law": "每天",
      "create_time": "2018-08-31 11:39:49",
      "class_start_time": "随到随学",
      "sub_info": "肇嘉浜路288号鼎新大楼1001(9、12号线嘉善路地铁站5号口马路对面)",
      "origin_price": "5180.00",
      "id": 4
    },
    "day": "2018-09-04"
  }, {
    "merchant": {
      "service": "特色主题活动 零基础教学 咖啡甜点休闲 私人订制曲目 交通便利快捷 学习氛围轻松",
      "lola": "121.46697024649929,31.2094706851405",
      "has_hybrid_property": true,
      "addr": "肇嘉浜路288号鼎新大楼1001(9、12号线嘉善路地铁站5号口马路对面)",
      "certificate": 1,
      "phone": "4001764607",
      "delete_by_id": null,
      "teach_quality": "9.1",
      "the_effect": "9.1",
      "longitude": 121.46697024649929,
      "environment": "9.1",
      "detail_img": "/2018/08/31/22912047/1535686785142517.jpg$/2018/08/31/22912047/1535686785416867.jpg$/2018/08/31/22912047/1535686785573664.jpg$/2018/08/31/22912047/1535686785767358.jpg$/2018/08/31/22912047/1535686785899421.jpg$/2018/08/31/22912047/1535686786022503.jpg$/2018/08/31/22912047/1535686786152535.jpg$/2018/08/31/22912047/1535686786421384.jpg$/2018/08/31/22912047/1535686786664428.jpg",
      "create_time": "2018-08-31 11:39:46",
      "query_in": null,
      "latitude": 31.2094706851405,
      "update_time": "2018-08-31 11:39:46",
      "id": 1,
      "detail_img_more": ["http://img.weyoo-inc.com/2018/08/31/22912047/1535686785142517.jpg", "http://img.weyoo-inc.com/2018/08/31/22912047/1535686785416867.jpg", "http://img.weyoo-inc.com/2018/08/31/22912047/1535686785573664.jpg", "http://img.weyoo-inc.com/2018/08/31/22912047/1535686785767358.jpg", "http://img.weyoo-inc.com/2018/08/31/22912047/1535686785899421.jpg", "http://img.weyoo-inc.com/2018/08/31/22912047/1535686786022503.jpg", "http://img.weyoo-inc.com/2018/08/31/22912047/1535686786152535.jpg", "http://img.weyoo-inc.com/2018/08/31/22912047/1535686786421384.jpg", "http://img.weyoo-inc.com/2018/08/31/22912047/1535686786664428.jpg"],
      "dp_code": 22912047
    },
    "trainee_id": 2,
    "habit": null,
    "start_hour": "14:00",
    "end_hour": "15:00",
    "course": {
      "has_hybrid_property": true,
      "learning_objective": "可以视谱弹唱任意歌曲",
      "course_id": 153568678915897,
      "create_time": "2018-08-31 11:39:49",
      "id": 153568678928221,
      "refund_explain": "一个月内扣除课时费退还余下费用，一个月后不予以退费",
      "suit_crowds": "青少年、成人",
      "min_current_price": "3880.00",
      "class_change_explain": "自由与老师沟通",
      "soldout_total": "1",
      "head_pic": "/2018/08/31/22912047/1535686789316817.jpg",
      "class_catergory_name": "钢琴",
      "head_pic_more": "http://img.weyoo-inc.com/2018/08/31/22912047/1535686789316817.jpg",
      "product_name": "钢琴弹唱初级课程",
      "update_time": "2018-08-31 11:39:49",
      "suit_base": "零基础、初级",
      "other_info": "null",
      "class_num": "1对1",
      "max_current_price": "3880.00",
      "class_high_lights": "[上课时间自由, 短时间 高效率]",
      "delete_by_id": null,
      "booking_info": "需提前1天预约",
      "suit_targets": "[喜爱唱歌、钢琴的人, 想要驻唱、表演的人, 自娱自乐]",
      "period_of_validity": "2017.01.10至2018.11.26",
      "origin_price": "5180.00",
      "query_in": null
    },
    "schedule_id": 2,
    "week_day": 1,
    "lesson": {
      "update_time": "2018-08-31 11:39:49",
      "class_total_hours": "半年",
      "item_name": "钢琴弹唱初级课",
      "price": "3880.00",
      "class_content": "钢琴弹唱初级课$5000$6个月&咖啡$180$5杯",
      "course_details_id": "153568678928221",
      "class_law": "每天",
      "create_time": "2018-08-31 11:39:49",
      "class_start_time": "随到随学",
      "sub_info": "肇嘉浜路288号鼎新大楼1001(9、12号线嘉善路地铁站5号口马路对面)",
      "origin_price": "5180.00",
      "id": 4
    },
    "day": "2018-09-04"
  }, {
    "merchant": null,
    "trainee_id": 2,
    "habit": {
      "remark": {
        "icon": "https://okcdn.apiweixin.top/asserts/img/xgyc/1.png"
      },
      "name": "每天阅读绘本30分钟",
      "describe": null,
      "key": "reading.drawing.30min.day",
      "type": "leaning",
      "id": 1
    },
    "start_hour": "18:30",
    "end_hour": "19:30",
    "course": null,
    "schedule_id": 4,
    "week_day": 1,
    "lesson": {
      "item_name": "读书",
      "sub_info": "<时间简史>"
    },
    "day": "2018-09-04"
  }],
  "day": "2018-09-14"
}] */


export default {
  dataList,
  // apiData
}
