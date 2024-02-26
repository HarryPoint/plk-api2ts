import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/仓库盘点任务相关/getListForStaffUsingPOST_3
*/
export default function fetchMethod(options: { data: IPublicBacklogDataQueryparams: { enterpriseId?: number; userId?: number, extraOptions?: any) {
    return http<IJSONResultListStorageTakeCheckTaskResponseDTO>(
        {
            url: "/masterdata-service/storageTakeCheckTask/getListForStaff",
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
/** JSONResult«List«StorageTakeCheckTaskResponseDTO»» */
export interface IJSONResultListStorageTakeCheckTaskResponseDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IStorageTakeCheckTaskResponseDTO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** StorageTakeCheckTaskResponseDTO */
export interface IStorageTakeCheckTaskResponseDTO {
    /** id */
    id?: number;
    /** 所属企业id */
    enterpriseId?: number;
    /** 盘点仓库id */
    storehouseId?: number;
    /** 盘点范围 */
    scopeType?: string;
    /** 任务号 */
    taskNo?: string;
    /** 处理人id */
    handleUserId?: number;
    /** 计划开始时间 */
    planBeginTime?: string;
    /** 完成时间 */
    completeTime?: string;
    /** 状态 */
    status?: string;
}
