import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/甘特图相关/saveChangeUsingPOST
export default function fetchMethod(data: IChangeGanttChartPlanDTO[], extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/autoPlanGantt/saveChange",
            method: "post",
            data,
        },
        extraOptions,
    );
}
// 变更甘特图计划DTO
export interface IChangeGanttChartPlanDTO {
    // 排期类型
    scheduleType: string;
    // 排期id
    scheduleId: number;
    // 最新时间 - 开始 yyyy-MM-dd HH:mm:ss
    beginTime: string;
    // 最新时间 - 结束 yyyy-MM-dd HH:mm:ss
    endTime: string;
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
