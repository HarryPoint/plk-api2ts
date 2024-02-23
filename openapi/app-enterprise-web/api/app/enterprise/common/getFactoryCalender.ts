import { post } from '@/api/http';
 
// http://47.108.139.107:16400/doc.html#/default/公共相关/getFactoryCalenderUsingPOST
export default function fetchMethod(data: IDateRangeQueryDTO) {
    return post<IJSONResultListFactoryCalendarScheduleShiftRelationshipVO['data']>({
      url: "/app-enterprise-web/api/app/enterprise/common/getFactoryCalender",
      data,
    });
}
// 日期范围查询 DTO
export interface IDateRangeQueryDTO {
    // 开始时间 yyyy-MM-dd HH:mm:ss
    beginTime: string;
    // 结束时间 yyyy-MM-dd HH:mm:ss
    endTime: string;
}
// JSONResult«List«工厂日历排期班次关系VO»»
export interface IJSONResultListFactoryCalendarScheduleShiftRelationshipVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IFactoryCalendarSchedulingShiftRelationshipVO1[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 工厂日历排期班次关系VO_1
export interface IFactoryCalendarSchedulingShiftRelationshipVO1 {
    // 日程安排日期
    scheduleDate: string;
    // 对应班次信息集
    classShifts: IFactoryCalendarScheduleShiftRelationshipVO[];
}
// 工厂日历排期班次关系VO
export interface IFactoryCalendarScheduleShiftRelationshipVO {
    // id
    id: number;
    // 数据状态 0停用，1启用，-1已删除
    dataStatus: number;
    // 创建员工id
    createUserId: number;
    // 创建部门id
    createDeptId: number;
    // 创建时间
    createTime: string;
    // 修改账户id
    updateUserId: number;
    // 修改部门id
    updateDeptId: number;
    // 更新时间
    updateTime: string;
    // 所属企业id
    enterpriseId: number;
    // 班次名称
    name: string;
    // 班次编号
    code: string;
    // 开始时间
    beginTime: string;
    // 结束时间
    endTime: string;
    // 结束时间类型
    endTimeType: string;
}
