import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/工厂日历相关/getFactoryCalendarScheduleClassUsingPOST
*/
export default function fetchMethod(options: { data: IDateRangeQueryDTO, params: { EnterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultListFactoryCalendarScheduleShiftRelationshipVO>(
        {
            url: "/masterdata-service/calendar/getFactoryCalendarScheduleClass",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 日期范围查询 DTO */
export interface IDateRangeQueryDTO {
    /** 开始时间 yyyy-MM-dd HH:mm:ss */
    beginTime?: number;
    /** 结束时间 yyyy-MM-dd HH:mm:ss */
    endTime?: number;
}
/** JSONResult«List«工厂日历排期班次关系VO»» */
export interface IJSONResultListFactoryCalendarScheduleShiftRelationshipVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IFactoryCalendarSchedulingShiftRelationshipVO1[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 工厂日历排期班次关系VO_1 */
export interface IFactoryCalendarSchedulingShiftRelationshipVO1 {
    /** 对应班次信息集 */
    classShifts?: IFactoryCalendarScheduleShiftRelationshipVO[];
    /** 日程安排日期 */
    scheduleDate?;
}
/** 工厂日历排期班次关系VO */
export interface IFactoryCalendarScheduleShiftRelationshipVO {
    /** 开始时间 */
    beginTime?: number;
    /** 班次编号 */
    code?: string;
    /** 创建部门id */
    createDeptId?: string;
    /** 创建时间 */
    createTime?: number;
    /** 创建员工id */
    createUserId?: string;
    /** 数据状态 0停用，1启用，-1已删除 */
    dataStatus?: number;
    /** 结束时间 */
    endTime?: number;
    /** 结束时间类型 */
    endTimeType?: EFactoryCalendarScheduleShiftRelationshipVO_endTimeType;
    /** 所属企业id */
    enterpriseId?: string;
    /** id */
    id?: string;
    /** 班次名称 */
    name?: string;
    /** 修改部门id */
    updateDeptId?: string;
    /** 更新时间 */
    updateTime?: number;
    /** 修改账户id */
    updateUserId?: string;
}

export enum EFactoryCalendarScheduleShiftRelationshipVO_endTimeType {
    /** 当日 */
    TODAY = "TODAY",
    /** 次日 */
    NEXT = "NEXT"
}
