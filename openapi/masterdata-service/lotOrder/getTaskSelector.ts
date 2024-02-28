import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/生产批次订单相关/getTaskSelectorUsingGET
*/
export default function fetchMethod(options: { params: { enterpriseId?: string; id?: string } }, extraOptions?: any) {
    return http<IJSONResultListTheProductionTaskSelectionInformationIsReturnedToVO>(
        {
            url: "/masterdata-service/lotOrder/getTaskSelector",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«生产任务选择信息返回VO»» */
export interface IJSONResultListTheProductionTaskSelectionInformationIsReturnedToVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ITheProductionTaskSelectionInformationIsReturnedToVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 生产任务选择信息返回VO */
export interface ITheProductionTaskSelectionInformationIsReturnedToVO {
    /** id */
    id?: string;
    /** 任务号 */
    taskNo?: string;
    /** 对应工序id */
    processId?: string;
    /** 对应工序名称 */
    processName?: string;
    /** 对应工序编号 */
    processCode?: string;
    /** 对应班次id */
    classShiftId?: string;
    /** 对应班次名称 */
    classShiftName?: string;
    /** 对应班次编号 */
    classShiftCode?: string;
    /** 状态 */
    status?: ETheProductionTaskSelectionInformationIsReturnedToVO_status;
    /** 状态描述 */
    statusDesc?: string;
}

export enum ETheProductionTaskSelectionInformationIsReturnedToVO_status {
    /** 待处理 */
    WAIT = "WAIT",
    /** 生产中 */
    PRODUCE = "PRODUCE",
    /** 暂停中 */
    PAUSE = "PAUSE",
    /** 停止 */
    STOP = "STOP",
    /** 已关闭 */
    CLOSE = "CLOSE",
    /** 已取消 */
    CANCEL = "CANCEL"
}
