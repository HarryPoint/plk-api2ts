import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/生产任务相关/getQuantityForStaffUsingPOST
*/
export default function fetchMethod(options: { data: IPublicBacklogDataQueryparams: { enterpriseId?: number; userId?: number, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/masterdata-service/produceTask/getQuantityForStaff",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 公共待办数据查询 */
export interface IPublicBacklogDataQuery {
    /** 编码 */
    code?: string;
    /** 创建时间--开始时间 */
    createBeginTime?: string;
    /** 创建时间--结束时间 */
    createEndTime?: string;
    /** 工序id集合 */
    processIds?: number[];
    /** 生产任务状态集合 */
    produceTaskStatusList?: string[];
    /** 是否超时(生产任务) */
    isTimeout?: string;
    /** 质检任务状态集合 */
    qualityProduceTaskStatusList?: string[];
    /** 生产任务可操作类型 */
    optTypes?: string[];
}
/** JSONResult«long» */
export interface IJSONResultlong {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: number;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
