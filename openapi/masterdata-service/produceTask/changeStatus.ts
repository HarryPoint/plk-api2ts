import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:16700/doc.html#/default/生产任务相关/changeStatusUsingPOST
*/
export default function fetchMethod(options: { data: ITheProductionTaskChangesTheStatusDTO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/produceTask/changeStatus",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 生产任务变更状态DTO */
export interface ITheProductionTaskChangesTheStatusDTO {
    /** id */
    id?: string;
    /** 状态 */
    status?: ETheProductionTaskChangesTheStatusDTO_status;
    /** 生产异常类型id */
    produceAbnormalCategoryId: string;
    /** 备注 */
    remark?: string;
}
/** JSONResult«object» */
export interface IJSONResultobject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum ETheProductionTaskChangesTheStatusDTO_status {
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
