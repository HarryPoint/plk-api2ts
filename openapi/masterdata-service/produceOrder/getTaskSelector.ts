import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/生产订单相关/lotHoldUsingGET
*/
export default function fetchMethod(options: { params: { id?: string; enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultListTheProductionTaskSelectionInformationIsReturnedToVO>(
        {
            url: "/masterdata-service/produceOrder/getTaskSelector",
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
    /** 响应结果 */
    data?: ITheProductionTaskSelectionInformationIsReturnedToVO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 生产任务选择信息返回VO */
export interface ITheProductionTaskSelectionInformationIsReturnedToVO {
    /** 对应班次编号 */
    classShiftCode?: string;
    /** 对应班次id */
    classShiftId?: string;
    /** 对应班次名称 */
    classShiftName?: string;
    /** id */
    id?: string;
    /** 对应工序编号 */
    processCode?: string;
    /** 对应工序id */
    processId?: string;
    /** 对应工序名称 */
    processName?: string;
    /** 状态 */
    status?: ETheProductionTaskSelectionInformationIsReturnedToVO_status;
    /** 状态描述 */
    statusDesc?: string;
    /** 任务号 */
    taskNo?: string;
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
