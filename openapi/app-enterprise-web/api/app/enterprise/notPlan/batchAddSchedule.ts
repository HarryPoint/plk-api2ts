import { http } from '@/api/http';

// http://47.108.139.107:16400/doc.html#/default/未排产订单相关/batchAddScheduleUsingPOST
export default function fetchMethod(data: IScheduleNewDtos[]) {
    return http<IJSONResultobject>({
        url: "/app-enterprise-web/api/app/enterprise/notPlan/batchAddSchedule",
        method: "post",
        data,
    });
}
// 排班新增DTO
export interface IScheduleNewDtos {
    // 排班日期 yyyy-MM-dd
    scheduleDate: string;
    // 班次id
    classShiftId: number;
    // 班组id
    classGroupIdList: number[];
}
// JSONResult«object»
export interface IJSONResultobject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: Record<string, any>;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
